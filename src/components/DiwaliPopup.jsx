import React, { useState, useEffect } from "react";

export default function DiwaliPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-5 py-4 rounded-2xl shadow-lg flex items-center justify-between z-50 animate-fadeIn">
      <div className="flex flex-col text-center sm:text-left leading-tight">
        <p className="text-base sm:text-lg font-extrabold drop-shadow-md">
          🪔 Preorder your sweets for Diwali till{" "}
          <span className="underline">17th!</span>
        </p>
        <p className="text-xs text-center sm:text-sm opacity-90 mt-1">
          Orders wont be functional from <strong>17th to 20th</strong>.
        </p>
      </div>
      <button
        onClick={() => setShow(false)}
        className="ml-4 text-white bg-black/30 hover:bg-black/50 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
      >
        ✕
      </button>
    </div>
  );
}
