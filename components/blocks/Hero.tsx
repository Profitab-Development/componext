// import type { JSX } from "react"
// import Image from "next/image"
//
// export function Hero(): JSX.Element {
//   return (
//     <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <Image
//           src="/img/hero/HeroSection.webp"
//           alt="Hero Background"
//           fill
//           className="
//       object-cover w-full h-full
//       [@media(max-width:1440px)]:scale-[1.04]
//       [@media(max-width:1440px)]:-translate-x-10
//       [@media(max-width:1440px)]:-translate-y-10
//       [@media(max-width:1440px)]:origin-top-left
//
//       [@media(min-width:1441px)]:scale-[1.04]
//       [@media(min-width:1441px)]:-translate-x-10
//       [@media(min-width:1441px)]:-translate-y-10
//       [@media(min-width:1441px)]:origin-top-left
//     "
//           priority
//           sizes="100vw"
//           unoptimized={true}
//         />
//       </div>
//
//
//
//
//
//       {/* Content */}
//       <div className="relative z-10 container-1320 px-4 text-left flex flex-col justify-end pb-[120px] h-full">
//         <div className="max-w-[770px]">
//           <h1 className="text-[52px] font-bold leading-[130%] mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
//             Інноваційні термопластичні композитні матеріали
//           </h1>
//           <p className="text-[19px] font-normal leading-[130%] tracking-[0.02em] text-zinc-500 mb-12 font-mono">
//             Комплексні рішення із використанням інноваційних композитів для авіації, машинобудування і промисловості: постачання матеріалів та технологій, обладнання та інструментів для обробки, технологічна підтримка, супровід
//           </p>
//         </div>
//
//         {/* Logos */}
//         <div className="flex items-center gap-8 lg:gap-12">
//
//           <Image
//             src="/img/hero/logo-3.webp"
//             alt="Xenia Logo"
//             width={113}
//             height={34}
//             unoptimized={true}
//           />
//           <Image
//             src="/img/hero/logo-2.webp"
//             alt="Thermex Logo"
//             width={150}
//             height={43}
//             unoptimized={true}
//           />
//           <Image
//             src="/img/hero/logo-1.webp"
//             alt="SILTEX Logo"
//             width={114}
//             height={30}
//             unoptimized={true}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
//
//

// import type { JSX } from "react"
// import Image from "next/image"
//
// export function Hero(): JSX.Element {
//   return (
//       <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           {/* Desktop / Tablet image */}
//           <Image
//               src="/img/hero/HeroSection.webp"
//               alt="Hero Background"
//               fill
//               className="
//             hidden sm:block
//             object-cover w-full h-full
//             [@media(max-width:1440px)]:scale-[1.04]
//             [@media(max-width:1440px)]:-translate-x-10
//             [@media(max-width:1440px)]:-translate-y-10
//             [@media(max-width:1440px)]:origin-top-left
//
//             [@media(min-width:1441px)]:scale-[1.04]
//             [@media(min-width:1441px)]:-translate-x-10
//             [@media(min-width:1441px)]:-translate-y-10
//             [@media(min-width:1441px)]:origin-top-left
//           "
//               priority
//               sizes="100vw"
//               unoptimized
//           />
//
//           {/* MOBILE background */}
//           <Image
//               src="/img/hero/HeroSection_mobile.webp"
//               alt="Hero Background Mobile"
//               fill
//               className="
//             sm:hidden
//             object-cover w-full h-full
//           "
//               priority
//               sizes="100vw"
//               unoptimized
//           />
//         </div>
//
//         {/* Content */}
//         <div
//             className="
//           relative z-10 container-1320 px-4 text-left
//           flex flex-col justify-end h-full
//           pb-[120px]
//           max-sm:pb-[40px]
//         "
//         >
//           <div className="max-w-[770px] max-sm:max-w-full">
//             {/* TITLE */}
//             <h1
//                 className="
//               text-[52px]
//               font-bold leading-[130%] mb-6
//               bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent
//               max-sm:text-[24px]
//             "
//                 style={{ fontFamily: "Suisse Intl, system-ui, sans-serif" }}
//             >
//               Інноваційні термопластичні композитні матеріали
//             </h1>
//
//             {/* DESCRIPTION */}
//             <p
//                 className="
//               text-[19px] font-normal leading-[130%] tracking-[0.02em]
//               text-zinc-500 mb-12 font-mono
//               max-sm:text-[13px]
//               max-sm:mb-8
//             "
//             >
//               Комплексні рішення із використанням інноваційних композитів для
//               авіації, машинобудування і промисловості: постачання матеріалів та
//               технологій, обладнання та інструментів для обробки, технологічна
//               підтримка, супровід
//             </p>
//           </div>
//
//           {/* LOGO ROW */}
//           <div
//               className="
//             flex items-center gap-8 lg:gap-12
//             max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 max-sm:w-full
//           "
//           >
//             {/* Xenia */}
//             <div className="flex justify-center sm:justify-start">
//               <Image
//                   src="/img/hero/logo-3.webp"
//                   alt="Xenia Logo"
//                   width={113}
//                   height={34}
//                   className="max-sm:w-[70px] max-sm:h-auto"
//                   unoptimized
//               />
//             </div>
//
//             {/* ThermHex */}
//             <div className="flex justify-center sm:justify-start">
//               <Image
//                   src="/img/hero/logo-2.webp"
//                   alt="Thermex Logo"
//                   width={150}
//                   height={43}
//                   className="max-sm:w-[90px] max-sm:h-auto"
//                   unoptimized
//               />
//             </div>
//
//             {/* SILTEX */}
//             <div className="flex justify-center sm:justify-start">
//               <Image
//                   src="/img/hero/logo-1.webp"
//                   alt="SILTEX Logo"
//                   width={114}
//                   height={30}
//                   className="max-sm:w-[70px] max-sm:h-auto"
//                   unoptimized
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }


