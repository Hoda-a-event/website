'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Loader2, Users, ArrowRight } from 'lucide-react';

const WaitlistForm = () => {
  const [gmail, setgmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const normalizedLocal = phone.trim().replace(/^0+/, '');
      const payload = {
        email: gmail,
        phoneNumber: `${countryCode}${normalizedLocal}`,
        name: name,
      };

      const res = await fetch('https://api.hodaa.live/api/v1/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = data?.message || data?.error || 'Failed to join waitlist';
        throw new Error(msg);
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      let message = 'Something went wrong. Please try again.';
      if (err instanceof Error) message = err.message;
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 max-w-md mx-auto"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          You&apos;re In! 🎉
        </h3>
        <p className="text-white/90 mb-6">
          Welcome to the exclusive Hoda&apos;a early access list. Get ready for
          the future of event marketing!
        </p>
        <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
          <Users size={20} />
          <span>Position #1,209 in queue</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder=" Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/90 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder=" Email Address"
                value={gmail}
                onChange={(e) => setgmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/90 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="countryCode">
                Country code
              </label>
              <div className="flex items-center gap-0">
                <select
                  id="countryCode"
                  aria-label="Country code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-28 px-3 py-3 bg-white/90 border border-white/40 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                >
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+27">🇿🇦 +27</option>
                  <option value="+233">🇬🇭 +233</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+7">🇷🇺 +7</option>
                </select>

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-white/90 border-t border-b border-r border-white/40 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          <motion.button
            type="submit"
            aria-label="Join the waitlist"
            title="Join the waitlist"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 text-white font-semibold text-lg py-3 rounded-full shadow-lg transform-gpu focus:outline-none focus:ring-4 focus:ring-green-300/40 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Joining the revolution...
              </>
            ) : (
              <>
                <span className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>Join the Waitlist</span>
                </span>
                <ArrowRight size={18} className="opacity-90" />
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default WaitlistForm;
