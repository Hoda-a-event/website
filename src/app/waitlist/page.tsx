"use client";

import { motion } from "framer-motion";
import CountdownTimer from "../../components/CountdownTimer";
import WaitlistForm from "../../components/WaitlistForm";

const WaitlistPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-tertiary/80"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <a
          href="/"
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hoda&apos;a
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Event Marketing Revolution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">LAUNCHING SOON</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nigeria&apos;s First
                <span className="block bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
                  WhatsApp + gmail
                </span>
                Event Marketing Platform
              </h2>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                🚀 Get ready for the revolutionary platform that will transform
                how you promote events and connect with your audience in
                Nigeria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                ⏰ Official Launch Countdown
              </h3>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
                <CountdownTimer />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                🎯 Join the Revolution
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Be among the first 500 event organizers to experience the future
                of event marketing in Nigeria.
              </p>

              <WaitlistForm />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🎁</div>
                  <p className="text-white font-semibold text-sm">50% OFF</p>
                  <p className="text-white/70 text-xs">Lifetime Discount</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-white font-semibold text-sm">VIP Access</p>
                  <p className="text-white/70 text-xs">Priority Support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-white font-semibold text-sm">
                    Beta Features
                  </p>
                  <p className="text-white/70 text-xs">First Access</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 pt-8 border-t border-white/20"
            >
              <div className="flex items-center justify-center gap-8 text-white/80">
                <div className="text-center">
                  <div className="text-xl font-bold">1,247</div>
                  <div className="text-xs">People Waiting</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-xl font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-xl font-bold">Nigeria</div>
                  <div className="text-xs">First Platform</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
