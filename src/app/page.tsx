import Hero from "../components/hero/Hero";
import MakeHoodie from "../components/makeHoodie/MakeHoodie";
import StoryFeatures from "../components/Features";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ContactNewsletter from "../components/ContactNewsletter";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <MakeHoodie />
        <Products />
        <StoryFeatures />
        <Reviews />
        <FAQ />
        <ContactNewsletter />
      </main>
    </div>
  );
}

// Hero MakeHoodie Products StoryFeatures Reviews FAQs Contact & Newsletter footer
