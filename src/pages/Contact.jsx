import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { waLink } from "../utils/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const text = `Hi! I am ${name || "a customer"}. Phone: ${phone || "N/A"}. ${
    msg || "I have a query."
  }`;

  const handleWhatsApp = () => {
    // Reset form after sending
    setName("");
    setPhone("");
    setMsg("");
  };

  return (
    <main className=" mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
      <div>
        <SectionTitle
          kicker="Say Hello"
          title="Contact Us"
          subtitle="We usually reply within a few minutes during business hours."
        />
        <form className="mt-6 space-y-4" aria-label="Contact form">
          <div>
            <label className="block text-sm font-medium text-red-800">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-xl border border-yellow-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-800">
              Phone
            </label>
            <input
              type="tel"
              className="mt-1 w-full rounded-xl border border-yellow-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600/40"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-800">
              Message
            </label>
            <textarea
              className="mt-1 w-full rounded-xl border border-yellow-300 bg-white px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-red-600/40"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="What would you like to ask or order?"
            />
          </div>
          <div className="flex gap-3">
            <a
              href={waLink(text)}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-red-600 text-yellow-50 font-semibold shadow hover:shadow-md inline-block"
            >
              Send via WhatsApp
            </a>
            <a
              href="mailto:hello@rajkishoresweets.in"
              className="px-5 py-3 rounded-2xl bg-yellow-200 text-red-800 font-semibold border border-yellow-300"
            >
              Email Us
            </a>
          </div>
        </form>
      </div>
      <div>
        <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
          <h3 className="text-red-800 font-semibold">Store Details</h3>
          <p className="mt-2 text-sm text-red-900/80">
            Birhana Road, Kanpur — 208001
          </p>
          <p className="text-sm text-red-900/80">
            Timings: 9:00 AM – 10:00 PM (All days)
          </p>
          <div className="mt-4">
            <iframe
              title="Raj Kishore Sweets Map"
              className="w-full h-64 rounded-xl border border-yellow-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.868880232147!2d80.3507289!3d26.4629025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38a8bfffffff%3A0x473de090d5ef13fc!2sRaj%20Kishore's!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
}
