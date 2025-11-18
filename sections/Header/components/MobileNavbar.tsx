import { MobileNavbarLogo } from "@/sections/Header/components/MobileNavbarLogo"
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton"

export const MobileNavbar = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent max-w-[1290px] mx-auto px-6">
        <div className="box-border caret-transparent grid grid-cols-[auto_auto] min-h-20">
          <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] pr-10 md:min-h-0 md:min-w-0">
                <MobileNavbarLogo />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                <MobileMenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
