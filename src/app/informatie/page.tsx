"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Euro,
  Users,
  CheckCircle,
  AlertCircle,
  Calendar,
  Mail,
} from "lucide-react";

export default function InformatiePage() {
  const codeBlauwRef = useRef<HTMLElement>(null);
  const aanmeldRef = useRef<HTMLElement>(null);
  const contributieRef = useRef<HTMLElement>(null);

  const isCodeBlauwInView = useInView(codeBlauwRef, {
    once: true,
    margin: "-100px",
  });
  const isAanmeldInView = useInView(aanmeldRef, {
    once: true,
    margin: "-100px",
  });
  const isContributieInView = useInView(contributieRef, {
    once: true,
    margin: "-100px",
  });

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
                <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="text-slate-900">Informatie</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  voor leden
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Belangrijke informatie over lidmaatschap, regels en tarieven
              </p>
            </motion.div>
          </div>
        </section>

        {/* Code Blauw Section */}
        <section
          ref={codeBlauwRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCodeBlauwInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Code Blauw
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Wat is Code Blauw?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Met Code Blauw laten de KNZB, zwemverenigingen en zwembaden
                  zien dat we ons samen sterk maken voor een sportief en veilig
                  zwem-klimaat. Het is onze ambitie om een blauwe golf te
                  creëren, waarbij iedereen elkaar aansteekt om op een positieve
                  manier met elkaar, met de sport en de faciliteiten om te gaan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Code Blauw staat voor:
                  </h4>
                  <ul className="space-y-2">
                    {["Respect", "Sportiviteit", "Veiligheid", "Plezier!"].map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-slate-700"
                        >
                          <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Onze inzet:
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    Wij streven naar een zwemsport-klimaat, waarin iedereen
                    respectvol met elkaar omgaat, zich houdt aan de regels, zich
                    inzet om grensoverschrijdend gedrag te voorkomen en vooral
                    veel plezier maakt samen.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Onze trainers, vrijwilligers, coaches en officials
                  onderschrijven de gedragsregels voor begeleiders in de sport,
                  die zijn vastgesteld door de NOC*NSF. Daarnaast beschikt onze
                  vereniging over een door justitie afgegeven VOG (Verklaring
                  Omtrent Gedrag) van de personen die omgaan met minderjarigen
                  binnen onze vereniging.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-amber-600" />
                    Vertrouwenscontactpersoon
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In dit kader heeft onze vereniging tevens een
                    vertrouwenspersoon aangesteld. De vertrouwenspersoon is er
                    voor de eerste opvang van vragen, vermoedens, meldingen,
                    klachten en aangifte van seksuele intimidatie en ander
                    ongewenst gedrag voor leden, ouders van leden, trainers,
                    vrijwilligers en bestuur.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Verder kan de vertrouwenspersoon doorverwijzen naar andere
                    instanties zoals bijvoorbeeld maatschappelijk werk, huisarts
                    of politie. Uiteraard worden hierbij de privacyregels in
                    acht genomen.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-slate-700 font-semibold">
                      Momenteel zijn wij op zoek naar een nieuwe
                      vertrouwenscontactpersoon. Mensen die hiervoor
                      belangstelling hebben kunnen zich melden bij onze
                      voorzitter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Aanmeld- en afmeldregels Section */}
        <section
          ref={aanmeldRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAanmeldInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Aanmeld- en afmeldregels
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Aanmelding nieuwe leden
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Nieuwe leden dienen zich via een aanmeldingsformulier (voor de
                  duur van minimaal één jaar) aan te melden. Aanmelding van
                  nieuwe leden kan alleen plaatsvinden tegelijk met afgifte van
                  een machtiging tot incasso voor de verschuldigde contributie.
                </p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Let op:</strong> Betaling van de contributie kan
                    alleen middels afgifte van een incasso-machtiging. De leden
                    ontvangen geen voorafgaande melding van de contributie.
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Bij de leden onder de 18 jaar dienen de ouders of verzorgers
                  het aanmeldingsformulier te ondertekenen. Deze
                  aanmeldingsformulieren zijn tijdens de trainingsdagen in het
                  zwembad aanwezig of kunt u via de link downloaden.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-cyan-600" />
                  Opzegging lidmaatschap
                </h3>
                <div className="bg-cyan-50 rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Opzegging lidmaatschap kan via mail of brief:
                  </p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <a
                      href="mailto:voorzitter@roersoppers.nl"
                      className="text-cyan-600 hover:text-cyan-700 underline"
                    >
                      voorzitter@roersoppers.nl
                    </a>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Of een uitgeprinte brief afgeven tijdens een training.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Opzeggingstermijnen
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Opzegging is altijd mogelijk zonder verdere kosten als dit
                    tijdig plaatsvindt:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Per 1 november</strong> voor wat betreft de
                        senioren (zij betalen namelijk maar 1 maal per jaar)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Per 1 november of 1 juli</strong> voor wat
                        betreft overige leden
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Bij te late afmelding
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Wordt er niet tijdig afgemeld, dan worden in rekening
                    gebracht:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="text-slate-700">
                        De kosten van lidmaatschapsmelding aan de KNZB
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="text-slate-700">
                        De contributie voor elke maand of deel van de maand dat
                        het lidmaatschap heeft geduurd
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="text-slate-700">
                        De kosten van de startvergunning alsnog doorberekend
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Bij ziekte
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    Bij ziekte wordt de contributiebetaling alleen opgeschort
                    als de ziekte tijdig is gemeld en langer dan 3 maanden
                    duurt.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed italic">
                  Voor aanmeldingen gelden dezelfde uitgangspunten voor wat
                  betreft de contributie die in rekening wordt gebracht.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contributiestructuur Section */}
        <section
          ref={contributieRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContributieInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
              <div className="flex items-center gap-3">
                <Euro className="h-8 w-8 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Contributiestructuur 2025-2026
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              {/* KNZB Kosten */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  KNZB Kosten
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="text-slate-700">
                      Verplichte bijdrage voor iedere zwemmer{" "}
                      <span className="text-sm text-slate-500">
                        (zit in de lidmaatschapsprijs)
                      </span>
                    </span>
                    <span className="font-bold text-blue-600">€25,40</span>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="text-slate-700">
                      Startvergunning &lt; 12 jaar
                    </span>
                    <span className="font-bold text-blue-600">€2,30</span>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="text-slate-700">
                      Startvergunning &gt; 12 jaar
                    </span>
                    <span className="font-bold text-blue-600">€44,80</span>
                  </div>
                </div>
              </div>

              {/* Niet-wedstrijdzwemmers */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Users className="h-7 w-7 text-cyan-600" />
                  Tarieven Niet-wedstrijdzwemmers
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Masters 2 */}
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Masters 2
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen 1x per week
                    </p>
                    <div className="text-3xl font-black text-cyan-600 mb-2">
                      €130,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs text-slate-500">
                      Exclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-cyan-200">
                      <p className="text-sm text-slate-700">
                        Betaling per jaar in maart
                      </p>
                    </div>
                  </div>

                  {/* Masters 1 */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Masters 1
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 3x per week
                    </p>
                    <div className="text-3xl font-black text-blue-600 mb-2">
                      €217,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs text-slate-500">
                      Exclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>

                  {/* Jeugd Recreatief */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Jeugd Recreatief
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 3x per week
                    </p>
                    <div className="text-3xl font-black text-teal-600 mb-2">
                      €254,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs text-slate-500">
                      Exclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-teal-200">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>

                  {/* Jongeren Recreatief */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Jongeren Recreatief
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 4x per week
                    </p>
                    <div className="text-3xl font-black text-cyan-600 mb-2">
                      €290,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs text-slate-500">
                      Exclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-cyan-200">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>

                  {/* Studenten uitwonend */}
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200 md:col-span-2">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Studenten uitwonend
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 1x per week
                    </p>
                    <div className="text-3xl font-black text-blue-600 mb-2">
                      €90,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs text-slate-500">
                      Exclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <p className="text-sm text-slate-700 mb-2">
                        Betaling per jaar maart en september
                      </p>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-slate-700">
                          <strong>Studentenregeling:</strong> Studerende leden
                          die op kamers wonen, op meer dan 30 km vanaf Melick,
                          kunnen gebruik maken van de studentenregeling. Dit
                          houdt in dat zij lid kunnen blijven van de vereniging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wedstrijdzwemmers */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="h-7 w-7 text-blue-600" />
                  Tarieven Wedstrijdzwemmers
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Wedstrijdmasters */}
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-300">
                    <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      INCLUSIEF STARTVERGUNNING
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Wedstrijdmasters
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 4x per week
                    </p>
                    <div className="text-3xl font-black text-blue-700 mb-2">
                      €290,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs font-semibold text-blue-700">
                      Inclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-300">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>

                  {/* Jeugd Wedstrijd */}
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 border-2 border-teal-300">
                    <div className="inline-block bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      INCLUSIEF STARTVERGUNNING
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Jeugd Wedstrijd
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 3x per week
                    </p>
                    <div className="text-3xl font-black text-teal-700 mb-2">
                      €254,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs font-semibold text-teal-700">
                      Inclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-teal-300">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>

                  {/* Jongeren Wedstrijd */}
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-6 border-2 border-cyan-300 md:col-span-2">
                    <div className="inline-block bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      INCLUSIEF STARTVERGUNNING
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Jongeren Wedstrijd
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Zwemmen max 4x per week
                    </p>
                    <div className="text-3xl font-black text-cyan-700 mb-2">
                      €290,–
                    </div>
                    <p className="text-sm text-slate-600 mb-1">per jaar</p>
                    <p className="text-xs font-semibold text-cyan-700">
                      Inclusief startvergunning
                    </p>
                    <div className="mt-3 pt-3 border-t border-cyan-300">
                      <p className="text-sm text-slate-700">
                        Betaling per halfjaar maart en september
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gezinskortingen */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-green-600" />
                  Gezinskortingen
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="text-slate-700 font-semibold">
                      2e betalende gezinslid
                    </span>
                    <span className="font-bold text-green-600 text-lg">
                      €2,00 korting
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="text-slate-700 font-semibold">
                      3e en volgende betalende gezinslid
                    </span>
                    <span className="font-bold text-green-600 text-lg">
                      €4,00 korting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
