import { NavbarLogo } from "@/sections/Header/components/NavbarLogo"
import { NavbarMenu } from "@/sections/Header/components/NavbarMenu"
import { NavbarCTA } from "@/sections/Header/components/NavbarCTA"

export type NavbarProps = {
  isScrolled: boolean
}

export const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="w-full">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="grid grid-cols-[auto_auto] items-center h-[60px]">
          <div className="flex items-center">
            <div className="pr-10">
              <NavbarLogo />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <NavbarMenu isScrolled={isScrolled} />
            <NavbarCTA />
          </div>
        </div>
      </div>
    </div>
  )
}
