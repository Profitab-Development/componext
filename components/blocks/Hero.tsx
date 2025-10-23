import type { JSX } from "react"
import Image from "next/image"

export function Hero(): JSX.Element {
  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Image
          src="/img/hero/HeroSection.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-1320 px-4 text-left flex flex-col justify-end pb-[60px] h-full">
        <div className="max-w-[770px]">
          <h1 className="text-[52px] font-bold leading-[130%] mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
            Інноваційні композитні матеріали, термопластичні композити з Європи
          </h1>
          <p className="text-[19px] font-normal leading-[130%] tracking-[0.02em] text-zinc-500 mb-12 font-mono">
            Комплексні рішення із використанням інноваційних композитів для авіації, машинобудування і промисловості: постачання матеріалів та технологій, обладнання та інструментів для обробки, технологічна підтримка, супровід
          </p>
        </div>
        
        {/* Logos */}
        <div className="flex items-center gap-8 lg:gap-12">
          
          <Image
            src="/img/hero/logo-3.webp"
            alt="Xenia Logo"
            width={113}
            height={34}
            quality={75}
            unoptimized={true}
          />
          <Image
            src="/img/hero/logo-2.webp"
            alt="Thermex Logo"
            width={150}
            height={43}
            quality={75}
            unoptimized={true}
          />
          <Image
            src="/img/hero/logo-1.webp"
            alt="SILTEX Logo"
            width={114}
            height={30}
            quality={75}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  )
}


