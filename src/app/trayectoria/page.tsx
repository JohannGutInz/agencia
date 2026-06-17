import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Recognition from "@/components/Recognition";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Trayectoria | María Luisa Mercado Ponce",
  description:
    "Más de 34 años de trayectoria en comunicación estratégica, relaciones públicas, protocolo y producción de eventos en México y el escenario internacional.",
};

export default function TrayectoriaPage() {
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
              Trayectoria
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-crema leading-tight max-w-2xl">
              Tres décadas de comunicación que transforma
            </h1>
          </div>
        </section>

        <Timeline />
        <Recognition />

      </main>
      <Footer />
    </>
  );
}
