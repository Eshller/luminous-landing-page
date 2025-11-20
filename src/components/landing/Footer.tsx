import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Instagram } from "lucide-react";
import adzzatLogo from "@/assets/adzzat-logo.svg";

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/adzzat/posts/?feedView=all" },
    { icon: Instagram, href: "https://www.instagram.com/adzzat/" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Services", id: "services" },
    { label: "Expertise", id: "expertise" },
    { label: "How It Works", id: "how-it-works" },
    { label: "For Talent", id: "benefits" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-white to-secondary py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-medium p-2">
              <img
                src={adzzatLogo}
                alt="Adzzat Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              The only platform combining a vetted talent marketplace with enterprise-grade
              LLM evaluation and dataset services. Scale your AI operations with confidence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white shadow-medium hover:shadow-strong flex items-center justify-center text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Adzzat. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
