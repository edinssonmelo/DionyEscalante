export const NavbarMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="flex items-center h-full"
    >
      <ul className="flex items-center list-none m-0 p-0">
        <li className="flex items-center h-full">
          <a
            href="#services"
            className="text-white text-[15px] flex items-center justify-center tracking-[0.7px] px-[11.25px] h-full transition-colors hover:text-blue-400"
          >
            Servicios
          </a>
        </li>
        <li className="flex items-center h-full">
          <a
            href="#results"
            className="text-white text-[15px] flex items-center justify-center tracking-[0.7px] px-[11.25px] h-full transition-colors hover:text-blue-400"
          >
            Clientes
          </a>
        </li>
        <li className="flex items-center h-full">
          <a
            href="#contact"
            className="text-white text-[15px] flex items-center justify-center tracking-[0.7px] px-[11.25px] h-full transition-colors hover:text-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
