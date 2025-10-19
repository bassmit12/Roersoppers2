"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { InstagramFeed } from "./InstagramFeed";

export function Events() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="text-slate-900">Volg Ons</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Verhaal
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ontdek de laatste updates, foto&apos;s en verhalen van{" "}
            <span className="font-bold text-blue-600">De Roersoppers</span> via
            onze Instagram! 📸
          </p>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <InstagramFeed username="patrickderoersopperssg" count={3} />
        </motion.div>

        {/* Instagram Follow Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.instagram.com/patrickderoersopperssg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            Volg ons op Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
