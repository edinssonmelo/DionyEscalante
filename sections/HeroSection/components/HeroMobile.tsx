"use client"

import { HeroContentMobile } from "./HeroContentMobile"
import { useEffect, useState } from "react"

const HERO_IMAGES = [
  "https://realtymarketingpro.com/wp-content/uploads/2025/09/RMP-Hero-6-2.png",
  "/images/design-mode/portada2.png",
  "/images/design-mode/portada3.png",
]

export const HeroMobile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen md:hidden">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-blue-800 flex flex-col justify-center pt-20">
          <HeroContentMobile />
        </div>
      </div>
    </div>
  )
}
