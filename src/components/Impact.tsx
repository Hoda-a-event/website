'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import RadarChart from './RadarChart';

const Impact = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Attendance',
      description:
        'Relevant, timely reminders drive participation and reduce no-shows.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Stronger Community',
      description:
        'Members feel respected and informed, leading to higher trust and satisfaction.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Zap,
      title: 'Wider Reach',
      description:
        'Promoted events effectively reach new, interested audiences, driving growth.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Shield,
      title: 'Reduced Admin Burden',
      description:
        'Automation of event promotion tasks frees up organizers to focus on creating great events.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const radarData = {
    labels: [
      'Attendance',
      'Engagement',
      'User Trust',
      'Event Reach',
      'Admin Efficiency',
    ],
    datasets: [
      {
        label: "Hoda'a Impact",
        data: [85, 90, 95, 80, 88],
        backgroundColor: 'rgba(247, 106, 78, 0.2)',
        borderColor: '#F76A4E',
        borderWidth: 3,
        pointBackgroundColor: '#F76A4E',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#F76A4E',
      },
    ],
  };

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-white via-feed-color to-line-color-2/30 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Success and growth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            The Hoda'a Impact
          </h2>
          <p className="text-lg text-faded-text max-w-4xl mx-auto leading-relaxed">
            By transforming event promotion from a broadcast into a respectful,
            intelligent conversation, Hoda'a delivers significant value across
            key metrics for both organizers and attendees.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className={benefit.color} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <CheckCircle
                          className="text-green-500 mr-2"
                          size={20}
                        />
                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-faded-text leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">
                Performance Metrics
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <RadarChart data={radarData} />
              </motion.div>

              {/* Legend */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-3 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
                  <div className="w-4 h-4 bg-tertiary rounded-full"></div>
                  <span className="text-primary font-semibold">
                    Hoda'a Impact Score
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Measurable Results</h3>
              <p className="text-white/90 text-lg">
                Real impact backed by data and user feedback
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-white/80">Higher Attendance</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-white/80">User Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">70%</div>
                <div className="text-white/80">Reduced Admin Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-white/80">Event Reach</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Transform Your Community Events?
            </h3>
            <p className="text-lg text-faded-text mb-6">
              Join hundreds of organizations already using Hoda'a to build
              stronger, more engaged communities.
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

export default Impact;
