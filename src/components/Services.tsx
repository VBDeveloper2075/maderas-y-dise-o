const services = [
  {
    title: "Muebles a Medida",
    description: "Diseño y fabricación desde cero. Cada pieza es única, pensada para tu espacio y tu estilo de vida.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Soluciones para Espacios Reducidos",
    description: "Camas rebatibles, placares inteligentes, escritorios flotantes. Aprovechamos cada centímetro con diseño funcional.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Arreglos y Restauración",
    description: "Dale vida a tus muebles queridos. Restauración con respeto por la pieza original y técnicas artesanales.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-light text-[#333333] tracking-[0.06em] text-center mb-16 uppercase">
          Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-[#fafafa] p-8 border border-neutral-200/80 hover:border-[#4a3728]/25 transition-colors group"
            >
              <div className="text-[#4a3728] group-hover:text-[#5c4433] mb-6 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-[#333333] mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
