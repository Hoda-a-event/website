"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2, Users, Gift, Zap } from "lucide-react";

const WaitlistForm = () => {
  const [gmail, setgmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
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
          <span>Position #1,247 in queue</span>
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
              <input
                type="tel"
                placeholder="Whatsapp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/90 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
            </div>
            
          </div>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 bg-gradient-to-r from-green-500 via-primary to-red-500 text-white font-bold py-4 rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Joining the revolution...
              </>
            ) : (
              <>
                <Mail size={20} />
                Join the Waitlist
              </>
            )}
          </motion.button>
        </div>

        {/* Early Bird Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
            <Gift className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
            <p className="text-white text-xs font-semibold">50% OFF</p>
            <p className="text-white/80 text-xs">First Year</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
            <Zap className="w-6 h-6 text-blue-400 mx-auto mb-1" />
            <p className="text-white text-xs font-semibold">VIP Support</p>
            <p className="text-white/80 text-xs">Priority Access</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
            <Users className="w-6 h-6 text-green-400 mx-auto mb-1" />
            <p className="text-white text-xs font-semibold">Exclusive</p>
            <p className="text-white/80 text-xs">Beta Features</p>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default WaitlistForm;
