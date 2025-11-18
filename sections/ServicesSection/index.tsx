import { ServiceList } from "@/sections/ServicesSection/components/ServiceList"

export const ServicesSection = () => {
  return (
    <div className="relative bg-slate-100 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="w-full">
          <div className="mb-8">
            <div className="text-sm leading-tight text-center uppercase mb-2">
              QUÉ RESOLVEMOS
            </div>
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-center mt-5 mx-auto">
              Todo lo legal para{" "}
              <mark className="text-3xl sm:text-4xl lg:text-5xl italic bg-transparent font-instrument_serif">
                tu inmueble
              </mark>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 md:pt-8">
            <div className="flex flex-col text-center md:text-left">
              <div className="box-border caret-transparent clear-both h-2.5"></div>
              <ServiceList title="Arriendos y Restitución" href="#services" />
              <ServiceList title="Estudio de Títulos 360°" href="#services" />
              <ServiceList title="Propiedad Horizontal" href="#services" />
              <ServiceList title="Sucesiones y saneamiento" href="#services" />
              <ServiceList title="Créditos hipotecarios" href="#services" />
              <ServiceList title="Salud financiera" href="#services" />
            </div>
            <div className="flex flex-col">
              <figure className="w-full mx-auto">
                <div className="relative h-0 pb-[70%]">
                  <img
                    src="/images/design-mode/services.png"
                    alt="Servicios legales inmobiliarios - Documentos, contratos y protección patrimonial"
                    className="absolute h-full w-full object-cover object-center rounded-lg left-0 top-0 opacity-80"
                    style={{ filter: "grayscale(10%) contrast(105%)" }}
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
