"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Target, Heart } from "lucide-react";
import Image from "next/image";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Professionele Training",
      description:
        "Van beginners tot gevorderden - onze ervaren trainers helpen jou jouw zwemtechniek te verbeteren en doelen te bereiken.",
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      icon: Users,
      title: "Gezellig Team",
      description:
        "Word onderdeel van onze hechte zwemfamilie waar vriendschap en teamgeest centraal staan.",
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: Trophy,
      title: "Wedstrijdzwemmen",
      description:
        "Neem deel aan regionale en nationale wedstrijden en ontdek je competitieve kant.",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Heart,
      title: "Voor Iedereen",
      description:
        "Alle leeftijden en niveaus zijn welkom - van peuters tot senioren, van recreatie tot topsport.",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
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
            <span className="text-slate-900">Zwemmen met</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Passie & Plezier
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Al meer dan 20 jaar zijn wij de gezelligste zwemvereniging van
            Roermond. Bij ons draait het om{" "}
            <span className="font-bold text-blue-600">
              plezier in het water
            </span>
            , persoonlijke groei en een hechte teamgeest! 🏊‍♀️
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Photos Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* First Training Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/trainingInActie2.jpg"
                  alt="Training bij De Roersoppers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    Lesgeven
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    Koen geeft les aan onze jongste zwemmers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Training Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/training.jpg"
                  alt="Training bij De Roersoppers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    Training in Actie
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    De Roersoppers aan het werk
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
