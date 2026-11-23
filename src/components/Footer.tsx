import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream relative border-t border-espresso-800">
      {/* Top Banner Tagline */}
      <div className="border-b border-espresso-800/80 py-8 text-center bg-espresso-900/60">
        <p className="font-serif italic text-lg sm:text-2xl text-amber-light tracking-wide">
          “Good Coffee. Great Company. Beautiful Moments.”
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div>
              <a href="#hero" className="inline-flex items-center gap-3.5 mb-4 group">
                <img
                  src="/images/roastro-official-logo.jpg"
                  alt="Roastro Coffee House Official Logo"
                  className="w-12 h-12 rounded-full object-cover border border-amber/40 shadow-md group-hover:scale-105 transition-transform shrink-0"
                />
                <div>
                  <span className="font-serif text-2xl font-bold tracking-[0.18em] text-ivory block leading-tight">
                    ROASTRO
                  </span>
                  <span className="text-[9px] uppercase font-sans tracking-[0.3em] font-semibold text-amber-light block">
                    COFFEE HOUSE • ALWAR
                  </span>
                </div>
              </a>

              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light mb-4 max-w-sm">
                A warm, aesthetic sanctuary in Alwar dedicated to handcrafted coffees, velvety cold brews,
                vibrant mocktails and genuine moments with friends.
              </p>

              <p className="text-xs text-amber-light/80 font-serif italic">
                “Everyday has a new beginning, a warm blessing, and a warm cup of coffee.”
              </p>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-light mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/75">
              <li>
                <a href="#hero" className="hover:text-amber transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#why-roastro" className="hover:text-amber transition-colors">
                  Why Roastro
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-amber transition-colors">
                  Signature Drinks
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber transition-colors">
                  Café Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber transition-colors">
                  Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-light mb-5">
              Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-cream/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  1st Floor, Shri Ram Market, 11, <br />
                  Near Wonder Mall, <br />
                  Alwar, Rajasthan 301001, India.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-cream/50 block mb-1">
                  Direct Inquiries &amp; Orders
                </span>
                <a
                  href="tel:+919509151498"
                  className="font-serif text-base font-bold text-ivory hover:text-amber transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber" />
                  <span>+91 95091 51498</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Welcome (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-light mb-5">
              Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-cream/75 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber shrink-0" />
                <span className="font-medium text-white">Monday – Sunday</span>
              </div>
              <p className="text-cream/60 pl-5">10:00 AM – 11:00 PM</p>
            </div>

            <div className="p-4 rounded-xl bg-espresso-900 border border-espresso-800 text-xs text-cream/70">
              <p className="font-serif italic text-amber-light mb-1">“It's Your Happy Place”</p>
              <p className="text-[11px]">Walk-ins are always welcomed. Board games available at all tables.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="border-t border-espresso-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Roastro Coffee House. All rights reserved.</p>
          <p>Shri Ram Market, Near Wonder Mall · Alwar, Rajasthan</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-amber-light hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
