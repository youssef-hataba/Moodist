"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "هل يمكنني تصميم الهودي الخاص بي واختيار الطباعة؟",
    answer: "بالتأكيد، نحن متخصصون في تنفيذ تصاميمكم الخاصة. يمكنك اختيار لون الهودي المفضل لديك وإرسال التصميم أو الشعار الذي ترغب بطباعته، وسيقوم فريقنا بتنفيذه لك بدقة عالية وبشكل حصري.",
  },
  {
    question: "ما هي جودة ونوع الطباعة المستخدمة؟",
    answer: "نستخدم أحدث تقنيات الطباعة الحرارية والدجيتال التي تضمن ثبات الألوان وتفاصيل التصميم. الطباعة مصممة لتدوم طويلاً ولا تتأثر أو تتشقق مع الغسيل المتكرر، مما يحافظ على مظهر الهودي كأنه جديد.",
  },
  {
    question: "كيف أعرف مقاسي الصحيح؟",
    answer: "نوفر جدول مقاسات تفصيلي في صفحة كل منتج موضحاً بالسنتمتر. بما أن قصاتنا تعتمد الستايل الواسع (أوفر سايز)، فننصحك بطلب مقاسك المعتاد للحصول على المظهر المثالي.",
  },
  {
    question: "متى يصل إليّ الطلب؟",
    answer: "نعمل على توصيل طلباتكم بأرسع وقت. يستغرق الشحن لمحافظات القاهرة والجيزة من يومين إلى 3 أيام عمل، أما باقي المحافظات فتستغرق من 4 إلى 6 أيام عمل كحد أقصى.",
  },
  {
    question: "هل يمكنني تجربة الهودي قبل الدفع؟",
    answer: "بكل تأكيد. نتيح لك معاينة المنتج وقياسه أثناء وجود المندوب. في حال لم يكن المقاس مناسباً أو اختلفت التوقعات، يمكنك إعادة المنتج مع المندوب ودفع مصاريف الشحن فقط.",
  },
  {
    question: "هل الخامات المستخدمة قطن طبيعي؟",
    answer: "نفتخر باستخدام أجود أنواع القطن المصري الممشط. الخامات تقيلة لضمان التدفئة، مع معالجة خاصة ضد الانكماش أو تغير الألوان بعد الغسيل المتكرر.",
  },
  {
    question: "ما هي سياسة الاستبدال أو الاسترجاع؟",
    answer: "رضاكم هو هدفنا. يمكنك استبدال أو استرجاع أي منتج خلال 14 يوماً من تاريخ الاستلام، بشرط أن يكون المنتج بحالته الأصلية، غير مستخدم، وبكافة الملصقات الخاصة به.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-32 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24" dir="ltr">
          <h2 className="text-white text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6">
            Support Center
          </h2>
          <h3 className="text-white text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Got Questions? <br />
            <span className="text-primary-500 italic font-bold">We Have Answers.</span>
          </h3>
        </div>

        {/* Accordion List */}
        <div className="grid gap-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-700 rounded-[2.5rem] border bg-[#080808] relative group ${
                  isOpen 
                  ? "border-primary-500/20 shadow-[0_20px_80px_-15px_rgba(225,0,0,0.18)]" 
                  : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-8 md:p-5 flex items-center justify-between text-right"
                >
                  <span className={`text-lg md:text-[20px] font-medium transition-colors duration-300 ${
                    isOpen ? "text-primary-500" : "text-white/90 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`p-2.5 rounded-full bg-white/5 transition-all duration-500 shrink-0 mr-4 ${
                    isOpen ? "rotate-180 bg-primary-500/10 text-primary-500" : "text-white/20"
                  }`}>
                    <ChevronDown size={22} strokeWidth={1.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-10">
                        <div className="h-px bg-white/5 mb-8" />
                        <p className="text-white/60 text-[16px] md:text-[19px] leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}