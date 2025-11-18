export const CTASection = () => {
  return (
    <div className="relative bg-[linear-gradient(90deg,rgb(20,22,34)_0%,rgb(11,22,73)_100%)] shadow-xl box-border caret-transparent gap-x-4 flex flex-col justify-center text-center p-8 rounded-xl md:text-start md:p-10 my-8">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCAwIDQgMi00IDItNCAyLTIgNC00IDR6bTAgMGMwLTIgMi00IDQtNHM0IDAgNCAyLTQgMi00IDItMiA0LTQgNHptMCAwYzAtMiAyLTQgNC00czQgMCA0IDItNCAyLTQgMi0yIDQtNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 rounded-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-white font-semibold leading-tight uppercase tracking-wide">
            Asesoría Legal Inmobiliaria
          </div>
        </div>

        <h2 className="text-white text-2xl md:text-4xl box-border caret-transparent leading-tight text-center mt-2 mb-4 md:text-start font-bold">
          ¿Listo para proteger{" "}
          <span className="italic font-instrument_serif text-blue-200">
            tu patrimonio?
          </span>
        </h2>

        <p className="text-blue-100 text-base mb-6 text-center md:text-start leading-relaxed">
          Obtén un diagnóstico gratuito en 15 minutos y un plan de acción claro para tu caso inmobiliario
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start mb-4">
          <a
            href="https://wa.me/573227280548"
            className="relative text-white text-base font-semibold items-center bg-gradient-to-r from-green-500 to-green-600 box-border caret-transparent flex justify-center gap-2 leading-tight text-center w-full sm:w-auto z-[1] overflow-hidden px-6 py-3.5 rounded-lg shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Hablar por WhatsApp</span>
          </a>

          <a
            href="tel:+573227280548"
            className="relative text-blue-700 text-base font-semibold items-center bg-white box-border caret-transparent flex justify-center gap-2 leading-tight text-center w-full sm:w-auto z-[1] overflow-hidden px-6 py-3.5 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Llamar ahora</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-blue-100 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Diagnóstico gratis</span>
          </div>
        </div>
      </div>
    </div>
  )
}
