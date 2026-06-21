import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ShopView from './components/ShopView';
import SubscriptionView from './components/SubscriptionView';
import BlogView from './components/BlogView';
import ReviewView from './components/ReviewView';
import ContactView from './components/ContactView';

import { CartItem, Review } from './types';
import { INSTALLED_PRODUCTS, INITIAL_REVIEWS, STORE_INFO } from './data';
import { X, ShoppingBag, Plus, Minus, Trash2, Send, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [reviewsList, setReviewsList] = useState<Review[]>(INITIAL_REVIEWS);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentTab]);

  // Shopping Cart Actions
  const addToCart = (productId: string) => {
    const existingIndex = cartList.findIndex(item => item.product.id === productId);
    if (existingIndex > -1) {
      const updated = [...cartList];
      updated[existingIndex].quantity += 1;
      setCartList(updated);
    } else {
      const product = INSTALLED_PRODUCTS.find(p => p.id === productId);
      if (product) {
        setCartList([...cartList, { product, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (productId: string) => {
    const existingIndex = cartList.findIndex(item => item.product.id === productId);
    if (existingIndex > -1) {
      const updated = [...cartList];
      if (updated[existingIndex].quantity > 1) {
        updated[existingIndex].quantity -= 1;
        setCartList(updated);
      } else {
        updated.splice(existingIndex, 1);
        setCartList(updated);
      }
    }
  };

  const deleteFromCart = (productId: string) => {
    setCartList(cartList.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartList([]);
  };

  const getItemCount = (productId: string) => {
    const item = cartList.find(i => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  const cartCount = cartList.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartList.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Review Actions
  const onSubmitReview = (name: string, rating: number, comment: string, area: string) => {
    const newReview: Review = {
      id: `r-gen-${Date.now()}`,
      name,
      rating,
      comment: `${comment} (Local residence: ${area})`,
      date: new Date().toISOString().split('T')[0],
      verified: true
    };
    setReviewsList([newReview, ...reviewsList]);
  };

  // Render correct nested tab
  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView setCurrentTab={setCurrentTab} addToCart={addToCart} />;
      case 'about':
        return <AboutView />;
      case 'shop':
        return (
          <ShopView 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            getItemCount={getItemCount} 
          />
        );
      case 'subscription':
        return <SubscriptionView setCurrentTab={setCurrentTab} />;
      case 'blog':
        return <BlogView />;
      case 'reviews':
        return <ReviewView reviewsList={reviewsList} onSubmitReview={onSubmitReview} />;
      case 'contact':
        return <ContactView cartList={cartList} cartSubtotal={cartSubtotal} />;
      default:
        return <HomeView setCurrentTab={setCurrentTab} addToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/55 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden" id="app-viewport">
      
      {/* Dynamic Navigation Header wrapper */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        cartCount={cartCount} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
      />

      {/* Main Container Stage with tab routing animations */}
      <main className="flex-grow pt-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Complete descriptive Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Interactive Cart sliding side drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" id="sliding-cart-drawer">
            {/* Background Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Sliding contents container */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 24, stiffness: 180 }}
                className="w-screen max-w-md bg-white shadow-2xl p-6 flex flex-col overflow-y-auto justify-between border-l border-emerald-100"
              >
                
                {/* Drawer Header area */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5.5 h-5.5 text-emerald-800" />
                    <div>
                      <h3 className="text-base font-display font-bold text-gray-950">Active Sourced Basket</h3>
                      <p className="text-[10px] text-gray-400 font-mono uppercase">{cartCount} items selected</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                    aria-label="Close basket drawer"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Drawer Body list */}
                <div className="flex-grow py-5 overflow-y-auto space-y-4">
                  {cartList.length === 0 ? (
                    <div className="text-center py-24 text-gray-450 space-y-3">
                      <span className="text-4xl text-gray-300 block">🍏</span>
                      <h4 className="text-sm font-semibold text-gray-600">Your shopping cart is currently clean.</h4>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">Explore the Fresh Shop tab to add farm fresh wheat, spices, organic vegetables or fruits.</p>
                      <button 
                        onClick={() => { setIsCartOpen(false); setCurrentTab('shop'); }}
                        className="mt-4 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        Start Sourcing Produce
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center bg-amber-50 border border-amber-100 px-3 py-2 rounded-xl text-[10px] text-amber-800 font-medium">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0" /> Selected items qualify for direct Nashik doorstep shipping!
                        </span>
                      </div>

                      {cartList.map((item) => (
                        <div key={item.product.id} className="flex gap-4 p-3 bg-gray-50/50 border border-gray-150 rounded-2xl relative group">
                          
                          {/* Item representation metrics */}
                          <div className="flex-grow space-y-1">
                            <h4 className="text-xs font-bold text-gray-900 leading-tight pr-6">{item.product.name}</h4>
                            <p className="text-[10px] text-emerald-850 font-mono">Price: ₹{item.product.price} / {item.product.unit}</p>
                            
                            <div className="flex justify-between items-center pt-2">
                              {/* Quantity selectors */}
                              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 rounded-lg p-1 border border-emerald-100">
                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="p-0.5 hover:bg-emerald-100 rounded-md cursor-pointer"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3 text-emerald-800" />
                                </button>
                                <span className="text-[11px] font-mono font-bold w-4 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => addToCart(item.product.id)}
                                  className="p-0.5 hover:bg-emerald-100 rounded-md cursor-pointer"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3 text-emerald-800" />
                                </button>
                              </div>

                              {/* Accumulated Pricing */}
                              <span className="text-xs font-mono font-bold text-gray-950">
                                ₹{item.product.price * item.quantity}
                              </span>
                            </div>
                          </div>

                          {/* Quick delete trash trigger */}
                          <button
                            onClick={() => deleteFromCart(item.product.id)}
                            className="absolute top-3 right-3 text-gray-450 text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Remove completely"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Drawer Footer billing and triggers */}
                {cartList.length > 0 && (
                  <div className="border-t border-gray-150 pt-5 space-y-4">
                    
                    {/* Billing details list */}
                    <div className="space-y-2 text-xs text-gray-550 text-gray-600 font-mono">
                      <div className="flex justify-between">
                        <span>Harvest Basket Subtotal:</span>
                        <span className="text-slate-905 text-gray-900 font-bold">₹{cartSubtotal}</span>
                      </div>
                      <div className="flex justify-between text-emerald-800">
                        <span>Regional Packing & Audit taxes:</span>
                        <span>FREE</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-100 pt-2.5 text-sm text-gray-900 font-black">
                        <span>Estimated Basket Order Subtotal:</span>
                        <span className="font-mono text-emerald-950 text-[#166534]">₹{cartSubtotal}</span>
                      </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          setCurrentTab('contact');
                        }}
                        className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-emerald-700/10 flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Checkout / Settle on WhatsApp</span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setIsCartOpen(false);
                            setCurrentTab('shop');
                          }}
                          className="py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-150 rounded-xl text-[11px] font-bold cursor-pointer"
                        >
                          Continue shopping
                        </button>
                        <button
                          onClick={clearCart}
                          className="py-2.5 bg-white hover:bg-red-50 text-red-650 border border-red-150 text-red-600 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                        >
                          Clear Basket
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
