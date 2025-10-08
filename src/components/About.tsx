"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Trophy, Target, Heart, Waves, Star } from "lucide-react";
import Image from "next/image";

interface StatProps {
  number: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  color: string;
}

function AnimatedStat({
  number,
  label,
  suffix = "",
  icon: Icon,
  color,
}: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          const increment = number / 50;
          if (prev + increment >= number) {
            clearInterval(timer);
            return number;
          }
          return prev + increment;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${color} rounded-2xl mb-4 shadow-lg`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-black mb-2 text-slate-800">
        {Math.floor(count)}
        {suffix}
      </div>
      <div className="text-slate-600 font-semibold text-lg">{label}</div>
    </motion.div>
  );
}

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
            <Waves className="w-4 h-4" />
            <span>Over De Roersoppers</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-900">Zwemmen met</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Passie & Plezier
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
              className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Groups Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Onze{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Zwemgroepen
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Voor elke leeftijd en elk niveau hebben we de perfecte groep waar
              je je thuis zult voelen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Junioren */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/junioren.jpg"
                  alt="Junioren - De Roersoppers"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Junioren</h4>
                <p className="text-blue-100">
                  Voor jonge zwemmers die de basis technieken leren en plezier
                  hebben in het water
                </p>
              </div>
            </motion.div>

            {/* Wedstrijdploeg */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/wedstrijdploeg.jpg"
                  alt="Wedstrijdploeg - De Roersoppers"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Wedstrijdploeg</h4>
                <p className="text-yellow-100">
                  Competitieve zwemmers die deelnemen aan regionale en nationale
                  wedstrijden
                </p>
              </div>
            </motion.div>

            {/* Senioren */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/senioren.jpg"
                  alt="Senioren - De Roersoppers"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Senioren</h4>
                <p className="text-purple-100">
                  Ervaren zwemmers die blijven trainen voor fitness en plezier
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 text-slate-800 text-center">
                Waarom kiezen voor De Roersoppers?
              </h3>
              
              {/* Modern 2x2 Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0 }}
                  className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">🏊‍♂️</div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Professionele Training</h4>
                  <p className="text-slate-600 text-sm">Ervaren begeleiding voor elk niveau</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">👶</div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Alle Leeftijden</h4>
                  <p className="text-slate-600 text-sm">Van 4 jaar tot senior zwemmers</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Competitie & Fun</h4>
                  <p className="text-slate-600 text-sm">Recreatie én wedstrijdzwemmen</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.3 }}
                  className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">🎉</div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Sociale Activiteiten</h4>
                  <p className="text-slate-600 text-sm">Kamps, uitjes en teambuilding</p>
                </motion.div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="relative"
            >
              <div className="border-l-4 border-blue-400 pl-6 py-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3 opacity-70">�</span>
                  <h4 className="text-xl font-semibold text-slate-800">Onze Filosofie</h4>
                </div>
                <blockquote className="text-xl leading-relaxed text-slate-700 italic font-light">
                  &ldquo;Zwemmen is meer dan techniek. Het gaat om{" "}
                  <span className="font-medium text-blue-600">zelfvertrouwen</span>,{" "}
                  <span className="font-medium text-cyan-600">vriendschap</span> en vooral{" "}
                  <span className="font-medium text-slate-800">plezier in het water</span>.&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/training.jpg"
                  alt="Training bij De Roersoppers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Training in Actie</h3>
                  <p className="text-white/90">De Roersoppers aan het werk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <AnimatedStat
            number={120}
            label="Actieve Leden"
            suffix="+"
            icon={Users}
            color="from-blue-400 to-cyan-400"
          />
          <AnimatedStat
            number={35}
            label="Medailles dit Jaar"
            icon={Trophy}
            color="from-yellow-400 to-orange-400"
          />
          <AnimatedStat
            number={20}
            label="Jaar Ervaring"
            suffix="+"
            icon={Star}
            color="from-purple-400 to-pink-400"
          />
        </motion.div>
      </div>
    </section>
  );
}
