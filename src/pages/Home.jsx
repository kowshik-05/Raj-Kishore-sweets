import React, { useState, useEffect, lazy, Suspense } from "react";
import SkeletonCard from "../components/SkeletonCard";

import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import SweetCard from "../components/SweetCard";
import { bestsellers, categories } from "../data/catalog";

import CarouselSection from "../components/Carousel";

const LazyAboutSection = lazy(() => import("../components/AboutSection"));
const LazyLocationSection = lazy(() => import("../components/LocationSection"));

function Hero() {
  return (
    <section className="w-full relative overflow-hidden">
      <img
        src="/hero.webp"
        alt="Hero"
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen object-cover"
      />
    </section>
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Hero />

      {/* Bestsellers */}
      <section className="py-14 md:py-20">
        <div className=" mx-auto px-4 sm:px-6">
          <SectionTitle
            kicker="Popular Picks"
            title="Our Bestsellers"
            subtitle="Timeless favourites loved by generations of Kanpurites."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loading
              ? Array(8)
                  .fill(0)
                  .map((_, i) => <SkeletonCard key={i} />)
              : bestsellers.map((b) => <SweetCard key={b.id} item={b} />)}
          </div>
        </div>
      </section>

      <CarouselSection />

      <section className="py-14 md:py-20">
        <div className=" mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Quality First" title="Why Choose Us" />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {["Fresh Daily", "Premium Ingredients", "Traditional Recipes"].map(
              (t) => (
                <Card key={t}>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-full bg-red-600/90" />
                    <h3 className="mt-3 text-lg font-semibold text-red-800">
                      {t}
                    </h3>
                    <p className="text-sm text-red-900/80">
                      We prepare in small batches to ensure great taste and
                      consistent quality.
                    </p>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyAboutSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyLocationSection />
      </Suspense>
    </main>
  );
}
