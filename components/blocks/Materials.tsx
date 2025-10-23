import type { JSX } from "react"
import Image from "next/image"

export function Materials(): JSX.Element {
  return (
    <section className="w-full py-[100px]">
      <div className="container-1320 px-4">
        {/* Title with Icon (same style as WhoWeAre) */}
        <div className="flex items-center gap-3 pb-6 px-4">
          <Image
            src="/img/materials/Icon Title.svg"
            alt="Materials Icon"
            width={36}
            height={36}
            unoptimized={true}
          />
          <h2 className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
            Матеріали та напівфабрикати
          </h2>
        </div>
        
        {/* Divider Line */}
        <div className="w-full border-b border-zinc-200"></div>
        
        {/* Content placeholder */}
        <div className="mt-12">
          {/* TODO: add materials content once provided */}
        </div>
      </div>
    </section>
  )
}
