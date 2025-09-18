import React from "react";

export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && (
        <p className="text-xs uppercase tracking-widest text-red-700 font-semibold">
          {kicker}
        </p>
      )}
      <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-red-700">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-red-900/80">{subtitle}</p>}
    </div>
  );
}
