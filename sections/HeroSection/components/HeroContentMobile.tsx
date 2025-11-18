export const HeroContentMobile = () => {
  return (
    <div className="flex flex-col text-center md:text-start">
      <div className="w-full">
        <p className="text-slate-100 text-base leading-relaxed max-w-lg mx-auto md:mx-0 uppercase mb-6">
          Tranquilidad patrimonial, sin sorpresas.
        </p>
        <h1 className="text-white text-3xl sm:text-4xl leading-tight mb-6 font-inter_tight md:text-6xl md:leading-tight">
          Abogados inmobiliarios
          <br />
          que{" "}
          <mark className="text-3xl sm:text-4xl italic bg-transparent font-instrument_serif md:text-6xl">
            resuelven
          </mark>
        </h1>
        <p className="text-slate-100 max-w-lg mx-auto md:mx-0 mb-6">
          Blindamos arriendos, compraventas, PH y sucesiones con rutas claras, tiempos definidos y documentos exigibles.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
          <a
            href="https://wa.me/573227280548"
            className="relative text-black text-lg sm:text-xl font-semibold flex items-center justify-center bg-blue-300 w-full max-w-sm px-6 py-4 rounded-[30px] overflow-hidden hover:text-slate-900 hover:bg-emerald-50 transition-all"
          >
            <span>
              Agenda tu diagnóstico gratis
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-5 px-4 py-2.5">
          <div className="flex">
            <div className="h-9 w-9 rounded-full shadow-md">
              <img
                src="https://realtymarketingpro.com/wp-content/uploads/2025/05/smiling-real-estate-agent-in-white-top-e1756311184654.jpeg"
                alt="Avatar"
                className="h-9 w-9 object-cover rounded-full"
              />
            </div>
            <div className="h-9 w-9 rounded-full shadow-md -ml-3">
              <img
                src="/images/design-mode/calgary-portrait-photographer-8.jpg"
                alt="Avatar"
                className="h-9 w-9 object-cover rounded-full"
              />
            </div>
            <div className="h-9 w-9 rounded-full shadow-md -ml-3">
              <img
                src="/images/design-mode/female-headshot_real-estate-headshots-800x534-1-e1759867270213.jpg"
                alt="Avatar"
                className="h-9 w-9 object-cover rounded-full"
              />
            </div>
            <div className="h-9 w-9 rounded-full shadow-md -ml-3">
              <img
                src="/images/design-mode/6410dc4fb595d07ad99fb65e_DSC_0189-Edit.webp"
                alt="Avatar"
                className="h-9 w-9 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="text-blue-50 text-sm leading-tight text-left font-inter">
            Clientes en Bogotá, Medellín y Cali confían en nosotros
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 py-3">
          <div className="max-w-[25px]">
            <img
              src="https://c.animaapp.com/mh45bcjb2ekNEj/assets/icon-4.svg"
              alt="Icon"
              className="h-full w-full"
            />
          </div>
          <p className="text-stone-300 text-base leading-relaxed max-w-lg text-left">
            <em>Cupos limitados por semana para auditorías</em>
          </p>
        </div>
      </div>
    </div>
  )
}
