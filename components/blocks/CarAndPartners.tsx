import type { JSX } from "react"
import Image from "next/image"

export function CarAndPartners(): JSX.Element {
  return (
    <section className="w-full pt-[40px] pb-[100px]">
      <div className="container-1320 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-40 items-center">
          {/* Left Side - Car Images. Full-bleed to the left, ~65vw width */}
          <div>
            <div className="w-full lg:w-[59vw] lg:ml-[calc((100vw-1320px)/-2)] flex items-center">
              {/* Car Parts - touches left viewport edge */}
              <div className="flex-1">
                <Image
                  src="/img/who-we-are/car-parts.webp"
                  alt="Car Parts"
                  width={960}
                  height={600}
            unoptimized={true}
                  className="w-full h-auto"
                />
              </div>
              {/* Car Diagram */}
              {/* <div className="flex-shrink-0">
                <Image
                  src="/img/who-we-are/car-diagram.webp"
                  alt="Car Diagram"
                  width={240}
                  height={420}
            unoptimized={true}
                  className="h-full w-full max-h-[420px] max-w-[240px]"
                />
              </div> */}
            </div>
          </div>

          {/* Right Side - Partners (stays inside 1320px container) */}
          <div>
            <h3 className="font-mono font-medium text-[24px] leading-[130%] tracking-[0] text-[#3F3F46] mb-8">
              Офіційний партнер:
            </h3>
            {/* Logos Stack */} 
            <div className="flex flex-col gap-6">
              <div className="">
                <Image
                  src="/img/who-we-are/xenia-logo.webp"
                  alt="Xenia Logo"
                  width={240}
                  height={80}
            unoptimized={true}
                  className=""
                />
              </div>
              <div className="">
                <Image
                  src="/img/who-we-are/thermhex-logo.webp"
                  alt="ThermHex Logo"
                  width={240}
                  height={80}
            unoptimized={true}
                  className=""
                />
              </div>
              <div className="">
                <Image
                  src="/img/who-we-are/siltex-logo.webp"
                  alt="SILTEX Logo"
                  width={240}
                  height={80}
            unoptimized={true}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
