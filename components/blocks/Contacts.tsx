'use client'

import Image from "next/image"
import { memo } from "react"
import { ContactForm } from "@/components/forms/ContactForm"

// Main Component
export const Contacts = memo(() => {
  return (
    <section className="w-full py-[100px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/contacts/Section.webp"
          alt="Contacts Background"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized={true}
        />
      </div>

      <div className="relative z-10 container-1320 px-4">
        {/* Title with Icon (same style as Applications) */}
        <div className="flex items-center gap-3 pb-6 px-4">
          <Image
            src="/img/contacts/Icon Title.svg"
            alt="Contacts Icon"
            width={36}
            height={36}
            unoptimized={true}
          />
          <h2 
            className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" 
            style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
          >
            Наші контакти
          </h2>
        </div>
        
        {/* Divider Line */}
        <div className="w-full border-b border-zinc-200"></div>
        
        {/* Two Column Content */}
        <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-15">
          {/* Left Column - Main Text */}
          <div className="flex items-center">
            <h3 
              className="text-[26px] font-medium text-[#3F3F46]"
              style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
            >
              Готові вивести своє виробництво на новий рівень розвитку?
            </h3>
          </div>
          
          {/* Right Column - Description */}
          <div className="flex items-center">
            <p 
              className="text-[17px] font-normal leading-[130%] text-[#52525B]"
              style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
              Зв'яжіться з нами прямо зараз і отримайте персональну консультацію щодо продукції та напівфабрикатів Xenia, Siltex, ThermHex саме для вашої галузі.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
})

Contacts.displayName = 'Contacts'
