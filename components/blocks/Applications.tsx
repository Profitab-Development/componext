'use client'

import Image from 'next/image'
import { memo, useState, useEffect, useRef } from 'react'

// Main Component
export const Applications = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: 1,
      title: 'Велосипед Porsche',
      description:
        'Легкі рами, колеса та педалі зменшують вагу велосипеда та підвищують ефективність їзди.',
      backgroundDesktop: '/img/applications/Slide=1.webp',
      backgroundMobile: '/img/applications/slide_mob1.webp',
    },
    {
      id: 2,
      title: 'Каяк One Go',
      description: '',
      backgroundDesktop: '/img/applications/Slide=2.webp',
      backgroundMobile: '/img/applications/slide_mob2.webp',
    },
    {
      id: 3,
      title: 'Валіза Aero Carbon',
      description: '',
      backgroundDesktop: '/img/applications/Slide=3.webp',
      backgroundMobile: '/img/applications/slide_mob3.webp',
    },
    {
      id: 4,
      title: 'Човен',
      description: '',
      backgroundDesktop: '/img/applications/Slide=4.webp',
      backgroundMobile: '/img/applications/slide_mob4.webp',
    },
    {
      id: 5,
      title: 'Корпус/Форма',
      description: '',
      backgroundDesktop: '/img/applications/Slide=5.webp',
      backgroundMobile: '/img/applications/slide_mob5.webp',
    },
    {
      id: 6,
      title: 'Корпус гоночного боліду',
      description: '',
      backgroundDesktop: '/img/applications/Slide=6.webp',
      backgroundMobile: '/img/applications/slide_mob6.webp',
    },
    {
      id: 7,
      title: 'Лижне спорядження',
      description: '',
      backgroundDesktop: '/img/applications/Slide=7.webp',
      backgroundMobile: '/img/applications/slide_mob7.webp',
    },
    {
      id: 8,
      title: 'Автомобільний бокс',
      description: '',
      backgroundDesktop: '/img/applications/Slide=8.webp',
      backgroundMobile: '/img/applications/slide_mob8.webp',
    },
  ]

  // Синхронізація скролу зі зміною currentSlide (стрілки / зовнішні зміни)
  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth
      sliderRef.current.scrollTo({
        left: currentSlide * containerWidth,
        behavior: 'smooth',
      })
    }
  }, [currentSlide])

  // Визначення слайду після свайпу (по scrollLeft)
  useEffect(() => {
    const container = sliderRef.current
    if (!container) return

    let scrollTimeout: number | null = null

    const handleScroll = () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout)
      }

      // чекаємо поки «додокручується» інерція
      scrollTimeout = window.setTimeout(() => {
        if (!sliderRef.current) return
        const width = sliderRef.current.clientWidth || 1
        const rawIndex = sliderRef.current.scrollLeft / width
        const nearestIndex = Math.round(rawIndex)

        // захист від виходу за межі
        const clampedIndex = Math.max(
          0,
          Math.min(slides.length - 1, nearestIndex),
        )

        setCurrentSlide(clampedIndex)
      }, 100)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) window.clearTimeout(scrollTimeout)
    }
  }, [slides.length])

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="w-full py-[40px] lg:py-[100px]">
      <div className="container-1320 px-4">
        {/* Title with Icon */}
        <div className="flex items-center gap-3 pb-6 px-4 justify-center lg:justify-start">
          <Image
            src="/img/applications/Icon Title.svg"
            alt="Applications Icon"
            width={36}
            height={36}
            unoptimized={true}
          />
          <h2
            className="text-[19px] lg:text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]"
            style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
          >
            Можливі застосування
          </h2>
        </div>

        {/* Divider Line */}
        <div className="w-full border-b border-zinc-200" />

        {/* Slider Content */}
        <div className="mt-8 lg:mt-15 relative lg:min-h-[600px]">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="slider-container flex overflow-x-auto scrollbar-hide select-none snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 w-full transition-all duration-300 snap-start ${
                  currentSlide === index ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {/* DESKTOP SLIDE (оригінал) */}
                <div className="hidden lg:block relative h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src={slide.backgroundDesktop}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    unoptimized={true}
                  />

                  <div className="absolute top-8 left-8 z-10 max-w-[640px]">
                    <h3
                      className="text-[26px] font-medium leading-[130%] tracking-wider text-[#3F3F46] mb-6"
                      style={{
                        fontFamily: "Suisse Int'l, system-ui, sans-serif",
                      }}
                    >
                      {slide.title}
                    </h3>

                    {slide.description && (
                      <p
                        className="text-[18px] font-medium leading-[130%] tracking-[0%] text-[#71717A]"
                        style={{ fontFamily: 'Roboto Mono, monospace' }}
                      >
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* MOBILE SLIDE */}
                <div className="block lg:hidden rounded-2xl overflow-hidden bg-white px-4 pt-8 pb-4">
                  {/* Title */}
                  <h3
                    className="text-[18px] font-medium leading-[130%] text-center text-[#3F3F46] mb-4"
                    style={{
                      fontFamily: "Suisse Int'l, system-ui, sans-serif",
                    }}
                  >
                    {slide.title}
                  </h3>

                  {/* Description */}
                  {slide.description && (
                    <p
                      className="text-[14px] font-medium leading-[130%] text-center text-[#71717A] mb-6"
                      style={{ fontFamily: 'Roboto Mono, monospace' }}
                    >
                      {slide.description}
                    </p>
                  )}

                  {/* Image — як у закоментованій версії: повна ширина, без max-height */}
                  <div className="relative w-full">
                    <Image
                      src={slide.backgroundMobile}
                      alt={slide.title}
                      width={800}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority={index === 0}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows — DESKTOP */}
          <div className="hidden lg:flex absolute bottom-8 left-8 gap-4 z-20">
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

          {/* Navigation Arrows — MOBILE */}
          <div className="mt-6 flex justify-center gap-4 lg:hidden">
            <button
              onClick={goToPreviousSlide}
              className="w-[56px] h-[56px] bg-[#D0E7FC] hover:bg-[#B8D9F9] rounded-[3px] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Image
                src="/img/applications/Icon Arrow.svg"
                alt="Previous"
                width={28}
                height={28}
                unoptimized={true}
              />
            </button>

            <button
              onClick={goToNextSlide}
              className="w-[56px] h-[56px] bg-[#D0E7FC] hover:bg-[#B8D9F9] rounded-[3px] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Image
                src="/img/applications/Icon Arrow-1.svg"
                alt="Next"
                width={28}
                height={28}
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
