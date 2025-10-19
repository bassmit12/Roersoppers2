"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Mail,
  Euro,
  Calendar,
  Users,
} from "lucide-react";

export default function AanmeldenPage() {
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
                <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Aan- en Afmelden
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Informatie over lidmaatschap, aanmelding en contributie
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Aanmelding nieuwe leden */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Aanmelding nieuwe leden
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Nieuwe leden dienen zich via een aanmeldingsformulier (voor de
                    duur van minimaal één jaar) aan te melden. Aanmelding van
                    nieuwe leden kan alleen plaatsvinden tegelijk met afgifte van
                    een machtiging tot incasso voor de verschuldigde contributie.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-blue-600" />
                      Belangrijke informatie
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Let op:</strong> Betaling van de contributie kan
                      alleen middels afgifte van een incasso-machtiging. De leden
                      ontvangen geen voorafgaande melding van de contributie.
                    </p>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-lg">
                    Bij de leden onder de 18 jaar dienen de ouders of verzorgers
                    het aanmeldingsformulier te ondertekenen. Deze
                    aanmeldingsformulieren zijn tijdens de trainingsdagen in het
                    zwembad aanwezig of kunt u via de link downloaden.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-cyan-600" />
                    Voor minderjarigen
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Voor leden jonger dan 18 jaar is ondertekening door ouders of
                    verzorgers verplicht. Dit is onderdeel van onze zorgplicht en
                    veiligheidsprotocol.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Opzegging lidmaatschap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Opzegging lidmaatschap
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Hoe opzeggen?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                    Opzegging lidmaatschap kan via mail of brief:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 bg-white rounded-lg p-4">
                      <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">E-mail</p>
                        <a
                          href="mailto:voorzitter@roersoppers.nl"
                          className="text-cyan-600 hover:text-cyan-700 underline text-lg"
                        >
                          voorzitter@roersoppers.nl
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Opzegtermijn
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Opzegging kan per de eerste van elke maand, mits er één maand
                    van tevoren schriftelijk wordt opgezegd. Ook na een jaar kan
                    het lidmaatschap worden opgezegd. Wanneer men het lidmaatschap
                    niet opzegt, wordt dit met één jaar verlengd.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      Contributie bij opzegging
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Bij opzegging in de loop van een kwartaal wordt de
                      contributie tot en met het laatste trainingskwartaal in
                      rekening gebracht. Het nieuwe seizoen begint per 1 september.
                    </p>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-lg">
                    Zodra het seizoen is aangebroken, loopt het lidmaatschap
                    automatisch door tot en met 31 augustus van het volgende jaar.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contributie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Euro className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Contributie
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    De contributie wordt per kwartaal geïnd. De leden ontvangen
                    geen voorafgaande melding van de contributie-inning.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Betalingswijze
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Betaling geschiedt alleen via automatische incasso. Bij het
                      aanmelden dient u een incasso-machtiging te verstrekken.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        📅 Kwartalen
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• September - November</li>
                        <li>• December - Februari</li>
                        <li>• Maart - Mei</li>
                        <li>• Juni - Augustus</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        💶 Tarieven
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        Voor actuele tarieven kunt u contact opnemen met het
                        bestuur of deze informatie opvragen tijdens de training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Vragen over aanmelden of afmelden?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Neem gerust contact op met ons bestuur. We helpen je graag verder!
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
