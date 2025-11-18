import { PricingCard } from "@/sections/PricingSection/components/PricingCard"

export const PricingSection = () => {
  return (
    <div className="relative bg-slate-100 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="box-border caret-transparent flex flex-col z-[1]">
          <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
            <div className="box-border caret-transparent flex flex-col z-[1] mb-6">
              <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
                <div className="box-border caret-transparent mb-4">
                  <div className="box-border caret-transparent">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
