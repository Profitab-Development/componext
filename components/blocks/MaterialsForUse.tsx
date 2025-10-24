"use client"

import type { JSX } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useState, useEffect } from "react"

export function MaterialsForUse(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(1) // Починаємо з другого слайда (індекс 1)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center', // Вирівнювання по центру
    skipSnaps: false,
    dragFree: false,
    startIndex: 1 // Починаємо з другого слайда
  })

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const selectedIndex = emblaApi.selectedScrollSnap()
        setCurrentSlide(selectedIndex)
      }
      
      emblaApi.on('select', onSelect)
      
      // Встановлюємо початковий слайд в центр
      emblaApi.scrollTo(1, false)
      onSelect() // Set initial slide
      
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi])

  const cards = [
    {
      image: "/img/materials-for-use/Image Frame.webp",
      title: "XECARB 3DP",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    },
    {
      image: "/img/materials-for-use/Image Frame1.webp",
      title: "Термопластичні еластомери",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    },
    {
      image: "/img/materials-for-use/Image Frame2.webp",
      title: "Вуглецеве волокно",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    },{
      image: "/img/materials-for-use/Image Frame.webp",
      title: "XECARB 3DP",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    },
    {
      image: "/img/materials-for-use/Image Frame1.webp",
      title: "Термопластичні еластомери",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    },
    {
      image: "/img/materials-for-use/Image Frame2.webp",
      title: "Вуглецеве волокно",
      description: "вміст до 50% карбонових волокон; висока міцність, електропровідність, низька щільність."
    }
  ]


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
         <div className="mt-15">
           <div className="embla overflow-hidden" ref={emblaRef}>
             <div className="embla__container flex">
               {cards.map((card, index) => {
                 const isCurrentSlide = index === currentSlide
                 const shouldBlur = !isCurrentSlide // Блюримо всі слайди, крім поточного
                 
                 return (
                   <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-5">
                     <div 
                       className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col h-full shadow-[inset_0px_0px_68px_0px_#1D4ED80D,inset_0px_2px_4px_0px_#1D4ED81A] transition-all duration-300"
                       style={shouldBlur ? { filter: 'blur(4px)' } : {}}
                     >
                       <div className="w-full mb-6">
                         <Image 
                           src={card.image} 
                           alt="Material" 
                           width={394} 
                           height={240} 
                           className="w-full h-[240px] rounded-md object-cover"
                           unoptimized={true} 
                         />
                       </div>
                       {/* Divider */}
                       <div className="mb-4 w-12 h-0 border-1 border-solid border-blue-500 mx-auto" />
                     <h3 className="text-[#3F3F46] text-[18px] font-medium leading-[100%] mb-4 text-center font-['Suisse_Intl',system-ui,sans-serif]">
                       {card.title}
                     </h3>
                     <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3 bg-[#1E3A8A05]">
                       <p className="font-mono font-medium text-[16px] text-gray-500 text-center">
                         {card.description}
                       </p>
                     </div>
                   </div>
                 </div>
                 )
               })}
             </div>
           </div>
           
           {/* Custom Navigation */}
           <div className="flex justify-center mt-15">
             <div className="flex items-center w-[152px] h-[56px] gap-[40px] rounded-xl border border-[#60A5FA] py-2 px-4 bg-[#BFDBFE]">
               <button 
                 onClick={scrollPrev}
                 className=" hover:scale-110 transition-transform duration-200"
               >
                 <Image 
                   src="/img/materials-for-use/Icon Arrow.svg" 
                   alt="Previous" 
                   width={40} 
                   height={40} 
                   className="w-10 h-10"
                 />
               </button>
               <button 
                 onClick={scrollNext}
                 className=" hover:scale-110 transition-transform duration-200"
               >
                 <Image 
                   src="/img/materials-for-use/Icon Arrow-1.svg" 
                   alt="Next" 
                   width={40} 
                   height={40} 
                   className="w-10 h-10"
                 />
               </button>
             </div>
           </div>
         </div>
      </div>
    </section>
  )
}
