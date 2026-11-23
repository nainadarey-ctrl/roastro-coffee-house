import React from 'react';
import { Coffee, Sparkles, Sun, Users } from 'lucide-react';

export const WhyVisit: React.FC = () => {
  const reasons = [
    {
      number: '01',
      title: 'Coffee Made to Enjoy',
      description: 'A selection of classic coffees and creative signature blends crafted from carefully roasted beans.',
      icon: Coffee,
      highlight: 'Espresso & Pour-Over Mastery',
    },
    {
      number: '02',
      title: 'Refreshing Creations',
      description: 'Enjoy refreshing mocktails and distinctive cold coffee combinations like our Cranberry Cold Brew and Salted Caramel Cold Foam.',
      icon: Sparkles,
      highlight: 'Fizzy & Fruity Brews',
    },
    {
      number: '03',
      title: 'A Warm Atmosphere',
      description: 'A welcoming café space designed for relaxed conversations, warm lighting, and unhurried afternoons.',
      icon: Sun,
      highlight: 'Floral Canopy & Aesthetic Vibe',
    },
    {
      number: '04',
      title: 'Moments with Friends',
      description: 'A comfortable place to meet, play tabletop games like Uno and Tic-Tac-Toe, and spend quality time together.',
      icon: Users,
      highlight: 'Board Games & Live-Edge Tables',
    },
  ];

  return (
    <section id="why-roastro" className="py-16 sm:py-20 bg-[#FFFDF8] text-espresso-800 border-y border-[#D9C6AE]/30 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee block mb-3">
            WHY VISIT ROASTRO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight">
            Crafted for Coffee Lovers, <br />
            <span className="italic text-coffee">Built for Lingering.</span>
          </h2>
        </div>

        {/* 4-Column Numbered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-cream/40 border border-beige/40 hover:border-amber/50 hover:bg-cream/80 hover:shadow-luxury transition-all duration-300"
              >
                <div>
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-beige-dark group-hover:text-amber transition-colors duration-300">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-cream border border-beige/50 flex items-center justify-center text-coffee group-hover:bg-amber group-hover:text-espresso-950 transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 font-semibold mb-3 group-hover:text-coffee transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-espresso-800/80 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Subtag */}
                <div className="pt-4 border-t border-beige/30">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-coffee/80 block">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
