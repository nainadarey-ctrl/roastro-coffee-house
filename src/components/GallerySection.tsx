import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-cream text-espresso-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span>INSIDE ROASTRO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight">
              A Glimpse into <br />
              <span className="italic text-coffee">Our Warm Space</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'interior', label: 'Café Interior' },
              { id: 'moments', label: 'Hangout & Games' },
              { id: 'drinks', label: 'Drinks & Brews' },
              { id: 'atmosphere', label: 'Menus & Ambience' },
            ].map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-espresso-800 text-cream shadow-sm'
                      : 'bg-white/80 hover:bg-white text-espresso-800 border border-beige/40'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => {
            // Apply asymmetric spans for an editorial feel
            const isSpan2 = item.aspect === 'wide' || index === 1;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-luxury bg-espresso-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-hover ${
                  isSpan2 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image Container with Dynamic Height */}
                <div
                  className={`relative w-full overflow-hidden ${
                    item.aspect === 'tall'
                      ? 'h-[460px] sm:h-[500px]'
                      : item.aspect === 'wide'
                      ? 'h-[360px] sm:h-[420px]'
                      : 'h-[340px] sm:h-[380px]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-espresso-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-cream/90 text-espresso-900 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-espresso-900/80 backdrop-blur-md text-amber-light text-[10px] font-bold tracking-widest uppercase border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Caption at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-ivory mb-1 group-hover:text-amber-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/75 line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-coffee/80 font-serif italic">
            * Click any image to view in high resolution with full editorial notes.
          </p>
        </div>

      </div>
    </section>
  );
};
