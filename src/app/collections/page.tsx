import axios from "axios";
import ProductCard from "./components/ProductCard";
import CategoryNav from "./components/CategoryNav";

type BackendProduct = {
  id: string;
  title: string;
  slug: string;
  basePrice: number;
  description?: string;
  images: {
    url: string;
    isPrimary?: boolean;
  }[];
  category: {
    name: string;
  };
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }> | { category?: string };
}) {
  const params =
    searchParams instanceof Promise
      ? await searchParams
      : searchParams;

  const activeCategory = params.category || "All";

  const { data }: { data: { data: BackendProduct[] } } = await axios.get(
    "http://localhost:3000/api/products"
  );

  const products = data.data;

  // group by category name
  const grouped = products.reduce((acc: any, product) => {
    const cat = product.category.name;

    if (!acc[cat]) {
      acc[cat] = {
        id: cat,
        category: cat,
        description: product.description || "",
        items: [],
      };
    }

    acc[cat].items.push(product);

    return acc;
  }, {});

  const SHOP_DATA = Object.values(grouped);

  const filteredData =
    activeCategory === "All"
      ? SHOP_DATA
      : SHOP_DATA.filter((section: any) => section.category === activeCategory);

  const categories = ["All", ...Object.keys(grouped)];

  return (
    <main className="px-6 md:px-12 relative min-h-screen text-[#f5f5f5] section-padding overflow-hidden">
      <header className="mb-28 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-20">
        <h1 className="text-[10px] uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
          MooDist Studio / Collection 2026
        </h1>

        <CategoryNav activeCategory={activeCategory} categories={categories} />
      </header>

      <div className="flex flex-col gap-40">
        {filteredData.map((section: any, idx: number) => {
          const isFeatured = idx % 2 === 0;

          return (
            <section key={section.category} className="relative">
              {/* big background text */}
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
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 ${
                    !isFeatured ? "max-w-5xl" : "max-w-7xl"
                  }`}
                >
                  {section.items.map((product: BackendProduct) => (
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