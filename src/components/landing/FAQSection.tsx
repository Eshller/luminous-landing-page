import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes Adzzat different?",
    answer: "We provide freelancers who are trained AI engineers. We handle recruiting, training, QA, and delivery end-to-end.",
  },
  {
    question: "What kind of talent do you offer?",
    answer: "We work with vetted engineers, evaluators, and data specialists from top Indian institutes like IITs, NITs, and IIITs.",
  },
  {
    question: "How do you ensure quality?",
    answer: "Every task goes through structured training, evaluation, QA checks, and ongoing performance monitoring.",
  },
  {
    question: "Can you handle specialized or technical workflows?",
    answer: "Absolutely. We support LLM evals, agent testing, coding tasks, dataset creation, and domain-specific workflows.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most teams are ready in under a week, depending on scale and workflow complexity.",
  },
  {
    question: "Do we need to manage the team?",
    answer: "No — we fully manage recruiting, training, operations, and quality so you only focus on results.",
  },
  {
    question: "How does pricing work?",
    answer: "Flexible pricing: hourly, per-task, or dedicated team — all inclusive of management and QA.",
  },
];

interface FAQSectionProps {
  onContactClick?: () => void;
}

export const FAQSection = ({ onContactClick }: FAQSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <span className="text-sm font-semibold">FAQ</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Adzzat
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>

                {/* Animated bottom border on active */}
                {isActive && (
                  <motion.div
                    layoutId="faq-active-border"
                    className="h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Background decoration */}
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
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
