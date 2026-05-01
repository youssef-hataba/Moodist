"use client";
import React, { useState } from "react";
import { Star, CheckCircle2, Quote, Plus, Loader2, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialReviews = [
  { id: 1, user: "Omar K.", rating: 5, date: "2 days ago", comment: "The heavyweight cotton is insane. Best hoodie I've copped this year, fits perfectly oversized.", verified: true },
  { id: 2, user: "Ziad A.", rating: 5, date: "1 week ago", comment: "The bundle deal is a steal. Joggers quality is 10/10. Definitely joining the syndicate again.", verified: true },
  { id: 3, user: "Mazen H.", rating: 4, date: "3 days ago", comment: "Excellent quality, only wish the shipping was a bit faster. But the product is worth it.", verified: true },
  { id: 4, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 5, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 6, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 7, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 8, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 9, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 10, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 11, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 12, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 14, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
  { id: 13, user: "Youssef M.", rating: 5, date: "5 days ago", comment: "Syndicate never misses. The stitching and the fit are premium grade.", verified: true },
];

export default function ProductReviews() {
  const [visibleCount, setVisibleCount] = useState(2); 
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 2); 
      setLoading(false);
    }, 600);
  };

  const handleShowLess = () => {
    setVisibleCount(2);
  };

  const reviews = initialReviews.slice(0, visibleCount);

  return (
    <section className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            <div className="space-y-2">
              <h3 className="text-primary-600 text-[10px] font-black uppercase tracking-[0.5em] italic">Syndicate Trust</h3>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Verified <br /> <span className="text-white/20">Feedback</span></h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-6xl font-black italic text-white">4.9</div>
              <div className="space-y-1">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Based on 120+ Reviews</p>
              </div>
            </div>

            <button 
              onClick={() => setShowForm(true)}
              className="group flex items-center justify-center gap-3 w-full py-4 border border-white/10 text-[10px] cursor-pointer
              font-black uppercase tracking-[0.3em]  bg-white/20 text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform" />
              Write a Review
            </button>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {reviews.map((review, index) => (
                  <motion.div 
                    key={review.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 bg-black-900 border border-white/5 relative group hover:border-white/20 transition-colors"
                  >
                    <Quote className="absolute top-6 right-8 text-white/1 group-hover:text-primary-600/10 transition-colors" size={60} />
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[10px] font-black group-hover:bg-primary-600 transition-colors">
                            {review.user[0]}
                          </div>
                          <div>
                            <h4 className="font-black italic text-sm uppercase tracking-tight text-white">{review.user}</h4>
                            {review.verified && (
                              <div className="flex items-center gap-1 mt-1">
                                <CheckCircle2 size={10} className="text-primary-600" />
                                <span className="text-[8px] uppercase font-bold text-white/30 tracking-tighter">Verified Cop</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-white/20 uppercase">{review.date}</span>
                      </div>

                      <p className="text-xs text-white/60 leading-relaxed italic">
                        &quot;{review.comment}&quot;
                      </p>

                      <div className="flex text-primary-600 gap-0.5">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="pt-8 flex justify-center">
              {visibleCount < initialReviews.length ? (
                <button 
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors cursor-pointer"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : "Load More Reviews"}
                </button>
              ) : (
                <button 
                  onClick={handleShowLess}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary-600 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronUp size={14} /> Show Less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 max-w-md w-full relative"
            >
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-white/40 hover:text-white cursor-pointer"><X size={20}/></button>
              <h3 className="text-2xl font-black italic uppercase text-white mb-6">Drop Your Feedback</h3>
              <div className="space-y-4">
                <input type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold text-white outline-none focus:border-primary-600 transition-colors" />
                <textarea placeholder="WHAT'S ON YOUR MIND?" className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold text-white h-32 outline-none focus:border-primary-600 transition-colors" />
                <button className="w-full py-4 bg-primary-600 text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors cursor-pointer">Submit Review</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}