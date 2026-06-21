import React, { useState } from 'react';
import { Product } from '../types';
import { INSTALLED_PRODUCTS, STORE_INFO } from '../data';
import { 
  Search, 
  Filter, 
  MapPin, 
  Plus, 
  Minus, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Info,
  ChevronRight,
  Heart,
  Eye,
  X
} from 'lucide-react';

interface ShopViewProps {
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getItemCount: (productId: string) => number;
}

export default function ShopView({ addToCart, removeFromCart, getItemCount }: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Basket customizable options
  const [basketGuava, setBasketGuava] = useState(30);
  const [basketGrape, setBasketGrape] = useState(30);
  const [basketPomegranate, setBasketPomegranate] = useState(40);
  const [basketNote, setBasketNote] = useState('Please pack guavas slightly semi-ripe.');

  // Detail Modal state
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);

  const categories = [
    'All',
    'Fruits & Vegetables',
    'Grains & Flours',
    'Oils & Ghee',
    'Pulses & Lentils',
    'Sweeteners'
  ];

  // Helper to map product categories onto filter buttons
  const mapCategory = (cat: string): string => {
    if (cat === 'Fruits' || cat === 'Vegetables' || cat === 'Fresh Dairy & Eggs') {
      return 'Fruits & Vegetables';
    }
    return cat;
  };

  const filteredProducts = INSTALLED_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.localNashikSource.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'All') return matchesSearch;
    return mapCategory(product.category) === selectedCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16 animate-fade-in" id="fresh-shop-view">
      
      {/* 1. Header & Filter controls */}
      <section className="bg-emerald-50 rounded-3xl p-6 sm:p-10 border border-emerald-100 flex flex-col md:flex-row gap-6 justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono font-bold text-emerald-800 uppercase bg-emerald-100 inline-block px-2.5 py-1 rounded-md">
            Order Clean & Green
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-emerald-950">
            Fresh Nashik Organic Pantry
          </h2>
          <p className="text-sm text-gray-500">
            Pesticide-free food grains, cold wood-press oils, and fresh picked garden greens.
          </p>
        </div>

        {/* Search Input bar */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-700">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search wheat, groundnut oil, jaggery, spinach..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-emerald-250/70 py-3.5 pl-10 pr-4 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 outline-hidden transition-all shadow-xs"
          />
        </div>
      </section>

      {/* Categories Buttons scroll bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2.5 overflow-x-auto pb-3 scrollbar-none" id="categories-tabs-scroll">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium shrink-0 cursor-pointer transition-colors ${
                  isActive 
                    ? 'bg-emerald-700 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-emerald-100 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Interactive CUSTOM Fruit Basket builder widget! (Triggers when inspecting product p5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="fruit-basket-customizer-app">
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xs">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-150 text-amber-900 border border-amber-200 text-[10px] font-mono tracking-wider uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-550 fill-amber-550" />
              <span>Bespoke Fresh Customization</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
              Personalize Your Mixed Fruit Basket
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our signature ₹450 Seasonal Fruit Basket (Approx 4kg) is composed of freshly harvested Nashik orchard crops. Choose your ideal weight proportions of grapes, guava, and pomegranates. Neha&apos;s team will balance your selection dynamically!
            </p>

            {/* Guava proportion */}
            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-amber-100">
              <div className="flex justify-between text-xs text-gray-700 font-medium">
                <span>Guavas (Sinnar organic orchards)</span>
                <span className="font-mono">{basketGuava}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="60" 
                step="5"
                value={basketGuava}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setBasketGuava(val);
                  // subtract remaining from others
                  const rem = 100 - val;
                  setBasketGrape(Math.round(rem * 0.4));
                  setBasketPomegranate(Math.round(rem * 0.6));
                }}
                className="w-full accent-emerald-600 h-1.5 bg-amber-100 rounded cursor-pointer"
              />
            </div>

            {/* Grapes proportion */}
            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-amber-100">
              <div className="flex justify-between text-xs text-gray-700 font-medium">
                <span>Table Grapes (Niphad cooperative vineyards)</span>
                <span className="font-mono">{basketGrape}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="60" 
                step="5"
                value={basketGrape}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setBasketGrape(val);
                  const rem = 100 - val;
                  setBasketGuava(Math.round(rem * 0.45));
                  setBasketPomegranate(Math.round(rem * 0.55));
                }}
                className="w-full accent-emerald-650 h-1.5 bg-amber-100 rounded cursor-pointer"
              />
            </div>

            {/* Pomegranate proportion */}
            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-amber-100">
              <div className="flex justify-between text-xs text-gray-700 font-medium">
                <span>Nagpur/Nashik Seeded Pomegranates</span>
                <span className="font-mono">{basketPomegranate}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="60" 
                step="5"
                value={basketPomegranate}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setBasketPomegranate(val);
                  const rem = 100 - val;
                  setBasketGuava(Math.round(rem * 0.5));
                  setBasketGrape(Math.round(rem * 0.5));
                }}
                className="w-full accent-emerald-700 h-1.5 bg-amber-100 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Visual representations on the Right */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-amber-250/60 flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block border-b border-amber-100 pb-2">
                Your Custom Harvest Blend (Assortment Summary)
              </span>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-emerald-50/70 p-3.5 rounded-2xl text-center border border-emerald-100/50 space-y-1">
                  <span className="text-xl">🍏</span>
                  <p className="text-[11px] font-bold text-gray-800">Guava</p>
                  <p className="text-xs font-mono text-emerald-800">~{((basketGuava / 100) * 4).toFixed(1)} kg</p>
                </div>
                
                <div className="bg-amber-50/40 p-3.5 rounded-2xl text-center border border-amber-100 space-y-1">
                  <span className="text-xl">🍇</span>
                  <p className="text-[11px] font-bold text-gray-800">Grapes</p>
                  <p className="text-xs font-mono text-amber-700">~{((basketGrape / 100) * 4).toFixed(1)} kg</p>
                </div>

                <div className="bg-rose-50/50 p-3.5 rounded-2xl text-center border border-rose-100 space-y-1">
                  <span className="text-xl font-inner">🔴</span>
                  <p className="text-[11px] font-bold text-gray-800">Pomegranate</p>
                  <p className="text-xs font-mono text-rose-800">~{((basketPomegranate / 100) * 4).toFixed(1)} kg</p>
                </div>
              </div>

              {/* Special packers note */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-600 block">Packers instruction notes (For सागर & पूजा):</label>
                <input 
                  type="text" 
                  value={basketNote}
                  onChange={(e) => setBasketNote(e.target.value)}
                  placeholder="Need semi-ripe fruits / avoid grapes"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl text-xs focus:ring-1 focus:ring-emerald-700 outline-hidden transition-colors"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-xs text-gray-400 block font-mono">Mixed Fruit Basket Custom price:</span>
                <span className="text-xl font-mono font-bold text-emerald-950">₹450 / 4kg basket</span>
              </div>
              
              <button
                onClick={() => {
                  addToCart('p5');
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-xs font-semibold cursor-pointer transition-transform active:scale-95 shadow-md shadow-emerald-700/10 flex items-center justify-center gap-2"
              >
                <span>Add Customized Basket to Cart</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="grids-display">
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-105" id="no-search-results">
            <Info className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-base text-gray-600 font-semibold">No organic items match your search query.</p>
            <p className="text-xs text-gray-400 mt-1">Try searching for other general labels like &apos;Wheat&apos; or &apos;Oil&apos; or tap All above.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs cursor-pointer font-medium"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const qty = getItemCount(product.id);
              return (
                <div 
                  key={product.id} 
                  id={`shop-card-${product.id}`}
                  className="bg-white rounded-3xl border border-slate-150/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative"
                >
                  
                  {/* Visual Category Label */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-100/60 uppercase">
                        {product.category}
                      </span>
                      
                      {/* Stock Status */}
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                        product.stockStatus === 'In Stock' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : product.stockStatus === 'Limited Stock'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stockStatus}
                      </span>
                    </div>

                    {/* Meta info info */}
                    <div className="space-y-1.5 focus-within:outline-hidden">
                      <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{product.localNashikSource}</span>
                      </div>

                      <p className="text-gray-550 text-xs leading-relaxed text-gray-500 pt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-6 border-t border-gray-100 mt-6 space-y-4">
                    
                    {/* Nutritional micro indicators */}
                    {product.nutritionInfo && (
                      <div className="flex items-start gap-1.5 bg-gray-50 p-2 rounded-xl text-[10px] text-gray-500 leading-relaxed">
                        <span className="font-bold shrink-0 text-emerald-800 font-mono uppercase">Nutrient:</span>
                        <span className="line-clamp-1">{product.nutritionInfo}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      {/* Pricing block */}
                      <div>
                        <span className="text-[10px] text-gray-400 block font-mono">Price / Unit ({product.unit})</span>
                        <span className="text-xl font-mono font-bold text-emerald-950">₹{product.price}</span>
                      </div>

                      {/* Add/Quantity adjust buttons */}
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-emerald-700 text-white rounded-xl py-1.5 px-2.5 shadow-sm">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-1 hover:bg-emerald-800 rounded-lg cursor-pointer transition-colors active:scale-90"
                            aria-label="Decrease Quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-sm font-bold w-4 text-center">{qty}</span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="p-1 hover:bg-emerald-800 rounded-lg cursor-pointer transition-colors active:scale-90"
                            aria-label="Increase Quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveDetailProduct(product)}
                            className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl cursor-pointer transition-colors"
                            title="View product sheets and trace maps"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => addToCart(product.id)}
                            disabled={product.stockStatus === 'Out of Stock'}
                            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors active:scale-95 shadow-sm flex items-center gap-1.5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Basket</span>
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Trace map & audit details bottom flags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quick-order-info-footer">
        <div className="bg-emerald-900 text-emerald-100 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-white text-lg font-display font-bold">Have special bulk or wholesale requirements?</h4>
            <p className="text-xs text-emerald-200">Need specific custom quantities of wheat flour (Gehun) or oils for events? Speak to Sagar.</p>
          </div>
          <button 
            onClick={() => {
              const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Green%20Leaf%20Organic,%20I%20have%20bulk%20enquiry%20for%20cereals/wheat/oil.`;
              window.open(url, '_blank');
            }}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-2xl cursor-pointer text-xs font-bold transition-all shadow-md shrink-0"
          >
            WhatsApp Bulk Enquiry
          </button>
        </div>
      </section>

      {/* Detail Overlay Sheet (Modal) */}
      {activeDetailProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in" id="product-detail-modal">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-100 animate-in zoom-in-95 duration-150">
            
            {/* Modal header */}
            <div className="bg-emerald-900 text-white p-6 relative">
              <button 
                onClick={() => setActiveDetailProduct(null)} 
                className="absolute top-4 right-4 text-emerald-300 hover:text-white p-1 hover:bg-emerald-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
              
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 bg-emerald-850 px-2.5 py-1 rounded-md border border-emerald-850">
                {activeDetailProduct.category}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-3 pr-8">
                {activeDetailProduct.name}
              </h3>
              
              <p className="text-xs font-mono text-emerald-300 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>PGS-India trace certification code: #MH-K52</span>
              </p>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-5 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider mb-1">Local Origin Trace Details</h4>
                <p className="text-xs bg-emerald-50 text-emerald-905 border border-emerald-100 p-3 rounded-xl font-medium">
                  {activeDetailProduct.localNashikSource}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider mb-1">Botanical/Purity Description</h4>
                <p className="text-xs sm:text-sm text-gray-500 whitespace-pre-line leading-relaxed">
                  {activeDetailProduct.description}
                </p>
              </div>

              {activeDetailProduct.nutritionInfo && (
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider mb-1">Certified Nutritional Assets</h4>
                  <div className="bg-amber-50/50 border border-amber-200/50 p-3 rounded-xl flex items-center gap-3">
                    <span className="text-lg">🌿</span>
                    <p className="text-xs text-amber-900 font-medium">
                      {activeDetailProduct.nutritionInfo}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-gray-150 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Purity assured cost ({activeDetailProduct.unit})</span>
                  <span className="text-xl font-mono font-bold text-emerald-950">₹{activeDetailProduct.price}</span>
                </div>
                
                <button
                  onClick={() => {
                    addToCart(activeDetailProduct.id);
                    setActiveDetailProduct(null);
                  }}
                  className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Add to Active Basket
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
