export const productData = {
  id: 1,
  name: "Nomad Oversized Hoodie",
  price: 2400,
  description: "Crafted for the modern explorer. Featuring a heavy-duty 450GSM Egyptian cotton blend, dropped shoulders, and a double-layered hood for the ultimate structural silhouette.",
  colors: [
    {
      name: "Deep Black",
      hex: "#000000",
      baseImage: "/hoodies/solidfront.png",
      backImage: "/hoodies/solidback.png",
      outOfStockSizes: ["S", "XL"], 
    },
    {
      name: "Slate Grey",
      hex: "#2f2f2f",
      baseImage: "/hoodies/solidfront.png",
      backImage: "/hoodies/solidback.png",
      outOfStockSizes: ["XXL"],
    },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  availableDesigns: Array.from({ length: 12 }, (_, i) => ({
    id: `d${i + 1}`,
    name: `Concept ${String(i + 1).padStart(2, "0")}`,
    fullRender: `/hoodies/mockup_with_design${(i % 6) + 1}.png`,
    thumb: `/hoodies/hoodie${(i % 6) + 1}.jpg`,
  })),
};