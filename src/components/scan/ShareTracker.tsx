"use client";

import { useEffect } from "react";
import { trackShareView } from "@/lib/analytics";

interface ShareTrackerProps {
  scanId: string;
  score: number;
}

export default function ShareTracker({ scanId, score }: ShareTrackerProps) {
  useEffect(() => {
    trackShareView(scanId, score);
  }, [scanId, score]);

  return null;
}
