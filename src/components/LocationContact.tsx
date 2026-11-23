import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const googleMapsUrl =
    'https://maps.google.com/?q=1st+Floor,+Shri+Ram+Market,+11,+Near+Wonder+Mall,+Alwar,+Rajasthan+301001';

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#FFFDF8] text-espresso-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-coffee block mb-3">
            VISIT &amp; CONNECT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso-900 font-normal leading-tight mb-4">
            Come Find Your <br />
            <span className="italic text-coffee">Coffee Corner.</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-light max-w-xl mx-auto">
            Conveniently located near Wonder Mall in Alwar. Walk in for an espresso, meet friends
            over board games, or give us a ring to save your favorite corner table.
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#F7F2E9] p-8 rounded-2xl border border-beige/60 shadow-sm">
              <span className="text-[11px] uppercase font-bold tracking-widest text-amber-dark block mb-2">
                ROASTRO COFFEE HOUSE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso-900 mb-6">
                Café &amp; Eatery
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-white border border-beige/60 flex items-center justify-center text-coffee shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso-900 mb-1">
                    Address
                  </h4>
                  <p className="text-sm text-espresso-800/85 leading-relaxed font-light">
                    1st Floor, Shri Ram Market, 11, <br />
                    Near Wonder Mall, <br />
                    Alwar, Rajasthan 301001, India.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-white border border-beige/60 flex items-center justify-center text-coffee shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-amber-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso-900 mb-1">
                    Phone &amp; Inquiries
                  </h4>
                  <a
                    href="tel:+919509151498"
                    className="text-base sm:text-lg font-serif font-bold text-espresso-900 hover:text-coffee transition-colors"
                  >
                    +91 95091 51498
                  </a>
                  <span className="text-xs text-coffee/80 block mt-0.5 font-light">
                    Tap to call directly from your device
                  </span>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-3.5 mb-8">
                <div className="w-10 h-10 rounded-full bg-white border border-beige/60 flex items-center justify-center text-coffee shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-amber-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso-900 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-espresso-800/85 font-light">
                    Monday – Sunday: <span className="font-medium text-espresso-900">10:00 AM – 11:00 PM</span>
                  </p>
                  <span className="text-xs text-coffee/70 block mt-0.5 font-light">
                    Open throughout the day for coffee, mocktails &amp; gatherings
                  </span>
                </div>
              </div>

              {/* Primary Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+919509151498"
                  className="flex-1 py-3 px-6 rounded-full bg-espresso-800 text-cream hover:bg-espresso-950 text-center font-semibold text-xs uppercase tracking-[0.18em] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-full bg-white border border-espresso-800/30 text-espresso-900 hover:bg-beige-light/40 text-center font-semibold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-coffee" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Card & Reservation Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Interactive Location Visual / Map Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-beige/60 shadow-luxury bg-espresso-950 h-64 sm:h-72 group">
              <iframe
                title="Roastro Coffee House Location Alwar"
                src="https://maps.google.com/maps?q=Shri+Ram+Market+Near+Wonder+Mall+Alwar+Rajasthan+301001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-espresso-900/90 text-ivory text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 hover:bg-espresso-800 transition-colors inline-flex items-center gap-1.5 shadow-lg"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Plan a Visit / Quick Inquire Form */}
            <div className="p-8 rounded-2xl bg-[#F7F2E9] border border-beige/60">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-coffee mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>PLAN A VISIT / RESERVE</span>
              </div>
              <h3 className="font-serif text-2xl text-espresso-900 font-semibold mb-6">
                Reserve a Table or Reach Out
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-white border border-emerald-500/40 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-semibold text-espresso-900 mb-1">
                    Thank you! We've received your note.
                  </h4>
                  <p className="text-xs text-coffee mb-4">
                    We will call you shortly at {formData.phone || '+91 95091 51498'} to confirm your table.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-espresso-800 font-semibold underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-beige/60 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 95091 51498"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-beige/60 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-beige/60 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-beige/60 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                      >
                        <option value="1">1 Person (Quiet corner)</option>
                        <option value="2">2 People (Coffee catch-up)</option>
                        <option value="3-4">3–4 People (Small group &amp; games)</option>
                        <option value="5-8">5–8 People (Friend gathering)</option>
                        <option value="8+">8+ People (Celebration)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                      Notes or Special Requests
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. We would love a table with board games..."
                      className="w-full px-4 py-2 rounded-lg bg-white border border-beige/60 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-espresso-800 text-cream hover:bg-espresso-950 font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-amber" />
                    <span>Send Visit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
