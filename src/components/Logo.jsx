import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-2xl bg-red-600 grid place-content-center text-yellow-200 font-black shadow-md">
        RK
      </div>
      <div className="leading-tight">
        <p className="text-xl font-extrabold text-red-700">
          Raj Kishore Sweets
        </p>
        <p className="text-[11px] uppercase tracking-wider text-red-600/80">
          Since • Quality • Taste
        </p>
      </div>
    </Link>
  );
}
