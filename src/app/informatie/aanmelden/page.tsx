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
                  Lid worden bij De Roersoppers
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Kom vrijblijvend vier keer mee zwemmen en ontdek of het bij jou past!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Kennismaken */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Kennismaken
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Wil je ontdekken of zwemmen bij De Roersoppers bij jou past? Zwem vrijblijvend vier keer mee en ervaar het zelf! Samen kiezen we de groep die het beste bij je past.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Mail className="h-6 w-6 text-blue-600" />
                      Contact opnemen
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Stuur een mailtje naar <a href="mailto:info@roersoppers.nl" className="text-blue-600 hover:text-blue-700 underline font-semibold">info@roersoppers.nl</a> of loop gewoon eens binnen tijdens een van onze trainingen. We heten je van harte welkom!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aanmelden */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Aanmelden
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Ben je overtuigd en klaar om lid te worden? Download dan hieronder het aanmeldingsformulier:
                  </p>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8 text-center">
                    <FileText className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Aanmeldingsformulier
                    </h3>
                    <a
                      href="/Aanmeldingsformulier Roersoppers.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
                    >
                      <FileText className="h-5 w-5" />
                      Download formulier
                    </a>
                  </div>

                  <div className="space-y-3">
                    <p className="text-slate-700 leading-relaxed text-lg font-semibold">
                      Vul het formulier in, onderteken het en:
                    </p>
                    <ul className="space-y-2 text-slate-700 text-lg ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span>Mail het naar: <a href="mailto:info@roersoppers.nl" className="text-blue-600 hover:text-blue-700 underline font-semibold">info@roersoppers.nl</a>, of</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span>Lever het uitgeprint in bij je trainer.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-amber-600" />
                      Let op
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Aanmelding is voor minimaal één jaar en alleen geldig met een ingevulde incasso-machtiging.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Belangrijk om te weten
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Bij leden onder de 18 jaar moet een ouder/verzorger het formulier ondertekenen.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Papieren aanmeldformulieren zijn ook tijdens de training verkrijgbaar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>De actuele contributiebedragen vind je onderaan deze pagina.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Er zijn subsidies mogelijk via het <a href="https://jeugdfondssportencultuur.nl/wp-content/uploads/Spelregels-Jeugdfonds-Sport-Cultuur-Limburg-gemeente-Roerdalen-2025.v3.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">Jeugdfonds Sport & Cultuur Limburg</a>.</span>
                    </li>
                  </ul>
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
                    Opzeggen van je lidmaatschap
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
                    Opzeggen kan op elk moment per e-mail of met een brief:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 bg-white rounded-lg p-4">
                      <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">E-mail</p>
                        <a
                          href="mailto:admin@roersoppers.nl"
                          className="text-cyan-600 hover:text-cyan-700 underline text-lg"
                        >
                          admin@roersoppers.nl
                        </a>
                      </div>
                    </div>
                    <div className="text-slate-700 text-lg">
                      Of lever een brief in bij de trainer tijdens de training.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Opzegtermijn
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-3">
                    Houd rekening met deze deadlines:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-lg ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>Opzeggen vóór 1 november óf 1 juli.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>Let op: masters 2 en Studenten opzeggen vóór 1 november (zij betalen per jaar).</span>
                    </li>
                  </ul>

                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mt-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      Kosten bij te late afmelding
                    </h4>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Bij te late afmelding worden de volgende kosten alsnog in rekening gebracht:
                    </p>
                    <ul className="space-y-2 text-slate-700 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Afdracht aan de KNZB</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Contributie over de verstreken maanden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Eventuele kosten van de startvergunning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mt-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      Langdurige ziekte
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Bij langdurige ziekte (langer dan 3 maanden), én als dit tijdig is gemeld, wordt de contributie tijdelijk opgeschort.
                    </p>
                  </div>
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
                    Contributiestructuur 2025–2026
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Bij De Roersoppers geloven we in betaalbaar zwemmen met kwaliteit. Hieronder vind je een overzicht van de kosten, inclusief verplichte KNZB-afdrachten en de lidmaatschapstarieven voor verschillende doelgroepen. Binnen de samenwerking met ZV Patrick zijn de tarieven voor wedstrijdzwemmers afgestemd op elkaar. Er blijven echter kleine verschillen bestaan tussen beide verenigingen.
                  </p>
                </div>

                {/* Tarieven Niet-Wedstrijdzwemmers */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Tarieven voor Niet-Wedstrijdzwemmers
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-100 to-cyan-100">
                          <th className="text-left p-4 font-bold text-slate-900 border border-blue-200">Groep</th>
                          <th className="text-left p-4 font-bold text-slate-900 border border-blue-200">Aantal trainingen/week*</th>
                          <th className="text-left p-4 font-bold text-slate-900 border border-blue-200">Jaarbedrag</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr className="hover:bg-blue-50">
                          <td className="p-4 border border-blue-200">Masters 2</td>
                          <td className="p-4 border border-blue-200">1x per week</td>
                          <td className="p-4 border border-blue-200 font-semibold">€130</td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                          <td className="p-4 border border-blue-200">Masters 1</td>
                          <td className="p-4 border border-blue-200">Max. 3x per week</td>
                          <td className="p-4 border border-blue-200 font-semibold">€217</td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                          <td className="p-4 border border-blue-200">Jeugd Recreatief</td>
                          <td className="p-4 border border-blue-200">Max. 3x per week</td>
                          <td className="p-4 border border-blue-200 font-semibold">€254</td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                          <td className="p-4 border border-blue-200">Studenten (uitwonend)**</td>
                          <td className="p-4 border border-blue-200">Max. 1x per week</td>
                          <td className="p-4 border border-blue-200 font-semibold">€90</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      **Studentenregeling
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Studeer je op kamers en woon je meer dan 30 km van Melick? Dan kun je gebruikmaken van onze studentenregeling om toch lid te blijven. Mail ons voor de mogelijkheden via <a href="mailto:admin@roersoppers.nl" className="text-blue-600 hover:text-blue-700 underline font-semibold">admin@roersoppers.nl</a>.
                    </p>
                  </div>
                </div>

                {/* Tarieven Wedstrijdzwemmers */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Tarieven voor Wedstrijdzwemmers <span className="text-base font-normal text-slate-600">(startvergunning inbegrepen)</span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-cyan-100 to-blue-100">
                          <th className="text-left p-4 font-bold text-slate-900 border border-cyan-200">Groep</th>
                          <th className="text-left p-4 font-bold text-slate-900 border border-cyan-200">Aantal trainingen/week*</th>
                          <th className="text-left p-4 font-bold text-slate-900 border border-cyan-200">Jaarbedrag</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr className="hover:bg-cyan-50">
                          <td className="p-4 border border-cyan-200">Wedstrijdmasters</td>
                          <td className="p-4 border border-cyan-200">Max. 4x per week</td>
                          <td className="p-4 border border-cyan-200 font-semibold">€290</td>
                        </tr>
                        <tr className="hover:bg-cyan-50">
                          <td className="p-4 border border-cyan-200">Jeugd Wedstrijd</td>
                          <td className="p-4 border border-cyan-200">Max. 3x per week</td>
                          <td className="p-4 border border-cyan-200 font-semibold">€254</td>
                        </tr>
                        <tr className="hover:bg-cyan-50">
                          <td className="p-4 border border-cyan-200">Selectie</td>
                          <td className="p-4 border border-cyan-200">Max. 4x per week</td>
                          <td className="p-4 border border-cyan-200 font-semibold">€290</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500">
                    <p className="text-slate-700 leading-relaxed">
                      *Het aantal trainingen in de tabel betreft het aantal trainingen bij de Roersoppers. Vanwege de samenwerking is het ook mogelijk om extra trainingen te volgen bij <a href="https://www.zv-patrick.nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">Patrick Echt</a>.
                    </p>
                  </div>
                </div>

                {/* KNZB Afdrachten */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Verplichte KNZB-afdrachten
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Deze bedragen zijn verplicht voor iedereen die zwemt bij een aangesloten vereniging, en worden jaarlijks door de KNZB vastgesteld. Ze zijn opgenomen in onze lidmaatschapsprijzen (tenzij anders vermeld).
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 space-y-3">
                    <ul className="space-y-3 text-slate-700 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Algemene bijdrage voor iedere zwemmer: <strong>€25,40 per jaar</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Startvergunning t/m 12 jaar: <strong>€2,30 per jaar</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Startvergunning vanaf 13 jaar: <strong>€44,80 per jaar</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Betaling & Incasso */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Betaling & Incasso
                  </h3>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 space-y-3">
                    <ul className="space-y-3 text-slate-700 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Betaling verloopt via automatische incasso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Je ontvangt geen voorafgaande melding, afschrijvingen zijn in maart en september. (Masters 2 en Studenten jaarlijks in maart)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Bij aanmelding is een ondertekende incasso-machtiging verplicht</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Voor aanmeldingen gelden dezelfde voorwaarden als voor bestaande leden</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact voor vragen */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
                  <p className="text-lg leading-relaxed mb-3">
                    <strong>Vragen over je lidmaatschap of contributie?</strong> Mail ons gerust via: <a href="mailto:admin@roersoppers.nl" className="text-white underline hover:text-blue-100 font-semibold">admin@roersoppers.nl</a>
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>Wil je lid worden of heb je vragen over welk lidmaatschap het beste bij jou past?</strong> Neem contact op via <a href="mailto:info@roersoppers.nl" className="text-white underline hover:text-blue-100 font-semibold">info@roersoppers.nl</a> – we helpen je graag op weg!
                  </p>
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
                Neem gerust contact op. We helpen je graag verder!
              </p>
              <a
                href="mailto:info@roersoppers.nl"
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
