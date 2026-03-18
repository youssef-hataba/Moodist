"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, user: "Ahmed Salama", content: "جودة القماش ممتازة جداً وبصراحة فاقت توقعاتي. الهودي تصميمه شيك وبسيط والـ fit بتاعه مظبوط بالمللي. بجد شغل محترم جداً.", rating: 5 },
  { id: 2, user: "Sarah Jameel", content: "من أحسن الحاجات اللي اشتريتها السنة دي. الخامة تقيلة ومريحة واللون مش بيغير بعد الغسيل. شكراً ليكم على الاهتمام بالتفاصيل.", rating: 5 },
  { id: 3, user: "Mohamed Ali", content: "تجربة شراء ممتازة، التوصيل كان سريع جداً والمنتج وصل متغلف بطريقة شيك. الهودي خامته تقيلة فعلاً وتنفع جداً في الجو البرد.", rating: 5 },
  { id: 4, user: "Layla Hassan", content: "الـ design بسيط وهادي وده اللي كنت بدور عليه. التعامل كان راقي جداً والمقاسات مكتوبة بدقة على الموقع فساعدتني أختار صح.", rating: 5 },
  { id: 5, user: "Omar Khaled", content: "اشتريت الهودي الـ Signature وبجد فخور إن في براند مصري بالجودة دي. القطن ناعم جداً والتقفيل ملوش غلطة. بالتوفيق دايماً.", rating: 4 },
  { id: 6, user: "Yassin Mansour", content: "كنت خايف من جودة الطباعة بس طلعت ممتازة وواضح إنها مش هتقشر مع الوقت. تجربة تستحق التكرار وأكيد هطلب ألوان تانية.", rating: 5 },
];

export default function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ 
      speed: 0.6, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true, 
      playOnInit: true 
    }),
  ]);

  return (
    <section className="bg-black section-padding max-w-360 mx-auto">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-white text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6">
          Voices of our Community
        </h2>
        <h3 className="text-white text-3xl md:text-4xl xl:text-[52px] font-light tracking-tight leading-tight">
          Real Stories, <br /> 
          <span className="text-primary-500 italic font-bold">Real Results.</span>
        </h3>
      </div>

      <div className="cursor-grab active:cursor-grabbing overflow-x-hidden" ref={emblaRef}>
        {/* شلنا الـ gap-6 من هنا وأضفنا ml-[-24px] لتعويض الـ padding اللي جوه */}
        <div className="flex p-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-[0_0_324px] min-w-0 pl-6" 
            >
              <div className="h-full p-6 rounded-[2.5rem] bg-[#070707] border border-white/5 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/40 hover:bg-[#0a0a0a] hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={10} 
                        className={i < review.rating ? "fill-primary-500 text-primary-500" : "text-white/5"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-white/70 text-[13px] leading-relaxed font-light italic text-right whitespace-normal rtl">
                    &quot;{review.content}&quot;
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/5 pt-4">
                  <div className="text-right">
                    <h4 className="text-white text-[12px] font-medium tracking-wide uppercase leading-none">
                      {review.user}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-[10px] font-bold tracking-tighter shrink-0">
                    {review.user.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}