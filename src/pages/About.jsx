import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

export default function AboutPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 py-10">
      {/* --- Banner Section --- */}
      <div className="relative w-full mb-10 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/images/about-banner.jpg" // <-- replace with actual banner image
          alt="Raj Kishore Sweets Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg text-center">
            Our Story
          </h1>
        </div>
      </div>

      {/* --- Story Section --- */}
      <SectionTitle kicker="Our Story" title="Crafting Sweet Memories" />
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <div className="p-6 text-red-900/85 text-sm leading-7">
            <p>
              At Raj Kishore Sweets, we believe mithai is more than a
              dessert—it’s a part of every celebration. Our recipes are rooted
              in tradition, perfected over the years with premium ingredients
              and meticulous technique.
            </p>
            <p className="mt-4">
              From classic Bengali favourites to rich dry-fruit specials, every
              bite reflects our commitment to freshness, hygiene, and authentic
              taste. Whether you’re planning a family gathering, festival
              gifting, or corporate hampers—we’ve got you covered.
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-red-800 font-semibold">What we stand for</h3>
            <ul className="mt-3 text-sm text-red-900/85 space-y-2 list-disc pl-5">
              <li>Daily fresh batches, made in-house</li>
              <li>Quality ingredients, no compromises</li>
              <li>Transparent pricing and weight</li>
              <li>Custom gift boxes and bulk orders</li>
              <li>Friendly, customer-first service</li>
            </ul>
          </div>
        </Card>
      </div>
    </main>
  );
}
