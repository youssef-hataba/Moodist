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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black section-padding px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20" dir="ltr">
          <h2 className="text-white text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6">
            Support Center
          </h2>
          <h3 className="text-white text-3xl md:text-4xl font-light tracking-tight">
            Got Questions? <span className="text-primary-500 italic font-bold">We Have Answers.</span>
          </h3>
        </div>

        {/* Accordion List */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-500 rounded-[2rem] border bg-[#0A0A0A] ${
                  isOpen ? " border-white/10" : " border-white/5"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-right"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                    isOpen ? "text-primary-500" : "text-white/90"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-500 ${
                    isOpen ? "rotate-180 bg-primary-500/10 text-primary-500" : "text-white/20"
                  }`}>
                    <ChevronDown size={24} strokeWidth={1.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-8 pb-8">
                        <div className="h-[1px] bg-white/5 mb-6" />
                        <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-3xl">
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