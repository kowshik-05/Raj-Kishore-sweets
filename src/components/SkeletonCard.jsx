import React from "react";
import Card from "./Card";

export default function SkeletonCard() {
  return (
    <Card>
      {/* Skeleton Image */}
      <div className="aspect-[4/3] bg-gray-300 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
      </div>

      {/* Skeleton Text */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-2">
          <div className="h-8 bg-gray-200 rounded-xl w-1/2 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded-xl w-1/2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </Card>
  );
}
