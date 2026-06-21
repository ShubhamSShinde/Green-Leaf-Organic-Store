import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS, STORE_INFO } from '../data';
import { Check, ClipboardList, Info, Sparkles, ShoppingBag, Send, Calendar, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SubscriptionViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function SubscriptionView({ setCurrentTab }: SubscriptionViewProps) {
  const [selectedPlanId, setSelectedPlanId] = useState('sub1');
  
  // Customization choices
  const [deliveryDay, setDeliveryDay] = useState('Wednesday');
  const [includeEggs, setIncludeEggs] = useState(false);
  const [includeHoney, setIncludeHoney] = useState(false);
  const [notes, setNotes] = useState('Deliver before 9:00 AM if possible.');

  const activePlan = SUBSCRIPTION_PLANS.find(p => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[0];

  // Calculate pricing based on choices
  const basePrice = activePlan.price;
  const eggCost = includeEggs ? 120 : 0;
  const honeyCost = includeHoney ? 250 : 0;
  const totalSubBilling = basePrice + eggCost + honeyCost;

  const currentPlanAddonsText = () => {
    const arr = [];
    if (includeEggs) arr.push('Add-on: Pasteurised Free-range eggs (+₹120)');
    if (includeHoney) arr.push('Add-on: Raw Forest Honey (+250)');
    return arr.length > 0 ? arr.join(', ') : 'None selected';
  };

  const handleSubscribeWhatsApp = () => {
    const message = `Hello Green Leaf Organic Store!
I want to start a subscription for:
🌿 Plan: ${activePlan.name} (₹${activePlan.price} ${activePlan.frequency === 'Per Week' ? 'weekly' : 'monthly'})
📅 Prefered Deliveries: ${deliveryDay}s
🥚 Addons: ${currentPlanAddonsText()}
📝 Special Customer Notes: ${notes}
Please verify availability and payment instructions. Thank you!`;
    
    const formattedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${formattedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-12 pb-16" id="subscription-plans-view">
      
      {/* Introduction banner */}
      <section className="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100 flex flex-col items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
          Healthy Living Made Effortless
        </span>
        <h2 className="text-3xl font-display font-bold text-emerald-950">
          Sustainable Subscription Boxes
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
          Skip the hassle of weekly shopping lists. Subscribe to one of our farm-direct hampers and receive premium, certified-organic harvests delivered to your Nashik doorstep systematically.
        </p>
      </section>

      {/* 2. Interactive Plans Grid Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`bg-white rounded-3xl border-2 p-6 cursor-pointer flex flex-col justify-between hover:shadow-md transition-all relative ${
                  isSelected 
                    ? 'border-emerald-600 ring-2 ring-emerald-500/15' 
                    : 'border-emerald-105 hover:border-emerald-200'
                }`}
                id={`sub-card-${plan.id}`}
              >
                {/* Popularity indicator tags overlay */}
                {plan.tag && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 bg-amber-500 text-slate-905 border border-amber-400 font-mono text-[9px] uppercase font-bold rounded-full shadow-xs">
                    {plan.tag}
                  </span>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#0f766e] block uppercase">
                      Certified Pure
                    </span>
                    <h3 className="text-xl font-display font-bold text-gray-950">{plan.name}</h3>
                    <p className="text-xs text-gray-550 text-gray-500 min-h-[36px] line-clamp-2">{plan.description}</p>
                  </div>

                  {/* Price display block */}
                  <div className="py-4 border-y border-gray-100 flex items-baseline gap-1.5">
                    <span className="text-3xl font-mono font-bold text-emerald-950">₹{plan.price}</span>
                    <span className="text-xs font-mono text-gray-500 font-medium">/ {plan.frequency === 'Per Week' ? 'week' : 'month'}</span>
                  </div>

                  {/* Included features checklist list */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-wider">Estimated Hamper Yields:</p>
                    <ul className="space-y-2.5">
                      {plan.itemsIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-650 leading-relaxed text-gray-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                    }}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-100 hover:bg-emerald-100'
                    }`}
                  >
                    {isSelected ? '✓ Plan Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive Tune Box Customizer & Output Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="subscription-customizer-app">
        <div className="bg-white border border-emerald-100/90 rounded-3xl p-8 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Customization controls Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase text-emerald-700">Subscriber Options Panel</span>
              <h3 className="text-2xl font-display font-bold text-emerald-950">Tune Your Selected Box</h3>
            </div>

            {/* Delivery days selection */}
            <div className="space-y-2.5 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <label className="text-xs font-bold text-gray-700 block uppercase font-mono tracking-wider">
                🚚 Prefered Doorstep Delivery Day
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                {['Wednesday', 'Friday', 'Sunday'].map((day) => {
                  const isDay = deliveryDay === day;
                  return (
                    <button
                      key={day}
                      onClick={() => setDeliveryDay(day)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                        isDay 
                          ? 'bg-emerald-700 text-white border-emerald-600 shadow-sm' 
                          : 'bg-white text-gray-600 border-gray-150 hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <p className="text-[10px] text-gray-400">Loads are dispatched from Sinnar hub at 6:45 AM of the chosen day.</p>
            </div>

            {/* Additives options */}
            <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-105">
              <label className="text-xs font-bold text-gray-700 block uppercase font-mono tracking-wider">
                🌟 Healthy Add-ons (Optional)
              </label>

              <div className="space-y-2.5">
                {/* Egg addon */}
                <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/20">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeEggs}
                      onChange={(e) => setIncludeEggs(e.target.checked)}
                      className="w-4 h-4 rounded-md accent-emerald-700 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-800">1 Dozen Pasture-Raised Eggs</span>
                      <p className="text-[10px] text-gray-450 text-gray-400">Trimbakeshvar free range farm</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800">+₹120</span>
                </label>

                {/* Honey addon */}
                <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/20">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeHoney}
                      onChange={(e) => setIncludeHoney(e.target.checked)}
                      className="w-4 h-4 rounded-md accent-emerald-700 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-800">Raw Wild Forest Honey (250g)</span>
                      <p className="text-[10px] text-gray-450 text-gray-400">Unheated forest honey from Western Ghats</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800">+₹250</span>
                </label>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1.5 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <label className="text-xs font-bold text-gray-700 block uppercase font-mono tracking-wider">
                📝 Delivery notes or instructions
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Leave with security/avoid calling morning hours..."
                rows={2}
                className="w-full bg-white border border-gray-200 px-3 py-2 rounded-xl text-xs focus:ring-1 focus:ring-emerald-700 outline-hidden tracking-normal transition-colors"
              />
            </div>
          </div>

          {/* Checkout billing summary Right */}
          <div className="lg:col-span-6 bg-emerald-950 text-emerald-100 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 w-44 h-44 bg-emerald-900/60 rounded-full blur-2xl"></div>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono uppercase bg-emerald-900/80 text-emerald-300 border border-emerald-850 px-2.5 py-1 rounded-md tracking-wider inline-block">
                Customized Order Sheet Summary
              </span>
              
              <h4 className="text-xl font-display font-bold text-white mb-2">
                {activePlan.name} Setup
              </h4>

              <div className="space-y-3.5 text-xs border-y border-emerald-900 py-4">
                
                <div className="flex justify-between">
                  <span className="text-emerald-305">Base Package Cost ({activePlan.frequency}):</span>
                  <span className="font-mono text-white font-semibold">₹{basePrice}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-emerald-305">Pasture-Raised Eggs:</span>
                  <span className="font-mono text-white font-semibold">{includeEggs ? '₹120' : '—'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-emerald-305">Raw Wild Forest Honey:</span>
                  <span className="font-mono text-white font-semibold">{includeHoney ? '₹250' : '—'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-emerald-305">Preferred Delivery Day:</span>
                  <span className="font-mono text-amber-305 text-amber-350 bg-emerald-900 px-2 rounded-md font-semibold">{deliveryDay}s</span>
                </div>

                <div className="flex justify-between border-t border-emerald-900/80 pt-3.5 text-sm font-bold">
                  <span className="text-white">Active Estimated Billing:</span>
                  <span className="font-mono text-amber-300 text-lg">₹{totalSubBilling} / billing cycle</span>
                </div>

              </div>

              {/* Verified safety notes */}
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-850/80 flex gap-2.5">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-emerald-300 leading-normal">
                  No long lock-ins. You can pause, reschedule, or cancel your weekly shipments directly on WhatsApp any day before harvest cycle launches.
                </p>
              </div>
            </div>

            {/* Submit block */}
            <div className="pt-4 relative z-10">
              <button
                onClick={handleSubscribeWhatsApp}
                className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-2xl cursor-pointer text-xs font-bold transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 shrink-0 fill-slate-955 text-slate-950" />
                <span>Submit Subscription Box on WhatsApp</span>
              </button>
              <span className="text-[10px] text-center text-emerald-400 tracking-wide font-mono block mt-2 whitespace-normal leading-relaxed">
                Connects directly to Customer Support Executive Pooja Shinde on WhatsApp
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
