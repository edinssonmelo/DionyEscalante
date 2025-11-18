import { CaseStudyCarousel } from "@/sections/CaseStudiesSection/components/CaseStudyCarousel"

export const CaseStudiesSection = () => {
  return (
    <div className="relative bg-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="w-full">
          <div className="text-center mb-12">
            <div className="text-sm leading-tight uppercase mb-2">
              RESULTADOS
            </div>
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mt-5">
              Historias de{" "}
              <mark className="text-3xl sm:text-4xl lg:text-5xl italic bg-transparent font-instrument_serif">
                clientes
              </mark>
            </h2>
          </div>
          <div className="overflow-auto py-2">
            <CaseStudyCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}
