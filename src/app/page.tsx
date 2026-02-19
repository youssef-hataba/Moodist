import Hero from "../components/hero/Hero";
import MakeHoodie from "../components/makeHoodie/MakeHoodie";
import StoryFeatures from "../components/Features";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <MakeHoodie />
        <StoryFeatures />
      </main>
    </div>
  );
}
