import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import SweetCard from "../components/SweetCard";
import { bestsellers, categories } from "../data/catalog";
import { waLink } from "../utils/whatsapp";
import CarouselSection from "../components/Carousel";

// function Hero() {
//   const [imageAvailable, setImageAvailable] = useState(true);
//   return (
//     <section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-red-50">
//       <div className=" mx-auto px-4 sm:px-6 py-14 md:py-5 grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-sm font-semibold tracking-wide uppercase text-red-700">
//             Authentic • Fresh • Handcrafted
//           </p>
//           <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-red-700 leading-tight">
//             Celebrate every moment with{" "}
//             <span className="text-red-600">Raj Kishore Sweets</span>
//           </h1>
//           <p className="mt-4 text-red-900/80">
//             From classic rasgulla to premium kaju katli—discover mithai that’s
//             made fresh daily with quality ingredients and traditional recipes.
//           </p>
//           <div className="mt-6 flex gap-3">
//             <a
//               href={waLink(
//                 "Hi! I’d like to place an order for pickup/delivery."
//               )}
//               target="_blank"
//               rel="noreferrer"
//               className="px-5 py-3 rounded-2xl bg-red-600 text-yellow-100 font-semibold shadow hover:shadow-md"
//             >
//               Order on WhatsApp
//             </a>
//             <Link
//               to="/products"
//               className="px-5 py-3 rounded-2xl bg-yellow-200 text-red-800 font-semibold border border-yellow-300 hover:bg-yellow-300"
//             >
//               Browse Products
//             </Link>
//           </div>
//           <ul className="mt-6 text-sm text-red-900/80 grid grid-cols-2 gap-x-6 gap-y-2 list-disc pl-5">
//             <li>Same-day preparation on most items</li>
//             <li>Bulk & corporate orders welcome</li>
//             <li>Custom gift boxes</li>
//             <li>Hygienic, FSSAI compliant kitchen</li>
//           </ul>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <div className="relative aspect-square rounded-3xl bg-yellow-100 shadow-inner overflow-hidden">
//             {imageAvailable ? (
//               <img
//                 src="/Photos/Rajkishore.jpg"
//                 alt="Raj Kishore Sweet"
//                 className="w-full h-full object-contain"
//                 onError={() => setImageAvailable(false)} // fallback trigger
//               />
//             ) : (
//               <svg viewBox="0 0 400 400" className="w-full h-full">
//                 <defs>
//                   <radialGradient id="plate" cx="50%" cy="50%" r="60%">
//                     <stop offset="0%" stopColor="#FEF9C3" />
//                     <stop offset="100%" stopColor="#FDE68A" />
//                   </radialGradient>
//                 </defs>
//                 <circle
//                   cx="200"
//                   cy="200"
//                   r="160"
//                   fill="url(#plate)"
//                   stroke="#F59E0B"
//                   strokeWidth="6"
//                 />
//                 <g>
//                   <circle
//                     cx="150"
//                     cy="160"
//                     r="28"
//                     fill="#DC2626"
//                     opacity="0.9"
//                   />
//                   <circle
//                     cx="210"
//                     cy="120"
//                     r="24"
//                     fill="#B91C1C"
//                     opacity="0.9"
//                   />
//                   <rect
//                     x="230"
//                     y="190"
//                     width="60"
//                     height="40"
//                     rx="8"
//                     fill="#F59E0B"
//                   />
//                   <rect
//                     x="110"
//                     y="210"
//                     width="60"
//                     height="40"
//                     rx="8"
//                     fill="#FBBF24"
//                   />
//                   <circle cx="200" cy="250" r="30" fill="#F97316" />
//                   <rect
//                     x="170"
//                     y="180"
//                     width="40"
//                     height="22"
//                     rx="6"
//                     fill="#E11D48"
//                   />
//                 </g>
//               </svg>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
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
            {bestsellers.map((b) => (
              <SweetCard key={b.id} item={b} />
            ))}
          </div>
        </div>
      </section>

      {/* categories */}
      {/* <section className="py-14 md:py-20 bg-yellow-50 border-y border-yellow-200">
        <div className=" mx-auto px-4 sm:px-6">
          <SectionTitle
            kicker="Explore"
            title="Shop by Category"
            subtitle="Find exactly what you’re craving—from traditional mithai to crunchy namkeen."
          />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c) => (
              <Link key={c.key} to={`/products?cat=${c.key}`} className="group">
                <div className="rounded-2xl bg-white border border-yellow-200 p-5 text-center hover:shadow-md">
                  <div className="w-10 h-10 mx-auto rounded-full bg-red-600/90" />
                  <p className="mt-3 text-sm font-semibold text-red-800 group-hover:underline">
                    {c.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

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

      {/* <section className="py-14 md:py-20 bg-yellow-50 border-y border-yellow-200">
        <div className=" mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Loved by Many" title="Customer Reviews" />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              "Best kaju katli in town!",
              "Crisp namkeen and fresh sweets.",
              "My go-to place for festive gifting.",
            ].map((q, i) => (
              <Card key={i}>
                <blockquote className="p-6 text-sm text-red-900/90">
                  “{q}”
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Us */}
      <section className="py-14 md:py-20">
        <div className=" mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="w-100 mx-auto">
            <img
              src="/about.jpg"
              alt="About Raj Kishore Sweets"
              className="w-full rounded-2xl shadow"
            />
          </div>
          <div>
            <SectionTitle
              kicker="About Us"
              title="Our Story"
              subtitle="Discover the legacy behind Raj Kishore Sweets."
            />
            <p className="mt-4 text-red-900/80">
              Our story goes back to the 1920s, when our forefathers started
              making mithai from Kahoo Kothi. It was never about business back
              then — it was about keeping the Marwadi tradition alive through
              pure ingredients and honest work.
            </p>
            <p className="mt-4 text-red-900/80">
              In 1984, we opened the first Rajkishore's Sweets shop. What began
              in a small kitchen slowly became a name people started trusting.
            </p>
            <p className="mt-4 text-red-900/80">
              Now, it's been four generations, and we still follow the same old
              way — making sweets with love, patience, and care. For us, it's
              not just about selling mithai. It's about carrying forward what
              our forefathers started — a taste, a value, and a tradition that
              will always stay with us.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-14 md:py-20">
        <div className=" mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <SectionTitle
              kicker="Find Us"
              title="Visit Our Store"
              subtitle="Birhana Road, Kanpur — centrally located and easy to reach."
            />
            <a
              href="https://maps.app.goo.gl/BLajBVxs8ifvyCJw7"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 px-5 py-3 rounded-2xl bg-red-600 text-yellow-50 font-semibold"
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <iframe
              title="Raj Kishore Sweets on Google Maps"
              className="w-full h-72 rounded-2xl border border-yellow-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.868880232147!2d80.3507289!3d26.4629025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38a8bfffffff%3A0x473de090d5ef13fc!2sRaj%20Kishore's!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
