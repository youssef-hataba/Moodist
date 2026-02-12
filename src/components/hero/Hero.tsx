"use client";

import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex bg-black bg-linear-330 from-[#340904] to-black">
      {/* محتوى النصوص على الشمال */}
      <div className="relative z-10 flex flex-col justify-center items-start w-full lg:w-1/2 px-8 lg:px-20 h-full">
        <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4">
          Premium Hoodie Collection
        </h1>
        <p className="text-white text-lg lg:text-xl mb-6 max-w-xl">
          Experience luxury, style, and comfort like never before.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Shop Now
        </button>
      </div>

      {/* الفيديو على اليمين */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 h-20 lg:h-[60%] my-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full object-contain opacity-80 rounded-full overflow-hidden">
          <source src="/hero-vide.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay optional for cinematic feel */}
        {/* <div className="absolute inset-0 bg-black/20 rounded-xl"></div> */}

        {/* Optional Canvas Effects */}
      </div>
      <HeroCanvas />
    </section>
  );
} 