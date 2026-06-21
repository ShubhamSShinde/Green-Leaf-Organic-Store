import React from 'react';
import { TEAM_MEMBERS, STORE_INFO } from '../data';
import { Sprout, Users, MapPin, Heart, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  return (
    <div className="space-y-16 pb-16" id="about-us-view">
      
      {/* 1. Founder Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-lg">
          <div className="absolute bottom-0 right-0 translate-y-10 translate-x-10 w-96 h-96 bg-emerald-850/40 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Founder Avatar info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl relative">
                <img 
                  src={TEAM_MEMBERS[0].photoUrl} 
                  alt={TEAM_MEMBERS[0].name}
                  className="w-full h-full object-cover grayscale-15"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">{TEAM_MEMBERS[0].name}</h3>
                <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">{TEAM_MEMBERS[0].role}</p>
                <p className="text-[11px] text-emerald-300 mt-1">Founder since 2020</p>
              </div>
            </div>

            {/* Founder message block */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-emerald-850/70 px-3 py-1 rounded-md">
                Our Story & Vision
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                &ldquo;Pure food is not a lifestyle luxury. It is a fundamental right of every family.&rdquo;
              </h2>

              <div className="text-sm text-emerald-200/90 space-y-4 leading-relaxed font-sans">
                <p>
                  Growing up in the lush farm districts of Maharashtra, I watched how soil was slowly losing its aromatic sweetness and biology to heavy mineral fertilizers and chemical insecticides. Our plates were becoming nutritionally vacant. After earning my degree in Environmental Sciences from Pune University, I knew Nashik was the perfect location to start a food revolution.
                </p>
                <p>
                  In 2020, we established <strong className="text-white">Green Leaf Organic Store</strong> at College Road. We paired with exactly twelve family farmers in Niphad and Sinnar who agreed to transition from mineral chemicals back to ancient cow manure ferments (Jeevamrutha). Today, we represent over 152 partner farm families, ensuring they receive dignified premium payouts while Nashik households get certified chemical-free, nutrient-dense nutrition.
                </p>
              </div>

              {/* Verified badge with signature */}
              <div className="pt-4 border-t border-emerald-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-amber-400" />
                  <span>PGS-India Standard Farm Auditing Verified</span>
                </div>
                <span>Neha Deshmukh — Neha S. Deshmukh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Nashik Cooperative Map & Supply Chain Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="nashik-supply-chain">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Where Does Your Food Come From?</span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">Our Traceable Nashik Supply Locations</h3>
          <p className="text-sm text-gray-550 text-gray-500">Every single basket displays traces of its parent soil. We maintain detailed origin mapping logs for all vegetables, grains and oils.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {/* Location 1: Niphad */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-white text-emerald-800 flex items-center justify-center shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-display font-semibold text-emerald-950">Niphad Farming Valley</h4>
              <p className="text-xs text-emerald-800 font-medium font-mono">35 Km from College Road store</p>
              <p className="text-xs text-gray-550 text-gray-500 leading-relaxed pt-1">
                Yields our signature wheat flour (Sarbati origin), table grapes, pomegranates, and rich winter cauliflowers. Deep clay-loam soils nourished with organic bio-fertilizers.
              </p>
            </div>
          </div>

          {/* Location 2: Trimbakeshwar */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-white text-emerald-800 flex items-center justify-center shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-display font-semibold text-emerald-950">Trimbak Mountain Highlands</h4>
              <p className="text-xs text-emerald-800 font-medium font-mono">28 Km from College Road store</p>
              <p className="text-xs text-gray-550 text-gray-500 leading-relaxed pt-1">
                Sources our wild tribal millets (Ragi/finger-millet) and pasture-raised eggs. Elevated farm conditions with abundant fresh stream-water irrigation.
              </p>
            </div>
          </div>

          {/* Location 3: Sinnar */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-white text-emerald-800 flex items-center justify-center shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-display font-semibold text-emerald-950">Sinnar Agro Belt</h4>
              <p className="text-xs text-emerald-800 font-medium font-mono">42 Km from College Road store</p>
              <p className="text-xs text-gray-550 text-gray-500 leading-relaxed pt-1">
                Grows our rich lentils, desi tomatoes, green chickpeas, and aromatic coriander. Ideal climate conditions supporting sustainable dry-land pulses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Member Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="store-team-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Dedicated Professionals</span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">Meet Our Nashik Store Family</h3>
          <p className="text-sm text-gray-550 text-gray-500">The passionate team that ensures standard purity audit checks, processes orders, and fulfills doorstep deliveries daily.</p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white border border-emerald-100/60 rounded-2xl p-6 hover:shadow-md transition-shadow group space-y-4">
              
              <div className="aspect-square rounded-xl overflow-hidden relative border border-gray-100">
                <img 
                  src={member.photoUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Key Task indicator */}
                <div className="absolute inset-0 bg-emerald-950/65 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white rounded-xl">
                  <p className="text-[10px] font-mono text-amber-300 uppercase tracking-wider">Key Focus Area</p>
                  <p className="text-xs leading-relaxed mt-1 font-medium">{member.keyTask}</p>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-mono font-semibold text-emerald-800-400 text-emerald-700">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  {member.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Sustainable farming standards summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-emerald-150 pt-16" id="farming-principles">
        <div className="bg-amber-50/75 border border-amber-200 rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <HeartHandshake className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-xl font-display font-bold text-emerald-950">Our Six Purity Covenants</h4>
            <p className="text-xs text-gray-650 leading-relaxed text-gray-500">
              Standards audited and certified under the guidance of Neha Deshmukh.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="flex gap-3">
              <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold font-mono">1</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Zero Synthetic Sprays</h5>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">No endosulfan, glyphosphates, or artificial ripening gases on orchard trees.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold font-mono">2</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Indigenous Seed Preference</h5>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">Using non-GMO traditional desi seeds for lentils, wheat, and ragi.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold font-mono">3</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Traceable Logistics Logs</h5>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">Veggies mapped database records of when and from which specific Nashik field they came.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold font-mono">4</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Biodegradable Packaging Only</h5>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">Delivered inside unbleached premium paper sacks, jute crates and recycled tags.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
