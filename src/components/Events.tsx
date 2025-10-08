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
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Instagram className="w-5 h-5 flex-shrink-0" />
            <span>Laatste Instagram Posts</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-900">Volg Ons</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Verhaal
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
          className="mb-16"
        >
          <InstagramFeed username="patrickderoersopperssg" count={3} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto border border-white/40">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Volg ons op Instagram!
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Blijf op de hoogte van al onze zwemactiviteiten, wedstrijden en
              gezellige momenten door ons te volgen op Instagram!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/patrickderoersopperssg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 mr-2 flex-shrink-0" />
                Volg @patrickderoersopperssg
              </a>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
                📧 Nieuwsbrief
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
