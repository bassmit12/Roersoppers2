"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    dropdown: [
      { name: "Over Ons", href: "/#about" },
      { name: "Zwemgroepen", href: "/#swim-groups" },
      { name: "Team", href: "/#team" },
      { name: "Evenementen", href: "/#events" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  {
    name: "Zwemmen",
    href: "#",
    dropdown: [
      { name: "Zwemgroepen", href: "/zwemgroepen" },
      { name: "Trainingsschema", href: "/trainingsschema" },
    ],
  },
  {
    name: "Informatie",
    href: "#",
    dropdown: [
      { name: "Aan / Afmelden", href: "/informatie/aanmelden" },
      { name: "Code Blauw", href: "/informatie/code-blauw" },
    ],
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/images/logo.png"
              alt="De Roersoppers"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span
              className="text-xl font-bold"
              style={{ color: "var(--primary-blue)" }}
            >
              De Roersoppers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center text-gray-900 hover:text-[var(--aqua)] px-3 py-2 text-sm font-medium transition-colors duration-300"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={cn(
                          "absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50",
                          activeDropdown === item.name
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        )}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--aqua)]/10 hover:text-[var(--aqua)] transition-colors duration-200"
                              onClick={handleLinkClick}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-gray-900 hover:text-[var(--aqua)] px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--aqua)] to-[var(--teal)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--aqua)]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "ml-4 space-y-1 overflow-hidden transition-all duration-200",
                        activeDropdown === item.name
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                          onClick={handleLinkClick}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
