export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Open menu"
      className="text-slate-100 text-sm font-semibold items-center bg-transparent caret-transparent flex tracking-[0.7px] leading-[22.4px] opacity-50 text-center px-[8.4px] py-[5.6px] rounded-[3px] hover:text-sky-500 hover:border-sky-500"
    >
      <span className="text-4xl box-border caret-transparent flex leading-[57.6px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
        <span className="self-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/mh45bcjb2ekNEj/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-9 w-9"
          />
        </span>
      </span>
    </button>
  )
}
