'use client'

import Image from "next/image"
import { memo, useState, useEffect, useRef } from "react"

// Main Component
export const Applications = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: 1,
      title: "Велосипед Porsche",
      description: "Легкі рами, колеса та педалі зменшують вагу велосипеда та підвищують ефективність їзди.",
      background: "/img/applications/Slide=1.webp"
    },
    {
      id: 2,
      title: "Каяк One Go",
      description: "",
      background: "/img/applications/Slide=2.webp"
    },
    {
      id: 3,
      title: "Валіза Aero Carbon",
      description: "",
      background: "/img/applications/Slide=3.webp"
    },
    {
      id: 4,
      title: "Човен",
      description: "",
      background: "/img/applications/Slide=4.webp"
    },
    {
      id: 5,
      title: "Корпус/Форма",
      description: "",
      background: "/img/applications/Slide=5.webp"
    },
    {
      id: 6,
      title: "Корпус гоночного боліду",
      description: "",
      background: "/img/applications/Slide=6.webp"
    },
    {
      id: 7,
      title: "Лижне спорядження",
      description: "",
      background: "/img/applications/Slide=7.webp"
    },
    {
      id: 8,
      title: "Автомобільний бокс",
      description: "",
      background: "/img/applications/Slide=8.webp"
    }
  ]


  // Sync scroll position with current slide
  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth
      sliderRef.current.scrollTo({
        left: currentSlide * containerWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSlide])

  // Handle slide navigation
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="w-full py-[100px]">
      <div className="container-1320 px-4">
        {/* Title with Icon (same style as Materials) */}
        <div className="flex items-center gap-3 pb-6 px-4">
          <Image
            src="/img/applications/Icon Title.svg"
            alt="Applications Icon"
            width={36}
            height={36}
            unoptimized={true}
          />
          <h2 
            className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" 
            style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
          >
            Можливі застосування
          </h2>
        </div>
        
        {/* Divider Line */}
        <div className="w-full border-b border-zinc-200"></div>
        
        

        {/* Slider Content */}
        <div className="mt-15 relative min-h-[600px]">

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="slider-container flex overflow-x-auto scrollbar-hide select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 w-full transition-all duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-70'
                  }`}
              >
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={slide.background}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    unoptimized={true}
                  />
                  
                  {/* Content - Top Left */}
                  <div className="absolute top-8 left-8 z-10 max-w-[640px]">
                    {/* Title */}
                    <h3 
                      className="text-[26px] font-medium leading-[130%] tracking-wider text-[#3F3F46] mb-6"
                      style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
                    >
                      {slide.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-[18px] font-medium leading-[130%] tracking-[0%] text-[#71717A]"
                      style={{ fontFamily: "Roboto Mono, monospace" }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 left-8 flex gap-4 z-20">
            {/* Previous Arrow (left) */}
            <button
              onClick={goToPreviousSlide}
              className="w-[72px] h-[72px] bg-[#D0E7FC] hover:bg-[#B8D9F9] rounded-[3px] p-4 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Image
                src="/img/applications/Icon Arrow.svg"
                alt="Previous"
                width={40}
                height={40}
                unoptimized={true}
              />
            </button>
            
            {/* Next Arrow (right) */}
            <button
              onClick={goToNextSlide}
              className="w-[72px] h-[72px] bg-[#D0E7FC] hover:bg-[#B8D9F9] rounded-[3px] p-4 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Image
                src="/img/applications/Icon Arrow-1.svg"
                alt="Next"
                width={40}
                height={40}
                unoptimized={true}
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
})

Applications.displayName = 'Applications'
