"use client"

import { useEffect, useRef } from "react"

const logos = [
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Ahrefs.png", alt: "Ahrefs" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Mailchimp.png", alt: "Mailchimp" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Hubspot.png", alt: "Hubspot" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Hootsuite.png", alt: "Hootsuite" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Canva.png", alt: "Canva" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/n8n.png", alt: "n8n" },
  { src: "https://realtymarketingpro.com/wp-content/uploads/2025/06/Meta.png", alt: "Meta" },
]

export const LogoCarousel = () => {
  const scrollRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset when we've scrolled through one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      role="region"
      aria-label="Service Page Logo Carousel"
      className="relative box-border caret-transparent w-full z-0 mx-auto overflow-hidden"
    >
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent rounded-bl rounded-br rounded-tl rounded-tr">
          <div className="relative bg-white box-border caret-transparent max-h-[2000px] overflow-hidden">
            <ul
              ref={scrollRef}
              className="bg-white box-border caret-transparent flex leading-[normal] list-none pl-0 transition-transform"
              style={{ width: "max-content" }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <li key={index} className="relative box-border caret-transparent block float-left w-[100px] mr-[90px]">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    title={logo.alt}
                    className="aspect-[auto_200_/_80] box-border caret-transparent w-full mt-[20%]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
