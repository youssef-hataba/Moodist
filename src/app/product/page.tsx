import ProductCarousel from "@/src/components/products/ProductCarousel";
import Offers from "./components/Offers";
import ProductConfigurator from "./components/ProductConfigurator";
import ProductReviews from "./components/ProductReviews";

const products = [
  {
    id: 1,
    name: "Signature Hoodie",
    price: "1,200",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: "BEST SELLER",
    stock: 2,
  },
  {
    id: 2,
    name: "Urban Sweatpants",
    price: "800",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: null,
    stock: 15,
  },
  {
    id: 10,
    name: "Signature Hoodie",
    price: "1,200",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: "BEST SELLER",
    stock: 2,
  },
  {
    id: 3,
    name: "Essential Round Tee",
    price: "450",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: null,
    stock: 4,
  },
  {
    id: 8,
    name: "Essential Round Tee",
    price: "450",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: null,
    stock: 4,
  },
  {
    id: 4,
    name: "Box Fit Heavy",
    price: "600",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: null,
    stock: 20,
  },
  {
    id: 5,
    name: "Tech Joggers",
    price: "950",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: "NEW",
    stock: 10,
  },
  {
    id: 9,
    name: "Tech Joggers",
    price: "950",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
    tag: "NEW",
    stock: 10,
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen text-white">
      <ProductConfigurator />
      <Offers />
      <ProductReviews />
      <ProductCarousel 
        title="People Also" 
        highlightText="Liked" 
        products={products}
        viewAllLink="/collections"
      />
    </main>
  );
}
