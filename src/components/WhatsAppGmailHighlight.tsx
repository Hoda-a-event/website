"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Zap,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

const WhatsAppgmailHighlight = () => {
  const advantages = [
    {
      icon: MessageCircle,
      platform: "WhatsApp",
      stat: "98%",
      description: "of Nigerians check WhatsApp daily",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      platform: "gmail",
      stat: "85%",
      description: "read professional gmails regularly",
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Messages arrive in real-time where people actually look",
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach the right audience through their preferred channels",
    },
    {
      icon: Users,
      title: "Higher Engagement",
      description: "10x better open rates than traditional gmail marketing",
    },
    {
      icon: TrendingUp,
      title: "Better ROI",
      description: "More attendees, less marketing spend, higher event success",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
            Why WhatsApp + gmail?
          </h2>

          {/* Platform Stats */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${advantage.bgColor} border-2 border-current rounded-3xl p-8 ${advantage.textColor}`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-16 h-16 ${advantage.color} rounded-full flex items-center justify-center mr-4`}
                  >
                    <advantage.icon className="text-white" size={32} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold">{advantage.platform}</h3>
                    <p className="text-sm opacity-80">
                      Nigeria&apos;s #1 platform
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {advantage.stat}
                  </div>
                  <p className="text-lg font-semibold">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bold Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Hoda&apos;a is the ONLY platform in Nigeria marketing events
              directly to WhatsApp & gmail
            </h3>
            <p className="text-xl opacity-90">
              While others send gmails to spam folders, we deliver to the apps
              Nigerians actually use every day.
            </p>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {benefit.title}
              </h4>
              <p className="text-faded-text text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/waitlist"
            className="bg-gradient-to-r from-green-500 via-primary to-red-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Join Waitlist - Coming Soon!
          </a>
          <p className="text-faded-text mt-4">
            Be the first to experience the event marketing revolution in Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppgmailHighlight;
