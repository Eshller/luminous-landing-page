import { cn } from "@/lib/utils";
import { useState } from "react";
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  variant?: "side-image" | "centered";
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "How to use this component?",
    answer:
      "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
  },
  {
    question: "Are there any other components available?",
    answer:
      "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
  },
  {
    question: "Are components responsive?",
    answer:
      "Yes, all components are responsive and can be used on different screen sizes.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
  },
];

export const FaqSectionSideImage: React.FC<FaqSectionProps> = ({
  faqs = defaultFaqs,
  subtitle = "FAQ's",
  title = "Looking for answer?",
  description = "Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.",
  imageSrc = "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop",
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0",
        className,
      )}
    >
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-sm w-full rounded-xl h-auto shadow-lg"
        src={imageSrc}
        alt="FAQ illustration"
      />
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-indigo-600"
        >
          {subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#0A1628] mt-2"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-slate-600 mt-3 pb-6 max-w-lg"
        >
          {description}
        </motion.p>
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="border-b border-slate-200 py-5 cursor-pointer"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-800">
                {faq.question}
              </h3>
              <ChevronDown
                size={20}
                className={cn(
                  "text-slate-800 transition-transform duration-500 ease-in-out shrink-0",
                  openIndex === index && "rotate-180",
                )}
              />
            </div>
            <p
              className={cn(
                "text-base text-slate-600 transition-all duration-500 ease-in-out max-w-md overflow-hidden",
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2",
              )}
            >
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const defaultCenteredFaqs: FaqItem[] = [
  {
    question: "Lightning-Fast Performance",
    answer: "Built with speed — minimal load times and optimized rendering.",
  },
  {
    question: "Fully Customizable Components",
    answer:
      "Easily adjust styles, structure, and behavior to match your project needs.",
  },
  {
    question: "Responsive by Default",
    answer:
      "Every component are responsive by default — no extra CSS required.",
  },
  {
    question: "Tailwind CSS Powered",
    answer:
      "Built using Tailwind utility classes — no extra CSS or frameworks required.",
  },
  {
    question: "Dark Mode Support",
    answer:
      "All components come ready with light and dark theme support out of the box.",
  },
];

export const FaqSectionCentered: React.FC<FaqSectionProps> = ({
  faqs = defaultCenteredFaqs,
  subtitle = "FAQ",
  title = "Frequently Asked Questions",
  description = "Proactively answering FAQs boosts user confidence and cuts down on support tickets.",
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center text-slate-800 px-3",
        className,
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold text-slate-600"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mt-2 text-[#0A1628]"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base text-slate-600 mt-4 max-w-2xl"
      >
        {description}
      </motion.p>
      <div className="max-w-2xl w-full mt-10 flex flex-col gap-4 items-start text-left">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="flex flex-col items-start w-full"
          >
            <div
              className="flex items-center justify-between w-full cursor-pointer border border-slate-200 bg-white/50 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                {faq.question}
              </h3>
              <ChevronDown
                size={20}
                className={cn(
                  "text-slate-800 transition-transform duration-500 ease-in-out shrink-0 ml-4",
                  openIndex === index && "rotate-180",
                )}
              />
            </div>
            <p
              className={cn(
                "text-base text-slate-600 px-5 transition-all duration-500 ease-in-out overflow-hidden",
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2",
              )}
            >
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSectionSideImage;
