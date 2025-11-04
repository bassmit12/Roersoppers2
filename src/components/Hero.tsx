"use client";

import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/hero_video2.mp4" type="video/mp4" />
        </video>

        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-blue-900/50" />

        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative z-10">
        {/* Main Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-120px)] sm:min-h-[80vh]">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight drop-shadow-lg"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                    De Roersoppers
                  </span>
                  <br />
                  <span className="text-white text-2xl sm:text-4xl lg:text-5xl">
                    Meer dan zwemmen alleen
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg drop-shadow-md mx-auto lg:mx-0 px-2 sm:px-0"
              >
                Of je nu je eerste meters maakt, traint voor competitie of
                gewoon met een grote glimlach het water in duikt, bij De
                Roersoppers voelt iedereen zich thuis. Hier leer je niet alleen
                zwemmen, maar groei je ook als sporter én als mens.
              </motion.p>

              {/* CTA Buttons & Social Links - 2 column grid on mobile, stacked on desktop */}
              <div className="space-y-4 lg:space-y-6 pt-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
                {/* Buttons Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row lg:gap-6">
                  {/* Wordt lid Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="col-span-2 sm:col-span-1"
                  >
                    <a href="/informatie" className="block">
                      <Button
                        size="lg"
                        className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group text-sm sm:text-base"
                      >
                        <span>Wordt lid</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </motion.div>

                  {/* Trainings Schema Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="col-span-2 sm:col-span-1"
                  >
                    <a href="/trainingsschema" className="block">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full lg:w-auto border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base"
                      >
                        <span>Trainings Schema</span>
                      </Button>
                    </a>
                  </motion.div>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row lg:gap-6">
                  {/* Facebook Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="col-span-1"
                  >
                    <a
                      href="https://www.facebook.com/roersoppers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center lg:justify-start gap-2 text-white/90 hover:text-white transition-colors drop-shadow-lg group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-sm sm:text-base font-medium">
                        Facebook
                      </span>
                    </a>
                  </motion.div>

                  {/* Instagram Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="col-span-1"
                  >
                    <a
                      href="https://www.instagram.com/roersoppers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center lg:justify-start gap-2 text-white/90 hover:text-white transition-colors drop-shadow-lg group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-sm sm:text-base font-medium">
                        Instagram
                      </span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Logo container */}
              <div className="relative aspect-square flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/logo.png"
                    alt="De Roersoppers Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-[0px] hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-medium mb-2 drop-shadow-lg">
              Ontdek meer
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative water bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: 10, top: 20 },
          { left: 80, top: 15 },
          { left: 25, top: 70 },
          { left: 90, top: 45 },
          { left: 5, top: 85 },
          { left: 70, top: 25 },
          { left: 40, top: 60 },
          { left: 15, top: 40 },
          { left: 85, top: 75 },
          { left: 35, top: 10 },
          { left: 60, top: 90 },
          { left: 75, top: 55 },
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-400/30 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
