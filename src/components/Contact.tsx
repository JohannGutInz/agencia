"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { contactInfo, whatsappNumber, whatsappMessage } from "@/data/content";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "El nombre es requerido.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Ingresa un correo válido.";
    if (!form.message.trim() || form.message.length < 10)
      next.message = "El mensaje debe tener al menos 10 caracteres.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Aquí conectarías con tu API / Formspree / Resend
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  return (
    <section
      id="contacto"
      className="bg-vino-osc py-24 md:py-32"
      aria-label="Contacto"
    >
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16" ref={ref}>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Contacto
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-crema mb-6 leading-snug">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-crema/60 leading-relaxed mb-10">
            ¿Tienes un evento, una campaña o un reto de comunicación? Cuéntame. Exploramos juntos
            cómo convertirlo en una historia exitosa.
          </p>

          <ul className="space-y-6">
            <li>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Contactar por WhatsApp"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dorado/10 group-hover:bg-dorado/20 transition-colors flex-shrink-0">
                  <MessageCircle className="text-dorado" size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-0.5">WhatsApp</p>
                  <p className="text-crema font-medium group-hover:text-dorado transition-colors">
                    +{contactInfo.whatsapp}
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
                aria-label={`Enviar correo a ${contactInfo.email}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dorado/10 group-hover:bg-dorado/20 transition-colors flex-shrink-0">
                  <Mail className="text-dorado" size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-0.5">Correo</p>
                  <p className="text-crema font-medium group-hover:text-dorado transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
              </a>
            </li>
            {/* <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
                aria-label={`Llamar al ${contactInfo.phone}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dorado/10 group-hover:bg-dorado/20 transition-colors flex-shrink-0">
                  <Phone className="text-dorado" size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-0.5">Oficina</p>
                  <p className="text-crema font-medium group-hover:text-dorado transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>
            </li> */}
            <li className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dorado/10 flex-shrink-0">
                <MapPin className="text-dorado" size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-crema/40 text-xs uppercase tracking-widest mb-0.5">Ubicación</p>
                <p className="text-crema font-medium">{contactInfo.location}</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-6">
              <CheckCircle className="text-dorado" size={56} aria-hidden="true" />
              <h3 className="font-playfair text-2xl font-bold text-crema">
                Mensaje enviado
              </h3>
              <p className="text-crema/60 max-w-xs">
                Gracias por escribirme. Me pondré en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                className="text-dorado text-sm hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              aria-label="Formulario de contacto"
            >
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-crema/60 text-sm mb-2">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-crema/10 bg-crema/5 px-4 py-3.5 text-crema placeholder-crema/30 focus:border-dorado/60 focus:outline-none focus:ring-1 focus:ring-dorado/40 transition-colors"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-crema/60 text-sm mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-crema/10 bg-crema/5 px-4 py-3.5 text-crema placeholder-crema/30 focus:border-dorado/60 focus:outline-none focus:ring-1 focus:ring-dorado/40 transition-colors"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-crema/60 text-sm mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-xl border border-crema/10 bg-crema/5 px-4 py-3.5 text-crema placeholder-crema/30 focus:border-dorado/60 focus:outline-none focus:ring-1 focus:ring-dorado/40 transition-colors resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1.5" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-dorado py-4 font-bold text-vino-osc hover:bg-dorado/90 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg"
              >
                <Send size={18} aria-hidden="true" />
                Enviar mensaje
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
