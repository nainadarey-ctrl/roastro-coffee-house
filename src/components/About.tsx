import React from 'react';
import { ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
  onExploreGallery?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore, onExploreGallery }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-cream text-espresso-800 relative overflow-hidden scroll-mt-20">
      {/* Subtle background ambient texture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Café Interior Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background border frame */}
              <div className="absolute -inset-3 rounded-2xl border border-beige/60 -rotate-1 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-xl shadow-luxury bg-espresso-900 group">
                <img
                  src="/images/roastro-botanical-lounge.jpg"
                  alt="Roastro Coffee House botanical lounge with hanging wisteria blossoms and espresso bar"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Authentic Quote Card */}
                <div className="absolute bottom-6 inset-x-6 bg-[#F7F2E9]/95 backdrop-blur-md p-5 rounded-lg border border-[#D9C6AE]/60 shadow-lg">
                  <div className="flex items-center gap-2 mb-1.5 text-coffee">
                    <Sparkles className="w-3.5 h-3.5 text-amber" />
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em]">Wall Motto at Roastro</span>
                  </div>
                  <p className="font-serif italic text-espresso-800 text-sm sm:text-base leading-snug">
                    “Everyday has a new beginning, a warm blessing, and a warm cup of coffee.”
                  </p>
                </div>
              </div>

              {/* Accent Badge */}
              <div className="absolute -top-4 -right-4 bg-amber text-espresso-950 px-4 py-2 rounded-full font-serif font-bold text-xs shadow-md tracking-wider">
                Est. in Alwar
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee mb-3">
              WELCOME TO ROASTRO
            </span>

            {/* Main Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-espresso-900 font-normal leading-[1.15] mb-6">
              More Than Coffee, <br />
              <span className="italic text-coffee">It's Your Happy Place.</span>
            </h2>

            {/* Editorial Paragraph */}
            <p className="text-base sm:text-lg text-espresso-800/85 font-normal leading-relaxed mb-6">
              Roastro Coffee House brings together comforting café vibes, freshly prepared coffee
              and refreshing drinks in a warm and inviting atmosphere. Whether you're catching up
              with friends, enjoying a quiet coffee break or spending an easygoing afternoon,
              Roastro is a place to slow down and enjoy the moment.
            </p>

            <p className="text-sm sm:text-base text-espresso-800/75 leading-relaxed mb-8">
              From our lush canopy of hanging blossoms to our curated live-edge tables stocked with
              board games, every corner is designed for ease. We take pride in pulling honest espresso,
              steeping 18-hour cold brews, and whipping velvety cold foams that turn ordinary afternoons
              into cherished memories.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-beige/40 mb-8">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900 block">
                  18h+
                </span>
                <span className="text-xs text-coffee uppercase tracking-wider font-medium">
                  Slow-Steeped Cold Brew
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900 block">
                  100%
                </span>
                <span className="text-xs text-coffee uppercase tracking-wider font-medium">
                  Handcrafted Drinks
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#why-roastro"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso-800 text-cream hover:bg-espresso-950 font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-espresso-800/25 text-espresso-800 hover:bg-espresso-800/5 font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300"
              >
                <BookOpen className="w-3.5 h-3.5 text-coffee" />
                <span>EXPLORE THE CAFÉ</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
