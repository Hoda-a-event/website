"use client";

import { motion } from "framer-motion";
import { Zap, Users2, Settings, Send, ArrowRight } from "lucide-react";

const SmartNotificationFlow = () => {
  const steps = [
    {
      number: 1,
      title: "Trigger",
      description: "An event is published or a reminder is scheduled.",
      icon: Zap,
      color: "from-primary to-primary/80",
      bgColor: "bg-primary/10",
    },
    {
      number: 2,
      title: "Segment Audience",
      description:
        "The system identifies recipients based on promotion status, interests, and location.",
      icon: Users2,
      color: "from-secondary to-secondary/80",
      bgColor: "bg-secondary/10",
    },
    {
      number: 3,
      title: "Apply Preferences",
      description:
        "Crucially, it filters the audience against each user's specific opt-outs and DND settings.",
      icon: Settings,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      number: 4,
      title: "WhatsApp & Gmail Dispatch",
      description:
        "Messages are instantly delivered via WhatsApp (primary) and Gmail (backup) - the two platforms Nigerians check most.",
      icon: Send,
      color: "from-green-500 to-red-500",
      bgColor: "bg-gradient-to-r from-green-50 to-red-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-line-color-2/20 via-white to-feed-color relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Digital workflow"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl"></div>
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
            The WhatsApp + Gmail Marketing Flow
          </h2>
          <p className="text-xl text-faded-text max-w-4xl mx-auto leading-relaxed mb-6">
            This is Hoda'a's breakthrough. The first platform to deliver event
            marketing directly through WhatsApp and Gmail - where Nigerians
            actually check messages.
          </p>

          {/* WhatsApp & Gmail Emphasis */}
          <div className="bg-gradient-to-r from-green-100 to-red-100 border-2 border-green-300 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <h3 className="font-bold text-green-700">WhatsApp First</h3>
                <p className="text-sm text-faded-text">98% open rate</p>
              </div>
              <div className="text-4xl font-bold text-primary">+</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="font-bold text-red-700">Gmail Backup</h3>
                <p className="text-sm text-faded-text">Professional reach</p>
              </div>
            </div>
            <p className="text-center text-primary font-bold mt-4">
              🚀 Nigeria's only dual-channel event marketing platform
            </p>
          </div>
        </motion.div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-16">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  {/* Step Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    >
                      <span className="text-white text-3xl font-bold">
                        {step.number}
                      </span>
                    </div>

                    {/* Connecting Arrow */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-1/2 left-full transform -translate-y-1/2 origin-left"
                      >
                        <ArrowRight
                          className="text-primary ml-4 mr-4"
                          size={32}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Step Details */}
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="text-center">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon size={32} className="text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-faded-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    {/* Step Number */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-xl font-bold">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <step.icon size={24} className="text-primary mr-3" />
                        <h3 className="text-xl font-bold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-faded-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting line for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Intelligence Meets Respect
            </h3>
            <p className="text-lg text-faded-text">
              Our notification system isn't just smart—it's respectful. Every
              message is filtered through user preferences, ensuring maximum
              relevance with minimum intrusion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartNotificationFlow;
