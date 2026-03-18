import Hero from "../components/hero/Hero";
import MakeHoodie from "../components/makeHoodie/MakeHoodie";
import StoryFeatures from "../components/features/Features";
import Products from "../components/products/Products";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ContactNewsletter from "../components/ContactNewsletter";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <MakeHoodie />
        <Categories />
        <Products />
        <StoryFeatures />
        <Reviews />
        <FAQ />
        <ContactNewsletter />
      </main>
    </div>
  );
}
