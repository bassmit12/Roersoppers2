"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type TrainingSession = {
  day: string;
  time: string;
  group: string;
  location: string;
  coach?: string;
};

const trainingSessions: TrainingSession[] = [
  {
    day: "Maandag",
    time: "18:30 - 20:00",
    group: "Jongeren recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
    location: "Zwembad De Roer",
  },
  {
    day: "Dinsdag",
    time: "18:30 - 19:30",
    group: "Jeugd recreatief/Jeugd wedstrijd",
    location: "Zwembad De Roer",
  },
  {
    day: "Dinsdag",
    time: "19:30 - 20:30",
    group: "Masters 1",
    location: "Zwembad De Roer",
  },
  {
    day: "Woensdag",
    time: "18:30 - 20:00",
    group: "Jongeren recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
    location: "Zwembad De Roer",
  },
  {
    day: "Donderdag",
    time: "18:30 - 19:30",
    group: "Jeugd recreatief/Jeugd wedstrijd",
    location: "Zwembad De Roer",
  },
  {
    day: "Donderdag",
    time: "19:30 - 20:30",
    group: "Jongeren recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
    location: "Zwembad De Roer",
  },
  {
    day: "Donderdag",
    time: "20:30 - 21:30",
    group: "Masters 1",
    location: "Zwembad De Roer",
  },
  {
    day: "Donderdag",
    time: "21:30 - 22:30",
    group: "Masters 2",
    location: "Zwembad De Roer",
  },
  {
    day: "Zaterdag",
    time: "08:00 - 09:00",
    group:
      "Jongeren recreatief/Jongeren Wedstrijd/Wedstrijdmasters en Masters 1",
    location: "Zwembad De Roer",
  },
  {
    day: "Zaterdag",
    time: "12:00 - 13:15",
    group: "Jeugd recreatief/Jeugd wedstrijd",
    location: "Zwembad De Roer",
  },
];

// Days of the week in order
const daysOfWeek = [
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
  "Zondag",
];

// Group sessions by day
const scheduleByDay: { [key: string]: TrainingSession[] } = {};
daysOfWeek.forEach((day) => {
  scheduleByDay[day] = trainingSessions.filter(
    (session) => session.day === day,
  );
});

export default function TrainingsschemaPage() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl">
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="text-slate-900">Ons</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Trainingsschema
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Bekijk hier ons wekelijks trainingsschema voor alle zwemgroepen
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Schedule - Calendar View */}
        <section
          ref={ref}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
        >
          {/* Week Calendar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Calendar className="h-8 w-8" />
                Weekoverzicht
              </h2>
            </div>

            {/* Desktop Calendar Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-7 border-b border-slate-200">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className={`p-4 text-center font-bold text-slate-700 border-r border-slate-200 last:border-r-0 ${
                      scheduleByDay[day].length > 0
                        ? "bg-gradient-to-b from-cyan-50 to-blue-50"
                        : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm sm:text-base">{day}</div>
                    {scheduleByDay[day].length > 0 && (
                      <div className="mt-1 text-xs text-cyan-600 font-semibold">
                        {scheduleByDay[day].length}{" "}
                        {scheduleByDay[day].length === 1
                          ? "training"
                          : "trainingen"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 min-h-[500px]">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="border-r border-slate-200 last:border-r-0 p-3 bg-white"
                  >
                    {scheduleByDay[day].length > 0 ? (
                      <div className="space-y-2">
                        {scheduleByDay[day].map((session, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-3 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            {/* Time Badge */}
                            <div className="flex items-center gap-1.5 mb-2">
                              <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                              <span className="font-bold text-xs">
                                {session.time}
                              </span>
                            </div>

                            {/* Group Name */}
                            <div className="text-xs font-semibold leading-tight mb-2 line-clamp-3">
                              {session.group}
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-1 text-xs opacity-90">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">De Roer</span>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400">
                        <div className="text-center">
                          <div className="text-4xl mb-2">–</div>
                          <div className="text-xs">Geen training</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet List View */}
            <div className="lg:hidden divide-y divide-slate-200">
              {daysOfWeek.map((day, dayIndex) => {
                if (scheduleByDay[day].length === 0) return null;

                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: dayIndex * 0.1 }}
                    className="p-4 sm:p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {day}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {scheduleByDay[day].length}{" "}
                          {scheduleByDay[day].length === 1
                            ? "training"
                            : "trainingen"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 ml-5">
                      {scheduleByDay[day].map((session, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white shadow-lg"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-4 w-4" />
                            <span className="font-bold text-sm">
                              {session.time}
                            </span>
                          </div>

                          <div className="font-semibold text-sm mb-2 leading-snug">
                            {session.group}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs opacity-90">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{session.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 sm:mt-16 bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Belangrijke Informatie
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold">1</span>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Zorg dat je minimaal <strong>15 minuten voor aanvang</strong>{" "}
                  aanwezig bent
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold">2</span>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Breng altijd je <strong>zwemspullen</strong> mee:
                  zwembroek/badpak, handdoek, badmuts en zwembril
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold">3</span>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Bij afwezigheid graag <strong>vooraf doorgeven</strong> aan de
                  trainer
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold">4</span>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Wijzigingen worden tijdig via de <strong>Socials</strong>{" "}
                  gecommuniceerd
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-6 text-lg">
              Heb je vragen over het trainingsschema?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white font-bold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Neem contact op
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
