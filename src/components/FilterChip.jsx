import React from "react";

export default function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-xl text-sm font-semibold border ${
        active
          ? "bg-red-600 text-yellow-50 border-red-600"
          : "bg-yellow-100 text-red-800 border-yellow-200"
      }`}
    >
      {label}
    </button>
  );
}
