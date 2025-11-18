import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard"

export const ProcessSection = () => {
  return (
    <div className="relative bg-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="w-full">
          <div className="mb-8">
            <div className="text-sm leading-tight text-center uppercase mb-2">
              PROCESO
            </div>
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-center mt-5 mx-auto">
              Cómo{" "}
              <mark className="text-3xl sm:text-4xl lg:text-5xl italic bg-transparent font-instrument_serif">
                trabajamos
              </mark>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ProcessCard
              imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/Blue-and-White-Modern-Icons-Typography-Initial-D-Real-Estate-Logo.png"
              imageAlt="Diagnóstico y checklist"
              title="Diagnóstico y checklist"
              description="15–20 min para entender caso y documentos."
            />
            <ProcessCard
              imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/Blue-and-White-Modern-Icons-Typography-Initial-D-Real-Estate-Logo-3.png"
              imageAlt="Auditoría y plan"
              title="Auditoría y plan"
              description="Informe/contrato/estrategia con tiempos y costos."
              hasExtraWrapper={true}
            />
            <ProcessCard
              imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/Blue-and-White-Modern-Icons-Typography-Initial-D-Real-Estate-Logo-2.png"
              imageAlt="Ejecución y seguimiento"
              title="Ejecución y seguimiento"
              description="Actualizaciones y decisiones informadas."
              imageContainerVariant="max-w-[70px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
