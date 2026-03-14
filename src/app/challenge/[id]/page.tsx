"use client";

import { use, useState } from "react";
import { ArrowLeft, Trophy } from "lucide-react";
import Link from "next/link";
import ChallengeAccept from "@/components/challenge/ChallengeAccept";

interface ChallengePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ChallengePage({ params }: ChallengePageProps) {
  const { id } = use(params);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering for the challenge component
  useState(() => {
    setIsClient(true);
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center">
          <Link
            href="/"
            className="p-2 -ml-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h1 className="font-semibold text-slate-900">口腔健康PK</h1>
          </div>
          <div className="w-9" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-8">
        <ChallengeAccept challengeId={id} />
      </main>
    </div>
  );
}
