"use client"

import { useState, useEffect } from "react"

export const CaseStudyCarousel = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      title: "Sucesión familiar",
      bgImage: "https://realtymarketingpro.com/wp-content/uploads/2025/08/WeWork-Mockups.webp",
      bgColor: "bg-gray-700",
      description: "Proceso de sucesión completado en 4 meses. Familia logró vender inmueble heredado sin conflictos legales, con documentación completa y transparente."
    },
    {
      title: "Estudio de títulos",
      bgImage: "https://realtymarketingpro.com/wp-content/uploads/2025/08/PointOne-Holdings-Mockups.webp",
      bgColor: "bg-blue-200",
      description: "Detectamos 3 embargos ocultos antes de la compra. Cliente ahorró $45M evitando una transacción riesgosa. Informe entregado en 48 horas."
    },
    {
      title: "Restitución de inmueble",
      bgImage: "https://realtymarketingpro.com/wp-content/uploads/2025/08/Prodigy-Network-Mockups.webp",
      bgColor: "bg-lime-200",
      description: "Proceso de restitución radicado en 72h. Inquilino moroso desalojado en 3 meses con estrategia de conciliación exitosa."
    },
    {
      title: "Propiedad horizontal",
      bgImage: "https://realtymarketingpro.com/wp-content/uploads/2025/08/Lotus-Mockups.webp",
      bgColor: "bg-emerald-50",
      description: "Junta de PH recuperó 80% de cartera morosa en 6 meses. Implementamos estrategia de cobro conforme a Ley 675 sin anatocismo."
    },
    {
      title: "Crédito hipotecario",
      bgImage: "https://realtymarketingpro.com/wp-content/uploads/2025/08/Urban-Resource-Mockups.webp",
      bgColor: "bg-stone-200",
      description: "Independiente logró aprobación crediticia tras organizar soportes y mejorar salud financiera. Plan de 4 meses dio resultado positivo."
    }
  ]

  // Crear copias duplicadas para efecto infinito (x3 para suavidad)
  const duplicatedStudies = [...caseStudies, ...caseStudies, ...caseStudies]

  // Auto-scroll cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= caseStudies.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [caseStudies.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out gap-4"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {duplicatedStudies.map((study, index) => {
          const isExpanded = expandedCard === index
          // Ajustar colores de texto según el color de fondo
          const textColor = study.bgColor === "bg-gray-700" ? "text-neutral-100" : "text-neutral-800"

          return (
            <div
              key={index}
              onClick={() => setExpandedCard(isExpanded ? null : index)}
              className={`relative ${study.bgColor} shadow-lg rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] ${isExpanded ? 'overflow-visible' : 'overflow-hidden'}`}
            >
              <div
                style={{ backgroundImage: `url('${study.bgImage}')` }}
                className={`bg-cover bg-center transition-all duration-300 ${isExpanded ? 'h-48 md:h-[300px]' : 'h-64 md:h-[475px]'}`}
              ></div>
              <div className="p-5">
                <h3 className={`${textColor} text-xl md:text-2xl lg:text-3xl leading-tight mb-3 font-instrument_serif`}>
                  {study.title}
                </h3>

                {/* Contenido expandible con transición */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className={`${textColor} text-sm md:text-base leading-relaxed mb-4`}>
                    {study.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-xs md:text-sm font-medium">Ver detalles completos</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Indicador de clic */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className={`w-4 h-4 md:w-5 md:h-5 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
