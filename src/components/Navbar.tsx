"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, whatsappNumber, whatsappMessage } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // En home el hero es claro, así que el texto oscuro contrasta desde el inicio.
  // En las demás páginas el encabezado es oscuro (bg-vino-osc), así que sin
  // hacer scroll el texto debe ser claro para no perderse contra ese fondo.
  const darkText = scrolled || isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EBE0]/95 backdrop-blur-sm shadow-sm border-b border-vino/8"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className={`font-playfair text-lg font-semibold tracking-wide transition-colors ${
            darkText ? "text-vino-osc hover:text-vino" : "text-crema hover:text-dorado"
          }`}
        >
          María Luisa Mercado
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  darkText ? "text-gris-txt/80 hover:text-vino" : "text-crema/85 hover:text-dorado"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 shadow-sm ${
            darkText
              ? "bg-vino-osc text-crema hover:bg-vino"
              : "bg-dorado text-vino-osc hover:bg-dorado/90"
          }`}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={15} aria-hidden="true" />
          WhatsApp
        </a>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-1 transition-colors ${darkText ? "text-vino-osc" : "text-crema"}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-[#F2EBE0]/98 backdrop-blur-sm border-t border-vino/8 px-6 pb-6 pt-3">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-gris-txt/80 hover:text-vino transition-colors font-medium py-1"
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
            className="flex w-full items-center justify-center gap-2 rounded-full bg-vino-osc px-5 py-3 text-sm font-semibold text-crema"
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
