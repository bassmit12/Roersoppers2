"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Users } from "lucide-react";

export default function CodeBlauwPage() {
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
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Code Blauw
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Samen voor een sportief en veilig zwemklimaat
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-7 w-7 text-blue-600" />
                  Wat is Code Blauw?
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Met Code Blauw laten de KNZB, zwemverenigingen en zwembaden
                  zien dat we ons samen sterk maken voor een sportief en veilig
                  zwem-klimaat. Het is onze ambitie om een blauwe golf te
                  creëren, waarbij iedereen elkaar aansteekt om op een positieve
                  manier met elkaar, met de sport en de faciliteiten om te gaan.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Code Blauw staat voor:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: "🤝", text: "Respect" },
                      { icon: "⚡", text: "Sportiviteit" },
                      { icon: "🛡️", text: "Veiligheid" },
                      { icon: "🎉", text: "Plezier!" },
                    ].map((item) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-lg font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Onze inzet:
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Wij streven naar een zwemsport-klimaat, waarin iedereen
                    respectvol met elkaar omgaat, zich houdt aan de regels, zich
                    inzet om grensoverschrijdend gedrag te voorkomen en vooral
                    veel plezier maakt samen.
                  </p>
                </div>
              </div>

              {/* Professional Standards */}
              <div className="space-y-6 pt-4">
                <div className="bg-slate-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Professionele Standaarden
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Onze trainers, vrijwilligers, coaches en officials
                    onderschrijven de gedragsregels voor begeleiders in de sport,
                    die zijn vastgesteld door de NOC*NSF. Daarnaast beschikt onze
                    vereniging over een door justitie afgegeven VOG (Verklaring
                    Omtrent Gedrag) van de personen die omgaan met minderjarigen
                    binnen onze vereniging.
                  </p>
                </div>

                {/* Vertrouwenscontactpersoon */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Users className="h-7 w-7 text-amber-600" />
                    Vertrouwenscontactpersoon
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      In dit kader heeft onze vereniging tevens een
                      vertrouwenspersoon aangesteld. De vertrouwenspersoon is er
                      voor de eerste opvang van vragen, vermoedens, meldingen,
                      klachten en aangifte van seksuele intimidatie en ander
                      ongewenst gedrag voor leden, ouders van leden, trainers,
                      vrijwilligers en bestuur.
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed">
                      Verder kan de vertrouwenspersoon doorverwijzen naar andere
                      instanties zoals bijvoorbeeld maatschappelijk werk, huisarts
                      of politie. Uiteraard worden hierbij de privacyregels in
                      acht genomen.
                    </p>
                    
                    <div className="bg-white rounded-lg p-5 mt-4 border-2 border-amber-200">
                      <p className="text-slate-700 font-semibold text-lg">
                        Momenteel zijn wij op zoek naar een nieuwe
                        vertrouwenscontactpersoon. Mensen die hiervoor
                        belangstelling hebben kunnen zich melden bij onze
                        voorzitter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Samen maken we het verschil
                </h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  Code Blauw is niet alleen een symbool, het is een belofte aan
                  alle zwemmers en hun families voor een veilige, respectvolle en
                  plezierige zwemomgeving.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
