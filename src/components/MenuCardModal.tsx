import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';

interface MenuCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuCardModal: React.FC<MenuCardModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-espresso-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-espresso-900 rounded-2xl shadow-2xl border border-beige/30 flex flex-col overflow-hidden text-cream">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-espresso-950/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber" />
            <h3 className="font-serif text-lg font-semibold text-ivory">
              Authentic Roastro In-House Menu Cards
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-cream transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Page Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 py-3 px-4 bg-espresso-900 border-b border-white/10">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              currentPage === 1
                ? 'bg-amber text-espresso-950 shadow-sm'
                : 'bg-white/10 text-cream/70 hover:bg-white/20'
            }`}
          >
            Page 1: Coffee (Black &amp; White)
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              currentPage === 2
                ? 'bg-amber text-espresso-950 shadow-sm'
                : 'bg-white/10 text-cream/70 hover:bg-white/20'
            }`}
          >
            Page 2: Signature Drinks &amp; Mocktails
          </button>
        </div>

        {/* Menu Image Preview Area */}
        <div className="relative flex-grow overflow-auto p-4 sm:p-6 flex items-center justify-center bg-espresso-950">
          <img
            src={currentPage === 1 ? '/images/menu-page-1.jpg' : '/images/menu-page-2.jpg'}
            alt={`Roastro Official Menu Card Page ${currentPage}`}
            className="max-h-[68vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
          />

          {/* Previous / Next Arrow buttons */}
          <button
            onClick={() => setCurrentPage(currentPage === 1 ? 2 : 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all border border-white/20"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCurrentPage(currentPage === 1 ? 2 : 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all border border-white/20"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 border-t border-white/10 bg-espresso-950/80 flex items-center justify-between text-xs text-cream/60">
          <span>* Original printed menus provided by Roastro Coffee House, Alwar.</span>
          <span className="font-serif italic text-amber-light">Page {currentPage} of 2</span>
        </div>

      </div>
    </div>
  );
};
