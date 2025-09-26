import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { waLink } from "../utils/whatsapp";

export default function SweetCard({ item }) {
  return (
    <Card>
      {/* Image / Initials */}
      <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-red-50 grid place-content-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-red-600/90 grid place-content-center text-yellow-50 font-bold shadow-md">
            {item.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
        )}
      </div>

      {/* Text / Info */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-red-800">{item.name}</h3>
          <p className="text-sm font-semibold text-red-700 whitespace-nowrap">
            ₹{item.price} / {item.unit}
          </p>
        </div>

        {item.description && (
          <p className="mt-2 text-sm text-red-900/70">{item.description}</p>
        )}

        {/* Buttons */}
        <div className="mt-3 flex gap-2">
          <a
            href={waLink(
              `Hi! I’d like to order ${item.name} (₹${item.price}/${item.unit}).`
            )}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-xl bg-red-600 text-yellow-50 text-sm font-semibold"
          >
            Chat & Order
          </a>
          <Link
            to={`/products#${item.id}`}
            className="px-3 py-2 rounded-xl bg-yellow-200 text-red-800 text-sm font-semibold border border-yellow-300"
          >
            Details
          </Link>
        </div>
      </div>
    </Card>
  );
}
