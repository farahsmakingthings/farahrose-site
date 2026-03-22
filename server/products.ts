/**
 * products.ts — Centralized print shop product catalogue.
 * Prices are in USD cents.
 */

export type PrintSize = "8x10" | "11x14" | "16x20";

export interface PrintProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  sizes: {
    size: PrintSize;
    priceUsd: number; // cents
    stripePriceLabel: string;
  }[];
}

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400255510/HV832KvPDPboRqaK8bLCUX";

export const PRODUCTS: PrintProduct[] = [
  {
    id: "warped-lens-ii",
    title: "Warped Lens II",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Rose_Warped_Lens_II_dcb80fdf.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "warped-lens-iii",
    title: "Warped Lens III",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Rose_Warped_Lens_III_53214cc0.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "ladies-of-lately",
    title: "Ladies of Lately",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Serur_LadiesOfLately_fa27c596.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "time-travel",
    title: "Time Travel",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Rose_Time_Travel_7e60cd38.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "a-drink-and-a-dance",
    title: "A Drink & A Dance",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/ADrink%26aDance_53b035a2.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "that-night",
    title: "That Night",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Serur_ThatNight_e9e9f2e4.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "embodied-body",
    title: "Embodied Body",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/Farah_Serur_EmbodiedBody_6b5d3c9e.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
  {
    id: "studio-trip-2025",
    title: "Studio Trip 2025",
    description: "Original painting — limited edition fine art print.",
    imageUrl: `${CDN}/StudioTrip2025Version__e4a1b2c3.webp`,
    sizes: [
      { size: "8x10", priceUsd: 4500, stripePriceLabel: "8×10 in" },
      { size: "11x14", priceUsd: 7500, stripePriceLabel: "11×14 in" },
      { size: "16x20", priceUsd: 12000, stripePriceLabel: "16×20 in" },
    ],
  },
];

export function getProductById(id: string): PrintProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
