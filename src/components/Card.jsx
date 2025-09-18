import React from "react";

export default function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white border border-yellow-200 shadow-sm hover:shadow-md transition overflow-hidden">
      {children}
    </div>
  );
}
