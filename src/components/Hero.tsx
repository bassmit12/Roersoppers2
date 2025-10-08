"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { VideoModal } from "./VideoModal";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  // Set video start time to 54 seconds
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        video.currentTime = 54; // Start from 0:54
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      // If video is already loaded
      if (video.readyState >= 1) {
        video.currentTime = 54;
      }

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const poolFeatures = [
    "🏊‍♂️ Zwembanen voor alle niveaus",
    "👶 Kinderles vanaf 4 jaar",
    "🏆 Wedstrijdtraining",
    "💪 Aqua fitness",
    "🎉 Gezellige teamactiviteiten",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-300/20 rounded-full blur-3xl"
        />

        {/* Swimming lane lines pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1, duration: 1.5 }}
              className="absolute w-full h-1 bg-blue-600"
              style={{ top: `${20 + i * 10}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-8 right-8 hidden lg:flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
        >
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <MapPin className="w-4 h-4" />
            <span>Roermond</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                <Star className="w-4 h-4" />
                <span>Roermond&apos;s #1 Zwemvereniging</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl lg:text-7xl font-black leading-tight"
                >
                  <span className="text-slate-900">Duik in het</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Avontuur
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-slate-600 leading-relaxed max-w-lg"
              >
                Bij{" "}
                <span className="font-bold text-blue-600">De Roersoppers</span>{" "}
                draait alles om plezier, vooruitgang en teamgeest. Van je eerste
                zwemslag tot medaille-winnende prestaties - wij ondersteunen
                jouw zwemreis!
              </motion.p>

              {/* Features list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                {poolFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 text-slate-700"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Start je zwemavontuur</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Bekijk video</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Video Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Main video container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Hero Video */}
                <div className="aspect-[4/5] relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/video/hero-poster.jpg" // Optional: add a poster image
                  >
                    <source src="/video/hero.mp4" type="video/mp4" />
                    {/* Fallback content */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4">🏊‍♂️</div>
                        <h3 className="text-2xl font-bold mb-2">
                          Swimming Action
                        </h3>
                        <p className="text-blue-100 text-lg">
                          Team De Roersoppers in actie
                        </p>
                      </div>
                    </div>
                  </video>
                </div>

                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Play/Pause button overlay */}
                <motion.button
                  onClick={toggleVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
                >
                  {isVideoPlaying ? (
                    <div className="w-3 h-3 bg-blue-600 rounded-sm" />
                  ) : (
                    <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                  )}
                </motion.button>

                {/* Video title overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold drop-shadow-lg">
                    De Roersoppers
                  </h3>
                  <p className="text-sm text-white/90 drop-shadow-lg">
                    In actie in het zwembad
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-blue-600 cursor-pointer"
          >
            <span className="text-sm font-medium mb-2">Ontdek meer</span>
            <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-blue-600 rounded-full mt-2"
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

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/video/hero.mp4"
        title="De Roersoppers - Zwemteam Video"
      />
    </div>
  );
}
