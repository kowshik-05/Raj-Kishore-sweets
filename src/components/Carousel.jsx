import React, { useMemo } from "react";

// ✅ Added images from public/images
const defaultImages = [
  "/images/DSC08730.JPG",
  "/images/DSC08740.JPG",
  "/images/DSC08750.JPG",
  "/images/DSC08761.JPG",
  "/images/DSC08770.JPG",
  "/images/DSC08782.JPG",
];

export default function CarouselSection({
  images = defaultImages, // use our image list by default
  height = "h-48 sm:h-64",
  speed, // optional override, in seconds
  title = "Custom Carousel", // ✅ Added heading prop
}) {
  // Use themed placeholders if no images provided
  const items = images.length
    ? images
    : [
        "placeholder:rasgulla",
        "placeholder:kaju",
        "placeholder:jamun",
        "placeholder:ladoo",
        "placeholder:soan",
        "placeholder:mix",
      ];

  // Duplicate for seamless loop
  const loop = useMemo(() => [...items, ...items], [items]);

  // Auto duration: more cards => longer loop; clamp to a comfy range
  const autoDuration = useMemo(() => {
    const base = Math.max(16, items.length * 4); // seconds
    return Math.min(60, base);
  }, [items.length]);

  const duration = `${speed ?? autoDuration}s`;

  return (
    <section
      className="relative w-full overflow-hidden border-y border-yellow-200 bg-gradient-to-b from-yellow-50 via-yellow-50 to-red-50 py-10"
      aria-label="Featured sweets carousel"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-4">
        {/* ✅ Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-red-800 text-center mb-6">
          {title}
        </h2>

        {/* Track */}
        <div
          className={`relative flex ${height} gap-3 sm:gap-4 group`}
          style={{ ["--rk-speed"]: duration }}
        >
          <Track items={loop} height={height} />
        </div>
      </div>

      {/* Styles (works in CRA/Vite) */}
      <style>{`
        @keyframes rk-scroll-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .rk-marquee {
          display: flex;
          width: max-content;
          animation: rk-scroll-x var(--rk-speed, 24s) linear infinite;
        }
        /* Pause on hover */
        .group:hover .rk-marquee {
          animation-play-state: paused;
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .rk-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}

function Track({ items, height }) {
  return (
    <>
      <div className={`rk-marquee ${height}`}>
        {items.map((src, i) => (
          <Card key={`a-${i}`} src={src} />
        ))}
      </div>
      <div className={`rk-marquee ${height}`} aria-hidden="true">
        {items.map((src, i) => (
          <Card key={`b-${i}`} src={src} />
        ))}
      </div>
    </>
  );
}

function Card({ src }) {
  const isPlaceholder = String(src).startsWith("placeholder:");
  const tag = isPlaceholder ? src.split(":")[1] : null;

  return (
    <div className="flex-shrink-0 w-56 sm:w-64 mx-1.5 sm:mx-2 rounded-2xl overflow-hidden border border-yellow-200 bg-white shadow-sm">
      {isPlaceholder ? (
        <div className="w-full h-full grid place-items-center bg-gradient-to-br from-yellow-100 to-red-50">
          <div className="text-center px-4">
            <div className="mx-auto w-12 h-12 rounded-xl bg-red-600 text-yellow-50 grid place-content-center font-bold shadow">
              RK
            </div>
            <p className="mt-2 text-xs font-semibold text-red-800 uppercase tracking-wide">
              {pretty(tag)}
            </p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt="Sweet item"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function pretty(key) {
  if (!key) return "Mithai";
  return key.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}
