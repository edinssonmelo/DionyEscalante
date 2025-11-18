export type BenefitCardProps = {
  imageUrl: string
  imageAlt: string
  title: string
  description: string
}

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div className="box-border caret-transparent flex flex-col z-[1]">
      <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
        <div className="box-border caret-transparent max-w-full">
          <span className="bg-white box-border caret-transparent block text-center mx-auto px-4 py-0 md:py-4">
            <div className="box-border caret-transparent mx-[15px]">
              <div className="text-slate-700 box-border caret-transparent inline-block max-w-full overflow-hidden p-2.5">
                <div className="box-border caret-transparent max-w-20 mx-auto">
                  <div className="box-border caret-transparent h-0 max-w-full w-[500px] pb-[100%]">
                    <div className="box-border caret-transparent">
                      <img
                        src={props.imageUrl || "/placeholder.svg"}
                        alt={props.imageAlt}
                        className="aspect-[auto_500_/_500] box-border caret-transparent max-w-full w-[500px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h3 className="text-slate-900 text-[26px] box-border caret-transparent leading-[31.2px] mt-[5px] mb-2.5">
                {props.title}
              </h3>
              <p className="text-slate-700 box-border caret-transparent">{props.description}</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
