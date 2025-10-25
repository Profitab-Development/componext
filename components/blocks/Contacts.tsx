'use client'

import Image from "next/image"
import { memo } from "react"
import { ContactForm } from "@/components/forms/ContactForm"

// Main Component
export const Contacts = memo(() => {
  return (
    <section id="contacts" className="w-full py-[100px] relative overflow-hidden">
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
        <div className="my-15 grid grid-cols-1 lg:grid-cols-2 gap-15">
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
              Зв&apos;яжіться з нами прямо зараз і отримайте персональну консультацію щодо продукції та напівфабрикатів Xenia, Siltex, ThermHex саме для вашої галузі.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {/* Phone Button */}
          <a 
            href="tel:+380983800400"
            className="contact-btn flex items-center justify-between p-6 rounded-lg border border-[#DBEAFE] hover:opacity-90 transition-opacity duration-200"
          >
            <div className="flex items-center gap-3">
              <Image 
                src="/img/contacts/Icon Frame.svg" 
                alt="Phone" 
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized={true}
              />
              <span 
                className="text-[#083660]"
                style={{ 
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                Номер телефону
              </span>
            </div>
            <Image 
              src="/img/contacts/Vector.svg" 
              alt="Arrow" 
              width={16}
              height={16}
              className="arrow-icon w-4 h-4"
              unoptimized={true}
            />
          </a>

          {/* Email Button */}
          <a 
            href="mailto:info@componext.com.ua"
            className="contact-btn flex items-center justify-between p-6 rounded-lg border border-[#DBEAFE] hover:opacity-90 transition-opacity duration-200"
          >
            <div className="flex items-center gap-3">
            <Image 
              src="/img/contacts/Icon Frame-1.svg" 
              alt="Email" 
              width={24}
              height={24}
              className="w-6 h-6"
              unoptimized={true}
            />
              <span 
                className="text-[#083660]"
                style={{ 
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                Електронна пошта
              </span>
            </div>
            <Image 
              src="/img/contacts/Vector.svg" 
              alt="Arrow" 
              width={16}
              height={16}
              className="arrow-icon w-4 h-4"
              unoptimized={true}
            />
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/380983800400"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn flex items-center justify-between p-6 rounded-lg border border-[#DBEAFE] hover:opacity-90 transition-opacity duration-200"
          >
            <div className="flex items-center gap-3">
              <Image 
                src="/img/contacts/Icon Frame-2.svg" 
                alt="WhatsApp" 
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized={true}
              />
              <span 
                className="text-[#083660]"
                style={{ 
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                WhatsApp
              </span>
            </div>
            <Image 
              src="/img/contacts/Vector.svg" 
              alt="Arrow" 
              width={16}
              height={16}
              className="arrow-icon w-4 h-4"
              unoptimized={true}
            />
          </a>

          {/* Telegram Button */}
          <a 
            href="https://t.me/+380983800400"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn flex items-center justify-between p-6 rounded-lg border border-[#DBEAFE] hover:opacity-90 transition-opacity duration-200"
          >
            <div className="flex items-center gap-3">
              <Image 
                src="/img/contacts/Icon Frame-3.svg" 
                alt="Telegram" 
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized={true}
              />
              <span 
                className="text-[#083660]"
                style={{ 
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                Telegram
              </span>
            </div>
            <Image 
              src="/img/contacts/Vector.svg" 
              alt="Arrow" 
              width={16}
              height={16}
              className="arrow-icon w-4 h-4"
              unoptimized={true}
            />
          </a>
        </div>
      </div>
    </section>
  )
})

Contacts.displayName = 'Contacts'
