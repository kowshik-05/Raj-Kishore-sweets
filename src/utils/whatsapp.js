// Replace with your real number like "+919876543210" (with country code, no spaces)
export const WHATSAPP_NUMBER = "+918808088810";

const WA_BASE = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`
  : "https://wa.me/"; // generic

export const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;
