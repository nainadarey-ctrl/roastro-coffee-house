import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Search, Sparkles, Image as ImageIcon } from 'lucide-react';

interface MenuSectionProps {
  onOpenMenuModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenMenuModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#F7F2E9] text-espresso-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle separator divider with coffee bean accent */}
        <div className="flex items-center justify-center gap-3 mb-10 text-beige-dark">
          <div className="h-[1px] w-24 bg-beige-dark/50" />
          <span className="font-serif italic text-xs text-coffee tracking-wider">The Complete Collection</span>
          <div className="h-[1px] w-24 bg-beige-dark/50" />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee block mb-2 sm:mb-3">
            EXPLORE THE MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight mb-3">
            Handcrafted with Care, <br />
            <span className="italic text-coffee">Poured to Perfection.</span>
          </h2>
          <p className="text-xs sm:text-sm text-espresso-800/80 font-light max-w-xl mx-auto mb-6">
            Explore our complete in-house menu of single-origin black coffees, comforting white lattes,
            inventive cold brews, and thirst-quenching artisanal mocktails.
          </p>

          {/* Action to view physical printed menu */}
          <button
            onClick={onOpenMenuModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-beige-dark/60 text-espresso-800 hover:bg-beige-light/40 text-xs uppercase tracking-wider font-semibold shadow-sm transition-all"
          >
            <ImageIcon className="w-3.5 h-3.5 text-amber-dark" />
            <span>View In-House Printed Menu Cards</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-espresso-800 text-cream shadow-md'
                      : 'bg-white/70 text-espresso-800/80 hover:bg-white border border-beige/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-coffee/60" />
            <input
              type="text"
              placeholder="Search coffee, drinks, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white border border-beige/50 text-espresso-900 placeholder:text-coffee/50 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/50 rounded-2xl border border-dashed border-beige">
            <p className="text-base font-serif italic text-coffee">
              No menu items found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs uppercase tracking-wider text-espresso-800 font-semibold underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#FFFDF8] rounded-xl p-5 border border-beige/40 hover:border-amber/60 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with tags */}
                  {item.image && (
                    <div className="relative h-40 sm:h-44 rounded-lg overflow-hidden mb-4 bg-cream-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                      
                      {/* Price Badge on top of image */}
                      <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-espresso-900/90 text-ivory font-serif font-bold text-sm backdrop-blur-sm border border-white/20">
                        ₹{item.price}
                      </div>

                      {/* Tag Badge */}
                      {item.tag && (
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-cream/90 text-espresso-950 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                          {item.tag}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Header & Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl text-espresso-900 font-semibold leading-snug group-hover:text-coffee transition-colors">
                      {item.name}
                    </h3>
                    {!item.image && (
                      <span className="font-serif font-bold text-lg text-espresso-900 shrink-0">
                        ₹{item.price}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-espresso-800/75 leading-relaxed font-light mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Footer specs */}
                <div className="pt-3 border-t border-beige/30 flex items-center justify-between text-[11px] text-coffee/80">
                  <span className="uppercase tracking-wider font-medium">
                    {item.category === 'black'
                      ? 'Black Coffee'
                      : item.category === 'white'
                      ? 'White Coffee'
                      : item.category === 'signature'
                      ? 'Signature Brew'
                      : 'Mocktail'}
                  </span>
                  
                  {item.isPopular && (
                    <span className="inline-flex items-center gap-1 text-amber-dark font-medium">
                      <Sparkles className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Authentic Notice Bar */}
        <div className="mt-12 p-5 rounded-xl bg-white/70 border border-beige/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-coffee font-medium leading-relaxed">
            * All prices in INR (₹). Our beverages are freshly handcrafted using premium espresso beans,
            dairy or plant-based alternatives, and natural fruit botanicals.
          </p>
        </div>

      </div>
    </section>
  );
};
