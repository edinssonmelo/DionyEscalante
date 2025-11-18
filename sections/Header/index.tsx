"use client"

import { DesktopHeader } from "@/sections/Header/components/DesktopHeader"
import { MobileHeader } from "@/sections/Header/components/MobileHeader"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Verificar inmediatamente el estado del scroll al cargar
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Ejecutar inmediatamente
    checkScroll()

    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed box-border caret-transparent z-[100] inset-x-0 top-0 transition-all duration-300 ${isScrolled ? "bg-[linear-gradient(90deg,rgb(20,22,34)_0%,rgb(11,22,73)_100%)]" : "bg-transparent"}`}
    >
      <DesktopHeader isScrolled={isScrolled} />
      <MobileHeader isScrolled={isScrolled} />
    </header>
  )
}
