import { Navbar } from "./Navbar" // Assuming Navbar is in the same directory

export const DesktopHeader = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="box-border caret-transparent hidden md:block w-full">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="items-center box-border caret-transparent flex h-20 w-full">
            <Navbar isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </div>
  )
}
