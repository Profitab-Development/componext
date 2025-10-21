import type { JSX } from "react"
import Image from "next/image"

export function CarAndPartners(): JSX.Element {
  return (
    <section className="w-full py-[100px]">
      <div className=" px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Car Images */}
          <div className="flex items-center gap-4">
            {/* Car Parts - to left edge of screen */}
            <div className="flex-1 -ml-32">
              <Image
                src="/img/who-we-are/car-parts.webp"
                alt="Car Parts"
                width={600}
                height={400}
                quality={100}
                unoptimized={true}
                className="w-full h-auto"
              />
            </div>
            
            {/* Car Diagram - 242px height, centered */}
            <div className="flex-shrink-0">
              <Image
                src="/img/who-we-are/car-diagram.webp"
                alt="Car Diagram"
                width={300}
                height={242}
                quality={100}
                unoptimized={true}
                className="h-[242px] w-auto"
              />
            </div>
          </div>
          
          {/* Right Side - Partners */}
          <div>
            <h3 className="text-[21px] font-medium leading-[100%] text-[#3B82F6] mb-8" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
              Офіційний партнер:
            </h3>
            
            {/* Logos Stack */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100 rounded-lg p-6 w-full max-w-[300px]">
                <Image
                  src="/img/who-we-are/xenia-logo.webp"
                  alt="Xenia Logo"
                  width={200}
                  height={80}
                  quality={100}
                  unoptimized={true}
                  className="mx-auto"
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 w-full max-w-[300px]">
                <Image
                  src="/img/who-we-are/thermhex-logo.webp"
                  alt="ThermHex Logo"
                  width={200}
                  height={80}
                  quality={100}
                  unoptimized={true}
                  className="mx-auto"
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 w-full max-w-[300px]">
                <Image
                  src="/img/who-we-are/siltex-logo.webp"
                  alt="SILTEX Logo"
                  width={200}
                  height={80}
                  quality={100}
                  unoptimized={true}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
