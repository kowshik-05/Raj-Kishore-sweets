export const categories = [
  { key: "mithai", label: "Traditional Mithai" },
  { key: "namkeen", label: "Namkeen & Snacks" },
  { key: "bengali", label: "Bengali Sweets" },
  { key: "dryfruit", label: "Dry Fruit Specials" },
  { key: "seasonal", label: "Seasonal & Festive" },
];

export const catalog = [
  {
    id: "1",
    picture: "",
    name: "Rasgulla",
    price: 280,
    unit: "kg",
    cat: "bengali",
    description: "Soft and spongy Bengali delight soaked in light sugar syrup.",
  },
  {
    id: "2",
    picture: "",
    name: "Gulab Jamun",
    price: 320,
    unit: "kg",
    cat: "mithai",
    description:
      "Golden fried dumplings soaked in fragrant rose-flavored syrup.",
  },
  {
    id: "3",
    picture: "",
    name: "Kaju Katli",
    price: 900,
    unit: "kg",
    cat: "dryfruit",
    description:
      "Rich cashew fudge with a melt-in-the-mouth texture, topped with silver leaf.",
  },
  {
    id: "4",
    picture: "",
    name: "Motichoor Ladoo",
    price: 420,
    unit: "kg",
    cat: "mithai",
    description:
      "Tiny golden pearls of besan blended with ghee and sugar, shaped into laddoos.",
  },
  {
    id: "5",
    picture: "",
    name: "Namkeen Mixture",
    price: 260,
    unit: "kg",
    cat: "namkeen",
    description:
      "Crispy, spicy, and tangy mixture of sev, boondi, and fried pulses.",
  },
  {
    id: "6",
    picture: "",
    name: "Rasmalai",
    price: 540,
    unit: "kg",
    cat: "bengali",
    description:
      "Delicate cottage cheese patties soaked in saffron-flavored milk.",
  },
  {
    id: "7",
    picture: "",
    name: "Soan Papdi",
    price: 300,
    unit: "kg",
    cat: "seasonal",
    description:
      "Flaky and sweet treat with a light, melt-in-the-mouth texture.",
  },
  {
    id: "8",
    picture: "",
    name: "Anjeer Barfi",
    price: 1100,
    unit: "kg",
    cat: "dryfruit",
    description:
      "Nutritious and indulgent barfi made with figs and dry fruits.",
  },
];

// Bestseller IDs (referencing catalog IDs)
const bestsellerIds = ["1", "2", "3", "4"];

// Bestsellers derived from catalog
export const bestsellers = catalog.filter((item) =>
  bestsellerIds.includes(item.id)
);
