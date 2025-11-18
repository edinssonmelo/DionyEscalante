export type TestimonialCardMobileProps = {
  quote: string
  authorName: string
  authorTitle: string
  authorImageUrl: string
  authorImageAlt: string
  authorImageAspect: string
}

export const TestimonialCardMobile = (props: TestimonialCardMobileProps) => {
  return (
    <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
      <div className="box-border caret-transparent max-w-[360px] text-center w-full mx-auto">
        <div className="relative bg-white box-border caret-transparent max-w-[360px] border border-slate-100 px-2.5 py-5 rounded-[20px] border-solid md:p-12 after:accent-auto after:border-t-slate-100 after:box-border after:caret-transparent after:text-indigo-950 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:-translate-x-3.5 after:visible after:w-0 after:mt-px after:border-b-transparent after:border-x-transparent after:border-separate after:border-[14px] after:border-solid after:left-2/4 after:top-full after:font-inter_tight after:md:transform-none">
          <div role="img" aria-label="5 out of 5 stars" className="box-border caret-transparent my-2.5 pt-2 pb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="text-amber-400 text-xl items-center box-border caret-transparent inline-flex justify-center leading-8"
              >
                <img
                  src="https://c.animaapp.com/mh45bcjb2ekNEj/assets/icon-23.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 w-5"
                />
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
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="box-border caret-transparent w-20 overflow-hidden mr-8 rounded-[10px]">
              <div className="relative box-border caret-transparent h-0 pb-[100%]">
                <img
                  src={props.authorImageUrl || "/placeholder.svg"}
                  alt={props.authorImageAlt}
                  className={`absolute ${props.authorImageAspect} bg-no-repeat bg-cover box-border caret-transparent h-full max-w-full object-cover w-full bg-center left-0`}
                />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-left md:min-h-0 md:min-w-0">
            <div className="box-border caret-transparent">
              <div className="font-medium box-border caret-transparent">{props.authorName}</div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-[15px] font-light box-border caret-transparent leading-6">{props.authorTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
