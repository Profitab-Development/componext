'use client'

import type { JSX } from "react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function Materials(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: 1,
      title: "Xenia (Італія) – армовані термопластичні композити для лиття під тиском та 3D-друку:",
      logo: "/img/materials/logo-3.webp",
      items: [
        "Легкі та надміцні матеріали на основі вуглецевого та скловолокна.",
        "Високотемпературні та біозасновані рішення.",
        "Економія до 50% матеріалу та в 2 рази менше часу виробництва.",
        "Застосування: авіація, автоспорт, оборона, нафтогаз, прототипування, форми."
      ]
    },
    {
      id: 2,
      title: "ThermHex (Німеччина) – нове покоління наповнювачів із сотовою структурою для сендвіч-панелей.",
      logo: "/img/materials/logo-2.webp",
      items: [
        "Легкі та жорсткі панелі з поліпропілену.",
        "Термопластичні панелі можуть набувати складних форм.",
        "Унікальна технологія EconCore з безперервним виробництвом.",
        "Можливість покриття поверхні майже будь-якою тканиною.",
        "Зниження ваги конструкції при збереженні міцності.",
        "Економія сировини та скорочення викидів CO₂."
      ]
    },
    {
      id: 3,
      title: "Siltex (Німеччина) – інноваційні плетені матеріали:",
      logo: "/img/materials/logo-1.webp",
      items: [
        "Композитні рукави, стрічки, шнури з унікальною плетеною структурою, що надає матеріалам виключну міцність за низької ваги.",
        "Термопластична матриця із поліаміду, армування вуглеволокном чи скловолокном.",
        "Застосування: легкі конструкції, захист, ізоляція, композитні вироби, авіація, автомобілебудування."
      ]
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length, isHovered])


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
    <section id="materials" className="w-full py-[100px]">
      <div className="container-1320 px-4">
        {/* Title with Icon */}
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
        
        {/* Description Text */}
        <div className="mt-15 text-center">
          <p 
            className="text-lg font-normal leading-[130%] tracking-[0%] text-[#52525B]"
            style={{ fontFamily: "Roboto Mono, monospace" }}
          >
            Ми пропонуємо не просто сировину, а готові технологічні рішення<br />
            для найвибагливіших галузей:
          </p>
        </div>

        {/* Slider Content */}
        <div
          className="mt-15 relative min-h-[400px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow area - click to go previous */}
          <div
            className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={goToPreviousSlide}
          >
          </div>

          {/* Right arrow area - click to go next */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={goToNextSlide}
          >
          </div>

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
                className={`flex-shrink-0 w-full px-4 transition-all duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-70'
                  }`}
              >
                <div className="text-center">
                  {/* Logo */}
                  <div className="flex justify-center">
                    <Image
                      src={slide.logo}
                      alt={`${slide.title} Logo`}
                      width={210}
                      height={63}
                      priority
                      draggable={false}
                      className="select-none"
                    />
                  </div>

                  {/* Text */}
                  <div className="my-6">
                    <p className="text-center text-lg font-normal leading-[130%] tracking-[0%] text-[#3F3F46]" style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}>
                      {slide.title}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center mb-8">
                    <a
                      href="#contacts"
                      className="relative font-mono font-medium text-base leading-[130%] group flex items-center justify-center pt-[15px] pr-9 pb-4 pl-9 bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat select-none z-20 w-[188px] h-[52px] rounded-full"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat z-10 rounded-full"
                      ></div>
                      <span
                        className="relative z-20 text-[#3B82F6] group-hover:text-[#2563EB] transition-colors duration-300 font-bold text-base leading-[100%] tracking-[0%]"
                        style={{ fontFamily: "Roboto Mono, monospace" }}
                      >
                        Консультація
                      </span>
                    </a>
                  </div>

                  {/* SVG between button and items */}
                  <div className="flex justify-center ">
                    <Image
                      src="/img/materials/Group Arrows.svg"
                      alt="Group Arrows"
                      width={12}
                      height={82}
                      unoptimized={true}
                    />
                  </div>

                  {/* Materials List in one frame */}
                  <div className="max-w-[698px] mx-auto my-8">
                    <div className="custom-corner-border bg-white p-8">
                      <div className="space-y-4">
                        {slide.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                            <div className="flex-1">
                              <p
                                className="text-base font-normal  tracking-[0%] text-[#71717A] text-left"
                                style={{ fontFamily: "Roboto Mono, monospace" }}
                              >
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className="corner-bl"></span>
                      <span className="corner-br"></span>
                      <span className="bottom-line"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Number indicator */}
          <div className="flex justify-center mt-15">
            <span
              className="px-4 py-2  rounded-full text-lg font-normal leading-[100%] tracking-[0%] text-center text-[#A1A1AA]"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              Крок {currentSlide + 1}/{slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
