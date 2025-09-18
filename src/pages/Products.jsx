import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FilterChip from "../components/FilterChip";
import Card from "../components/Card";
import { catalog, categories } from "../data/catalog";
import { waLink } from "../utils/whatsapp";

export default function ProductsPage() {
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const initialCat = urlParams.get("cat") || "all";
  const [cat, setCat] = useState(initialCat);
  const filtered = useMemo(
    () => (cat === "all" ? catalog : catalog.filter((p) => p.cat === cat)),
    [cat]
  );

  const changeCat = (value) => {
    setCat(value);
    const qp = new URLSearchParams(window.location.search);
    if (value === "all") qp.delete("cat");
    else qp.set("cat", value);
    const url = `${window.location.pathname}?${qp.toString()}`;
    window.history.replaceState({}, "", url);
  };

  return (
    <main className=" mx-auto px-4 sm:px-6 py-10">
      <SectionTitle
        kicker="Menu"
        title="Products"
        subtitle="Tap a product to chat & order on WhatsApp."
      />
      <div className="mt-6 flex flex-wrap gap-2">
        <FilterChip
          label="All"
          active={cat === "all"}
          onClick={() => changeCat("all")}
        />
        {categories.map((c) => (
          <FilterChip
            key={c.key}
            label={c.label}
            active={cat === c.key}
            onClick={() => changeCat(c.key)}
          />
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <a
            key={item.id}
            id={item.id}
            href={waLink(
              `Hi! I want to order ${item.name} (₹${item.price}/${item.unit}).`
            )}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
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
                <h3 className="text-lg font-semibold text-red-800 group-hover:underline">
                  {item.name}
                </h3>
                <p className="text-sm text-red-900/70">
                  ₹{item.price} / {item.unit}
                </p>
                <p className="mt-2 inline-flex items-center text-sm font-semibold text-red-700">
                  Chat & Order ↗
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
      <div className="mt-10 p-5 rounded-2xl bg-yellow-50 border border-yellow-200">
        <p className="text-sm text-red-900/80">
          Looking for bulk or corporate orders?{" "}
          <a
            className="underline font-semibold text-red-700"
            href={waLink("Hi! I’m interested in bulk/corporate order.")}
            target="_blank"
            rel="noreferrer"
          >
            Chat with us
          </a>{" "}
          for custom pricing and gift boxes.
        </p>
      </div>
    </main>
  );
}
