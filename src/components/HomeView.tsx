import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sprout, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  TrendingUp,
  Droplet,
  Users,
  Award
} from 'lucide-react';
import { STORE_INFO, INSTALLED_PRODUCTS } from '../data';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  addToCart: (productId: string) => void;
}

export default function HomeView({ setCurrentTab, addToCart }: HomeViewProps) {
  // Calculator state
  const [familySize, setFamilySize] = useState(4);
  const [organicPercent, setOrganicPercent] = useState(50);

  // Math to show impact
  const chemAvoided = (familySize * 0.45 * (organicPercent / 100) * 12).toFixed(1); // kg of fertilizer runoff avoided
  const supportScore = Math.ceil(familySize * (organicPercent / 100) * 1.5); // Local farm jobs supported
  const waterSaved = Math.round(familySize * 180 * (organicPercent / 100) * 12); // Liters of chemical water preserved

  const mainStats = [
    { value: '100%', label: 'Pesticide Free', desc: 'Direct regional certification controls' },
    { value: '150+', label: 'Local Farmers', desc: 'Sourced from Niphad, Sinnar & Trimbak' },
    { value: '24 Hrs', label: 'Field to Doorstep', desc: 'Harvested daily at dawn' },
    { value: 'Zero', label: 'Single-Use Plastic', desc: 'Sustainable jute & cotton bags' }
  ];

  const featuredList = INSTALLED_PRODUCTS.filter(item => item.isFeatured);

  return (
    <div className="space-y-16 pb-16" id="home-view-container">
      
      {/* 1. Hero Section using generated premium image */}
      <section className="relative bg-emerald-950 overflow-hidden min-h-[500px] flex items-center pt-10 pb-16 md:py-24 px-4 sm:px-6 lg:px-8" id="hero-banner-section">
        
        {/* Background decorative graphic blobs */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-amber-400 blur-3xl"></div>
        </div>

        {/* Master layout splitter */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Organic Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700 text-emerald-300 text-xs font-mono font-medium"
            >
              <Sprout className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Nashik&apos;s Premium Farm-Direct Grocery Service</span>
            </motion.div>

            {/* Main Catchy Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight"
            >
              Taste is True Purity.<br />
              <span className="text-emerald-400">100% Organic Freshness</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-emerald-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Explore fresh pesticide-free vegetables, native grains, wood-pressed oils, and farm eggs harvested at sunrise. Sourced from organic soil cooperatives across Sinnar, Niphad, and Trimbak Hills.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                onClick={() => setCurrentTab('shop')}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-2xl cursor-pointer shadow-lg shadow-amber-500/20 transition-all active:scale-98 flex items-center justify-center gap-2 group text-sm"
              >
                <span>Browse Fresh Veggies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => setCurrentTab('subscription')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-2xl cursor-pointer border border-white/20 transition-all text-sm"
              >
                Subscribe to Weekly Box
              </button>
            </motion.div>

            {/* Google trust indicators inline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-emerald-900 text-emerald-300 text-xs font-mono"
            >
              <div>
                <span className="text-white text-sm font-bold block mb-0.5">★ 4.7 / 5</span>
                <span>Google Verified Store</span>
              </div>
              <div className="w-px h-8 bg-emerald-800"></div>
              <div>
                <span className="text-white text-sm font-bold block mb-0.5">340+ families</span>
                <span>Nourished safely in Nashik</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual with our high-end generated image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
            id="hero-image-render"
          >
            <div className="aspect-ratio-[16/9] lg:aspect-square overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl relative group">
              <img 
                src="/src/assets/images/green_leaf_hero_banner_1782051927981.jpg" 
                alt="Green Leaf Fresh Harvest Layout" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 to-transparent"></div>
              
              {/* Overlaid Floating Tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-200/50 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-mono font-bold text-sm">
                    F2D
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">100% Traceable Harvest</h4>
                    <span className="text-[10px] text-emerald-700 font-mono block">Direct from Nashik grower co-ops</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Core Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="store-stats-grid">
        <div className="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {mainStats.map((stat, i) => (
            <div key={i} className="text-center group space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-950 block group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <p className="text-sm font-semibold text-emerald-800">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Organic Impact Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="organic-impact-calculator">
        <div className="bg-white border-2 border-emerald-100/90 rounded-3xl p-8 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Interactivity tools */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-100 text-xs font-mono uppercase font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>See Your Positive Contribution</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">
                Your Organic Impact Estimator
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By introducing native ingredients and sustainable fruits to your family dinner table, you actively reduce farming chemical loads. Tune the levers to estimate your positive footprint.
              </p>
            </div>

            {/* Slider 1: Family Count */}
            <div className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-800 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span>Family Size (Persons)</span>
                </label>
                <span className="font-mono font-bold text-emerald-800 text-base">{familySize} Members</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={familySize}
                onChange={(e) => setFamilySize(parseInt(e.target.value))}
                className="w-full accent-emerald-700 h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>1 Person</span>
                <span>5 Members</span>
                <span>10 Persons</span>
              </div>
            </div>

            {/* Slider 2: Organic Food Sourcing Percent */}
            <div className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-800 flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-emerald-700" />
                  <span>Target Organic Food Share</span>
                </label>
                <span className="font-mono font-bold text-emerald-800 text-base">{organicPercent}% Sourced</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="10"
                value={organicPercent}
                onChange={(e) => setOrganicPercent(parseInt(e.target.value))}
                className="w-full accent-emerald-700 h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>10% (Occasional)</span>
                <span>50% (Active Balance)</span>
                <span>100% (Fully Pure Living)</span>
              </div>
            </div>

          </div>

          {/* Calculator Output Display Card */}
          <div className="lg:col-span-6 bg-emerald-900 text-emerald-100 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-emerald-800/40 rounded-full blur-2xl"></div>

            <div className="space-y-6 relative z-10">
              <h4 className="text-white text-xs font-mono uppercase tracking-wider border-b border-emerald-800 pb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Estimated Yearly Footprint Benefits</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Stat block 1 */}
                <div className="space-y-1">
                  <span className="text-4xl font-mono font-bold text-amber-300 block">{chemAvoided} kg</span>
                  <p className="text-xs font-medium text-emerald-200">Environmental Fertilizer Offsets</p>
                  <p className="text-[10px] text-emerald-400">Pesticides shielded from washing into Nashik rivers.</p>
                </div>

                {/* Stat block 2 */}
                <div className="space-y-1">
                  <span className="text-4xl font-mono font-bold text-emerald-300 block">{waterSaved.toLocaleString()} L</span>
                  <p className="text-xs font-medium text-emerald-200">Chemical-Free Groundwater Saved</p>
                  <p className="text-[10px] text-emerald-400">Clean irrigation volume retained for farm wildlife.</p>
                </div>
              </div>

              {/* Farmer Support Impact */}
              <div className="bg-emerald-950/80 p-4.5 rounded-2xl border border-emerald-800/80 flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-lg font-mono">
                  +{supportScore}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Nashik Farmer Families Supported</h5>
                  <p className="text-[10px] text-emerald-300">Creates sustainable livelihoods in Niphad & Trimbak cooperatives.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/80 text-center sm:text-left mt-4">
              <p className="text-[11px] text-emerald-400 leading-relaxed font-mono">
                *Estimates based on Indian organic soil replenishment indexes and average family grain/produce intake rates.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Three Pillars of Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="three-pillars-section">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">How We Stand Distinctive</span>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950">Freshness Sourced with Uncompromised Integrity</h3>
          <p className="text-sm text-gray-500">Every pack of grain, leaf, and oil represents a commitment from Nashik’s finest organic specialists to your kitchen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          
          <div className="bg-white border border-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-semibold text-emerald-950">Fresh Farm Harvest Daily</h4>
            <p className="text-sm text-gray-650 leading-relaxed text-gray-500">
              Veggies and fruits are harvested in the early morning dew hours from Nashik gardens and reach College Road distribution counter within hours. No cooling vaults, no long transport chains.
            </p>
          </div>

          <div className="bg-white border border-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-semibold text-emerald-950">Ethical Direct farmer Alliances</h4>
            <p className="text-sm text-gray-650 leading-relaxed text-gray-500">
              Neha Deshmukh audits soil inputs personally. Sourced foods pay our 152 partner-growers an average premium of +20% above regular APMC market rates, sustaining fair, chemical-free agriculture.
            </p>
          </div>

          <div className="bg-white border border-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <Droplet className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-semibold text-emerald-950">Purity Retaining Pressing</h4>
            <p className="text-sm text-gray-650 leading-relaxed text-gray-500">
              Oils are cold wood-pressed (lakdi ghana) locally beneath 45°C. Flours are slowly stone ground ensuring zero exposure to metallic heat that is common in industrialized grain mill structures.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Quick High-contrast catalog teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-emerald-100/70 pt-16" id="catalog-teaser-section">
        <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-8">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Bestsellers In Nashik</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">Taste True Farm-Fresh Purity</h3>
          </div>
          <button 
            onClick={() => setCurrentTab('shop')} 
            className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>See entire catalogue (10+ organic products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Selected bestsellers list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl border border-emerald-50 p-6 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                    {product.category}
                  </span>
                  <span className="text-xs text-amber-600 font-mono font-semibold flex items-center gap-1 bg-amber-50 px-2 rounded-md">
                    ★ Certified Traceable
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-display font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-emerald-700 font-mono tracking-wide">{product.localNashikSource}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 pt-1">{product.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-50">
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Price / {product.unit}</span>
                  <span className="text-xl font-mono font-semibold text-emerald-950">₹{product.price}</span>
                </div>
                
                <button
                  onClick={() => addToCart(product.id)}
                  className="px-4.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-medium cursor-pointer transition-colors active:scale-95 shadow-xs"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
