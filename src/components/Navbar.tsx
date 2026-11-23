import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin, Coffee } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMenuModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenMenuModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Story', href: '#about' },
    { name: 'Why Roastro', href: '#why-roastro' },
    { name: 'Signature', href: '#signature' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F2E9]/95 backdrop-blur-md shadow-sm border-b border-[#D9C6AE]/40 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4 sm:py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Official Brand Logo & Wordmark (with generous right margin so it never cramps) */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 mr-4 lg:mr-6 xl:mr-10"
          aria-label="Roastro Coffee House Home"
        >
          {/* Official Attached Logo from 3rd Image */}
          <div className="relative">
            <img
              src="/images/roastro-official-logo.jpg"
              alt="Roastro Coffee House Official Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-amber/40 shadow-sm group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10" />
          </div>

          <div className="flex flex-col">
            <span
              className={`font-serif text-lg sm:text-xl font-bold tracking-[0.18em] leading-tight transition-colors duration-200 ${
                scrolled ? 'text-espresso-800' : 'text-white'
              }`}
            >
              ROASTRO
            </span>
            <span
              className={`text-[8.5px] uppercase font-sans tracking-[0.25em] font-semibold transition-colors duration-200 ${
                scrolled ? 'text-coffee' : 'text-cream/90'
              }`}
            >
              Coffee House
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation with Proportional Spacing and Breathing Room */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-3 xl:gap-5 2xl:gap-7 min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] xl:text-xs uppercase tracking-[0.15em] xl:tracking-[0.18em] font-medium link-editorial whitespace-nowrap transition-colors duration-200 px-1 py-1 ${
                scrolled
                  ? 'text-espresso-800 hover:text-coffee'
                  : 'text-cream/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side: Action CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 ml-2 lg:ml-4 xl:ml-6">
          <button
            onClick={onOpenMenuModal}
            className={`hidden xl:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
              scrolled
                ? 'border-espresso-800/20 text-espresso-800 hover:bg-espresso-800 hover:text-cream'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-amber" />
            <span>Menu Cards</span>
          </button>

          <button
            onClick={onOpenReservation}
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm whitespace-nowrap ${
              scrolled
                ? 'bg-espresso-800 text-cream hover:bg-espresso-950'
                : 'bg-amber text-espresso-950 hover:bg-amber-light font-bold shadow-lg'
            }`}
          >
            <span>Plan a Visit</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenReservation}
            className="sm:hidden text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-amber text-espresso-950"
          >
            Visit
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? 'text-espresso-800' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F2E9] border-b border-[#D9C6AE]/60 px-6 pt-4 pb-6 mt-2 shadow-xl text-espresso-800 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-semibold py-1.5 border-b border-[#D9C6AE]/30 text-espresso-800 hover:text-coffee"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuModal();
                }}
                className="w-full py-2.5 px-4 rounded-full border border-espresso-800/30 text-espresso-800 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <Coffee className="w-4 h-4 text-coffee" />
                <span>View Authentic Menu Cards</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-espresso-800 text-cream text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Reserve / Plan a Visit</span>
              </button>

              <div className="pt-3 border-t border-[#D9C6AE]/40 flex flex-col gap-2 text-xs text-coffee">
                <a
                  href="tel:+919509151498"
                  className="flex items-center gap-2 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-amber" />
                  <span>+91 95091 51498</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                  <span>1st Floor, Shri Ram Market, Alwar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
