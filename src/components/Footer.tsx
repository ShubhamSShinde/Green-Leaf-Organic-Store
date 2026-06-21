import React from 'react';
import { STORE_INFO } from '../data';
import { ShoppingLeafLogo } from './ShoppingLeafLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    'Organic Fruits & Vegetables',
    'Fresh Dairy Products',
    'Millets & Grains',
    'Cold-Pressed Oils',
    'Express Home Delivery',
    'Monthly Subscription Boxes',
    'WhatsApp Ordering'
  ];

  return (
    <footer className="bg-emerald-950 text-emerald-100/90 pt-16 pb-8 border-t border-emerald-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-emerald-900">
          
          {/* Column 1: Store Intro Flag */}
          <div className="space-y-4" id="footer-col-about">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-900/80 p-2.5 rounded-2xl border border-emerald-800">
                <ShoppingLeafLogo />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold tracking-wide text-white">
                  Green Leaf Organic
                </h3>
                <span className="text-xs font-mono text-emerald-400 block uppercase">Founded 2020</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-emerald-200/80">
              Providing fresh organic fruits, vegetables, grains, pulses, and cold-pressed pure oils sourced directly from certified orchards and farmers across Nashik, Maharashtra.
            </p>

            {/* Google Rating Display Banner */}
            <div className="bg-emerald-900/50 border border-emerald-800/60 p-4.5 rounded-2xl flex items-center justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-400 text-lg">★★★★★</span>
                  <span className="text-white font-mono font-bold ml-1">4.7</span>
                  <span className="text-xs text-emerald-300">/5</span>
                </div>
                <p className="text-[11px] text-emerald-300 font-mono tracking-wide uppercase mt-0.5">Google Business verified</p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-900 px-2.5 py-1 rounded-md border border-emerald-800/85">340+ Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-col-links">
            <h4 className="text-white font-display font-semibold tracking-wider text-sm uppercase mb-5 border-l-3 border-emerald-500 pl-3">
              Store Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home View', id: 'home' },
                { label: 'Our Story (About)', id: 'about' },
                { label: 'Organic Grocery Shop', id: 'shop' },
                { label: 'Monthly Subscriptions', id: 'subscription' },
                { label: 'Nutrition & Wellness Blog', id: 'blog' },
                { label: 'Customer Reviews', id: 'reviews' },
                { label: 'Place Custom Order', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setCurrentTab(item.id)}
                    className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5 group text-emerald-200/80"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered list */}
          <div id="footer-col-services">
            <h4 className="text-white font-display font-semibold tracking-wider text-sm uppercase mb-5 border-l-3 border-emerald-500 pl-3">
              Certified Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2.5 text-emerald-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location details */}
          <div className="space-y-4" id="footer-col-contact">
            <h4 className="text-white font-display font-semibold tracking-wider text-sm uppercase mb-5 border-l-3 border-emerald-500 pl-3">
              Find Our Store
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-emerald-100">{STORE_INFO.hours}</p>
                  <p className="text-[11px] text-emerald-400/80 tracking-wide font-mono uppercase mt-0.5">Doors open every single day</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-400/80 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>© {currentYear} Green Leaf Organic Store. All rights reserved.</span>
            <span className="hidden sm:inline text-emerald-800">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Certified Organic Origin Sourced (PGS-India aligned)</span>
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-emerald-900/40 px-3.5 py-1.5 rounded-full border border-emerald-900">
            <span>Made with Care for Nashik Communities</span>
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>by Neha Deshmukh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
