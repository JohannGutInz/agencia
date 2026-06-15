import { footerLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vino-osc border-t border-crema/10 py-10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-playfair text-crema/70 text-sm text-center md:text-left">
          &copy; {year} María Luisa Mercado Ponce — IGA Comunicación Total Consultores.
          <br className="md:hidden" />
          <span className="md:ml-1">Todos los derechos reservados.</span>
        </p>

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
