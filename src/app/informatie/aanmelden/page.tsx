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
  Download,
  Users,
  CreditCard,
  ExternalLink,
  XCircle,
} from "lucide-react";

export default function AanmeldenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
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
                Wil je ontdekken of zwemmen bij De Roersoppers bij jou past?
                Zwem vrijblijvend vier keer mee en ervaar het zelf! Samen kiezen
                we de groep die het beste bij je past.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 mt-4">
                Stuur een mailtje naar{" "}
                <a
                  href="mailto:info@roersoppers.nl"
                  className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
                >
                  info@roersoppers.nl
                </a>{" "}
                of loop gewoon eens binnen tijdens een van onze trainingen. We
                heten je van harte welkom!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Aanmelden */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Aanmelden
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Ben je overtuigd en klaar om lid te worden? Download dan
                  hieronder het aanmeldingsformulier:
                </p>

                <a
                  href="/Aanmeldingsformulier Roersoppers.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5" />
                  Download aanmeldingsformulier De Roersoppers
                </a>

                <div className="space-y-3">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Vul het formulier in, onderteken het en:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Mail het naar:{" "}
                        <a
                          href="mailto:info@roersoppers.nl"
                          className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
                        >
                          info@roersoppers.nl
                        </a>
                        , of
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Lever het uitgeprint in bij je trainer.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Let op:</strong> aanmelding is voor minimaal één jaar
                    en alleen geldig met een ingevulde incasso-machtiging.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Belangrijk om te weten */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Belangrijk om te weten
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <ul className="space-y-4 text-slate-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Bij leden onder de 18 jaar moet een ouder/verzorger het
                      formulier ondertekenen.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Tijdens de trainingsdagen zijn papieren aanmeldformulieren
                      ook beschikbaar in het zwembad.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      De actuele contributiebedragen vind je onderaan deze
                      pagina.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Er zijn subsidies mogelijk:{" "}
                      <a
                        href="https://jeugdfondssportencultuur.nl/wp-content/uploads/Spelregels-Jeugdfonds-Sport-Cultuur-Limburg-gemeente-Roerdalen-2025.v3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 underline inline-flex items-center gap-1"
                      >
                        Jeugdfonds Sport & Cultuur
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Opzeggen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Opzeggen van je lidmaatschap
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Opzeggen kan op elk moment per e-mail of met een brief:
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 space-y-3">
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
                  <p className="text-slate-700 text-lg">
                    Of lever een brief in bij de trainer tijdens de training.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Houd rekening met deze deadlines:
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Opzeggen vóór <strong>1 november</strong> óf{" "}
                        <strong>1 juli</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        <strong>Let op:</strong> Masters 2 en Studenten opzeggen
                        vóór <strong>1 november</strong> (zij betalen per jaar).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">
                    Bij te late afmelding worden de volgende kosten alsnog in
                    rekening gebracht:
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Afdracht aan de KNZB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Contributie over de verstreken maanden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Eventuele kosten van de startvergunning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 leading-relaxed">
                    Bij langdurige ziekte (langer dan 3 maanden), én als dit
                    tijdig is gemeld, wordt de contributie tijdelijk opgeschort.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contributiestructuur */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Euro className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Contributiestructuur 2025–2026
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Bij De Roersoppers geloven we in betaalbaar zwemmen met
                  kwaliteit. Hieronder vind je een helder overzicht van de
                  kosten. Inclusief verplichte KNZB-afdrachten en de
                  lidmaatschapstarieven voor verschillende doelgroepen. Binnen
                  de samenwerking met ZV Patrick zijn de tarieven voor
                  wedstrijdzwemmers afgestemd op elkaar. Er blijven echter
                  kleine verschillen bestaan tussen beide verenigingen.
                </p>

                {/* Niet-Wedstrijdzwemmers */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Users className="h-6 w-6 text-cyan-600" />
                    Tarieven voor Niet-Wedstrijdzwemmers
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-cyan-50 to-blue-50">
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-cyan-200">
                            Groep
                          </th>
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-cyan-200">
                            Aantal trainingen/week*
                          </th>
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-cyan-200">
                            Jaarbedrag
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr className="border-b border-slate-100 hover:bg-cyan-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">Masters 2</td>
                          <td className="px-4 py-3">1x per week</td>
                          <td className="px-4 py-3 font-semibold">€130</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-cyan-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">Masters 1</td>
                          <td className="px-4 py-3">Max. 3x per week</td>
                          <td className="px-4 py-3 font-semibold">€217</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-cyan-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">
                            Jeugd Recreatief
                          </td>
                          <td className="px-4 py-3">Max. 3x per week</td>
                          <td className="px-4 py-3 font-semibold">€254</td>
                        </tr>
                        <tr className="hover:bg-cyan-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">
                            Studenten (uitwonend)**
                          </td>
                          <td className="px-4 py-3">Max. 1x per week</td>
                          <td className="px-4 py-3 font-semibold">€90</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-slate-700 leading-relaxed">
                      <strong>**Studentenregeling:</strong> Studeer je op kamers
                      en woon je meer dan 30 km van Melick? Dan kun je
                      gebruikmaken van onze studentenregeling om toch lid te
                      blijven. Mail ons voor de mogelijkheden via{" "}
                      <a
                        href="mailto:admin@roersoppers.nl"
                        className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
                      >
                        admin@roersoppers.nl
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Wedstrijdzwemmers */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Tarieven voor Wedstrijdzwemmers{" "}
                    <span className="text-sm font-normal text-slate-500">
                      (startvergunning inbegrepen)
                    </span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-50 to-cyan-50">
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-blue-200">
                            Groep
                          </th>
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-blue-200">
                            Aantal trainingen/week*
                          </th>
                          <th className="px-4 py-3 text-slate-900 font-bold border-b-2 border-blue-200">
                            Jaarbedrag
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">
                            Wedstrijdmasters
                          </td>
                          <td className="px-4 py-3">Max. 4x per week</td>
                          <td className="px-4 py-3 font-semibold">€290</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">
                            Jeugd Wedstrijd
                          </td>
                          <td className="px-4 py-3">Max. 3x per week</td>
                          <td className="px-4 py-3 font-semibold">€254</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 font-medium">
                            Jongeren Wedstrijd
                          </td>
                          <td className="px-4 py-3">Max. 4x per week</td>
                          <td className="px-4 py-3 font-semibold">€290</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 italic">
                    *Het aantal trainingen in de tabel betreft het aantal
                    trainingen bij de Roersoppers. Vanwege de samenwerking is
                    het ook mogelijk om extra trainingen te volgen bij{" "}
                    <a
                      href="https://www.zv-patrick.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 underline"
                    >
                      Patrick Echt
                    </a>
                    .
                  </p>
                </div>

                {/* KNZB-afdrachten */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Verplichte KNZB-afdrachten
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Deze bedragen zijn verplicht voor iedereen die zwemt bij een
                    aangesloten vereniging, en worden jaarlijks door de KNZB
                    vastgesteld. Ze zijn opgenomen in onze lidmaatschapsprijzen
                    (tenzij anders vermeld). Voor exacte bedragen zie{" "}
                    <a
                      href="https://www.knzb.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 underline inline-flex items-center gap-1"
                    >
                      knzb.nl
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </p>
                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Algemene bijdrage voor iedere zwemmer:{" "}
                        <strong>+/- €25,00</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Startvergunning t/m 12 jaar:{" "}
                        <strong>+/- €2,50</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Startvergunning vanaf 13 jaar:{" "}
                        <strong>+/- €45,00</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Betaling & Incasso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Betaling & Incasso
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <ul className="space-y-3 text-slate-700 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Betaling verloopt via automatische incasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Je ontvangt geen voorafgaande melding, afschrijvingen zijn
                      in maart en september. (Masters 2 en Studenten jaarlijks
                      in maart)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Bij aanmelding is een ondertekende incasso-machtiging
                      verplicht
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      Voor aanmeldingen gelden dezelfde voorwaarden als voor
                      bestaande leden
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 text-lg mt-6">
                  Vragen over je lidmaatschap of contributie? Mail ons gerust
                  via:{" "}
                  <a
                    href="mailto:admin@roersoppers.nl"
                    className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
                  >
                    admin@roersoppers.nl
                  </a>
                </p>
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
                Wil je lid worden of heb je vragen?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Wil je lid worden of heb je vragen over welk lidmaatschap het
                beste bij jou past? We helpen je graag op weg!
              </p>
              <a
                href="mailto:info@roersoppers.nl"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Neem contact op via info@roersoppers.nl
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
