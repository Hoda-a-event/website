'use client';

import { motion } from 'framer-motion';
import { MessageSquareX, TrendingDown, ShieldOff } from 'lucide-react';

const CoreChallenge = () => {
  const challenges = [
    {
      icon: MessageSquareX,
      title: 'Information Overload',
      description:
        'Attendees forget up to 70% of verbal announcements. Generic digital messages are easily lost in the noise of social media feeds',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      image:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: TrendingDown,
      title: 'Inefficient Outreach',
      description:
        'Event organizers struggle to reach new, genuinely interested audiences beyond their immediate network.',
      color: 'from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
      image:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: ShieldOff,
      title: 'Lack of User Control',
      description:
        "Users feel spammed by irrelevant notifications they can't manage, leading to frustration and opt-outs.",
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-feed-color relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
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
            The Core Challenge
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-faded-text mb-6 leading-relaxed">
              Organizations struggle with fragmented communication, leading to
              low turn out for events.
            </p>
            <p className="text-lg text-faded-text leading-relaxed">
              Individuals feel overwhelmed by information overload, missing
              events they care about.
            </p>
            <p className="text-xl font-semibold text-secondary mt-6">
              Hoda'a solves this.
            </p>
          </div>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Image */}
                  <div className="mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${challenge.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <challenge.icon size={40} className={challenge.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {challenge.title}
                  </h3>

                  <p className="text-faded-text leading-relaxed text-lg">
                    {challenge.description}
                  </p>

                  {/* Decorative gradient line */}
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${challenge.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Transform Your Community?
            </h3>
            <p className="text-faded-text mb-6">
              See how Hoda'a addresses these challenges with intelligent
              solutions.
            </p>
            <a
              href="/waitlist"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreChallenge;
