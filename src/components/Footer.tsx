"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Over Ons", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Nieuws", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/zvderoersoppers/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/patrickderoersopperssg/",
  },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--primary-blue)] via-[var(--dark-blue)] to-[#0f172a] text-white overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 50}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          {/* Quick Links & Contact - 2 columns centered */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-2xl">
            {/* Quick Links */}
            <div className="text-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[var(--light-aqua)]">
              Snelle Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[var(--light-aqua)]">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base flex flex-col items-center">
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <div>
                  <p className="leading-relaxed">
                    Melick, Limburg
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <p>0475-533635</p>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <p className="break-all">info@roersoppers.nl</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Social Media Links - Before divider */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[var(--light-aqua)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--light-aqua)]/50"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-[var(--light-aqua)] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Wave Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[var(--light-aqua)]/30 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-white/50 text-xs sm:text-sm">
              © 2025 De Roersoppers. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm">
              <Link
                href="#"
                className="text-white/50 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                Privacy Beleid
              </Link>
              <span className="text-white/20 hidden sm:inline">•</span>
              <Link
                href="#"
                className="text-white/50 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                Algemene Voorwaarden
              </Link>
              <span className="text-white/20 hidden sm:inline">•</span>
              <Link
                href="#"
                className="text-white/50 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                Cookie Beleid
              </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col items-center gap-1 text-center border-t border-white/10 pt-4 sm:pt-6">
            <p className="text-white/40 text-xs">
              Gemaakt door{" "}
              <span className="text-white/60 font-medium">Bas Smit</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-white/40">
              <a
                href="mailto:bas.smit@live.nl"
                className="hover:text-[var(--light-aqua)] transition-colors duration-300 flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                bas.smit@live.nl
              </a>
              <span className="text-white/20">•</span>
              <a
                href="tel:+31631279994"
                className="hover:text-[var(--light-aqua)] transition-colors duration-300 flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                +31 6 31279994
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--aqua)] via-[var(--light-aqua)] to-[var(--teal)]"></div>
    </footer>
  );
}
