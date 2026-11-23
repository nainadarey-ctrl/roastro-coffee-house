import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '17:00',
    guests: '2',
    occasion: 'Casual Coffee & Games',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Roastro Coffee House! I would like to inquire about reserving a table for ${formData.guests} guests on ${formData.date || 'today'} around ${formData.time}. Name: ${formData.name || 'A Guest'}.`
    );
    window.open(`https://wa.me/919509151498?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFFDF8] rounded-2xl shadow-2xl border border-beige/60 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-cream hover:bg-beige/40 text-espresso-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-espresso-900 mb-2">
              Visit Request Received!
            </h3>
            <p className="text-sm text-espresso-800/80 font-light mb-6">
              Thank you, {formData.name}. Our barista team at Roastro Alwar will call you shortly
              at {formData.phone} to confirm your table and preferred seating.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppInquiry}
                className="px-6 py-2.5 rounded-full bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-espresso-800 text-cream font-semibold text-xs uppercase tracking-wider hover:bg-espresso-950 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/roastro-official-logo.jpg"
                alt="Roastro Coffee House Official Logo"
                className="w-10 h-10 rounded-full object-cover border border-amber/40 shadow-sm shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-coffee block">
                  ROASTRO COFFEE HOUSE
                </span>
                <span className="text-xs text-amber-dark font-medium">Table Reservation</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso-900 mb-2">
              Plan Your Visit
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/75 font-light mb-6">
              Reserve a table for your coffee date, study session, or board game evening.
              Walk-ins are always welcomed!
            </p>

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
                    placeholder="e.g. Siddharth"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Cozy Table)</option>
                    <option value="3-4">3–4 People (Games Table)</option>
                    <option value="5-8">5–8 People (Group Gathering)</option>
                    <option value="8+">8+ People (Party)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-coffee mb-1">
                    Vibe / Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream/70 border border-beige/70 text-xs text-espresso-900 focus:outline-none focus:border-amber focus:bg-white"
                  >
                    <option value="Casual Coffee & Games">Casual Coffee &amp; Games</option>
                    <option value="Catching Up with Friends">Catching Up with Friends</option>
                    <option value="Work / Reading Session">Work / Reading Session</option>
                    <option value="Birthday / Celebration">Birthday / Celebration</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-espresso-800 text-cream hover:bg-espresso-950 font-semibold text-xs uppercase tracking-[0.2em] shadow-md transition-all"
                >
                  Confirm Reservation Request
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="tel:+919509151498"
                  className="text-xs text-coffee hover:text-espresso-900 font-medium inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber" />
                  <span>Prefer calling? Reach us directly at +91 95091 51498</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