import type { JSX } from "react"
import Image from "next/image"

export function Hero(): JSX.Element {
  return (
      <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        {/* BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {/* DESKTOP (≥1200px, xl) */}
          <Image
              src="/img/hero/HeroSection.webp"
              alt="Hero Background Desktop"
              fill
              className="
            hidden xl:block
            object-cover w-full h-full
            [@media(max-width:1440px)]:scale-[1.04]
            [@media(max-width:1440px)]:-translate-x-10
            [@media(max-width:1440px)]:-translate-y-10
            [@media(max-width:1440px)]:origin-top-left

            [@media(min-width:1441px)]:scale-[1.04]
            [@media(min-width:1441px)]:-translate-x-10
            [@media(min-width:1441px)]:-translate-y-10
            [@media(min-width:1441px)]:origin-top-left
          "
              priority
              sizes="100vw"
              unoptimized
          />

          {/* TABLET (640px–1199px) */}
          <Image
              src="/img/hero/HeroSection_tablet.webp"
              alt="Hero Background Tablet"
              fill
              className="
            hidden sm:block xl:hidden
            object-cover w-full h-full
          "
              priority
              sizes="100vw"
              unoptimized
          />

          {/* MOBILE (<640px) */}
          <Image
              src="/img/hero/HeroSection_mobile.webp"
              alt="Hero Background Mobile"
              fill
              className="
            sm:hidden
            object-cover w-full h-full
          "
              priority
              sizes="100vw"
              unoptimized
          />
        </div>

        {/* CONTENT */}
        <div
            className="
          relative z-10 container-1320 px-4 text-left
          flex flex-col justify-end h-full
          pb-[120px]
          max-sm:pb-[40px]
        "
        >
          <div className="max-w-[770px] max-sm:max-w-full">
            {/* TITLE */}
            <h1
                className="
              text-[52px]
              font-bold leading-[130%] mb-6
              bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent
              max-sm:text-[24px]
            "
                style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
            >
              Інноваційні термопластичні композитні матеріали
            </h1>

            {/* DESCRIPTION */}
            <p
                className="
              text-[19px] font-normal leading-[130%] tracking-[0.02em]
              text-zinc-500 mb-12 font-mono
              max-sm:text-[13px]
              max-sm:mb-8
            "
            >
              Комплексні рішення із використанням інноваційних композитів для
              авіації, машинобудування і промисловості: постачання матеріалів та
              технологій, обладнання та інструментів для обробки, технологічна
              підтримка, супровід
            </p>
          </div>

          {/* LOGO ROW */}
          <div
              className="
            flex items-center gap-8 xl:gap-12
            max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 max-sm:w-full
          "
          >
            {/* Xenia */}
            <div className="flex justify-center sm:justify-start">
              <Image
                  src="/img/hero/logo-3.webp"
                  alt="Xenia Logo"
                  width={113}
                  height={34}
                  className="max-sm:w-[70px] max-sm:h-auto"
                  unoptimized
              />
            </div>

            {/* ThermHex */}
            <div className="flex justify-center sm:justify-start">
              <Image
                  src="/img/hero/logo-2.webp"
                  alt="Thermex Logo"
                  width={150}
                  height={43}
                  className="max-sm:w-[90px] max-sm:h-auto"
                  unoptimized
              />
            </div>

            {/* SILTEX */}
            <div className="flex justify-center sm:justify-start">
              <Image
                  src="/img/hero/logo-1.webp"
                  alt="SILTEX Logo"
                  width={114}
                  height={30}
                  className="max-sm:w-[70px] max-sm:h-auto"
                  unoptimized
              />
            </div>
          </div>
        </div>
      </section>
  )
}
