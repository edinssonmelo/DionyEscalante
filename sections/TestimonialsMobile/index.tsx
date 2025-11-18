import { TestimonialCardMobile } from "@/sections/TestimonialsMobile/components/TestimonialCardMobile"

export const TestimonialsMobile = () => {
  return (
    <div className="relative bg-slate-100 w-full md:hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col mb-8">
          <div className="text-sm leading-tight text-center uppercase mb-2">
            RESEÑAS VERIFICADAS
          </div>
          <h2 className="text-slate-900 text-3xl sm:text-4xl leading-tight max-w-3xl text-center mt-5 mx-auto">
            Lo que dicen nuestros{" "}
            <mark className="text-3xl sm:text-4xl italic bg-transparent font-instrument_serif">
              clientes
            </mark>
          </h2>
          {/* Trustpilot Widget - Versión móvil */}
          <div className="flex flex-col justify-center items-center gap-2 mt-6">
            <div className="text-slate-600 text-sm">Calificación promedio:</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="relative inline-block">
                  <span className="text-gray-300 text-2xl sm:text-3xl">★★★★★</span>
                  <span className="absolute left-0 top-0 text-yellow-400 text-2xl sm:text-3xl" style={{ width: '96%', overflow: 'hidden' }}>★★★★★</span>
                </div>
                <span className="text-slate-900 font-bold text-lg sm:text-xl ml-2">4.8</span>
              </div>
            </div>
            <div className="text-slate-500 text-sm">(32 reseñas)</div>
          </div>
        </div>
        <div className="w-full">
          <ul className="grid grid-cols-1 gap-6 list-none p-0">
            <TestimonialCardMobile
              quote="Contraté el estudio 360°. Encontraron alertas que me evitaron una mala compra. Muy claros con el informe y tiempos."
              authorName="Ana María G."
              authorTitle="Compradora de vivienda"
              authorImageUrl="/placeholder-user.jpg"
              authorImageAlt="Ana María G."
              authorImageAspect="aspect-[auto_250_/_250]"
            />
            <TestimonialCardMobile
              quote="Radicaron la restitución en 72h y me explicaron paso a paso. En tres meses recuperé el inmueble. Gracias!"
              authorName="Carlos R."
              authorTitle="Propietario arrendador"
              authorImageUrl="/placeholder-user.jpg"
              authorImageAlt="Carlos R."
              authorImageAspect="aspect-[auto_294_/_300]"
            />
            <TestimonialCardMobile
              quote="Nos ayudaron con cartera en PH. Se notó el manejo legal y la comunicación. Bajamos la mora notablemente."
              authorName="Patricia M."
              authorTitle="Administradora P.H."
              authorImageUrl="/placeholder-user.jpg"
              authorImageAlt="Patricia M."
              authorImageAspect="aspect-[auto_300_/_300]"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
