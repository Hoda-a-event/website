"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to 60 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 60);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    {
      label: "Days",
      value: timeLeft.days,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-primary to-blue-600",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      color: "from-secondary to-purple-600",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      color: "from-tertiary to-orange-600",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            key={unit.value}
            initial={{ scale: 1.2, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br ${unit.color} text-white rounded-2xl p-4 md:p-6 shadow-2xl min-w-[80px] md:min-w-[120px]`}
          >
            <div className="text-3xl md:text-5xl font-bold mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base font-semibold opacity-90">
              {unit.label}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
