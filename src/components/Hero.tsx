"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-feed-color via-white to-line-color-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
            >
              Hoda'a
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-secondary font-medium mb-8"
            >
              Connecting Communities. Empowering Events.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-faded-text mb-6 max-w-2xl leading-relaxed"
            >
              Nigeria's first event marketing platform designed to amplify your
              reach, boost attendance, and deliver targeted communication
              through the channels your audience actually uses.
            </motion.p>

            {/* WhatsApp & Gmail Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-4 mb-8 max-w-2xl"
            >
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <span className="font-bold text-green-700">
                    WhatsApp Integration
                  </span>
                </div>
                <div className="text-primary font-bold">+</div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-bold text-red-700">
                    Gmail Marketing
                  </span>
                </div>
              </div>
              <p className="text-center text-sm text-faded-text mt-2 font-medium">
                🚀 The only platform marketing directly to WhatsApp & Gmail in
                Nigeria
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/waitlist"
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Join Waitlist
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </a>

              <button className="group bg-white/20 backdrop-blur-sm border border-white/30 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Play
                  className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

              {/* Hero visual content */}
              <div className="relative z-10 space-y-6">
                {/* Hero Image */}
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Event management platform"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Event Marketing Hub
                  </h3>
                  <p className="text-white/90">
                    WhatsApp + Gmail marketing automation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                    <div className="w-8 h-8 bg-green-500 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">W</span>
                    </div>
                    <h4 className="font-semibold text-primary">
                      WhatsApp Marketing
                    </h4>
                    <p className="text-sm text-faded-text mt-1">
                      Direct audience reach
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                    <div className="w-8 h-8 bg-red-500 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <h4 className="font-semibold text-primary">
                      Gmail Integration
                    </h4>
                    <p className="text-sm text-faded-text mt-1">
                      Professional outreach
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-tertiary/20 to-transparent rounded-xl p-4 border border-tertiary/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        WhatsApp & Gmail Marketing
                      </h4>
                      <p className="text-sm text-faded-text">
                        Nigeria's #1 choice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-tertiary to-tertiary/70 rounded-2xl shadow-lg"
            ></motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl shadow-lg"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
