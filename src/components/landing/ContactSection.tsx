import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create mailto link that sends to both emails
    const subject = `Contact Form: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:aryanhonawar@adzzat.com,niketsingh@adzzat.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm"
                >
                  Your email client should open now. Please send the email to complete your message.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-light to-primary text-white rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:aryanhonawar@adzzat.com" className="hover:text-primary transition-colors">
                      aryanhonawar@adzzat.com
                    </a>
                    <br />
                    <a href="mailto:niketsingh@adzzat.com" className="hover:text-primary transition-colors">
                      niketsingh@adzzat.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};
