import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
              alt="Carpintero trabajando en su taller"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Nosotros
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Con más de 15 años de experiencia en el oficio, cada pieza que creo nace de la
              pasión por la madera y el diseño funcional. Creo muebles que no solo cumplen
              una función, sino que cuentan una historia y mejoran la vida de quienes los usan.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Mi taller en Tres de Febrero es el corazón de cada proyecto. Aquí combino
              técnicas tradicionales de carpintería con un enfoque moderno en el diseño,
              priorizando la calidad de los materiales y el detalle en cada terminación.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Creo en el trabajo honesto, en escuchar a cada cliente y en entregar piezas
              que superen las expectativas. Porque un mueble bien hecho no es un gasto,
              es una inversión que perdura generaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
