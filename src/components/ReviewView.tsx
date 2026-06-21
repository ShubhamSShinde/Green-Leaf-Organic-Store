import React, { useState } from 'react';
import { Review } from '../types';
import { MessageSquare, Star, UserCheck, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewViewProps {
  reviewsList: Review[];
  onSubmitReview: (name: string, rating: number, comment: string, area: string) => void;
}

export default function ReviewView({ reviewsList, onSubmitReview }: ReviewViewProps) {
  // Submit state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [area, setArea] = useState('College Road');
  const [submitted, setSubmitted] = useState(false);

  const nashikAreas = [
    'College Road',
    'Gangapur Road',
    'Trimbak Road',
    'Indira Nagar',
    'Cidco',
    'Nashik Road',
    'Sharanpur Road'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;
    
    onSubmitReview(name, rating, comment, area);
    setSubmitted(true);
    
    // reset form fields
    setTimeout(() => {
      setName('');
      setComment('');
      setRating(5);
      setArea('College Road');
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-16" id="reviews-feed-view">
      
      {/* 1. Verified rating stats block header */}
      <section className="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating text */}
        <div className="md:col-span-8 space-y-3 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 inline-block px-2.5 py-1 rounded-md">
            Customer Love & Google Ratings
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">
            Nourishing Real Nashik Households
          </h2>
          <p className="text-sm text-gray-500 max-w-xl">
            We are incredibly privileged to support over 340+ active Nashik kitchen hubs with zero pesticide certifications. See what our organic subscribers have to say.
          </p>
        </div>

        {/* Visual score widget */}
        <div className="md:col-span-4 bg-white border border-emerald-150 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map(s => (
              <Star key={s} className="w-5.5 h-5.5 text-amber-500 fill-amber-500 shrink-0" />
            ))}
            <div className="relative w-5.5 h-5.5 overflow-hidden">
              <Star className="w-5.5 h-5.5 text-amber-500 fill-amber-500 shrink-0 absolute top-0 left-0" style={{ clipPath: 'polygon(0 0, 70% 0, 70% 100%, 0% 100%)' }} />
              <Star className="w-5.5 h-5.5 text-gray-200 shrink-0" />
            </div>
          </div>
          <span className="text-3xl font-mono font-bold text-emerald-950 mt-2">4.7 / 5</span>
          <p className="text-[10px] text-gray-400 font-mono uppercase mt-0.5">Google Verified Store Score</p>
        </div>

      </section>

      {/* 2. Review Feed & Submission Columns Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Reviews Feed list */}
        <div className="lg:col-span-7 space-y-6" id="reviews-feed-col">
          <h3 className="text-xl font-display font-bold text-gray-950 flex items-center gap-2 border-b border-gray-100 pb-3">
            <MessageSquare className="w-5 h-5 text-emerald-700" />
            <span>Subscriber Testimonials ({reviewsList.length})</span>
          </h3>

          <div className="space-y-5">
            {reviewsList.map((rev) => (
              <div 
                key={rev.id} 
                id={`testimonial-${rev.id}`}
                className="bg-white rounded-2xl border border-gray-150 p-6 space-y-4 shadow-xs hover:border-emerald-150/50 transition-colors"
              >
                
                {/* Name & Stars row */}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 leading-none">
                      {rev.name}
                      {rev.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" /> Verified Organic Buyer
                        </span>
                      )}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-mono block mt-1">Logged on: {rev.date}</span>
                  </div>

                  {/* Rating Stars displays */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 shrink-0 ${
                          idx < rev.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                {/* Comment body */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Director response thread block */}
                {rev.replied && (
                  <div className="bg-emerald-50/70 border border-emerald-100 p-3.5 rounded-xl text-xs space-y-1">
                    <div className="flex items-center justify-between text-emerald-950 font-semibold font-display">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-emerald-750 fill-emerald-800 text-emerald-800 shrink-0" />
                        <span>Reply from Neha Deshmukh (Owner)</span>
                      </span>
                      <span className="text-[9px] font-mono text-emerald-600">Verified Specialist</span>
                    </div>
                    <p className="text-gray-650 leading-relaxed italic text-gray-500 pl-4.5">
                      {rev.replied}
                    </p>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

        {/* Right: Submission Form */}
        <div className="lg:col-span-5" id="reviews-form-col">
          <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 sm:p-8 sticky top-30 shadow-xs space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-805 uppercase text-emerald-700">Write Your Thoughts</span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900">Share Your Experience</h3>
              <p className="text-xs text-gray-500">
                How did you enjoy our grains, cold press oils, and farm eggs? Let other Nashik families know!
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 animate-in zoom-in-95" id="review-success-banner">
                <span className="text-3xl">🌿</span>
                <h4 className="text-sm font-bold text-emerald-955 text-emerald-950">Thank you, {name}!</h4>
                <p className="text-xs text-emerald-700">Your review will be checked and verified by Sagar Patil.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                {/* 1. Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Shreya K. / Deshmukh Family"
                    className="w-full bg-slate-50 border border-gray-200 px-3.5 py-3 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors"
                  />
                </div>

                {/* 2. Residence Area */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Your Nashik Residential Area</label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 px-3.5 py-3 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors cursor-pointer"
                  >
                    {nashikAreas.map(nArea => (
                      <option key={nArea} value={nArea}>{nArea}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Star toggle */}
                <div className="space-y-1.5 pb-1">
                  <label className="text-xs font-bold text-gray-700 block">Overall Star Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => {
                      const isLit = s <= rating;
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setRating(s)}
                          className="p-1 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                          title={`${s} Stars`}
                        >
                          <Star className={`w-6 h-6 shrink-0 ${
                            isLit ? 'text-amber-500 fill-amber-500' : 'text-gray-200'
                          }`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Comments */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Your Review comments</label>
                  <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="We loved the stone-ground Sarbati wheat and fresh drumstick leaves! Excellent service..."
                    rows={4}
                    className="w-full bg-slate-50 border border-gray-200 px-3.5 py-2.5 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors leading-relaxed"
                  />
                </div>

                {/* Button Submit review */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors active:scale-98 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Guest Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
