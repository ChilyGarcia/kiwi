import clasicaAllBlacks from "@/assets/clasica-all-blacks.png.asset.json";
import clasicaArgentina from "@/assets/clasica-argentina.png.asset.json";
import clasicaFrancia from "@/assets/clasica-francia.png.asset.json";
import clasicaSpringboks from "@/assets/clasica-springboks.png.asset.json";
import clasicaGeneral from "@/assets/clasica-general.png.asset.json";
import suramericaColombia from "@/assets/suramerica-colombia.png.asset.json";
import type { Product } from "@/components/site/ProductCard";

/** Líneas oficiales actuales de Kiwi Total */
/**
 * Líneas actualmente disponibles con productos publicados.
 */
export const activeCategories = ["Clásicas", "Suramérica"] as const;

/**
 * Todas las líneas de Kiwi Total. Las que aún no tienen productos aparecen
 * en el filtro como "Próximamente" hasta que se suban SKUs.
 */
export const categories = [
  "Clásicas",
  "Suramérica",
  "Réplicas",
  "Esqueletos",
  "Rompevientos",
  "Buzos",
  "Joggers",
  "Chaquetas",
  "Cuello Redondo",
  "Polos",
  "Crossfit",
  "Shorts",
  "Medias",
  "Gorras",
  "Vísceras",
  "Accesorios",
  "Kit Clubes",
] as const;
export type Category = (typeof categories)[number];

const raw: Omit<Product, "id">[] = [
  {
    name: "Clásica All Blacks — Negra",
    category: "Clásicas",
    price: 129000,
    image: clasicaAllBlacks.url,
    badge: "Bordado",
  },
  {
    name: "Clásica Argentina — Celeste",
    category: "Clásicas",
    price: 129000,
    image: clasicaArgentina.url,
    badge: "Bordado",
  },
  {
    name: "Clásica Francia — Gris",
    category: "Clásicas",
    price: 129000,
    image: clasicaFrancia.url,
    badge: "Bordado",
  },
  {
    name: "Clásica Springboks — Blanca",
    category: "Clásicas",
    price: 129000,
    image: clasicaSpringboks.url,
    badge: "Bordado",
  },
  {
    name: "Pack Clásicas · 4 Selecciones",
    category: "Clásicas",
    price: 459000,
    oldPrice: 516000,
    image: clasicaGeneral.url,
    badge: "Pack",
  },
  {
    name: "Suramérica Kiwi Colombia — Retro",
    category: "Suramérica",
    price: 179000,
    image: suramericaColombia.url,
    badge: "Nuevo",
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  id: p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
}));
