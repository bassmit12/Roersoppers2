"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Waves } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ZwemgroepenPage() {
  const zwemgroepen = [
    {
      title: "Jeugd Wedstrijd",
      image: "/images/junioren.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "Heb jij je A-diploma op zak en wil je verder leren zwemmen? Dan is onze jeugdgroep perfect voor jou! Onze enthousiaste trainers leren je nieuwe zwemtechnieken en helpen je steeds beter te worden. Je zwemt met kinderen van jouw niveau en leeftijd, zodat je altijd goed kunt meedoen. Serieuze trainingen worden afgewisseld met spel en plezier, en wedstrijden zijn precies uitdagend genoeg voor jou!",
    },
    {
      title: "Jeugd Recreatief",
      image: "/images/training.jpg",
      color: "from-cyan-500 to-teal-500",
      description:
        "Heb jij je A-diploma op zak en wil je vooral plezier beleven in het water? Dan is onze recreatieve jeugdgroep precies wat je zoekt! Onze enthousiaste trainers helpen je om nieuwe zwemtechnieken onder de knie te krijgen, maar richten zich vooral op plezier en samenspel met leeftijdsgenootjes. Je traint op je eigen tempo, zonder de druk van wedstrijden. Wil je toch een keertje ervaren hoe het is om een echte zwemwedstrijd te zwemmen? Dat kan! Maar als je liever gewoon traint en lol maakt, ben je net zo welkom. Bij ons staat genieten van het zwemmen altijd voorop!",
    },
    {
      title: "Jongeren Wedstrijd",
      image: "/images/Wedstrijd.jpg",
      color: "from-yellow-500 to-orange-500",
      description:
        "Heb jij een passie voor zwemmen en wil je jezelf écht uitdagen? Sluit je dan aan bij dit team, waar je traint op techniek, snelheid en conditie, met als doel deel te nemen aan wedstrijden. Als lid van De Roersoppers vertegenwoordig je ons in de districtscompetitie, kampioenschappen en invitatiewedstrijden.",
      details:
        "Onze trainingen zijn afgestemd op het wedstrijdschema en bestaan uit techniek-, duur- en sprinttrainingen. Om écht beter te worden, verwachten we dat je minimaal drie keer per week traint. Elk seizoen zwem je zo'n 10 tot 12 wedstrijden, waarbij de competitiewedstrijden het absolute hoogtepunt vormen. Samen gaan we voor de beste prestaties!",
    },
    {
      title: "Jongeren Recreatief",
      image: "/images/trainingInActie2.jpg",
      color: "from-teal-500 to-emerald-500",
      description:
        "Ben jij een fanatieke jongere die serieus wil trainen, maar liever geen wedstrijden zwemt? Dan is deze recreatieve groep perfect voor jou! Je werkt aan techniek, snelheid en conditie, zonder de wedstrijddruk. Samen met andere enthousiaste zwemmers train je op hoog niveau in een gezellige en motiverende sfeer. Of je nu je conditie wilt verbeteren of gewoon plezier beleeft aan intensief zwemmen: hier vind je jouw plek in het water!",
    },
    {
      title: "Wedstrijdmasters",
      image: "/images/wedstrijdploeg.jpg",
      color: "from-purple-500 to-pink-500",
      description:
        "Ook op latere leeftijd kun je nog fanatiek blijven zwemmen. De Wedstrijdmasters doen mee aan speciale zwemwedstrijden waarin leeftijdscategorieën per vijf jaar oplopen. Iedereen die fit genoeg is kan meedoen. Er is een enthousiaste groep die écht voor de prestaties gaat. Zij trainen met de jeugd mee om hun techniek en snelheid te blijven ontwikkelen.",
    },
    {
      title: "Masters 1",
      image: "/images/senioren.jpg",
      color: "from-blue-500 to-indigo-500",
      description:
        "Wil je je conditie op peil houden, genieten van een fijne training en géén wedstrijden zwemmen? Dan is Masters 1 iets voor jou! Hier zwem je in een baan die past bij jouw niveau. Ben je een oud-wedstrijdzwemmer en zijn alle zwemtechnieken bekend, dan zwem je in baan 1 of 2. Wil je je zwemtechniek verbeteren of eindelijk eens goed leren de borstcrawl te zwemmen, dan hoor je thuis in baan 3 of 4. Af en toe een baantje overslaan om uit te puffen is geen probleem. Plezier en beweging staan centraal, maar vergis je niet: er wordt hier serieus getraind!",
    },
    {
      title: "Masters 2",
      image: "/images/senioren.jpg",
      color: "from-rose-500 to-red-500",
      description:
        "Zwemmen is een gezonde sport ook al ben je een jaartje ouder. In deze groep wordt er niet alleen flink gezwommen, maar ook veel gelachen. De banen zijn verdeeld op niveau, zodat iedereen in zijn eigen tempo kan trainen. En ja, de kaakspieren krijgen hier net zo'n goede workout als de arm- en beenspieren – gezelligheid gegarandeerd!",
      details: "(Het zwemtempo ligt iets lager dan bij Masters 1).",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
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
                  <Waves className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                  <span className="text-slate-900">Onze</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Zwemgroepen
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Voor elk niveau en elke leeftijd de perfecte zwemgroep
                </p>
              </motion.div>
            </div>{" "}
          </section>

          {/* Swim Groups Section */}
          <section ref={ref} className="relative py-16 px-4 sm:px-6 lg:px-8">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="space-y-12 md:space-y-20">
                {zwemgroepen.map((groep, index) => {
                  return (
                    <motion.div
                      key={groep.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className={`flex flex-col ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-8 items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                    >
                      {/* Image */}
                      <div className="w-full lg:w-1/2 h-72 lg:h-[450px] relative overflow-hidden group">
                        <Image
                          src={groep.image}
                          alt={groep.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl mb-2">
                            {groep.title}
                          </h2>
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-1.5 w-24 bg-gradient-to-r ${groep.color} rounded-full shadow-lg`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full lg:w-1/2 p-8 lg:p-12">
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                              {groep.description}
                            </p>
                            {groep.details && (
                              <div className="pt-4 border-t border-slate-200">
                                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                                  {groep.details}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Decorative elements */}
                          <div className="flex items-center gap-2 pt-2">
                            <div
                              className={`h-1 w-20 bg-gradient-to-r ${groep.color} rounded-full`}
                            />
                            <div
                              className={`h-1 w-10 bg-gradient-to-r ${groep.color} opacity-50 rounded-full`}
                            />
                            <div
                              className={`h-1 w-5 bg-gradient-to-r ${groep.color} opacity-25 rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
