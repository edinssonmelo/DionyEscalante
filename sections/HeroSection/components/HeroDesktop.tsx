"use client"

import { HeroContent } from "./HeroContent"
import { useEffect, useState } from "react"

import { getImagePath } from "@/lib/utils"

const HERO_IMAGES = [
  "https://realtymarketingpro.com/wp-content/uploads/2025/09/RMP-Hero-6-2.png",
  getImagePath("/images/design-mode/portada2.png"),
  getImagePath("/images/design-mode/portada3.png"),
]

export const HeroDesktop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative box-border caret-transparent clear-both hidden flex-col min-h-screen justify-center w-full md:flex">
      <div className="absolute box-border caret-transparent inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="relative content-center box-border caret-transparent gap-x-16 grid auto-rows-[minmax(min-content,max-content)] grid-cols-[minmax(0px,1fr)] max-w-[1290px] gap-y-8 z-10 mx-auto px-6 py-[104px] md:grid-cols-[minmax(0px,calc(65%_-_32px))_minmax(0px,calc(35%_-_32px))] w-full">
        <div className="text-blue-800 box-border caret-transparent flex flex-col justify-center z-[1]">
          <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center">
            <HeroContent />
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-col justify-center z-[1]">
          <div className="relative box-border caret-transparent gap-x-4 flex-col justify-center"></div>
        </div>
      </div>
    </div>
  )
}
