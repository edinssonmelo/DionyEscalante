import { ComparisonCard } from "@/sections/ComparisonSection/components/ComparisonCard"

export const ComparisonSection = () => {
  return (
    <div className="relative bg-[linear-gradient(90deg,rgb(20,22,34)_0%,rgb(11,22,73)_100%)] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="box-border caret-transparent flex flex-col z-[1]">
          <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
            <div className="box-border caret-transparent flex flex-col z-[1] mb-8">
              <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
                <div className="box-border caret-transparent mb-6">
                  <div className="box-border caret-transparent">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
