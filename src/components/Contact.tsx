"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Locatie",
    details: ["Apollobad Melick", "Roerstreek, Nederland"],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefoon",
    details: ["0475-533635"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["info@roersoppers.nl"],
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--primary-blue)" }}
          >
            Neem Contact Op
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--aqua)] to-[var(--teal)] mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-xl text-gray-600">Klaar om te duiken?</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--primary-blue)" }}
            >
              Contactinformatie
            </h3>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold mb-1"
                      style={{ color: "var(--primary-blue)" }}
                    >
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-12 p-6 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--primary-blue)" }}
              >
                Trainingstijden
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Maandag - Vrijdag:</strong> 17:00 - 21:00
                </p>
                <p>
                  <strong>Zaterdag:</strong> 9:00 - 12:00
                </p>
                <p>
                  <strong>Zondag:</strong> Rustdag
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--primary-blue)" }}
              >
                Stuur ons een Bericht
              </h3>

              {submitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Bedankt voor je bericht! We nemen snel contact met je op.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Je Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--aqua)] focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Voer je naam in"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--aqua)] focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Voer je e-mailadres in"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--aqua)] focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                    placeholder="Vertel ons over je interesse om lid te worden van ons team..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 water-gradient disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Verstuur Bericht</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
