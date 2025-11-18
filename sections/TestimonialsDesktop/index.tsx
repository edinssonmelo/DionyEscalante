import { TestimonialCard } from "@/sections/TestimonialsDesktop/components/TestimonialCard"

export const TestimonialsDesktop = () => {
  return (
    <div className="relative bg-slate-100 w-full hidden md:block">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col mb-8">
          <div className="text-sm leading-tight text-center uppercase mb-2">
            RESEÑAS VERIFICADAS
          </div>
          <h2 className="text-slate-900 text-4xl lg:text-5xl leading-tight max-w-3xl text-center mt-5 mx-auto">
            Lo que dicen nuestros{" "}
            <mark className="text-4xl lg:text-5xl italic bg-transparent font-instrument_serif">
              clientes
            </mark>
          </h2>
          {/* Trustpilot Widget - Se puede integrar el script de Trustpilot aquí */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="text-slate-600 text-sm">Calificación promedio:</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="relative inline-block">
                  <span className="text-gray-300 text-3xl">★★★★★</span>
                  <span className="absolute left-0 top-0 text-yellow-400 text-3xl" style={{ width: '96%', overflow: 'hidden' }}>★★★★★</span>
                </div>
                <span className="text-slate-900 font-bold text-xl ml-2">4.8</span>
              </div>
            </div>
            <div className="text-slate-500 text-sm">(32 reseñas)</div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative overflow-x-auto pb-8">
            <ul role="region" className="flex gap-6 pb-6 px-4">
              <TestimonialCard
                ariaLabel="1 of 3"
                quote="Contraté el estudio 360°. Encontraron alertas que me evitaron una mala compra. Muy claros con el informe y tiempos."
                imageUrl="/placeholder-user.jpg"
                imageAlt="Cliente 1"
                imageAspectRatio="aspect-[auto_250_/_250]"
                name="Ana María G."
                title="Compradora de vivienda"
              />
              <TestimonialCard
                ariaLabel="2 of 3"
                quote="Radicaron la restitución en 72h y me explicaron paso a paso. En tres meses recuperé el inmueble. Gracias!"
                imageUrl="/placeholder-user.jpg"
                imageAlt="Cliente 2"
                imageAspectRatio="aspect-[auto_294_/_300]"
                name="Carlos R."
                title="Propietario arrendador"
              />
              <TestimonialCard
                ariaLabel="3 of 3"
                quote="Nos ayudaron con cartera en PH. Se notó el manejo legal y la comunicación. Bajamos la mora notablemente."
                imageUrl="/placeholder-user.jpg"
                imageAlt="Cliente 3"
                imageAspectRatio="aspect-[auto_300_/_300]"
                name="Patricia M."
                title="Administradora P.H."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
