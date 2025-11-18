import type React from "react"

export type ComparisonCardProps = {
  variant: string
  title?: string
  logoUrl?: string
  logoAlt?: string
  items: Array<{
    iconUrl: string
    iconAlt: string
    text: React.ReactNode
  }>
}

export const ComparisonCard = (props: ComparisonCardProps) => {
  const isWithRMP = props.variant === "with-rmp"
  const iconColor = isWithRMP ? "text-blue-500" : "text-red-500"
  const lineHeight = isWithRMP ? "leading-[21px]" : "leading-4"

  return (
    <div
      className={
        isWithRMP
          ? "box-border caret-transparent flex flex-col z-[1]"
          : "box-border caret-transparent flex flex-col text-left z-[1]"
      }
    >
      <div
        className={
          isWithRMP
            ? "relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal"
            : "relative box-border caret-transparent gap-x-4 flex-col justify-center md:justify-normal bg-sky-100 pl-[25px] pr-5 py-5 rounded-[10px] md:pt-20 md:pb-[60px] md:px-[60px]"
        }
      >
        {isWithRMP && (
          <div className="box-border caret-transparent flex flex-col text-left z-[1]">
            <div className="relative bg-slate-100 box-border caret-transparent gap-x-4 flex-col justify-center pl-[25px] pr-5 py-5 rounded-[10px] md:justify-normal md:pt-20 md:pb-[60px] md:px-[60px]">
              <div className="box-border caret-transparent text-center">
                <div className="items-center box-border caret-transparent gap-x-0 inline-flex gap-y-0">
                  <span className="text-[34px] bg-clip-text bg-[linear-gradient(90deg,rgb(26,26,26)_0%,rgb(37,99,235)_100%)] box-border caret-transparent block leading-[54.4px]">
                    {props.title}
                  </span>
                  {props.logoUrl && (
                    <img
                      src={props.logoUrl || "/placeholder.svg"}
                      alt={props.logoAlt}
                      className="box-border caret-transparent h-[34px] max-w-full"
                    />
                  )}
                </div>
              </div>
              <div className="box-border caret-transparent clear-both h-[25px]"></div>
              <div className="box-border caret-transparent">
                <ul className="box-border caret-transparent gap-x-0 grid grid-rows-[auto] list-none gap-y-5 mb-2.5 pl-0 md:gap-y-[30px]">
                  {props.items.map((item, index) => (
                    <li key={index} className={`items-center box-border caret-transparent flex ${lineHeight}`}>
                      <span
                        className={`${iconColor} text-[35px] items-center box-border caret-transparent flex justify-center mr-5 py-1`}
                      >
                        <img
                          src={item.iconUrl || "/placeholder.svg"}
                          alt={item.iconAlt}
                          className="box-border caret-transparent h-[35px] w-[35px]"
                        />
                      </span>
                      <span className="box-border caret-transparent block">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!isWithRMP && (
          <>
            <h3 className="text-slate-900 text-2xl box-border caret-transparent leading-[28.8px] text-center mb-3 pb-5 md:text-[34px] md:leading-[40.8px] md:mb-[17px]">
              {props.title}
            </h3>
            <div className="box-border caret-transparent">
              <ul className="box-border caret-transparent gap-x-0 grid grid-rows-[auto] list-none gap-y-5 mb-2.5 pl-0 md:gap-y-[30px]">
                {props.items.map((item, index) => (
                  <li key={index} className={`items-center box-border caret-transparent flex ${lineHeight}`}>
                    <span
                      className={`${iconColor} text-[35px] items-center box-border caret-transparent flex justify-center mr-5 py-1`}
                    >
                      <img
                        src={item.iconUrl || "/placeholder.svg"}
                        alt={item.iconAlt}
                        className="box-border caret-transparent h-[35px] w-[35px]"
                      />
                    </span>
                    <span className="box-border caret-transparent block">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
