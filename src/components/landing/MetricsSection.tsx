import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Metric {
  target: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { target: 500, suffix: "+", label: "Partner Institutions" },
  { target: 50000, suffix: "+", label: "Active Students" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
  { target: 24, suffix: "/7", label: "Support Available" },
];

const CounterAnimation = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), target));
      } else {
        setCount(target);
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 1000);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <div className="relative">
      <motion.div
        className="text-6xl md:text-7xl font-bold gradient-text"
        animate={showBurst ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      
      {showBurst && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light to-primary blur-2xl"
        />
      )}
    </div>
  );
};

export const MetricsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak to our commitment and success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-8 text-center shadow-strong hover:shadow-glow transition-all duration-300"
            >
              <CounterAnimation
                target={metric.target}
                suffix={metric.suffix}
                inView={inView}
              />
              <p className="text-lg text-muted-foreground mt-4 font-semibold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
