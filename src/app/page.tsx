import Hero from "../components/hero/Hero";
import MakeHoodie from "../components/makeHoodie/MakeHoodie";
import StoryFeatures from "../components/features/Features";
import ProductCarousel from "../components/products/ProductCarousel";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ContactNewsletter from "../components/ContactNewsletter";
import Categories from "../components/Categories";

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

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <MakeHoodie />
        <Categories />
        <ProductCarousel
          title="Most"
          highlightText="Popular"
          products={products}
          viewAllLink="/collections"
        />
        <StoryFeatures />
        <Reviews />
        <FAQ />
        <ContactNewsletter />
      </main>
    </div>
  );
}
