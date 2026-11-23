import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF8] text-espresso-800 border-t border-[#D9C6AE]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee block mb-3">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight mb-4">
            Loved for the <span className="italic text-coffee">Little Moments.</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-light">
            From relaxed board games and morning cold brews to lively friend reunions,
            here is what makes visits to Roastro special.
          </p>
        </div>

        {/* 3-Column Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl bg-[#F7F2E9]/60 border border-beige/50 hover:border-amber/60 hover:bg-[#F7F2E9] hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 mb-6 text-amber">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>

                {/* Moment Tag */}
                <div className="text-[11px] uppercase tracking-wider font-semibold text-coffee/80 mb-3">
                  {t.moment}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-espresso-900 leading-relaxed mb-6 font-normal">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-beige/40 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-900">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-coffee block mt-0.5 font-light">
                    {t.role}
                  </span>
                </div>
                <Quote className="w-5 h-5 text-beige-dark/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Placeholder Content */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-coffee/60 tracking-wide uppercase">
            * Editorial representative feedback. Verified customer reviews will update regularly.
          </p>
        </div>

      </div>
    </section>
  );
};
