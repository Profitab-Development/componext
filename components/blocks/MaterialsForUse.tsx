"use client"

import type { JSX } from "react"
import Image from "next/image"
import { useState } from "react"

export function MaterialsForUse(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const cards = [
    {
      icon: "/img/materials-for-use/icon-1.svg",
      title: "Ексклюзивне партнерство",
      description: "Офіційний імпортер Xenia, Siltex, ThermHex та інших брендів в Україні — гарантія оригінальної продукції та вигідних умов постачання."
    },
    {
      icon: "/img/materials-for-use/icon-2.svg",
      title: "Інженерна підтримка на всіх етапах",
      description: "Консультації та допомога в підборі матеріалів для конкретного проєкту дозволяють скоротити час на випробування і запуск виробництва до 50%."
    },
    {
      icon: "/img/materials-for-use/icon-3.svg",
      title: "Комплексні рішення під ключ",
      description: "Матеріали, верстати, технології, інструменти для обробки — все в одному місці. Забезпечуємо повний супровід: від ідеї до готового виробу."
    },
    {
      icon: "/img/materials-for-use/icon-4.svg",
      title: "Реальні результати",
      description: "Вироби виходять легші, міцніші та економічніші: економія сировини до 50%, скорочення часу виробництва вдвічі, підвищення конкурентоспроможності готової продукції."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (cards.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (cards.length - 2)) % (cards.length - 2))
  }

  return (
    <section className="w-full py-[100px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/materials-for-use/Section.webp"
          alt="Materials for Use Background"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized={true}
        />
      </div>

      <div className="relative z-10 container-1320 px-4">
        {/* Title with Icon (same style as WhoWeAre) */}
        <div className="flex items-center gap-3  px-4">
          <Image
            src="/img/materials-for-use/IconTitle.svg"
            alt="Materials for Use Icon"
            width={36}
            height={36}
            unoptimized={true}
          />
          <h2 className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
            Матеріали для використання
          </h2>
        </div>

        {/* Description */}
        <div className="mt-25 flex justify-center">
          <p className="text-center max-w-[900px] font-mono font-normal text-lg leading-[130%] tracking-normal text-zinc-600">
            Ми пропонуємо інноваційні легкі та міцні композити нового покоління від провідних виробників Xenia, Siltex, ThermHex.
          </p>
        </div>
         {/* Slider */}
         <div className="mt-25">
           {/* Three Cards Display */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
             {cards.slice(currentSlide, currentSlide + 3).map((card, index) => (
               <div 
                 key={`${currentSlide}-${index}`} 
                 className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col transition-all duration-500 ease-in-out" 
                 style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}
               >
                 <div className="flex items-center justify-center mb-6">
                   <Image src={card.icon} alt="Icon" width={56} height={56} unoptimized={true} />
                 </div>
                 <h3 className="text-[#3F3F46] text-[16px] font-medium leading-[100%] mb-4 text-center" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
                   {card.title}
                 </h3>
                 <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3" style={{ backgroundColor: '#1E3A8A05' }}>
                   <p className="font-mono font-medium text-[13px] text-gray-500">
                     {card.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>

           {/* Navigation Arrows */}
           <div className="flex justify-center items-center gap-4 mt-8">
             <button 
               onClick={prevSlide}
               className="p-2"
             >
               <Image 
                 src="/img/materials-for-use/Icon Arrow.svg" 
                 alt="Previous" 
                 width={24} 
                 height={24}
                 unoptimized={true}
               />
             </button>
             
             <button 
               onClick={nextSlide}
               className="p-2"
             >
               <Image 
                 src="/img/materials-for-use/Icon Arrow-1.svg" 
                 alt="Next" 
                 width={24} 
                 height={24}
                 unoptimized={true}
               />
             </button>
           </div>
         </div>
      </div>
    </section>
  )
}
