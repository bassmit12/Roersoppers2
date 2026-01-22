"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Trophy, Heart, CheckCircle } from "lucide-react";

export default function StartgemeenschapPage() {
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
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Startgemeenschap Patrick – De Roersoppers
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Samen sterker in het water!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Introductie */}
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
                    Samen Sterker
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Sinds het seizoen 2016-2017 bundelen ZV De Roersoppers en ZV Patrick hun krachten in <strong>Startgemeenschap Patrick – De Roersoppers</strong>. Tijdens wedstrijden treden we op als één team, gedreven door een gedeelde passie voor zwemsport en de ambitie om het beste uit onszelf te halen.
                  </p>

                  <p className="text-slate-700 leading-relaxed text-lg">
                    Door samen te werken op het gebied van trainingen, trainers en accommodaties, vormen we een krachtig zwemcollectief in Midden-Limburg.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wat betekent dit in de praktijk */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Trophy className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Wat betekent dit in de praktijk?
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">
                        Twee verenigingen, één wedstrijdteam
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      ZV De Roersoppers en ZV Patrick blijven zelfstandig, maar staan tijdens wedstrijden zij aan zij.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Heart className="h-8 w-8 text-cyan-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">
                        Eén gedeelde visie
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      We geloven in verbinding, plezier in de sport, persoonlijke ontwikkeling en een gezonde leefstijl.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Trophy className="h-8 w-8 text-teal-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">
                        Wedstrijdzwemmers
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      Samen brengen we ongeveer 80 fanatieke zwemmers op het startblok.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lidmaatschap & Startvergunning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Lidmaatschap & Startvergunning
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Om deel te nemen aan wedstrijden, heeft iedere wedstrijdzwemmer een startvergunning nodig. Deze wordt aangevraagd bij de KNZB, onder de gezamenlijke vlag van de startgemeenschap Patrick – De Roersoppers.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      Leden met een doorlopende startvergunning maken automatisch deel uit van de startgemeenschap, maar blijven gewoon lid van hun eigen vereniging.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Vragen over de startgemeenschap?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Neem gerust contact op. We helpen je graag verder!
              </p>
              <a
                href="mailto:info@roersoppers.nl"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
              >
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
