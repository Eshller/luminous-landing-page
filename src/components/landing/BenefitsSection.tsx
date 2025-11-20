import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Globe, DollarSign, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Advance your technical career with structured training in AI workflows, LLMs, and software engineering—designed by experts.",
  },
  {
    icon: Globe,
    title: "Flexible Work",
    description: "Work remotely from anywhere in India while contributing to mission-critical AI development for global startups.",
  },
  {
    icon: DollarSign,
    title: "Reliable Payouts",
    description: "Earn competitive rates with seamless bi-weekly or monthly payments directly into your account.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Level up your career with referrals, top-tier portfolio projects, and mentorship from Silicon Valley teams.",
  },
];

export const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="benefits" ref={ref} className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <span className="text-sm font-semibold">🚀 For Talent</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Top Engineers <br />
            <span className="gradient-text">Choose Adzzat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 500+ professionals from IITs, NITs, and IIITs building the future of AI.
            Grow your career while working on cutting-edge projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 group relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(0)',
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-10"
                animate={hoveredIndex === index ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* 3D Icon Container */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-6 relative z-10"
                animate={hoveredIndex === index ? {
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 relative z-10 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground relative z-10">
                {benefit.description}
              </p>

              {/* Particle burst effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{
                        x: '50%',
                        y: '50%',
                        scale: 0,
                      }}
                      animate={{
                        x: `${50 + (Math.cos(i * Math.PI / 4) * 100)}%`,
                        y: `${50 + (Math.sin(i * Math.PI / 4) * 100)}%`,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Elite Community Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-strong rounded-3xl p-10 shadow-strong relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Elite Community
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join a curated network of engineers, researchers, and analysts from IITs, NITs, IIITs.
                Work, learn, and grow together.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="font-semibold">500+ Members</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="font-semibold">Top 1% Talent</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <h4 className="text-2xl font-bold mb-4">Ready to Join?</h4>
                <p className="text-muted-foreground mb-6">
                  Be part of a community building the future of artificial intelligence
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow hover:scale-105 transition-all duration-300 w-full">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration with 3D effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
