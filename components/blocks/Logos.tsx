import type { JSX } from "react"
import Image from "next/image"

export function Logos(): JSX.Element {
  return (
    <section className="w-full py-[100px]">
      <div className="container-1320 px-4">
        {/* Logos in a row */}
        <div className="flex items-center justify-between">
          <Image
            src="/img/logos/logo-3.webp"
            alt="Xenia Logo"
            width={234}
            height={66}
            quality={100}
            unoptimized={true}
          />
          <Image
            src="/img/logos/logo-2.webp"
            alt="Thermex Logo"
            width={242}
            height={69}
            quality={100}
            unoptimized={true}
          />
          <Image
            src="/img/logos/logo-1.webp"
            alt="SILTEX Logo"
            width={234}
            height={62}
            quality={100}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  )
}
