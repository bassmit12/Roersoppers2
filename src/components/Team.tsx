"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Star, Heart, Target, Zap } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  achievement: string;
  specialty: string;
  icon: React.ElementType;
  color: string;
  emoji: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Coach Charles",
    role: "Hoofdtrainer",
    achievement: "20+ jaar ervaring",
    specialty: "Techniektraining & Wedstrijdvoorbereiding",
    icon: Target,
    color: "from-blue-500 to-cyan-400",
    emoji: "🏊‍♂️",
    image: "/images/charles.jpg",
  },
  {
    id: 2,
    name: "Coach Rick",
    role: "Jeugdtrainer",
    achievement: "Specialist beginners",
    specialty: "Zwemles & Waterveiligheid",
    icon: Heart,
    color: "from-green-500 to-teal-400",
    emoji: "👶",
  },
  {
    id: 3,
    name: "Emma van der Berg",
    role: "Teamcaptain",
    achievement: "Provinciale kampioene",
    specialty: "Vrije slag & Vlinderslag",
    icon: Trophy,
    color: "from-yellow-500 to-orange-400",
    emoji: "🏆",
  },
  {
    id: 4,
    name: "Koen Wijnands",
    role: "Wedstrijdzwemmer",
    achievement: "Regionale records",
    specialty: "Rugslag & Wisselslag",
    icon: Star,
    color: "from-purple-500 to-pink-400",
    emoji: "⭐",
    image: "/images/koen.jpg",
  },
  {
    id: 5,
    name: "Sophie Willems",
    role: "Recreatiezwemster",
    achievement: "Triathlon finisher",
    specialty: "Langeafstandzwemmen",
    icon: Zap,
    color: "from-rose-500 to-red-400",
    emoji: "💪",
  },
  {
    id: 6,
    name: "Onze Zwemfamilie",
    role: "120+ Leden",
    achievement: "Van 4 tot 80 jaar",
    specialty: "Samen sterk, samen zwemmen!",
    icon: Users,
    color: "from-indigo-500 to-blue-400",
    emoji: "👥",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/40"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Header with Icon/Photo */}
      <div
        className={`relative p-8 bg-gradient-to-r ${member.color} text-white`}
      >
        {member.image ? (
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-white/30">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <member.icon className="w-6 h-6 opacity-80" />
          </div>
        ) : (
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{member.emoji}</div>
            <member.icon className="w-8 h-8 opacity-80" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
        <p className="text-white/90 font-medium text-center">{member.role}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            <Trophy className="w-4 h-4 mr-2" />
            {member.achievement}
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed">{member.specialty}</p>

        {/* Floating animation elements */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce">
          <span className="text-sm">🌊</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
    </motion.div>
  );
}

export function Team() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
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
            <Users className="w-4 h-4" />
            <span>Ons Dreamteam</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-900">Ontmoet onze</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Zwemfamilie
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Van ervaren trainers tot enthousiaste zwemmers - samen maken we van
            <span className="font-bold text-blue-600"> De Roersoppers</span> een
            plek waar iedereen kan groeien! 🏊‍♂️
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Word onderdeel van ons team!
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Of je nu net begint of al jaren zwemt - bij De Roersoppers is er
              altijd een plek voor jou in onze zwemfamilie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                🏊‍♀️ Word lid!
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
                💬 Stel een vraag
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
