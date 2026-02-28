import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Grainient from "@/components/Grainient";
import Lottie from "lottie-react";
import diamondAnimation from "@/diamond.json";

interface ContactSectionProps {
  /**
   * The title for the contact section.
   * 
   */
  title?: string;
  /**
   * The subtitle or main message for the introductory part.
   */
  mainMessage?: string;
  /**
   * The contact email to display.
   */
  contactEmail?: string;
  /**
   * Array of social media links. Each object should have an 'id', 'name', 'iconSrc', and 'href'.
   */
  socialLinks?: Array<{
    id: string;
    name: string;
    iconSrc: string;
    href: string;
  }>;
  /**
   * Placeholder image for the background.
   */
  backgroundImageSrc?: string;
  /**
   * Callback function when the form is submitted.
   * @param data The form data.
   */
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  company: string;
  serviceType: string;
  consent: boolean;
}

const defaultSocialLinks = [
  {
    id: "1",
    name: "X",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg",
    href: "#x",
  },
  {
    id: "2",
    name: "Instagram",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg",
    href: "#instagram",
  },
  {
    id: "3",
    name: "LinkedIn",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg",
    href: "#linkedin",
  },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We can turn your dream project into reality",
  mainMessage = "Let's talk! ",
  contactEmail = "hello@pixelperfect.com",
  socialLinks = defaultSocialLinks,
  backgroundImageSrc = "https://images.unsplash.com/photo-1742273330004-ef9c9d228530?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    serviceType: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/3hpi189csecyv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              mobile: formData.mobile,
              company: formData.company,
              serviceType: formData.serviceType,
              consent: formData.consent,
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        company: "",
        serviceType: "",
        consent: false,
      });
      onSubmit?.(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Grainient Background */}
      <div className="fixed inset-0 w-full h-full z-0 bg-white">
        <Grainient
          color1="#c0bfbc"
          color2="#deddda"
          color3="#c0bfbc"
          timeSpeed={0.3}
          colorBalance={0.49}
          warpStrength={3.75}
          warpFrequency={0}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={3.3}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.75}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-12 pt-24 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 w-full max-w-7xl p-4 md:p-8 rounded-xl pointer-events-auto items-center">
          <div className="flex flex-col justify-center items-start p-4 lg:p-8 lg:ml-8">
            <div className="flex flex-col items-center w-full">
              <div className="w-120 h-110 mb-2">
                <Lottie animationData={diamondAnimation} loop={true} />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#313755] leading-tight max-w-lg mt-2 text-center antialiased">
                {title}
              </h1>
            </div>
          </div>

          <div className="relative bg-white p-5 sm:p-6 md:p-7 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto lg:mx-0 w-full">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-luxury font-semibold text-[#0A1628] mb-2 break-words tracking-tight">
                {mainMessage}
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="firstName"
                      className="text-xs font-semibold text-gray-700"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400 h-11 rounded-xl transition-all duration-200 hover:border-gray-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="lastName"
                      className="text-xs font-semibold text-gray-700"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400 h-11 rounded-xl transition-all duration-200 hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400 h-11 rounded-xl transition-all duration-200 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="mobile"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400 h-11 rounded-xl transition-all duration-200 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="company"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400 h-11 rounded-xl transition-all duration-200 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-gray-700">
                    What type of engagement are you looking for?
                  </Label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Model Training"
                        checked={formData.serviceType === "Model Training"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Model Training</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Alignment & RLHF"
                        checked={formData.serviceType === "Alignment & RLHF"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Alignment & RLHF</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Evaluation & Benchmarking"
                        checked={formData.serviceType === "Evaluation & Benchmarking"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Evaluation & Benchmarking</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Domain-Specific Expertise"
                        checked={formData.serviceType === "Domain-Specific Expertise"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Domain-Specific Expertise</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Custom AI Engagement"
                        checked={formData.serviceType === "Custom AI Engagement"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Custom AI Engagement</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Other"
                        checked={formData.serviceType === "Other"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Other</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          consent: e.target.checked,
                        }))
                      }
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I consent to Adzzat collecting and using my personal
                      data for the purpose of responding to my inquiry, in
                      accordance with the Privacy Policy.
                    </span>
                  </label>
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 text-green-700 text-sm font-medium bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 text-red-700 text-sm font-medium bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-xl border border-red-200 shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A1628] hover:bg-[#1e3a8a] text-white font-bold h-12 rounded-xl text-base mt-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
