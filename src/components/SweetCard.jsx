import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { waLink } from "../utils/whatsapp";

export default function SweetCard({ item }) {
  return (
    <Card>
      <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-red-50 grid place-content-center">
        <div className="w-20 h-20 rounded-full bg-red-600/90 grid place-content-center text-yellow-50 font-bold">
          {item.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-800">{item.name}</h3>
        <p className="text-sm text-red-900/70">
          ₹{item.price} / {item.unit}
        </p>
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
