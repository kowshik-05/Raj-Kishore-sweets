import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { waLink } from "../utils/whatsapp";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];
export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-yellow-50/80 border-b border-yellow-200/70">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-1" aria-label="Primary">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-red-600 text-yellow-100 shadow"
                      : "text-red-700 hover:bg-yellow-100"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={waLink(
                "Hi Raj Kishore Sweets! I’d like to place an order."
              )}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-red-600 text-yellow-50 text-sm font-semibold shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-600/40"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden border-t border-yellow-200/70">
        <nav
          className="mx-auto px-4 py-2 flex gap-2 overflow-x-auto"
          aria-label="Primary mobile"
        >
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                  isActive
                    ? "bg-red-600 text-yellow-100"
                    : "text-red-700 bg-yellow-100"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
