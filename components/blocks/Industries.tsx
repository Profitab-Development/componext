'use client'

import Image from "next/image"
import { memo } from "react"

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
    icon: '/img/industries/Icon Frame.svg'
  },
  {
    id: 'automotive',
    title: 'Автомобілебудування та автоспорт',
    icon: '/img/industries/Icon Frame-1.svg'
  },
  {
    id: 'defense',
    title: 'Оборонна галузь',
    icon: '/img/industries/Icon Frame-2.svg'
  },
  {
    id: 'marine',
    title: 'Суднобудування та морська інфраструктура',
    icon: '/img/industries/Icon Frame-3.svg'
  },
  {
    id: 'oil-gas',
    title: 'Нафтогазова промисловість',
    icon: '/img/industries/Icon Frame-4.svg'
  },
  {
    id: 'construction',
    title: 'Будівництво та архітектура',
    icon: '/img/industries/Icon Frame-5.svg'
  },
  {
    id: 'energy',
    title: 'Енергетика та ізоляційні системи',
    icon: '/img/industries/Icon Frame-6.svg'
  },
  {
    id: 'manufacturing',
    title: 'Виробництво інструментів, форм і прототипів',
    icon: '/img/industries/Icon Frame-7.svg'
  }
]

// Components
const IndustryCard = memo(({ industry }: { industry: Industry }) => (
  <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 mb-1 flex flex-col 
  items-center transition-transform duration-300  shadow-[inset_0px_0px_68px_0px_#1D4ED80D,inset_0px_2px_4px_0px_#1D4ED81A]">
    <Image 
      src={industry.icon} 
      alt={`${industry.title} icon`} 
      width={56} 
      height={56} 
      quality={75} 
      unoptimized 
    />
    <div className="my-3 w-12 h-0 border-1 border-solid border-blue-500" />
    <h3 
      className="text-zinc-700 text-[15px] font-medium leading-[120%] text-center" 
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
    <section className="w-full py-[80px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/industries/Section.webp"
          alt="Industries Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      <div className="relative z-10 container-1320 px-4">
        {/* Header */}
        <header className="flex items-center gap-3 px-4">
          <Image
            src="/img/industries/Icon Title.svg"
            alt="Industries Icon"
            width={36}
            height={36}
            quality={75}
            unoptimized
          />
          <h2 
            className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6] " 
            style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
          >
            Галузеві рішення
          </h2>
        </header>

        {/* Description */}
        <div className="mt-25 flex justify-center">
          <p className="text-center max-w-[900px] font-mono font-normal text-lg leading-[130%] tracking-normal text-zinc-600">
            Наші композитні матеріали прискорюють процеси виробництва та знижують витрати у ключових галузях промисловості.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  )
})

Industries.displayName = 'Industries'
