export type PricingCardProps = {
  variant: string
  title?: string
  highlightedText?: string
  description?: string
  priceRange?: string
  buttonText?: string
  buttonUrl?: string
  listItems?: Array<string>
}

export const PricingCard = (props: PricingCardProps) => {
  if (props.variant === "cta") {
    return (
      <div className="box-border caret-transparent flex flex-col z-[1]">
        <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
          <div className="box-border caret-transparent flex flex-col z-[1] text-center">
            <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center py-5 rounded-[10px] md:justify-normal bg-[linear-gradient(90deg,rgb(20,22,34)_0%,rgb(11,22,73)_100%)] px-2.5 md:px-[60px] md:py-20">
              <div className="box-border caret-transparent flex flex-col z-[1]">
                <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
                  <p className="text-slate-100 text-2xl box-border caret-transparent leading-[38.4px] mb-8 md:text-[34px] md:leading-[54.4px]">
                    {props.title}{" "}
                    <mark className="text-2xl italic bg-transparent box-decoration-clone box-border caret-transparent leading-[38.4px] font-instrument_serif md:text-[34px] md:leading-[54.4px]">
                      {props.highlightedText}
                    </mark>{" "}
                    all services included
                  </p>
                  <p className="text-slate-100 text-[17.6px] box-border caret-transparent leading-6 mb-8 md:text-2xl md:leading-7">
                    {props.description}
                  </p>
                  <p className="text-slate-100 text-base box-border caret-transparent leading-[25.6px] mb-8">
                    {props.priceRange}
                  </p>
                  <div className="box-border caret-transparent clear-both hidden w-full mx-auto md:block">
                    <div className="relative box-border caret-transparent h-1.5 md:h-[110px]"></div>
                  </div>
                  <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-2">
                    <a
                      href={props.buttonUrl}
                      className="relative text-black text-[21.6px] font-semibold items-center bg-blue-300 box-border caret-transparent flex justify-center tracking-[0.7px] leading-[34.56px] underline-offset-[2.16px] w-[400px] z-[1] overflow-hidden px-[21.6px] py-[15px] rounded-[30px] hover:text-slate-900 hover:bg-emerald-50"
                    >
                      <span className="box-border caret-transparent block underline-offset-[2.16px]">
                        {props.buttonText}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="box-border caret-transparent flex flex-col z-[1]">
      <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal">
        <div className="box-border caret-transparent flex flex-col z-[1] text-left">
          <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center py-5 rounded-[10px] md:justify-normal bg-sky-100 pl-[15px] pr-2.5 md:pl-[60px] md:pr-5 md:pt-20 md:pb-[60px]">
            <h3 className="text-slate-900 text-2xl box-border caret-transparent leading-[28.8px] mb-3 md:text-[34px] md:leading-[40.8px] md:mb-[17px]">
              {props.title}{" "}
              <mark className="text-2xl italic bg-transparent box-decoration-clone box-border caret-transparent leading-[28.8px] font-instrument_serif md:text-[34px] md:leading-[40.8px]">
                {props.highlightedText}
              </mark>
            </h3>
            <p className="box-border caret-transparent">
              <strong className="font-bold box-border caret-transparent">{props.description}</strong>
            </p>
            <p className="text-base box-border caret-transparent leading-6 mb-10">{props.priceRange}</p>
            <div className="box-border caret-transparent">
              <ul className="box-border caret-transparent gap-x-0 grid grid-rows-[auto] list-none gap-y-3 mb-2.5 pl-0 md:gap-y-[15px]">
                {props.listItems?.map((item, index) => (
                  <li
                    key={index}
                    className="text-base items-center box-border caret-transparent flex leading-[25.6px] md:text-lg md:leading-[28.8px]"
                  >
                    <span className="text-xl items-center box-border caret-transparent flex justify-center leading-8 mr-[15px] py-1">
                      <img
                        src="https://c.animaapp.com/mh45bcjb2ekNEj/assets/icon-22.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </span>
                    <span className="text-base box-border caret-transparent block leading-[25.6px] md:text-lg md:leading-[28.8px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
