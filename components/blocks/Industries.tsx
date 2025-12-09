'use client'

import Image from 'next/image'
import { memo } from 'react'

// Types
interface Industry {
  id: string
  title: string
  icon: string
}

// Constants
const INDUSTRIES: Industry[] = [
  {
    id: 'aerospace',
    title: 'Авіакосмічна промисловість',
    icon: '/img/industries/Icon Frame.svg',
  },
  {
    id: 'automotive',
    title: 'Автомобілебудування та автоспорт',
    icon: '/img/industries/Icon Frame-1.svg',
  },
  {
    id: 'defense',
    title: 'Оборонна галузь',
    icon: '/img/industries/Icon Frame-2.svg',
  },
  {
    id: 'marine',
    title: 'Суднобудування та морська інфраструктура',
    icon: '/img/industries/Icon Frame-3.svg',
  },
  {
    id: 'oil-gas',
    title: 'Нафтогазова промисловість',
    icon: '/img/industries/Icon Frame-4.svg',
  },
  {
    id: 'construction',
    title: 'Будівництво та архітектура',
    icon: '/img/industries/Icon Frame-5.svg',
  },
  {
    id: 'energy',
    title: 'Енергетика та ізоляційні системи',
    icon: '/img/industries/Icon Frame-6.svg',
  },
  {
    id: 'manufacturing',
    title: 'Виробництво інструментів, форм і прототипів',
    icon: '/img/industries/Icon Frame-7.svg',
  },
]

// Card Component
const IndustryCard = memo(({ industry }: { industry: Industry }) => (
  <div
    className="gradient-card bg-white/70 backdrop-blur-sm p-4 mb-1 flex flex-col items-center
      transition-transform duration-300 shadow-[inset_0px_0px_68px_0px_#1D4ED80D,inset_0px_2px_4px_0px_#1D4ED81A]"
  >
    {/* ICON size: 42px mobile / 56px desktop */}
    <div className="flex items-center justify-center w-[42px] h-[42px] aspect-square py-[9px] sm:w-[56px] sm:h-[56px] sm:py-0">
      <Image
        src={industry.icon}
        alt={`${industry.title} icon`}
        width={56}
        height={56}
        quality={75}
        unoptimized
      />
    </div>

    <div className="my-3 w-12 h-0 border border-solid border-blue-500" />

    <h3
      className="text-[14px] font-[450] leading-normal text-center text-zinc-700
                 sm:text-[15px] sm:font-medium sm:leading-[120%]"
      style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
    >
      {industry.title}
    </h3>
  </div>
))

IndustryCard.displayName = 'IndustryCard'

// Main Component
export const Industries = memo(() => {
  return (
    <section
      id="industries"
      className="w-full py-[40px] sm:py-[80px] relative overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background (<640px) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/img/industries/Section_mobile.png"
            alt="Industries Background Mobile"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* Tablet & Desktop background */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/img/industries/Section.webp"
            alt="Industries Background"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>

      <div className="relative z-10 container-1320 px-4">
        {/* HEADER */}
        <header className="flex items-center gap-3 px-4 justify-center lg:justify-start">
          <Image
            src="/img/industries/Icon Title.svg"
            alt="Industries Icon"
            width={36}
            height={36}
            unoptimized
          />

          {/* Mobile title (19px) */}
          <h2
            className="text-center text-[19px] font-medium leading-normal text-[#3B82F6]
                       sm:text-[21px] sm:leading-[100%] lg:text-left"
            style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
          >
            Галузеві рішення
          </h2>
        </header>

        {/* DESCRIPTION — 100px BELOW TITLE */}
        <div className="mt-[100px] flex justify-center px-4">
          <p
            className="max-w-[900px] text-center font-normal text-[14px] leading-[130%] text-zinc-600 font-mono
                       sm:text-lg"
            style={{ fontFamily: '"Roboto Mono", monospace' }}
          >
            Наші композитні матеріали прискорюють процеси виробництва та
            знижують витрати у ключових галузях промисловості.
          </p>
        </div>

        {/* GRID — 40px BELOW DESCRIPTION */}
        <div className="mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  )
})

Industries.displayName = 'Industries'
