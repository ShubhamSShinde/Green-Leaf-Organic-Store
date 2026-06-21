import React, { useState } from 'react';
import { STORE_INFO, INSTALLED_PRODUCTS } from '../data';
import { CartItem } from '../types';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Sparkles, 
  CheckCircle,
  Truck,
  HelpCircle,
  Info
} from 'lucide-react';

interface ContactViewProps {
  cartList: CartItem[];
  cartSubtotal: number;
}

export default function ContactView({ cartList, cartSubtotal }: ContactViewProps) {
  const [selectedLocation, setSelectedLocation] = useState('College Road');
  
  // Form states
  const [name, setName] = useState('');
  const [inquiryType, setInquiryType] = useState('Subscription Detail');
  const [msg, setMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  // Nashik pricing matrix
  const locationsMatrix: Record<string, { fee: number; minOrder: number; timeText: string; highlight: string }> = {
    'College Road': { fee: 0, minOrder: 200, timeText: '1 to 2 Hours', highlight: 'Same-lane express delivery' },
    'Gangapur Road': { fee: 0, minOrder: 200, timeText: '2 to 3 Hours', highlight: 'Eco-carrier direct route' },
    'Indira Nagar': { fee: 40, minOrder: 300, timeText: 'Same-day evening', highlight: 'Dispatched at 4:00 PM' },
    'Sharanpur Road': { fee: 20, minOrder: 250, timeText: '3 Hours express', highlight: 'Delivered by Rohan More' },
    'Nashik Road': { fee: 60, minOrder: 400, timeText: 'Next-day morning', highlight: 'Secured packed logistics' },
    'Trimbak Hill': { fee: 100, minOrder: 600, timeText: 'Bi-weekly slots', highlight: 'Sourced valley deliveries' }
  };

  const activeLoc = locationsMatrix[selectedLocation] || locationsMatrix['College Road'];

  const handleGeneralInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !msg) return;
    
    setSentSuccess(true);
    setTimeout(() => {
      setName('');
      setMsg('');
      setSentSuccess(false);
    }, 2000);
  };

  // Build current active shopping cart items list text for order confirmation
  const getSubtotalWithDelivery = () => {
    const delivery = activeLoc.fee;
    return cartSubtotal + delivery;
  };

  const handleCheckoutWhatsApp = () => {
    if (cartList.length === 0) {
      alert('Your shopping basket is empty. Please add farm fresh produce in Fresh Shop first!');
      return;
    }

    const itemsText = cartList.map(item => `   - ${item.product.name} [x${item.quantity}] (${item.product.unit}) - ₹${item.product.price * item.quantity}`).join('\n');
    
    const textMsg = `Hello Green Leaf Organic Store!
I am placing a fresh harvest order:
🛒 Sourced Items:
${itemsText}

💰 Pricing Details:
   - Basket Subtotal: ₹${cartSubtotal}
   - Shipping to ${selectedLocation}: ₹${activeLoc.fee}
   - Estimated bill total: ₹${getSubtotalWithDelivery()}

📍 Delivery Parameters:
   - Sourced Hub: Nashik College Road Store
   - Target Location: ${selectedLocation}
   - Delivery SLA: ${activeLoc.timeText}

Please double check harvest levels and confirm slot. Thank you!`;

    const encoded = encodeURIComponent(textMsg);
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-12 pb-16" id="contact-order-view">
      
      {/* 1. Settle contacts general flags */}
      <section className="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 inline-block px-2.5 py-1 rounded-md">
            Visit Neha & Sagar
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">
            Open Greenhouse Storefront
          </h2>
          <p className="text-sm text-gray-550 text-gray-500 leading-relaxed">
            Drop by Shop No. 7 on College Road to experience the deep, nutty aroma of fresh hand-churned Bilona ghee, or let Rohan bring the harvest straight to your fence.
          </p>
          
          <div className="pt-2 text-xs font-mono text-emerald-700 font-semibold uppercase flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Doors remain open: {STORE_INFO.hours}</span>
          </div>
        </div>

        {/* Floating Quick contacts card info */}
        <div className="bg-white border border-emerald-150 p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-xs">
          
          <div className="space-y-1">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Support Hotline</p>
            <a href={`tel:${STORE_INFO.phone}`} className="text-sm font-bold text-gray-950 hover:text-emerald-700 transition-colors">
              {STORE_INFO.phone}
            </a>
            <p className="text-[10px] text-emerald-600 font-medium">Talk to Pooja Shinde</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Primary Email</p>
            <a href={`mailto:${STORE_INFO.email}`} className="text-sm font-bold text-gray-950 hover:text-emerald-700 transition-colors block truncate">
              {STORE_INFO.email}
            </a>
            <p className="text-[10px] text-emerald-600 font-medium font-sans">Business queries</p>
          </div>

          <div className="sm:col-span-2 space-y-1 pt-2 border-t border-gray-100">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Nashik Headquarters</p>
            <p className="text-xs font-semibold text-gray-800">
              {STORE_INFO.address}
            </p>
          </div>

        </div>
      </section>

      {/* 2. visual interactive map pricing finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="visual-delivery-map-finder">
        <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* List of areas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block">
                Interactive Travel Zones Finder
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900">
                Nashik Delivery Radius Fees
              </h3>
              <p className="text-xs text-gray-500">
                Avoid guesswork. Tap your residential area block to instantly compute travel times, express delivery charges, and minimum order requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2" id="locations-grid-toggles">
              {Object.keys(locationsMatrix).map((loc) => {
                const isSelected = selectedLocation === loc;
                return (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-500/15'
                        : 'border-gray-150 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-gray-805 block text-gray-800 leading-none">{loc}</span>
                    <span className="text-[10px] font-mono text-emerald-800 mt-1 block">
                      {locationsMatrix[loc].fee === 0 ? 'FREE Delivery' : `₹${locationsMatrix[loc].fee} Fee`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location results card display */}
          <div className="lg:col-span-6 bg-emerald-900 text-emerald-100 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-sm relative">
            <div className="space-y-3">
              <h4 className="text-white text-xs font-mono uppercase tracking-widest border-b border-emerald-850 pb-2.5 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Travel zone analysis result</span>
              </h4>

              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-[10px] text-emerald-300 block font-mono">Travel SLA time:</span>
                  <p className="text-base font-bold text-white leading-normal">{activeLoc.timeText}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-emerald-300 block font-mono">Zone Delivery Fee:</span>
                    <p className="text-xs font-bold text-amber-300">{activeLoc.fee === 0 ? 'FREE Delivery' : `₹${activeLoc.fee}`}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 block font-mono">Minimum Basket size:</span>
                    <p className="text-xs font-bold text-white">₹{activeLoc.minOrder}</p>
                  </div>
                </div>

                <div className="bg-emerald-950/70 p-3 rounded-lg border border-emerald-850/75">
                  <span className="text-[10px] text-emerald-300 block font-mono">Dispatch highlight:</span>
                  <p className="text-xs font-medium text-white">{activeLoc.highlight}</p>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-400 leading-relaxed pt-2.5 border-t border-emerald-850">
              *Delivery allocations updated daily at 7:30 AM based on vegetable weight levels.
            </div>
          </div>

        </div>
      </section>

      {/* 3. checkout with whatsapp direct order generator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-emerald-100 pt-12" id="whatsapp-checkout-app">
        <div className="bg-emerald-950 text-emerald-100 rounded-3xl p-8 md:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-emerald-900 border border-emerald-850 px-2.5 py-1 rounded inline-block">
              Express WhatsApp checkout
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Settle Your Harvest Cart
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              We compile your selected Fresh Shop purchases along with the travel parameters computed. Tap below to send this directly to Pooja Shinde, she will respond with your final GPay/PhonePe instructions.
            </p>

            <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-850/70 flex gap-2.5 text-xs text-emerald-250 leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <p>Your current active session holds <strong className="text-white font-mono">{cartList.length} items</strong>. Make sure you have finished adding items from the Fresh Shop first.</p>
            </div>
          </div>

          {/* live preview box */}
          <div className="lg:col-span-7 bg-white text-gray-800 rounded-3xl p-6 border border-emerald-800 shadow-sm flex flex-col justify-between min-h-[300px]">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-2">
                Order Sheet Checkout Preview
              </span>

              {cartList.length === 0 ? (
                <div className="text-center py-12 text-gray-400 space-y-1">
                  <span className="text-2xl">🛒</span>
                  <p className="text-xs font-semibold">Your Organic shopping basket is currently empty.</p>
                  <p className="text-[10px]">Add items in Fresh Shop page before using checkout generator!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[220px] overflow-y-auto">
                  {cartList.map(item => (
                    <div key={item.product.id} className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                      <div>
                        <span className="font-bold text-gray-900">{item.product.name}</span>
                        <span className="text-gray-450 block text-[10px]">Quantity: {item.quantity} × {item.product.unit}</span>
                      </div>
                      <span className="font-mono text-gray-800 font-semibold">₹{item.product.price * item.quantity}</span>
                    </div>
                  ))}

                  <div className="pt-2 text-xs text-gray-500 font-mono space-y-1 select-none">
                    <div className="flex justify-between">
                      <span>Harvest Basket Subtotal:</span>
                      <span>₹{cartSubtotal}</span>
                    </div>
                    <div className="flex justify-between text-emerald-800 font-semibold">
                      <span>Express Delivery ({selectedLocation}):</span>
                      <span>{activeLoc.fee === 0 ? 'FREE Delivery' : `₹${activeLoc.fee}`}</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm font-extrabold text-emerald-950 border-t border-dashed border-gray-200">
                      <span>Estimated Order Bill Total:</span>
                      <span>₹{getSubtotalWithDelivery()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              disabled={cartList.length === 0}
              className="w-full mt-6 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-100 disabled:text-gray-400 text-slate-950 rounded-2xl cursor-pointer text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 p-px text-slate-950 fill-current shrink-0" />
              <span>Send Shopping Basket to WhatsApp Ordering (₹{cartList.length > 0 ? getSubtotalWithDelivery() : 0})</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. General question contact form */}
      <section className="max-w-2xl mx-auto px-4" id="general-inquiry-system">
        <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-display font-bold text-gray-950">Send General Question</h3>
            <p className="text-xs text-gray-500">Have a generic question for Neha Deshmukh about direct farming or supplier cooperatives? Shoot us an email inquiry on-panel.</p>
          </div>

          {sentSuccess ? (
            <div className="text-center py-8 bg-emerald-50 rounded-2xl border border-emerald-150 text-emerald-800 animate-in zoom-in-95" id="contact-success-panel">
              <CheckCircle className="w-8 h-8 mx-auto text-emerald-700 mb-2" />
              <p className="text-xs font-bold">Inquiry Transmitted Successfully!</p>
              <p className="text-[10px] text-gray-400 mt-1">Our customer support manager Pooja Shinde will slide an email response shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleGeneralInquirySubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-700 block">Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Dr. Deshpande"
                    className="w-full bg-slate-50 border border-gray-200 px-3.5 py-3 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-700 block">Inquiry Category</label>
                  <select 
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 px-3.5 py-3 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors cursor-pointer"
                  >
                    <option>Subscription Details</option>
                    <option>Bulk Sourcing/Event catering</option>
                    <option>Feedback on Harvest Delivery</option>
                    <option>Farmer Sourcing Audit questions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-700 block">Your Message</label>
                <textarea 
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Tell us details of your requirements..."
                  rows={3}
                  className="w-full bg-slate-50 border border-gray-200 px-3.5 py-2.5 rounded-xl focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors active:scale-98 flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Trigger Sourced Email Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
