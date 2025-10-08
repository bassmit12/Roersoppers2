"use client";

import Link from "next/link";
import { Waves, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
    <footer className="bg-[var(--dark-blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves
                className="h-8 w-8"
                style={{ color: "var(--light-aqua)" }}
              />
              <span className="text-2xl font-bold">De Roersoppers</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Al meer dan 40 jaar een begrip in de Roerstreek. Samen met
              Zwemvereniging Patrick vormen we de Startgemeenschap Patrick - de
              Roersoppers. Zwemmen voor iedereen, van jong tot oud en van
              competitief tot recreatief.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--light-aqua)] hover:text-[var(--dark-blue)] transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--light-aqua)" }}
            >
              Snelle Links
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[var(--light-aqua)] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--light-aqua)" }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 text-white/80">
              <p>
                Apollobad Melick
                <br />
                Roerstreek, Nederland
              </p>
              <p>Telefoon: 0475-533635</p>
              <p>Email: info@roersoppers.nl</p>
            </div>

            <div className="mt-6">
              <h5
                className="font-semibold mb-2"
                style={{ color: "var(--light-aqua)" }}
              >
                Trainingstijden
              </h5>
              <div className="text-sm text-white/80 space-y-1">
                <p>Ma-Vr: 17:00 - 21:00</p>
                <p>Zat: 9:00 - 12:00</p>
                <p>Zon: Rustdag</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 De Roersoppers. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Beleid
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
