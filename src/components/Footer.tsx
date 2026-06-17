import { footerLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vino-osc border-t border-crema/10 py-10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <p className="font-playfair text-crema/80 text-sm">
            &copy; {year} María Luisa Mercado Ponce
            <span className="text-crema/40 mx-1">·</span>
            IGA Comunicación Total Consultores
          </p>
          <p className="text-crema/35 text-xs mt-1">Todos los derechos reservados.</p>
        </div>

        <nav aria-label="Redes sociales">
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crema/50 text-sm hover:text-dorado transition-colors font-medium"
                  aria-label={`Visitar perfil de María Luisa en ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
}
