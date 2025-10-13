import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Logo Image */}
      <img
        src="/logo.png"
        alt="Raj Kishore Sweets Logo"
        className="w-20 h-20 rounded-2xl  object-cover"
      />

      {/* Text Section */}
      <div className="leading-snug  sm:text-left">
        <p className="text-base sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-red-700">
          Raj Kishore's Sweets
        </p>
        <p className="text-[9px] sm:text-xs md:text-sm lg:text-sm uppercase tracking-wider text-red-600/80">
          Crafted in the heritage of Marwadi tradition, Raj Kishore's.
        </p>
      </div>
    </Link>
  );
}
