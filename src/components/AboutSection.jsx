import React from "react";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/about.jpg"
            alt="About Raj Kishore Sweets"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <SectionTitle
            kicker="About Us"
            title="Our Story"
            subtitle="Discover the legacy behind Raj Kishore Sweets."
          />
          <div className="mt-6 space-y-5 text-red-900/80 text-base sm:text-lg leading-relaxed">
            <p>
              Our story goes back to the 1920s, when our forefathers started
              making mithai from Kahoo Kothi. It was never about business back
              then — it was about keeping the Marwadi tradition alive through
              pure ingredients and honest work.
            </p>
            <p>
              In 1984, we opened the first Rajkishore's Sweets shop. What began
              in a small kitchen slowly became a name people started trusting.
            </p>
            <p>
              Now, it's been four generations, and we still follow the same old
              way — making sweets with love, patience, and care. For us, it's
              not just about selling mithai. It's about carrying forward what
              our forefathers started — a taste, a value, and a tradition that
              will always stay with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
