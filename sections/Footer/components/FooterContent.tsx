import { FooterColumn } from "@/sections/Footer/components/FooterColumn"

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1290px] mx-auto px-6">
      <div className="box-border caret-transparent gap-x-[30px] grid grid-cols-[minmax(0px,1fr)] gap-y-[30px] py-[70px] md:gap-x-[50px] md:grid-cols-[minmax(0px,1fr)_minmax(0px,1fr)_minmax(0px,1fr)_minmax(0px,1fr)] md:gap-y-[50px] md:pt-[90px]">
        <FooterColumn variant="logo" />
        <FooterColumn variant="marketing" />
        <FooterColumn variant="services" />
        <FooterColumn variant="contact" />
      </div>
    </div>
  )
}
