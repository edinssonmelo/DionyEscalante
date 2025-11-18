import { FooterContent } from "@/sections/Footer/components/FooterContent"
import { FooterBottom } from "@/sections/Footer/components/FooterBottom"

export const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-slate-900 box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="text-neutral-300 text-[15px] bg-[linear-gradient(90deg,rgb(20,22,34)_0%,rgb(11,22,73)_100%)] border-b-blue-950 border-l-neutral-300 border-r-neutral-300 border-t-neutral-300 box-border caret-transparent leading-6 border-b">
            <FooterContent />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}
