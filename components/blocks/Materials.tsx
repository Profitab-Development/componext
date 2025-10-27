'use client'

import type { JSX } from "react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function Materials(): JSX.Element {
  // Refs for DOM elements and scroll state
  const sectionRef = useRef<HTMLElement>(null)
  const stickyInnerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0) // 0 to 1
  const rafIdRef = useRef<number | null>(null)
  const isActiveRef = useRef(false) // Whether the section is active/pinned

  // Material slides data
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

  // Throttle function for scroll events
  const throttle = (func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null
    let lastRun = 0
    return () => {
      const now = Date.now()
      if (now - lastRun >= delay) {
        func()
        lastRun = now
      } else {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func()
          lastRun = Date.now()
        }, delay - (now - lastRun))
      }
    }
  }

  // Calculate scroll progress within the section (0 to 1)
  const calculateScrollProgress = () => {
    const section = sectionRef.current
    if (!section) return 0

    const rect = section.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const sectionHeight = rect.height
    
    // Get the card width (should be window width in this layout)
    // We need to ensure each card is 100vw wide for proper centering
    const cardWidth = windowWidth

    // Calculate where we are in the scroll journey
    // pinStart: when the section becomes fully pinned (sectionTop exactly equals sticky top value, which is 0px)
    // pinEnd: when we need to stop horizontal scrolling (when last card is centered)
    const sectionTop = rect.top
    const sectionBottom = rect.bottom
    
    // Only start horizontal scrolling when the section is FULLY pinned
    // The sticky starts at top:0px, so we check if sectionTop is exactly at 0 or slightly below
    const isPinned = sectionTop <= 0
    
    if (!isPinned) {
      // Section is still entering - no horizontal scroll yet
      return 0
    }

    // Calculate the maximum distance we need to scroll horizontally
    // We scroll from first card (progress 0) to last card centered (progress 1)
    const slideCount = slides.length
    const totalScrollableWidth = (slideCount - 1) * cardWidth
    
    // Calculate how much vertical scrolling distance is available
    // This is the distance the section can scroll while staying pinned
    const stickyStartPoint = section.offsetTop // Position where section starts
    const stickyDistance = sectionHeight - windowHeight // How much room for scrolling while pinned
    
    if (stickyDistance <= 0) {
      return 0
    }
    
    // Calculate how much of the sticky distance has been scrolled
    // When sectionTop = 0, we're at the start (scrolledPastPin = 0)
    // When sectionBottom = windowHeight, we're at the end
    const scrolledPastPin = -sectionTop
    
    // Add a "dead zone" at the start - first 20% of scroll is for reading first card
    // Only the remaining 80% is used for horizontal scrolling
    const deadZone = stickyDistance * 0.1
    const scrollableZone = stickyDistance - deadZone
    
    if (scrolledPastPin <= deadZone) {
      // Still in dead zone - first card stays visible
      return 0
    }
    
    // Check if we're in the end dead zone
    const endDeadZone = stickyDistance * 0.1
    const maxScrollableDistance = stickyDistance - deadZone - endDeadZone
    
    if (scrolledPastPin >= stickyDistance - endDeadZone) {
      // Reached end dead zone - last card stays visible
      return 1
    }
    
    // Calculate progress within the scrollable zone only
    // scrolledPastPin - deadZone gives us how far into scrollable zone we are
    let progress = (scrolledPastPin - deadZone) / maxScrollableDistance
    
    // Clamp between 0 and 1
    progress = Math.max(0, Math.min(1, progress))
    
    return progress
  }

  // Update animations based on scroll progress
  const updateAnimations = (progress: number) => {
    const stickyInner = stickyInnerRef.current
    if (!stickyInner) return

    // Find the horizontal container for slides
    const container = stickyInner.querySelector('.slides-container') as HTMLElement
    if (!container) return

    // Calculate translate based on scroll progress
    const windowWidth = window.innerWidth
    const slideCount = slides.length
    
    // To center the last slide, we need to scroll (slides.length - 1) window widths
    const maxTranslate = (slideCount - 1) * windowWidth
    
    // Progress: 0 = first slide centered (translate 0), 1 = last slide centered (translate max)
    const translateX = -progress * maxTranslate
    
    container.style.transform = `translateX(${translateX}px)`
    container.style.transition = 'none' // Disable transitions for smooth scrolling

    // Update step indicator  
    const currentSlide = Math.floor(progress * (slideCount - 1))
    const stepIndicator = stickyInner.querySelector('.step-indicator')
    if (stepIndicator) {
      stepIndicator.textContent = `Крок ${Math.min(currentSlide + 1, slideCount)}/${slideCount}`
    }
  }

  // Main scroll handler
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // IntersectionObserver: Detect when section enters/leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Section is considered active when it's mostly visible in viewport
          isActiveRef.current = entry.isIntersecting && entry.intersectionRatio > 0.3
          
          // Start/stop animation loop based on visibility
          if (isActiveRef.current && rafIdRef.current === null) {
            const animate = () => {
              const progress = calculateScrollProgress()
              setScrollProgress(progress)
              updateAnimations(progress)
              
              if (isActiveRef.current) {
                rafIdRef.current = requestAnimationFrame(animate)
              } else {
                rafIdRef.current = null
              }
            }
            rafIdRef.current = requestAnimationFrame(animate)
          }
        })
      },
      { 
        threshold: [0, 0.3, 0.5, 0.7, 1.0] // Multiple thresholds for smooth activation
      }
    )

    observer.observe(section)

    // Handle scroll events for updating progress
    const handleScroll = throttle(() => {
      const progress = calculateScrollProgress()
      setScrollProgress(progress)
      
      // Update animations
      if (rafIdRef.current === null && isActiveRef.current) {
        updateAnimations(progress)
      }
    }, 16) // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Handle window resize
    const handleResize = throttle(() => {
      const progress = calculateScrollProgress()
      setScrollProgress(progress)
      updateAnimations(progress)
    }, 100)

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
    }
  }, [])

  // Update animations whenever scrollProgress changes
  useEffect(() => {
    updateAnimations(scrollProgress)
  }, [scrollProgress])

  return (
    <section 
      id="materials" 
      ref={sectionRef} 
      className="relative w-full"
      style={{ height: `${(slides.length + 1) * 100}vh` }}
    >
      {/* Title Section - normal scroll */}
      <div className="container-1320 px-4 pt-[100px]">
        <div className="flex items-center gap-3 pb-6">
            <Image
              src="/img/materials/Icon Title.svg"
              alt="Materials Icon"
              width={36}
              height={36}
              unoptimized={true}
            />
            <h2 
              className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" 
              style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
            >
              Матеріали та напівфабрикати
            </h2>
            </div>
            
            {/* Divider Line */}
            <div className="w-full border-b border-zinc-200 mb-6"></div>
            
            {/* Description Text */}
            <div className="mb-8 text-center">
            <p 
              className="text-lg font-normal leading-[130%] tracking-[0%] text-[#52525B]"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              Ми пропонуємо не просто сировину, а готові технологічні рішення<br />
              для найвибагливіших галузей:
            </p>
        </div>
      </div>

      {/* Sticky container - only for cards */}
      <div className="sticky -top-[50px] min-h-[calc(100vh-200px)] flex items-start bg-white overflow-hidden pt-[148px] pb-[100px]">
        <div ref={stickyInnerRef} className="w-full flex flex-col">
          {/* Scroll-triggered content container */}
          <div className="relative flex-1 flex items-center w-full">
            {/* Horizontal scroll wrapper - hides overflow */}
            <div className="overflow-x-hidden w-full">
            {/* Horizontal container for all slides */}
            <div className="slides-container flex" style={{ willChange: 'transform' }}>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="scroll-slide flex-shrink-0"
                  style={{ width: '100vw' }}
                >
                <div className="text-center px-4">
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src={slide.logo}
                      alt={`${slide.title} Logo`}
                      width={210}
                      height={63}
                      priority={index === 0}
                      draggable={false}
                      className="select-none"
                    />
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <p 
                      className="text-center text-lg font-normal leading-[130%] tracking-[0%] text-[#3F3F46]" 
                      style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
                    >
                      {slide.title}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center my-8">
                    <a
                      href="#contacts"
                      className="relative font-mono font-medium text-base leading-[130%] group flex items-center justify-center pt-[15px] pr-9 pb-4 pl-9 bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat select-none z-20 w-[188px] h-[52px] rounded-full"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat z-10 rounded-full"></div>
                      <span
                        className="relative z-20 text-[#3B82F6] group-hover:text-[#2563EB] transition-colors duration-300 font-bold text-base leading-[100%] tracking-[0%]"
                        style={{ fontFamily: "Roboto Mono, monospace" }}
                      >
                        Консультація
                      </span>
                    </a>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex justify-center mb-8 arrow-indicator">
                    <Image
                      src="/img/materials/Group Arrows.svg"
                      alt="Group Arrows"
                      width={12}
                      height={82}
                      unoptimized={true}
                    />
                  </div>

                  {/* Materials List */}
                  <div className="max-w-[698px] mx-auto my-8">
                    <div className="custom-corner-border bg-white p-8">
                      <div className="space-y-4">
                        {slide.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                            <div className="flex-1">
                              <p
                                className="text-base font-normal tracking-[0%] text-[#71717A] text-left"
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
            </div>
          </div>

          {/* Step indicator */}
          <div className="container-1320 px-4">
          <div className="flex justify-center mt-8">
            <span
              className="step-indicator px-4 py-2 rounded-full text-lg font-normal leading-[100%] tracking-[0%] text-center text-[#A1A1AA]"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              Крок 1/{slides.length}
            </span>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}

