import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds and join thousands of satisfied users.",
  },
  {
    number: "02",
    title: "Customize",
    description: "Tailor the platform to your specific needs with our intuitive tools.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Deploy your solution and start seeing results immediately.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Scale effortlessly as your needs expand with our flexible platform.",
  },
];

export const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and transform your workflow
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light via-primary to-primary-dark transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="flex-1 glass-strong rounded-2xl p-8 shadow-strong hover:shadow-glow transition-all duration-300 preserve-3d"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-bold text-xl shadow-medium flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline node */}
                <div className="hidden lg:flex w-20 h-20 rounded-full bg-white border-4 border-primary shadow-strong items-center justify-center z-10 flex-shrink-0">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
