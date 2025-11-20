import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Metric {
  target: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { target: 1000, suffix: "K+", label: "Tasks Completed" },
  { target: 500, suffix: "+", label: "AI Professionals" },
  { target: 53, suffix: "K+", label: "PhDs Collaborating" },
  { target: 150, suffix: "+", label: "Countries Served" },
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

  // Format number for display
  const formatCount = (num: number, suff: string) => {
    if (suff === "K+") {
      return count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count.toString();
    }
    return count.toLocaleString();
  };

  return (
    <div className="relative">
      <motion.div
        className="text-6xl md:text-7xl font-bold gradient-text"
        animate={showBurst ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        {formatCount(count, suffix)}{suffix !== "K+" ? suffix : ""}
      </motion.div>
      
      {/* Enhanced burst effect with multiple particles */}
      {showBurst && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light to-primary blur-2xl"
          />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%',
                scale: 0,
              }}
              animate={{
                x: `${50 + (Math.cos(i * Math.PI / 6) * 150)}%`,
                y: `${50 + (Math.sin(i * Math.PI / 6) * 150)}%`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export const MetricsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <span className="text-sm font-semibold">Global Impact</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading AI companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 30,
              }}
              className="glass-strong rounded-2xl p-8 text-center shadow-strong hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                animate={hoveredIndex === index ? {
                  x: ['-100%', '200%'],
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <CounterAnimation
                  target={metric.target}
                  suffix={metric.suffix}
                  inView={inView}
                />
                <p className="text-lg text-muted-foreground mt-4 font-semibold">
                  {metric.label}
                </p>
              </div>
              
              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      animate={{
                        y: ['100%', '-20%'],
                        x: `${20 + i * 15}%`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced 3D rotating background */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
