import { LogoCarousel } from "@/sections/IntegrationsSection/components/LogoCarousel"

export const IntegrationsSection = () => {
  return (
    <div className="relative w-full">
      <div className="w-full py-10 md:py-16">
        <h3 className="text-slate-900 text-xs sm:text-sm md:text-base leading-tight max-w-2xl text-center uppercase mb-2 mx-auto px-4">
          Transparencia legal y operativa
        </h3>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 md:pt-12 md:pb-8">
          <LogoCarousel />
        </div>
      </div>
    </div>
  )
}
