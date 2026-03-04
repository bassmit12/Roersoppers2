"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Heart, Mail, Briefcase } from "lucide-react";

export default function OverOnsPage() {
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Over De Roersoppers
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Plezier, prestatie en verbondenheid sinds 1970
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Over De Roersoppers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Onze Vereniging
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Sinds 1970 is Zwemvereniging De Roersoppers een bruisende
                    zwemvereniging in Roerdalen waar plezier, prestatie en
                    verbondenheid samenkomen. We zijn trots op onze hechte
                    clubcultuur en zetten ons met hart en ziel in voor jong en
                    oud, recreatief én in wedstrijdverband.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vrijwilligers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Vrijwilligers maken het verschil
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Onze vereniging draait op de kracht van vrijwilligers. Van
                    activiteitenbegeleiders tot juryleden bij wedstrijden. Jouw
                    inzet maakt écht verschil. Wil je iets betekenen? Spreek ons
                    gerust aan bij het zwembad of stuur een mailtje. We kunnen
                    je hulp goed gebruiken!
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <a
                        href="mailto:voorzitter@roersoppers.nl"
                        className="text-blue-600 hover:text-blue-700 underline font-semibold text-lg"
                      >
                        voorzitter@roersoppers.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bestuur */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Bestuur
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Een betrokken team dat zorgt voor organisatie, ontwikkeling en
                  toekomstvisie:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-teal-100 to-cyan-100">
                        <th className="text-left p-4 font-bold text-slate-900 border border-teal-200">
                          Naam
                        </th>
                        <th className="text-left p-4 font-bold text-slate-900 border border-teal-200">
                          Functie
                        </th>
                        <th className="text-left p-4 font-bold text-slate-900 border border-teal-200">
                          E-mail
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="hover:bg-teal-50">
                        <td className="p-4 border border-teal-200 font-semibold">
                          Charles Bos
                        </td>
                        <td className="p-4 border border-teal-200">
                          Voorzitter
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:voorzitter@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            voorzitter@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="p-4 border border-teal-200 font-semibold">
                          Koen Wijnands
                        </td>
                        <td className="p-4 border border-teal-200">
                          TC-zaken & Trainerszaken
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:tc@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            tc@roersoppers.nl
                          </a>
                          <br />
                          <a
                            href="mailto:trainers@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            trainers@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="p-4 border border-teal-200 font-semibold">
                          Joep Thewissen
                        </td>
                        <td className="p-4 border border-teal-200">
                          Penningmeester
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:penningmeester@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            penningmeester@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="p-4 border border-teal-200 font-semibold">
                          Jeroen Meuleners
                        </td>
                        <td className="p-4 border border-teal-200">
                          Algemeen lid & secretaris
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:secretaris@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            secretaris@roersoppers.nl
                          </a>
                          <br />
                          <a
                            href="mailto:info@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            info@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="p-4 border border-teal-200 font-semibold">
                          Saskia Ramakers
                        </td>
                        <td className="p-4 border border-teal-200">
                          Algemeen lid & PR-zaken
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:pr@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            pr@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td
                          className="p-4 border border-teal-200 font-semibold"
                          colSpan={2}
                        >
                          Boekhouding & Ledenadministratie
                        </td>
                        <td className="p-4 border border-teal-200">
                          <a
                            href="mailto:admin@roersoppers.nl"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            admin@roersoppers.nl
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Trainers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Onze Trainers
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Deskundig, Enthousiast en Betrokken
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Bij De Roersoppers draait training om meer dan alleen
                    techniek. Onze trainers begeleiden zwemmers op ieder niveau
                    met persoonlijke aandacht, creativiteit en plezier. Of je nu
                    net begint of traint voor een persoonlijk record, wij zorgen
                    dat je blijft groeien én genieten.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">
                      Ons trainersteam bestaat uit:
                    </h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Charles Bos",
                        "Arno Schrauwen",
                        "Ernest Smit",
                        "Koen Wijnands",
                        "Senna Bongartz",
                        "Mike Jansen",
                        "Marco Moers",
                        "René Zenden",
                        "Loes Slebe",
                        "Jeroen Meuleners",
                        "Jules Gribling",
                        "Max Martens",
                      ].map((trainer) => (
                        <div
                          key={trainer}
                          className="bg-white rounded-lg p-3 text-slate-700 font-medium border border-blue-200"
                        >
                          {trainer}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      Vragen aan één van onze trainers?
                    </h4>
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-cyan-600" />
                      <a
                        href="mailto:trainers@roersoppers.nl"
                        className="text-blue-600 hover:text-blue-700 underline font-semibold text-lg"
                      >
                        trainers@roersoppers.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Vragen of interesse in vrijwilligerswerk?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Neem gerust contact op. We helpen je graag verder!
              </p>
              <a
                href="mailto:voorzitter@roersoppers.nl"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Contact opnemen
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
