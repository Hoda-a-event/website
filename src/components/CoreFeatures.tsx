'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Search, Bell, Target, Shield } from 'lucide-react';

const CoreFeatures = () => {
  const eventMarketingFeatures = [
    { name: 'WhatsApp Marketing', value: 95, color: '#25D366' },
    { name: 'Gmail Campaigns', value: 90, color: '#EA4335' },
    { name: 'Event Promotion', value: 85, color: '#F76A4E' },
    { name: 'Audience Targeting', value: 88, color: '#4348C0' },
    { name: 'Performance Analytics', value: 82, color: '#FFB347' },
  ];

  const communityFeatures = [
    {
      icon: Users,
      title: 'Group Management',
      description:
        'Create and manage communities, define member roles (Admin, Member, Subscriber), and build your audience.',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Search,
      title: 'Event Discovery',
      description:
        'A personalized feed and powerful search tools help users find events by category, location, and keywords.',
      gradient: 'from-secondary to-tertiary',
    },
    {
      icon: Bell,
      title: 'User-Centric Notifications',
      description:
        'The most powerful feature: a system built on user consent, preference, and control. More on this below.',
      gradient: 'from-tertiary to-primary',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-feed-color relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
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
            Core Platform Features
          </h2>
          <p className="text-lg text-faded-text max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform how communities
            connect and engage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Event Marketing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
              {/* Event Marketing Image */}
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Event marketing"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* WhatsApp & gmail Highlight */}
              <div className="bg-gradient-to-r from-green-100 to-red-100 border-2 border-green-300 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">W</span>
                    </div>
                    <span className="font-bold text-green-700">WhatsApp</span>
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <span className="font-bold text-red-700">gmail</span>
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-primary mt-2">
                  🚀 Nigeria's Only WhatsApp + gmail Event Marketing Platform
                </p>
              </div>

              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">
                    Revolutionary Event Marketing
                  </h3>
                  <p className="text-faded-text mt-2">
                    The first platform to market events directly through
                    WhatsApp & gmail, reaching audiences where they actually
                    check messages daily.
                  </p>
                </div>
              </div>

              {/* Horizontal Bar Chart */}
              <div className="space-y-6">
                {eventMarketingFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">
                        {feature.name}
                      </span>
                      <span className="text-faded-text">{feature.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: feature.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Community Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
              {/* Community Tools Image */}
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Community engagement"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-tertiary rounded-2xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">
                    Intelligent Community Tools
                  </h3>
                  <p className="text-faded-text mt-2">
                    Smart features that bring communities together and keep them
                    engaged.
                  </p>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                {communityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/40 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-faded-text leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-4">
              Built with Privacy & Control in Mind
            </h3>
            <p className="text-lg text-faded-text mb-6 max-w-2xl mx-auto">
              Every feature is designed to respect user preferences and provide
              granular control over notifications and data sharing.
            </p>
            <a
              href="/waitlist"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
