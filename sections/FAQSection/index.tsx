import { FAQItem } from "@/sections/FAQSection/components/FAQItem"
import { CTASection } from "@/sections/CTASection"

export const FAQSection = () => {
  return (
    <div className="relative bg-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="text-sm leading-tight text-left uppercase mb-2">
              PREGUNTAS FRECUENTES
            </div>
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight text-left mt-5">
              ¿Aún con{" "}
              <mark className="text-3xl sm:text-4xl lg:text-5xl italic bg-transparent font-instrument_serif">
                dudas?
              </mark>
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <FAQItem
              question="¿Se puede pedir depósito en arriendo de vivienda?"
              answer="No. La Ley 820/2003 prohíbe depósitos en dinero y cauciones reales para vivienda urbana."
            />
            <FAQItem
              question="¿Cuánto puedo aumentar el arriendo?"
              answer="Hasta el IPC del año anterior en vivienda urbana, según Ley 820/2003."
            />
            <FAQItem
              question="¿Cómo es la restitución?"
              answer="Puede intentarse conciliación y, de no prosperar, demanda de restitución; también se reclaman cánones y perjuicios."
            />
            <FAQItem
              question="¿Qué incluye el CLyT y por qué importa?"
              answer="Es la 'hoja de vida' del inmueble; revela titularidad y gravámenes. Base del estudio de títulos."
            />
            <FAQItem
              question="¿Se pueden cobrar intereses en PH?"
              answer="Sí, conforme Ley 675/2001; está prohibido el anatocismo."
            />
          </div>
        </div>

        <div className="flex flex-col">
          <CTASection />
        </div>
      </div>
    </div>
  )
}
