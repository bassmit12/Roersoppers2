"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function SwimGroups() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="groups"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 overflow-hidden"
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
            <span className="text-slate-900">Onze</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Zwemgroepen
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Voor elke leeftijd en elk niveau hebben we de perfecte groep waar je
            je thuis zult voelen
          </p>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Junioren */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/junioren.jpg"
                alt="Junioren - De Roersoppers"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                Junioren
              </h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
                Voor jonge zwemmers die de basis technieken leren en plezier
                hebben in het water
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Wedstrijdploeg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/wedstrijdploeg.jpg"
                alt="Wedstrijdploeg - De Roersoppers"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                Wedstrijdploeg
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Competitieve zwemmers die deelnemen aan regionale en nationale
                wedstrijden
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Senioren */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/senioren.jpg"
                alt="Senioren - De Roersoppers"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                Senioren
              </h3>
              <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed">
                Ervaren zwemmers die blijven trainen voor fitness en plezier
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
