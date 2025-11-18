import { MobileNavbar } from "./MobileNavbar" // Added import for MobileNavbar

export const MobileHeader = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="box-border caret-transparent block md:hidden">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="relative box-border caret-transparent z-[1]">
              <MobileNavbar isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
