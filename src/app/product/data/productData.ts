export const productData = {
  id: 1,
  name: "Nomad Oversized Hoodie",
  price: 2400,
  colors: [
    {
      name: "Deep Black",
      hex: "#000000",
      baseImage: "/hoodies/solidfront.png",
      backImage: "/hoodies/solidback.png",
    },
    {
      name: "Slate Grey",
      hex: "#2f2f2f",
      baseImage: "/hoodies/solidfront.png",
      backImage: "/hoodies/solidback.png",
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