import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">Get In Touch</span>
                </h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="modal-message"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-light to-primary text-white rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </motion.button>
              </form>

              {/* Contact Information */}
              <div className="space-y-4 pt-8 border-t border-border">
                <div className="glass-strong rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
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

                <div className="glass-strong rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
