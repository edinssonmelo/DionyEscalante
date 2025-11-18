import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight, Instrument_Sans, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Realty Marketing Pro | Real Estate Marketing Agency",
  description:
    "We help real estate professionals tackle marketing without the overhead. Fast, scalable, done-for-you marketing built for the real estate world.",
  keywords:
    "real estate marketing, property marketing, real estate advertising, social media marketing, SEO for real estate",
  openGraph: {
    title: "Realty Marketing Pro | Your Plug-and-Play Real Estate Marketing Team",
    description:
      "More Leads. Faster Deals. Clear Results. Get up and running in days with our dedicated real estate marketing team.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* JSON-LD Schema for LocalBusiness + MarketingAgency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "MarketingAgency"],
                  "@id": "#agency",
                  name: "Realty Marketing Pro",
                  description:
                    "Done-for-you marketing agency specializing in real estate. We handle social media, SEO, web design, lead generation, and digital advertising for real estate professionals.",
                  slogan: "More Leads. Faster Deals. Clear Results.",
                  areaServed: [{ "@type": "Country", name: "United States" }],
                  knowsAbout: [
                    "Real Estate Marketing",
                    "Social Media Marketing",
                    "SEO",
                    "Web Design",
                    "Lead Generation",
                    "Digital Advertising",
                    "Content Marketing",
                  ],
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-instrument_sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
