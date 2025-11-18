import { BenefitCard } from "@/sections/BenefitsSection/components/BenefitCard"

export const BenefitsSection = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-12">
          <BenefitCard
            imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/1.png"
            imageAlt="Evita sorpresas costosas"
            title="Evita sorpresas costosas"
            description="Detectamos y mitigamos antes de que escale."
          />
          <BenefitCard
            imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/Blue-and-White-Modern-Icons-Typography-Initial-D-Real-Estate-Logo-4.png"
            imageAlt="Ruta paso a paso"
            title="Ruta paso a paso"
            description="Sabes qué sigue y cuándo."
          />
          <BenefitCard
            imageUrl="https://realtymarketingpro.com/wp-content/uploads/2025/05/3.png"
            imageAlt="Contratos que protegen"
            title="Contratos que protegen"
            description="Evita cláusulas nulas o ambiguas."
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="https://wa.me/573227280548"
            className="relative text-black text-lg sm:text-xl font-semibold flex items-center justify-center bg-blue-300 w-full max-w-sm px-6 py-4 rounded-[30px] overflow-hidden hover:text-slate-900 hover:bg-emerald-50 transition-all"
          >
            <span>Quiero mi checklist</span>
          </a>
        </div>
      </div>
    </div>
  )
}
