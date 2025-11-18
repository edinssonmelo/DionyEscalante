export type TestimonialCardProps = {
  ariaLabel: string
  quote: string
  imageUrl: string
  imageAlt: string
  imageAspectRatio: string
  name: string
  nameLink?: string
  title: string
}

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <li
      role="tabpanel"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent shrink-0 list-none min-h-0 min-w-0 w-[calc(33.3333%_-_20px)] mr-[30px] md:min-h-[auto] md:min-w-[auto]"
    >
      <div className="box-border caret-transparent max-w-[360px] text-center mx-auto">
        <div className="relative bg-white box-border caret-transparent max-w-[360px] border border-slate-100 px-2.5 py-5 rounded-[20px] border-solid md:p-12 after:accent-auto after:border-t-slate-100 after:box-border after:caret-transparent after:text-indigo-950 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:transform-none after:visible after:w-0 after:mt-px after:border-b-transparent after:border-x-transparent after:border-separate after:border-[14px] after:border-solid after:left-2/4 after:top-full after:font-inter_tight after:md:-translate-x-3.5">
          <div role="img" aria-label="5 out of 5 stars" className="box-border caret-transparent my-2.5 pt-2 pb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="text-amber-400 text-xl items-center box-border caret-transparent inline-flex justify-center leading-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="box-border caret-transparent h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="box-border caret-transparent">
            <blockquote className="text-violet-900 italic font-light box-border caret-transparent tracking-[0.5px]">
              {props.quote}
            </blockquote>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center mt-5">
          <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] flex items-center">
            <div className="box-border caret-transparent w-20 h-20 overflow-hidden mr-8 rounded-[10px] flex-shrink-0 bg-slate-200">
              <div className="relative box-border caret-transparent w-full h-full">
                <img
                  src={props.imageUrl || "/placeholder-user.jpg"}
                  alt={props.imageAlt}
                  className="absolute w-full h-full object-cover rounded-[10px]"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    const target = e.target as HTMLImageElement
                    if (target.src !== "/placeholder-user.jpg" && !target.src.includes("placeholder-user.jpg")) {
                      target.src = "/placeholder-user.jpg"
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto] flex flex-col justify-center min-h-[80px]">
            <div className="box-border caret-transparent mb-1">
              <div className="font-medium box-border caret-transparent">
                {props.nameLink ? (
                  <a href={props.nameLink} className="box-border caret-transparent underline-offset-[1.8px]">
                    {props.name}
                  </a>
                ) : (
                  props.name
                )}
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-[15px] font-light box-border caret-transparent leading-6">{props.title}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
