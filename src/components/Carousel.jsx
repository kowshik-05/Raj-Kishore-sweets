import React from "react";

export default function CarouselSection({
  images = [],
  height = "h-48 sm:h-64",
}) {
  // Duplicate images to create a seamless loop
  const loopImages = [...images, ...images];

  return (
    <div className={`relative w-full overflow-hidden`}>
      <div className={`flex ${height} animate-marquee`}>
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 mx-2 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: ${images.length * 2 * 16}rem; /* 16rem = w-64 */
          animation: marquee ${images.length * 5}s linear infinite;
        }
      `}</style>
    </div>
  );
}
