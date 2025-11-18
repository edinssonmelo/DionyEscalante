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
              quote="El estudio de títulos que hicieron me salvó de comprar un apartamento con problemas. Encontraron 2 embargos que ni la inmobiliaria sabía. Vale cada peso, super profesionales."
              authorName="María Fernanda Gómez"
              authorTitle="Compradora de vivienda"
              authorImageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/06/Carey.webp"
              authorImageAlt="María"
              authorImageAspect="aspect-[auto_250_/_250]"
            />
            <TestimonialCardMobile
              quote="Llevaba 8 meses con un inquilino que no pagaba. Ellos radicaron la restitución en 72 horas y me guiaron en todo el proceso. Recuperé mi apartamento en 3 meses. Excelente asesoría."
              authorName="Carlos Andrés Ruiz"
              authorTitle="Propietario arrendador"
              authorImageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/06/Omar-Ariza-294x300.webp"
              authorImageAlt="Carlos"
              authorImageAspect="aspect-[auto_294_/_300]"
            />
            <TestimonialCardMobile
              quote="Como administradora de PH tenía cartera morosa del 60%. Con su estrategia de cobro legal recuperamos casi todo en 6 meses. Muy claros explicando la Ley 675, los recomiendo."
              authorName="Patricia Moreno"
              authorTitle="Administradora P.H."
              authorImageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/06/Ivy-Maldonado-300x300.webp"
              authorImageAlt="Patricia"
              authorImageAspect="aspect-[auto_300_/_300]"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
