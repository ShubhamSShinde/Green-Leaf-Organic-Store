import React, { useState } from 'react';
import { ShoppingLeafLogo } from './ShoppingLeafLogo'; // Custom beautiful SVG or icon logotype
import { Menu, X, ShoppingBag, Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cartCount: number;
  toggleCart: () => void;
}

export default function Header({ currentTab, setCurrentTab, cartCount, toggleCart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'shop', label: 'Fresh Shop' },
    { id: 'subscription', label: 'Subscriptions' },
    { id: 'blog', label: 'Wellness Blog' },
    { id: 'reviews', label: 'Guest Reviews' },
    { id: 'contact', label: 'Contact & Order' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs" id="main-header">
      {/* Top Banner Alert for Nashik Delivery & Contact info */}
      <div className="bg-emerald-900 text-emerald-100 px-4 py-2 text-xs font-medium scroll-smooth" id="top-notification-bar">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Fresh Harvest Arrived Today directly from Sinnar & Niphad Farms!</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${STORE_INFO.phone}`} className="flex items-center gap-1 hover:text-emerald-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>College Road, Nashik</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Representation block */}
          <div 
            className="flex items-center cursor-pointer select-none group" 
            onClick={() => handleNavClick('home')}
            id="brand-logo-container"
          >
            <div className="bg-emerald-100 p-2.5 rounded-2xl group-hover:bg-emerald-200 transition-all duration-300 shadow-xs">
              <ShoppingLeafLogo />
            </div>
            <div className="ml-3">
              <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-emerald-950 flex items-center gap-1">
                Green Leaf
                <span className="text-emerald-600 font-normal">Organic</span>
              </h1>
              <span className="text-[10px] font-mono text-emerald-700 tracking-wider uppercase block">
                Pure, Sustainable Local Farm Food
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                    isActive 
                      ? 'text-emerald-800 bg-emerald-50/70 font-semibold' 
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-50/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-emerald-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls (Cart & CTA) */}
          <div className="flex items-center gap-3" id="header-right-controls">
            
            {/* Shopping Cart Button */}
            <button
              onClick={toggleCart}
              id="header-cart-button"
              className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 hover:bg-emerald-100 transition-all duration-300 relative cursor-pointer group shadow-sm active:scale-95"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5.5 h-5.5 group-hover:rotate-6 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 bg-amber-500 text-white rounded-full text-xs font-mono font-bold flex items-center justify-center px-1 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick WhatsApp Order Button (CTA) */}
            <button
              onClick={() => handleNavClick('shop')}
              id="cta-order-now-header"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-2xl cursor-pointer transition-all duration-300 shadow-md shadow-emerald-700/10 hover:shadow-emerald-700/20 active:scale-95 group"
            >
              <Sparkles className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span>Shop Fresh Produce</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 lg:hidden text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden border-t border-emerald-100 bg-white shadow-xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-nav-panel">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-link-${item.id}`}
                  className={`w-full text-left px-5 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-emerald-550/10 text-emerald-800 font-semibold border-l-4 border-emerald-600 bg-emerald-50' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-100 px-2 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono py-1">
                <span>Rating: ★ {STORE_INFO.rating} (Google verified)</span>
                <span>Hours: {STORE_INFO.hours}</span>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 bg-emerald-700 text-white rounded-xl text-center text-sm font-medium hover:bg-emerald-800 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Inquire & Order WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
