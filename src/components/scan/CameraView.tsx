"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Camera, SwitchCamera, Zap, ZapOff } from "lucide-react";
import { trackPhotoCaptured } from "@/lib/analytics";

interface CameraViewProps {
  onCapture: (imageData: string) => void;
  onError: (message: string) => void;
}

export default function CameraView({ onCapture, onError }: CameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");
  const [flashMode, setFlashMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isCapturing, setIsCapturing] = useState(false);

  // Touch handling for pinch zoom
  const touchDistanceRef = useRef<number | null>(null);
  const lastZoomRef = useRef(1);

  // Initialize camera
  const initCamera = useCallback(async () => {
    try {
      // Stop existing stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setIsReady(true);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "无法启动相机";
      onError(message);
    }
  }, [facingMode, onError]);

  useEffect(() => {
    initCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [initCamera]);

  // Handle pinch zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      touchDistanceRef.current = distance;
      lastZoomRef.current = zoom;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // zoom is read into ref at gesture start, no need to recreate

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      e.preventDefault();
      const distance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const scale = distance / touchDistanceRef.current;
      const newZoom = Math.min(Math.max(lastZoomRef.current * scale, 1), 3);
      setZoom(newZoom);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchDistanceRef.current = null;
  }, []);

  // Toggle flash (if supported)
  const toggleFlash = useCallback(async () => {
    if (!streamRef.current) return;

    const videoTrack = streamRef.current.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as Record<string, unknown>;

    if (capabilities.torch) {
      try {
        await videoTrack.applyConstraints({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          advanced: [{ torch: !flashMode }] as any,
        });
        setFlashMode(!flashMode);
      } catch {
        // Flash not supported
      }
    }
  }, [flashMode]);

  // Switch camera
  const switchCamera = useCallback(() => {
    setFacingMode(prev => prev === "user" ? "environment" : "user");
  }, []);

  // Capture photo with haptic feedback
  const capturePhoto = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !isReady) return;

    setIsCapturing(true);

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Apply zoom by drawing scaled
    if (zoom > 1) {
      const scale = zoom;
      const offsetX = (canvas.width - canvas.width / scale) / 2;
      const offsetY = (canvas.height - canvas.height / scale) / 2;
      ctx.drawImage(
        video,
        offsetX, offsetY, canvas.width / scale, canvas.height / scale,
        0, 0, canvas.width, canvas.height
      );
    } else {
      ctx.drawImage(video, 0, 0);
    }

    // Convert to data URL
    const imageData = canvas.toDataURL("image/jpeg", 0.9);

    // Stop camera stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }

    trackPhotoCaptured("camera");
    onCapture(imageData);

    setTimeout(() => setIsCapturing(false), 300);
  }, [isReady, onCapture, zoom]);

  return (
    <div className="relative">
      {/* Camera Container */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] bg-black rounded-2xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Video Preview */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `scale(${zoom})` }}
        />

        {/* Hidden Canvas for capture */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Loading State */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Zoom Indicator */}
        {zoom > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {zoom.toFixed(1)}x
          </div>
        )}

        {/* Flash Button */}
        <button
          onClick={toggleFlash}
          className="absolute top-4 left-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          {flashMode ? <Zap className="w-5 h-5" /> : <ZapOff className="w-5 h-5" />}
        </button>

        {/* Switch Camera Button */}
        <button
          onClick={switchCamera}
          className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <SwitchCamera className="w-5 h-5" />
        </button>

        {/* Capture Animation */}
        {isCapturing && (
          <div className="absolute inset-0 bg-white/30 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 mt-6">
        {/* Capture Button */}
        <button
          onClick={capturePhoto}
          disabled={!isReady || isCapturing}
          className="relative group"
        >
          {/* Outer ring */}
          <div className={`w-20 h-20 rounded-full border-4 transition-all duration-150 ${
            isCapturing ? "border-slate-400 scale-95" : "border-white shadow-lg"
          }`}>
            {/* Inner button */}
            <div className={`absolute inset-2 rounded-full transition-all duration-150 ${
              isCapturing
                ? "bg-slate-400 scale-90"
                : "bg-white group-active:scale-90 group-active:bg-slate-200"
            }`}>
              <Camera className="absolute inset-0 m-auto w-8 h-8 text-slate-900" />
            </div>
          </div>
        </button>
      </div>

      {/* Instructions */}
      <p className="text-center text-sm text-slate-500 mt-4">
        双指捏合缩放 · 点击拍照
      </p>
    </div>
  );
}
