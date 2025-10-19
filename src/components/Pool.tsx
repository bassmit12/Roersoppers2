"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Pool() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pool"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="text-slate-900">Ons</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Zwembad
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Wij trainen in een modern binnenzwembad met uitstekende
            faciliteiten. Onze locatie biedt optimale omstandigheden voor
            zwemmers van alle niveaus, het hele jaar door
          </p>
        </motion.div>

        {/* Pool Images Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-5xl mx-auto">
          {/* Zwembad Buitenkant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zwembad_buiten.jpg"
                alt="Zwembad Gebouw"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                Ons Gebouw
              </h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
                Een modern en goed bereikbaar zwembadcomplex
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Binnenzwembad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zwembad_binnen.jpg"
                alt="Binnenzwembad"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                Binnenzwembad
              </h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
                Trainingen het hele jaar door in optimale omstandigheden
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
