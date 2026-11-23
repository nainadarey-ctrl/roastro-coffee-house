import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyVisit } from './components/WhyVisit';
import { SignatureDrinks } from './components/SignatureDrinks';
import { MenuSection } from './components/MenuSection';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuCardModal } from './components/MenuCardModal';
import { Lightbox } from './components/Lightbox';
import { GALLERY_ITEMS } from './data/galleryData';
import { GalleryItem } from './types';
import { Phone, Navigation, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitRoastro = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const googleMapsDirectionsUrl =
    'https://maps.google.com/?q=1st+Floor,+Shri+Ram+Market,+11,+Near+Wonder+Mall,+Alwar,+Rajasthan+301001';

  return (
    <div className="min-h-screen bg-cream text-espresso-800 flex flex-col selection:bg-amber/25 selection:text-espresso-950">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenReservation={() => setReservationOpen(true)}
        onOpenMenuModal={() => setMenuModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onVisitRoastro={handleVisitRoastro}
        />

        {/* 3. Welcome / About Roastro */}
        <About
          onLearnMore={() => {
            const el = document.getElementById('why-roastro');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreGallery={() => {
            const el = document.getElementById('gallery');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Why Visit Roastro (Four-Column Editorial Section) */}
        <WhyVisit />

        {/* 5. Signature Coffee & Drinks */}
        <SignatureDrinks
          onExploreFullMenu={handleExploreMenu}
        />

        {/* 6. Featured Menu Section */}
        <MenuSection
          onOpenMenuModal={() => setMenuModalOpen(true)}
        />

        {/* 7. Customer Experience / Testimonials */}
        <Testimonials />

        {/* 8. Café Interior Gallery */}
        <GallerySection
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* 9. Location & Contact */}
        <LocationContact />
      </main>

      {/* 10. Premium Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <MenuCardModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />

      <Lightbox
        item={activeLightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(item) => setActiveLightboxItem(item)}
      />

      {/* Mobile Sticky Quick Action Bar (Bottom Bar) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1E1511]/95 backdrop-blur-md border-t border-[#D9C6AE]/30 py-2.5 px-4 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+919509151498"
          className="flex-1 py-2 px-3 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 border border-white/20 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-amber" />
          <span>Call Now</span>
        </a>

        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 border border-white/20 active:scale-95 transition-transform"
        >
          <Navigation className="w-3.5 h-3.5 text-amber" />
          <span>Directions</span>
        </a>

        <button
          onClick={() => setReservationOpen(true)}
          className="flex-1 py-2 px-3 rounded-full bg-amber text-espresso-950 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Plan Visit</span>
        </button>
      </div>
    </div>
  );
};
