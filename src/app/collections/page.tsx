import ProductCard from "./components/ProductCard";
import CategoryNav from "./components/CategoryNav";

const SHOP_DATA = [
  {
    id: "01",
    category: "Hoodies",
    description: "Engineered for comfort. Crafted for identity.",
    items: [
      { id: 1, name: "Essential Oversize", price: "1,850", img: "/hoodies/solidfront.png" },
      { id: 2, name: "Raw Carbon Hoodie", price: "2,100", img: "/hoodies/solidfront.png" },
      { id: 3, name: "Signature Drop", price: "1,950", img: "/hoodies/solidfront.png" },
    ],
  },
  {
    id: "02",
    category: "Pants",
    description: "The perfect silhouette for the modern nomad.",
    items: [
      { id: 4, name: "Cargo V1 Black", price: "1,400", img: "/hoodies/solidfront.png" },
      { id: 5, name: "Technical Jogger", price: "1,600", img: "/hoodies/solidfront.png" },
      { id: 6, name: "Obsidian Track", price: "1,550", img: "/hoodies/solidfront.png" },
    ],
  },
  {
    id: "03",
    category: "T-Shirts",
    description: "Refined basics for daily rotation.",
    items: [
      { id: 7, name: "Heavyweight Tee", price: "850", img: "/hoodies/solidfront.png" },
      { id: 8, name: "Boxy Fit Carbon", price: "900", img: "/hoodies/solidfront.png" },
      { id: 9, name: "Minimalist Script", price: "800", img: "/hoodies/solidfront.png" },
    ],
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }> | { category?: string };
}) {
  const params = await (searchParams instanceof Promise ? searchParams : Promise.resolve(searchParams));
  const activeCategory = params.category || "All";

  const filteredData =
    activeCategory === "All"
      ? SHOP_DATA
      : SHOP_DATA.filter((section) => section.category === activeCategory);

  return (
    <main key={activeCategory} className="px-6 md:px-12 relative min-h-screen text-[#f5f5f5] section-padding overflow-hidden">
      <header className="mb-28 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-20">
        <h1 className="text-[10px] uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
          MooDist Studio / Collection 2026
        </h1>
        <CategoryNav activeCategory={activeCategory} />
      </header>

      <div className="flex flex-col gap-40">
        {filteredData.map((section, idx) => {
          const isFeatured = idx % 2 === 0;
          return (
            <section key={section.category} className="relative">
              
              <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center z-0">
                <span className="text-[22vw] font-black uppercase leading-none inline-block whitespace-nowrap text-white opacity-3">
                  {section.category}
                </span>
              </div>

              <div className="relative z-10">
                <div className="mb-16 border-b border-white/5 pb-4">
                  <h2 className="text-3xl font-bold uppercase tracking-tighter mb-1 text-white">
                    {section.category}
                  </h2>
                  <p className="text-white/20 text-[9px] uppercase tracking-widest italic">
                    {section.description}
                  </p>
                </div>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10
                  ${!isFeatured ? "max-w-5xl" : "max-w-7xl"}`}
                >
                  {section.items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isFeatured={isFeatured}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}