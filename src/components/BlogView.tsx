import React, { useState } from 'react';
import { BLOG_POSTS, STORE_INFO } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, CheckSquare, RefreshCw, X, Award, Smile } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogView() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  
  // Interactive Scorecard state
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);

  // Calculate score representation
  const checkedCount = [q1, q2, q3, q4, q5].filter(Boolean).length;
  const organicLivingScore = Math.round((checkedCount / 5) * 100);

  const getScoreVerdict = (score: number) => {
    if (score === 100) return { title: 'Pristine Clean Living Advocate!', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', advice: 'Incredible! Your house operates with perfect organic guidelines. Share your journey with neighboring Nashik families!' };
    if (score >= 60) return { title: 'Balanced Mindful Living Balanced!', color: 'text-teal-700 bg-teal-50 border-teal-200', advice: 'Excellent start! You have incorporated key traditional items. Consider replacing bulk refined oils with Cold-pressed oil to push it to the peak.' };
    return { title: 'Chemical Burden exposed!', color: 'text-amber-800 bg-amber-50 border-amber-200', advice: 'Your family might be exposed to high cumulative agrochemicals. Starting with small changes like unpolished Tur Dal and organic wheat can reduce this burden significantly.' };
  };

  const verdict = getScoreVerdict(organicLivingScore);

  const handleResetQuiz = () => {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    setQ5(false);
  };

  return (
    <div className="space-y-12 pb-16" id="wellness-blog-view">
      
      {/* 1. Blog hero & selector */}
      <section className="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100 flex flex-col md:flex-row gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 inline-block px-2.5 py-1 rounded-md">
            The Green Leaf Wellness Academy
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">
            Nourishing Thoughts & Lifestyles
          </h2>
          <p className="text-sm text-gray-550 text-gray-500">
            Read expert research curated by Neha Deshmukh on regenerative farming, millets, and clean fats.
          </p>
        </div>
        <BookOpen className="w-12 h-12 text-emerald-800 shrink-0 hidden lg:block" />
      </section>

      {/* 2. Interactive Lifestyle Quotient quiz */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="purity-quotient-app">
        <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quiz form */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block">
                Interactive Food Health Audit Quiz
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900">
                Measure Your Household Purity Quotient
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Check each box if your household has successfully implemented these clean, chemical-free habits.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              <label className="flex items-start gap-3 p-3 bg-gray-50/70 hover:bg-gray-50 border border-gray-150 rounded-xl cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={q1}
                  onChange={(e) => setQ1(e.target.checked)}
                  className="w-4.5 h-4.5 rounded-md accent-emerald-700 mt-0.5 cursor-pointer"
                />
                <div className="text-xs text-gray-650 leading-relaxed font-sans text-gray-650">
                  <span className="font-bold text-gray-800">1. Wood-Pressed Oils Only: </span>
                  We avoid chemically deodorized refined vegetable oils and cook with cold-pressed oils.
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-gray-50/70 hover:bg-gray-50 border border-gray-150 rounded-xl cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={q2}
                  onChange={(e) => setQ2(e.target.checked)}
                  className="w-4.5 h-4.5 rounded-md accent-emerald-700 mt-0.5 cursor-pointer"
                />
                <div className="text-xs text-gray-650 leading-relaxed font-sans text-gray-650">
                  <span className="font-bold text-gray-800">2. Earthy Unpolished Lentils: </span>
                  Our Tur Dal and legumes are free from synthetic stone dust glazes and yellow bleach dyes.
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-gray-50/70 hover:bg-gray-50 border border-gray-150 rounded-xl cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={q3}
                  onChange={(e) => setQ3(e.target.checked)}
                  className="w-4.5 h-4.5 rounded-md accent-emerald-700 mt-0.5 cursor-pointer"
                />
                <div className="text-xs text-gray-650 leading-relaxed font-sans text-gray-650">
                  <span className="font-bold text-gray-800">3. Non-Chemical Sweetener: </span>
                  We replacement refined white crystal sugars with organic jaggery or pure raw forest honey.
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-gray-50/70 hover:bg-gray-50 border border-gray-150 rounded-xl cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={q4}
                  onChange={(e) => setQ4(e.target.checked)}
                  className="w-4.5 h-4.5 rounded-md accent-emerald-700 mt-0.5 cursor-pointer"
                />
                <div className="text-xs text-gray-650 leading-relaxed font-sans text-gray-650">
                  <span className="font-bold text-gray-800">4. High-Fiber Millets: </span>
                  We cook whole fiber-rich Ragi, Bajra, or Jowar at least twice a week instead of processed flour.
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-gray-50/70 hover:bg-gray-50 border border-gray-150 rounded-xl cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={q5}
                  onChange={(e) => setQ5(e.target.checked)}
                  className="w-4.5 h-4.5 rounded-md accent-emerald-700 mt-0.5 cursor-pointer"
                />
                <div className="text-xs text-gray-650 leading-relaxed font-sans text-gray-650">
                  <span className="font-bold text-gray-800">5. Pesticide-Free Greens: </span>
                  We choose certified organic vegetables rather than buying highly sprayed commercial crops.
                </div>
              </label>

            </div>
          </div>

          {/* Quiz calculations results */}
          <div className="lg:col-span-5 bg-emerald-900 text-emerald-100 rounded-3xl p-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2.5 py-1 rounded inline-block tracking-wider">
                Interactive Calculations Result
              </span>

              <div className="text-center py-4 space-y-1">
                <span className="text-5xl font-mono font-bold text-amber-300 block">
                  {organicLivingScore}%
                </span>
                <p className="text-xs tracking-wider uppercase text-emerald-250 font-bold font-mono">My Organic Quotient</p>
              </div>

              <div className={`p-4 rounded-2xl border text-xs leading-relaxed font-medium space-y-2 ${verdict.color}`}>
                <div className="flex items-center gap-1.5 font-bold font-display">
                  <Award className="w-4 h-4" />
                  <span>{verdict.title}</span>
                </div>
                <p className="opacity-90">{verdict.advice}</p>
              </div>
            </div>

            <button
              onClick={handleResetQuiz}
              className="w-full py-2.5 bg-emerald-950 hover:bg-emerald-950/70 text-emerald-100 border border-emerald-800 text-xs font-bold rounded-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Scorecard</span>
            </button>

          </div>

        </div>
      </section>

      {/* 3. Blogs List Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              id={`blog-card-${post.id}`}
              className="bg-white rounded-3xl border border-emerald-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-semibold border border-emerald-100/60 uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-gray-950 group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-450 font-mono text-gray-400">By {post.author} • {post.date}</p>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1.5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-50">
                <button
                  onClick={() => setActivePost(post)}
                  className="text-emerald-700 hover:text-emerald-850 font-semibold text-xs flex items-center gap-1 group-hover:underline cursor-pointer"
                >
                  <span>Read full published study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Article Modal (Popup details list) */}
      {activePost && (
        <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in" id="blog-article-modal">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-emerald-100 flex flex-col justify-between">
            
            {/* Header */}
            <div className="bg-emerald-900 text-white p-6 relative shrink-0">
              <button 
                onClick={() => setActivePost(null)} 
                className="absolute top-4 right-4 text-emerald-300 hover:text-white p-1 hover:bg-emerald-800 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 bg-emerald-850 px-2.5 py-1 rounded border border-emerald-850 inline-block">
                {activePost.category}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white mt-3 pr-8">
                {activePost.title}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-mono text-xs text-emerald-304 text-emerald-300 mt-2">
                <span>Author: {activePost.author}</span>
                <span className="hidden sm:inline">|</span>
                <span>Date Published: {activePost.date}</span>
                <span className="hidden sm:inline">|</span>
                <span>Time: {activePost.readTime}</span>
              </div>
            </div>

            {/* Content body split to paragraphs */}
            <div className="p-6 sm:p-8 space-y-5 text-sm text-gray-600 leading-relaxed font-sans overflow-y-auto">
              {activePost.content.map((pText, idx) => (
                <p key={idx} className="whitespace-pre-line leading-relaxed text-gray-650">
                  {pText}
                </p>
              ))}

              {/* End signature tag */}
              <div className="pt-6 border-t border-gray-100 flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl">
                <Smile className="w-8 h-8 text-emerald-800 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-905">Written by a certified wellness associate</p>
                  <p className="text-[10px] text-gray-500 font-mono">We audit Nashik organic farm soil to safeguard micronutrients.</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions footer */}
            <div className="p-4 bg-emerald-50 border-t border-emerald-100 text-right shrink-0">
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Return to Wellness Hub
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
