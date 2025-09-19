"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Mail,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import mockup from "../../public/images/hero-mockup.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-feed-color via-white to-line-color-2"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary/5 rounded-full blur-2xl"></div>

        {/* Floating message bubbles */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-1/4 w-4 h-4 bg-green-500 rounded-full opacity-20"
        ></motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-48 right-1/3 w-3 h-3 bg-secondary rounded-full opacity-30"
        ></motion.div>
        <motion.div
          animate={{ y: [-10, 25, -10] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-32 left-1/3 w-5 h-5 bg-tertiary rounded-full opacity-25"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-tertiary fill-current" />
              <span className="text-sm font-medium text-primary">
                Nigeria's #1 Event Marketing Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-6 leading-relaxed"
            >
              Where Events become experiences,{" "}
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                and groups become communities.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-faded-text mb-8 max-w-2xl leading-relaxed"
            >
              Hoda'a is designed to amplify your reach, boost attendance, and
              deliver targeted
              <span className="font-semibold text-secondary">
                {" "}
                notifications through the channels your audience actually uses.
              </span>
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-primary font-medium">
                  Direct WhatsApp Reach
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-primary font-medium">
                  Professional Email Marketing
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-primary font-medium">
                  Targeted Audience Engagement
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-primary font-medium">Proven Results</span>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/waitlist"
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Join the Waitlist
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>

              {/* <button className="group bg-white/20 backdrop-blur-sm border border-white/30 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                See How It Works
                <MessageCircle
                  className="ml-2 group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
              </button> */}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-faded-text"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary to-tertiary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-tertiary to-primary rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium">
                  100+ Event Organizers Waiting
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Mockup - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Main mockup container */}
            <div className="relative">
              {/* Glow effect behind the phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl blur-2xl scale-110"></div>

              {/* Phone mockup */}
              <div className="relative">
                <div className="relative">
                  {/* WhatsApp mockup image */}
                  <div className="relative">
                    <Image
                      src={mockup}
                      alt="WhatsApp event marketing example showing how Hoda'a sends targeted event notifications"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                      priority
                      quality={95}
                    />

                    {/* Overlay for additional messaging */}
                    {/* <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-green-500/90 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                        <div className="flex items-center space-x-2 mb-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-semibold">
                            Live Event Updates
                          </span>
                        </div>
                        <p className="text-green-100">
                          Real-time engagement through WhatsApp
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Floating statistics */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-faded-text">Open Rate</div>
                </div>
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3x</div>
                  <div className="text-sm text-faded-text">More Attendees</div>
                </div>
              </motion.div> */}

              {/* Floating action bubbles */}
              {/* <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div> */}
            </div>

            {/* Feature highlights around mockup */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute top-16 -left-16 hidden lg:block"
            >
              <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">
                      Instant Delivery
                    </div>
                    <div className="text-xs text-faded-text">
                      Direct to WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-16 -right-16 hidden lg:block"
            >
              <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">
                      High Engagement
                    </div>
                    <div className="text-xs text-faded-text">
                      Personal Touch
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}
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
