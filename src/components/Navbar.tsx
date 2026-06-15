"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, whatsappNumber, whatsappMessage } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-vino-osc/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="font-playfair text-lg font-semibold text-crema tracking-wide hover:text-dorado transition-colors"
        >
          María Luisa Mercado
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-crema/80 hover:text-dorado transition-colors font-medium tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 rounded-full bg-dorado px-5 py-2 text-sm font-semibold text-vino-osc hover:bg-dorado/90 transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={16} aria-hidden="true" />
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-crema p-1"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-vino-osc/98 backdrop-blur-sm px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-crema/80 hover:text-dorado transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-dorado px-5 py-3 text-sm font-semibold text-vino-osc"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
