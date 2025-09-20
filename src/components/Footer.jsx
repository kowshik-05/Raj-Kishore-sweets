import React from "react";
import Logo from "./Logo";
import { waLink } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-yellow-200 bg-yellow-50">
      <div className=" mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-red-800/80">
            Authentic mithai, namkeen, and festive delights made fresh daily in
            Kanpur.
          </p>
        </div>
        <div>
          <h4 className="text-red-700 font-semibold">Visit Us</h4>
          <p className="text-sm mt-2 text-red-800/80">
            Birhana Road, Kanpur — 208001
          </p>
          <a
            className="text-sm mt-2 inline-block underline text-red-700"
            href="https://maps.app.goo.gl/BLajBVxs8ifvyCJw7"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div>
          <h4 className="text-red-700 font-semibold">Timings</h4>
          <p className="text-sm mt-2 text-red-800/80">
            Mon–Sun: 9:00 AM – 10:00 PM
          </p>
        </div>
        <div>
          <h4 className="text-red-700 font-semibold">Contact</h4>
          <a
            className="underline"
            href={waLink("Hi! I have a query.")}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-yellow-200/70 py-4 text-center text-xs text-red-800/70">
        © {new Date().getFullYear()} Raj Kishore Sweets. All rights reserved.
      </div>
    </footer>
  );
}
