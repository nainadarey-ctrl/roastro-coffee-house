import React from 'react';
import { ArrowDown, MapPin, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitRoastro: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitRoastro }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/roastro-interior-main.jpg"
          alt="Roastro Coffee House warm café interior with checkerboard floor and wicker lamps"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow transition-transform duration-1000"
          loading="eager"
        />
        {/* Editorial Dark Overlay: gradient from top and bottom to ensure text and navigation pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-black/60" />
        <div className="absolute inset-0 bg-espresso-900/30 mix-blend-multiply" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Official Roastro Logo Emblem & Category Label */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber/50 shadow-2xl mb-4 p-0.5 bg-espresso-950/80 backdrop-blur-md">
            <img
              src="/images/roastro-official-logo.jpg"
              alt="Roastro Coffee House Official Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-light">
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase">
              COFFEE • CONNECTION • COMFORT
            </span>
          </div>
        </div>

        {/* Main Editorial Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-ivory tracking-tight leading-[1.08] mb-6">
          A Little Coffee. <br />
          <span className="font-serif italic font-normal text-amber-light">
            A Lot of Moments.
          </span>
        </h1>

        {/* Supporting Editorial Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream/90 font-light leading-relaxed mb-10 sm:mb-12">
          Discover a welcoming corner in Alwar where handcrafted coffee, refreshing drinks
          and good company come together under soft floral lights.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber text-espresso-950 hover:bg-amber-light font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-amber/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            EXPLORE OUR MENU
          </button>

          <button
            onClick={onVisitRoastro}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300"
          >
            VISIT ROASTRO
          </button>
        </div>
      </div>

      {/* Bottom Editorial Bar with Key Facts */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="border-t border-white/15 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-cream/80 text-xs">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-amber shrink-0" />
            <span>1st Floor, Shri Ram Market, 11, Near Wonder Mall, Alwar</span>
          </div>

          <div className="flex items-center gap-2.5 md:justify-center">
            <Clock className="w-4 h-4 text-amber shrink-0" />
            <span>Open Everyday: 10:00 AM – 11:00 PM</span>
          </div>

          <div className="flex items-center gap-2.5 md:justify-end">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
            <span className="font-medium text-white">Welcoming Walk-ins &amp; Casual Hangouts</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onExploreMenu}
            className="text-cream/50 hover:text-white transition-colors duration-200 animate-bounce"
            aria-label="Scroll to menu"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
