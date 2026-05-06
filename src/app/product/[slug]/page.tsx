"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "next/navigation";

import ProductCarousel from "@/src/components/products/ProductCarousel";
import Offers from "./components/Offers";
import ProductConfigurator from "./components/ProductConfigurator";
import ProductReviews from "./components/ProductReviews";

export default function ProductPage() {
  const {slug} = useParams<{slug: string}>();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/slug/${slug}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!product) return <div className="text-white p-10">Not found</div>;

  // تحويل بسيط للـ UI الحالي بتاعك
  const mappedProductData = {
    id: product.id,
    name: product.title,
    price: product.basePrice,
    description: product.description,
    variants: product.variants, // Pass raw variants
    colors: product.variants
      .map((v: any) => v.color)
      .filter((v: string, i: number, arr: string[]) => arr.indexOf(v) === i)
      .map((color: string) => ({
        name: color,
        hex: color === "Black" ? "#000" : color === "White" ? "#fff" : "#999",
        baseImage: product.images[0]?.url,
        backImage: product.images[0]?.url,
        outOfStockSizes: [],
      })),
    sizes: product.variants
      .map((v: any) => v.size)
      .filter((v: string, i: number, arr: string[]) => arr.indexOf(v) === i),
  };

  return (
    <main className="min-h-screen text-white">
      <ProductConfigurator productData={mappedProductData} />
      <Offers />
      <ProductReviews />

      <ProductCarousel
        title="People Also"
        highlightText="Liked"
        products={[]}
        viewAllLink="/collections"
      />
    </main>
  );
}
