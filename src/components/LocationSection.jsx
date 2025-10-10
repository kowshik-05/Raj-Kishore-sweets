import React from "react";
import SectionTitle from "./SectionTitle";

export default function LocationSection() {
  return (
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
  );
}
