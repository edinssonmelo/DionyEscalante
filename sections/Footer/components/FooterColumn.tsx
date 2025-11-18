import { getImagePath } from "@/lib/utils"

export type FooterColumnProps = {
  variant: "logo" | "marketing" | "services" | "contact"
}

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.variant === "logo") {
    return (
      <div className="relative box-border caret-transparent flex after:accent-auto after:box-border after:caret-transparent after:text-neutral-300 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:right-[-15px] after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:inset-y-0 after:font-inter_tight after:md:right-[-25px]">
        <div className="box-border caret-transparent flex basis-[0%] grow text-center md:text-left">
          <div className="box-border caret-transparent basis-[0%] grow text-center md:text-left">
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2.5">
              <div className="box-border caret-transparent text-center md:text-left">
                <figure className="box-border caret-transparent clear-both table text-center mx-auto md:mx-0">
                  <img
                    src={getImagePath("/images/design-mode/RPM4-white.png")}
                    alt="RMP Legal"
                    className="aspect-[auto_200_/_80] box-border caret-transparent max-w-full w-[180px]"
                  />
                </figure>
              </div>
            </section>
            <section className="box-border caret-transparent text-center md:text-left">
              <p className="box-border caret-transparent text-center my-[15px] md:text-left leading-relaxed">
                Asesoría legal especializada en transacciones inmobiliarias, arriendos, propiedad horizontal y más.
                Protegemos tu patrimonio con claridad y rapidez.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }

  if (props.variant === "marketing") {
    return (
      <div className="relative box-border caret-transparent flex after:accent-auto after:box-border after:caret-transparent after:text-neutral-300 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:right-[-15px] after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:inset-y-0 after:font-inter_tight after:md:right-[-25px]">
        <div className="box-border caret-transparent flex basis-[0%] grow text-center md:text-left">
          <div className="box-border caret-transparent basis-[0%] grow text-center md:text-left">
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2.5">
              <div className="box-border caret-transparent text-center md:text-left text-slate-100 text-[17px] font-semibold leading-[25.5px] uppercase mb-[8.5px]">
                Áreas de Práctica
              </div>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Arriendos y Restitución</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Estudio de Títulos</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Propiedad Horizontal</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Sucesiones</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Créditos Hipotecarios</p>
            </section>
          </div>
        </div>
      </div>
    )
  }

  if (props.variant === "services") {
    return (
      <div className="relative box-border caret-transparent flex after:accent-auto after:box-border after:caret-transparent after:text-neutral-300 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:right-[-15px] after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:inset-y-0 after:font-inter_tight after:md:right-[-25px]">
        <div className="box-border caret-transparent flex basis-[0%] grow text-center md:text-left">
          <div className="box-border caret-transparent basis-[0%] grow text-center md:text-left">
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2.5">
              <div className="box-border caret-transparent text-center md:text-left text-slate-100 text-[17px] font-semibold leading-[25.5px] uppercase mb-[8.5px]">
                Enlaces Útiles
              </div>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Sobre Nosotros</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Blog Legal</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Preguntas Frecuentes</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left mb-0 md:mb-2">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Términos y Condiciones</p>
            </section>
            <section className="box-border caret-transparent text-center md:text-left">
              <p className="box-border caret-transparent text-center my-[12px] md:text-left hover:text-blue-300 cursor-pointer transition-colors">Política de Privacidad</p>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative box-border caret-transparent flex">
      <div className="box-border caret-transparent flex basis-[0%] grow text-center md:text-left">
        <div className="box-border caret-transparent basis-[0%] grow text-center md:text-left">
          <section className="box-border caret-transparent text-center md:text-left mb-4">
            <div className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Contáctanos
            </div>
          </section>

          {/* 3 Formas de contacto */}
          <section className="box-border caret-transparent text-center md:text-left mb-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div className="font-semibold text-blue-200 text-sm">Llámanos</div>
                <a href="tel:+573227280548" className="hover:text-blue-300 transition-colors">
                  +57 322 7280548
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <div className="font-semibold text-blue-200 text-sm">WhatsApp</div>
                <a href="https://wa.me/573227280548" className="hover:text-blue-300 transition-colors">
                  Chatea con nosotros
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-semibold text-blue-200 text-sm">Oficina</div>
                <div className="text-sm">
                  Cúcuta, Norte de Santander<br />
                  <span className="text-xs text-neutral-400">Lun - Vie: 8am - 6pm</span>
                </div>
              </div>
            </div>
          </section>

          <section className="box-border caret-transparent text-center md:text-left mb-4">
            <div className="text-[15px] font-semibold box-border caret-transparent leading-tight text-center uppercase mb-3 md:text-left text-white">
              ¿Necesitas asesoría legal?
            </div>
          </section>

          <section className="box-border caret-transparent text-center md:text-left mb-4">
            <a
              href="https://wa.me/573227280548"
              className="relative text-white text-base font-semibold items-center bg-gradient-to-r from-green-500 to-green-600 box-border caret-transparent flex justify-center gap-2 leading-tight text-center w-full z-[1] overflow-hidden px-5 py-3 rounded-lg shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105 md:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Contactar ahora</span>
            </a>
          </section>

          {/* Redes sociales */}
          <section className="box-border caret-transparent text-center md:text-left">
            <div className="text-sm text-blue-200 mb-2">Síguenos:</div>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
