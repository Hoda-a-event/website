'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every feature we build serves the core mission of connecting communities meaningfully.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Shield,
      title: "Respect-First",
      description:
        "User privacy and control are not afterthoughts—they are fundamental to our design.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description:
        "Built by understanding real Nigerian communities and their unique communication needs.",
      color: "from-tertiary to-tertiary/80",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Combining cutting-edge technology with deep cultural understanding and user empathy.",
      color: "from-primary to-primary/80",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-feed-color to-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
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
            About Hoda'a
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-faded-text mb-8 leading-relaxed">
              We discovered a game-changing insight: Nigerians check WhatsApp
              and Email daily, but event organizers were still using outdated
              and noisy methods to reach them. Hoda'a bridges this gap with
              intelligent and conversational event marketing.
            </p>
            <p className="text-lg text-faded-text leading-relaxed">
              Our revolutionary dual-channel approach transforms event
              promotion, delivering messages where people actually look - their
              WhatsApp and Email.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-faded-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl border border-white/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-faded-text leading-relaxed mb-8">
              "To empower creators to build thriving communities through
              meaningful events, while helping attendees effortlessly discover
              and engage with experiences that matter most to them."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
