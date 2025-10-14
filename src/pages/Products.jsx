import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FilterChip from "../components/FilterChip";
import Card from "../components/Card";
import { catalog, categories } from "../data/catalog";
import { waLink } from "../utils/whatsapp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        subtitle="Tap a product to chat & order on WhatsApp"
      />

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
              {/* Image area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-red-50">
                {item.picture ? (
                  <LazyLoadImage
                    src={item.picture}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                    effect="blur"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-600/90 text-yellow-50 font-bold text-2xl rounded-t-2xl">
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                )}
              </div>

              {/* Text area */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-red-800 group-hover:underline">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-red-700 whitespace-nowrap">
                    ₹{item.price} / {item.unit}
                  </p>
                </div>

                {/* Description (optional)
                {item.description && (
                  <p className="mt-2 text-sm text-red-900/70">
                    {item.description}
                  </p>
                )} */}

                <button
                  onClick={() =>
                    window.open(
                      waLink(
                        `Hi! I’d like to order ${item.name} (₹${item.price}/${item.unit}).`
                      ),
                      "_blank"
                    )
                  }
                  className="mt-3 inline-flex items-center text-sm font-semibold text-red-700 hover:underline bg-transparent border-none cursor-pointer"
                >
                  Chat & Order ↗
                </button>
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
