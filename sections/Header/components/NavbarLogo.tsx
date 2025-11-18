import { getImagePath } from "@/lib/utils"

export const NavbarLogo = () => {
  return (
    <a
      href="https://realtymarketingpro.com/"
      className="items-center box-border caret-transparent gap-x-[18px] flex max-h-[60px] gap-y-[18px] underline-offset-[1.8px]"
    >
      <img
        src={getImagePath("/images/design-mode/RPM4-white.png")}
        alt="RMP – Realty Marketing Pro"
        className="aspect-[auto_300_/_125] box-border caret-transparent max-h-[60px] max-w-[120px] min-h-0 min-w-0 underline-offset-[1.8px] md:min-h-[auto] md:min-w-[auto]"
      />
    </a>
  )
}
