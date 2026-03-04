"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Waves,
  CheckCircle,
  MapPin,
  Clock,
  Mail,
  Euro,
  Users,
} from "lucide-react";

export default function BorstcrawlTrainingPage() {
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
                <Waves className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="text-slate-900">Borstcrawl</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Training
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Leer borstcrawl zwemmen in 10 gerichte lessen
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="space-y-8">
            {/* Intro Card with Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-1/2 h-72 lg:h-auto relative overflow-hidden group">
                  <Image
                    src="/images/jongeren_recreatief.jpg"
                    alt="Borstcrawl training - vrouw zwemt borstcrawl in zwembad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Volwassenen
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    Borstcrawl Training voor Volwassenen
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-lg mb-6">
                    Wil je eindelijk goed borstcrawl leren zwemmen? Train je
                    voor een triatlon? Of staat het al jaren op je lijstje om
                    dit eens écht onder de knie te krijgen?
                  </p>
                  <p className="text-xl font-bold text-blue-600 mb-6">
                    Dan is dit jouw moment.
                  </p>

                  {/* USPs */}
                  <div className="space-y-3">
                    {[
                      "10 lessen voor €175",
                      "Begeleiding door een ervaren trainer",
                      "Kleine groep, persoonlijke aandacht",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                        <span className="text-slate-700 text-lg font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed text-lg mt-6">
                    In 10 gerichte trainingen werk je aan techniek, ademhaling
                    en efficiëntie in het water. Geen verplicht lidmaatschap.
                    Gewoon een duidelijke reeks lessen waarin jij stappen zet.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Voor wie? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Voor wie is deze training?
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Deze borstcrawl training is speciaal voor volwassenen:
                </p>
                <ul className="space-y-3">
                  {[
                    "Die zich voorbereiden op een triatlon",
                    "Die hun techniek willen verbeteren",
                    "Of die gewoon voor hun plezier borstcrawl willen leren",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-cyan-500">
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    Je hoeft geen topsporter te zijn. Motivatie is genoeg.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Praktische informatie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Praktische informatie
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                {/* Tijdstip */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        Zaterdag van 12.00 – 13.00 uur
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-base">
                        Tijdens dit uur traint een kleine jeugdgroep (12.00 –
                        13.15 uur), maar één baan is speciaal vrijgemaakt voor
                        de borstcrawltraining. Je hoeft niet om 13.00 uur uit
                        het water. Het laatste kwartier mag je zelfstandig
                        uitzwemmen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Locatie */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        Locatie
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-base">
                        Zwemvereniging De Roersoppers
                      </p>
                      <p className="text-slate-700 leading-relaxed text-base">
                        Feel Fit Center Roerdalen
                      </p>
                      <p className="text-slate-700 leading-relaxed text-base">
                        Apollolaan 2, 6074 EH, Melick
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kosten */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex-shrink-0">
                      <Euro className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        Kosten
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-lg font-semibold">
                        €175 voor 10 lessen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Meedoen CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-white" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Meedoen?
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Wil je weten of er nog plek is? Stuur dan een mail naar{" "}
                  <a
                    href="mailto:info@roersoppers.nl"
                    className="text-blue-600 hover:text-cyan-500 font-semibold underline underline-offset-4 transition-colors duration-300"
                  >
                    info@roersoppers.nl
                  </a>{" "}
                  en vraag naar de beschikbaarheid.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    Wacht niet te lang, we werken met kleine groepen.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center pt-2">
                  <a
                    href="mailto:info@roersoppers.nl?subject=Borstcrawl%20Training%20-%20Beschikbaarheid"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
                  >
                    <Mail className="h-5 w-5" />
                    Stuur een mail
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
