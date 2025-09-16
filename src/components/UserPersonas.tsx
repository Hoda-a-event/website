"use client";

import { motion } from "framer-motion";
import DonutChart from "./DonutChart";

const UserPersonas = () => {
  const personas = [
    {
      name: "Pastor Seyi",
      role: "The Community Leader",
      description:
        "Uses WhatsApp & Gmail marketing to reach his congregation about services and events, boosting attendance through targeted messaging.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      chartData: {
        labels: ["WhatsApp Marketing", "Event Creation", "Gmail Campaigns"],
        datasets: [
          {
            data: [60, 25, 15],
            backgroundColor: ["#25D366", "#003B75", "#EA4335"],
            borderColor: ["#25D366", "#003B75", "#EA4335"],
            borderWidth: 2,
          },
        ],
      },
    },
    {
      name: "Micheal",
      role: "The Event Enthusiast",
      description:
        "Discovers amazing events through WhatsApp notifications and Gmail updates, never missing out on professional networking opportunities.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      chartData: {
        labels: ["WhatsApp Alerts", "Event Discovery", "Gmail Updates"],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: ["#25D366", "#003B75", "#EA4335"],
            borderColor: ["#25D366", "#003B75", "#EA4335"],
            borderWidth: 2,
          },
        ],
      },
    },
    {
      name: "Mr. Tim",
      role: "The Event Organizer",
      description:
        "Maximizes workshop attendance using WhatsApp & Gmail marketing to reach new paying customers and automate follow-ups.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      chartData: {
        labels: ["WhatsApp Promotion", "Gmail Marketing", "Event Creation"],
        datasets: [
          {
            data: [45, 35, 20],
            backgroundColor: ["#25D366", "#EA4335", "#003B75"],
            borderColor: ["#25D366", "#EA4335", "#003B75"],
            borderWidth: 2,
          },
        ],
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-feed-color via-white to-line-color-2 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Built for Real People
          </h2>
          <p className="text-lg text-faded-text max-w-3xl mx-auto leading-relaxed mb-8">
            Real Nigerian professionals using WhatsApp & Gmail marketing to
            transform their event attendance and community engagement.
          </p>

          {/* WhatsApp & Gmail Highlight */}
          <div className="bg-gradient-to-r from-green-100 via-white to-red-100 border-2 border-green-300 rounded-3xl p-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="font-bold text-green-700 text-xl">
                    WhatsApp
                  </span>
                </div>
                <span className="text-3xl font-bold text-primary">+</span>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <span className="font-bold text-red-700 text-xl">Gmail</span>
                </div>
              </div>
              <p className="text-lg font-bold text-primary">
                🎯 The channels Nigerians actually use daily
              </p>
              <p className="text-sm text-faded-text mt-2">
                98% of Nigerians check WhatsApp daily • 85% check Gmail
                regularly
              </p>
            </div>
          </div>
        </motion.div>

        {/* Personas Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Persona Card */}
              <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="text-center mb-8">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <img
                      src={persona.image}
                      alt={persona.name}
                      className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-tertiary rounded-full border-4 border-white"></div>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {persona.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">
                    {persona.role}
                  </p>
                  <p className="text-faded-text leading-relaxed mb-6">
                    {persona.description}
                  </p>
                </div>

                {/* Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <DonutChart
                    data={persona.chartData}
                    title="Primary Feature Usage"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-faded-text">User Archetypes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-faded-text">Research-Backed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tertiary mb-2">∞</div>
              <div className="text-faded-text">Possibilities</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserPersonas;
