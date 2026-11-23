import React, { useState } from 'react';
import { SIGNATURE_PICKS } from '../data/menuData';
import { MenuItem } from '../types';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

interface SignatureDrinksProps {
  onSelectDrink?: (drink: MenuItem) => void;
  onExploreFullMenu: () => void;
}

export const SignatureDrinks: React.FC<SignatureDrinksProps> = ({
  onSelectDrink,
  onExploreFullMenu,
}) => {
  const [activeTab, setActiveTab] = useState<string>(SIGNATURE_PICKS[0].id);
  const activeDrink = SIGNATURE_PICKS.find((d) => d.id === activeTab) || SIGNATURE_PICKS[0];

  return (
    <section id="signature" className="pt-16 pb-10 sm:pt-20 sm:pb-12 bg-cream text-espresso-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span>HANDCRAFTED SPECIALITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight">
              Signature Coffee <br />
              <span className="italic text-coffee">&amp; Creative Brews</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-espresso-800/80 font-serif italic border-l-2 border-amber pl-4">
            “Expertly crafted blends that bring you the perfect balance of flavor, refreshment, and pure enjoyment with every sip.”
          </p>
        </div>

        {/* Featured Showcase: 2-Column Editorial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Big Featured Drink Hero */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury bg-espresso-950 text-white min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 group">
              {/* Background Drink Image */}
              <img
                src={activeDrink.image}
                alt={activeDrink.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/65 to-transparent" />

              {/* Badges */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-amber text-espresso-950 text-[11px] font-bold tracking-widest uppercase shadow-md">
                  {activeDrink.tag || 'Signature'}
                </span>
                {activeDrink.isChefSpecial && (
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                    Star Special
                  </span>
                )}
              </div>

              {/* Price Tag */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 px-4 py-1.5 rounded-full bg-espresso-900/80 backdrop-blur-md border border-white/20 text-ivory font-serif text-lg font-bold">
                ₹{activeDrink.price}
              </div>

              {/* Content Box */}
              <div className="relative z-10 max-w-xl">
                <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-normal mb-2 sm:mb-3">
                  {activeDrink.name}
                </h3>
                <p className="text-cream/85 text-xs sm:text-sm font-light leading-relaxed mb-5">
                  {activeDrink.description}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="#menu"
                    onClick={onExploreFullMenu}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-espresso-900 font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <span>Jump to Full Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: List of All 9 Signature Drinks with Quick-Switch */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-coffee mb-1 block">
              Tap to preview tasting notes:
            </span>

            <div className="flex flex-col gap-2 max-h-[440px] overflow-y-auto pr-1">
              {SIGNATURE_PICKS.map((item) => {
                const isSelected = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-espresso-800 text-cream border-espresso-800 shadow-md'
                        : 'bg-white/80 hover:bg-white border-beige/40 text-espresso-900 hover:border-beige-dark'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isSelected ? 'bg-amber' : 'bg-beige-dark'
                        }`}
                      />
                      <div>
                        <h4
                          className={`font-serif text-sm sm:text-base leading-tight ${
                            isSelected ? 'text-ivory font-medium' : 'text-espresso-900 font-normal'
                          }`}
                        >
                          {item.name}
                        </h4>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isSelected ? 'text-amber-light' : 'text-coffee'
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`font-serif text-sm sm:text-base font-bold ${
                          isSelected ? 'text-amber' : 'text-espresso-900'
                        }`}
                      >
                        ₹{item.price}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
