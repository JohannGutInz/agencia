import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Galería | María Luisa Mercado Ponce",
  description:
    "Galería de eventos producidos por IGA Comunicación Total Consultores: congresos, seminarios internacionales, eventos híbridos y actos protocolarios.",
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Encabezado de página */}
        <section className="bg-vino-osc pt-32 pb-24 border-b border-dorado/15">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-crema/50 hover:text-dorado transition-colors text-sm mb-10"
            >
              <ArrowLeft size={15} />
              Volver al inicio
            </Link>
            <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Galería
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-crema leading-tight max-w-2xl">
              Eventos que dejan huella
            </h1>
          </div>
        </section>

        <Gallery />

      </main>
      <Footer />
    </>
  );
}
