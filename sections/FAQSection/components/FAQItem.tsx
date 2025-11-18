"use client"

import { useState } from "react"

export type FAQItemProps = {
  question: string
  answer: string
}

export const FAQItem = (props: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative text-slate-900 text-xl font-bold content-between items-center bg-pink-50/0 border-b-violet-900 caret-transparent flex tracking-[0.7px] leading-6 text-left w-full pl-0 pr-5 py-[15px] border-t-transparent border-t-0 border-x-transparent border-x-0 border-b border-solid hover:bg-transparent hover:border-b-slate-900"
        >
          <span className="box-border caret-transparent flex pr-2.5">
            <span className="box-border caret-transparent block break-words">{props.question}</span>
          </span>
          <span className="relative caret-transparent block h-6 min-w-6 w-6 ml-auto before:accent-auto before:bg-slate-900 before:caret-transparent before:text-slate-900 before:block before:text-xl before:not-italic before:normal-nums before:font-bold before:h-0.5 before:tracking-[0.7px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:rotate-45 before:visible before:w-3 before:border-separate before:left-0.5 before:top-[11px] before:font-inter_tight after:accent-auto after:bg-slate-900 after:caret-transparent after:text-slate-900 after:block after:text-xl after:not-italic after:normal-nums after:font-bold after:h-0.5 after:tracking-[0.7px] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:-rotate-45 after:visible after:w-3 after:border-separate after:right-0.5 after:top-[11px] after:font-inter_tight"></span>
        </button>
      </div>
      <div role="region" className={`box-border caret-transparent overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="bg-transparent box-border caret-transparent pr-6 py-6 after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-indigo-950 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter_tight">
          <p className="box-border caret-transparent">{props.answer}</p>
        </div>
      </div>
    </div>
  )
}
