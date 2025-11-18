export type ServiceListProps = {
  title: string
  href: string
}

export const ServiceList = (props: ServiceListProps) => {
  return (
    <div className="box-border caret-transparent">
      <a
        href={props.href}
        className="text-blue-800 items-center bg-white box-border caret-transparent flex justify-start underline-offset-[1.8px] mb-4 mx-auto p-2 rounded-[140px] hover:text-blue-400 hover:bg-violet-100"
      >
        <div className="box-border caret-transparent grow underline-offset-[1.8px]">
          <h4 className="text-slate-900 text-[17.6px] box-border caret-transparent leading-[21.12px] underline-offset-[1.8px] mt-[5px] mb-2.5 md:text-xl md:leading-6">
            {props.title}
          </h4>
        </div>
      </a>
    </div>
  )
}
