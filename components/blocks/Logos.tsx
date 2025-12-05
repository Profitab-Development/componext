// 'use client'
//
// import type { JSX } from "react"
// import Image from "next/image"
// import Marquee from "react-fast-marquee"
//
// const logos = [
//   {
//     src: "/img/logos/logo-3.webp",
//     alt: "Xenia Logo",
//     width: 234,
//     height: 66,
//     url: "https://www.xeniamaterials.com/en/"
//   },
//   {
//     src: "/img/logos/logo-2.webp",
//     alt: "Thermex Logo",
//     width: 242,
//     height: 69,
//     url: "https://thermhex.com/"
//   },
//   {
//     src: "/img/logos/logo-1.webp",
//     alt: "SILTEX Logo",
//     width: 234,
//     height: 62,
//     url: "https://www.siltex.eu/"
//   },
// ]
//
// export function Logos(): JSX.Element {
//   return (
//     <section id="partners" className="w-full py-[100px] bg-gradient-to-b from-white to-gray-50">
//       <div className="container-1320 px-4">
//         {/* Infinite scrolling marquee using react-fast-marquee */}
//         <Marquee
//           speed={50}
//           pauseOnHover={true}
//           gradient={false}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <a
//               key={`logo-${index}`}
//               href={logo.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center mx-16 hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.height}
//                 unoptimized={true}
//                 className="object-contain"
//               />
//             </a>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   )
// }


'use client'

import type { JSX } from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const logos = [
  {
    src: "/img/logos/logo-3.webp",
    alt: "Xenia Logo",
    width: 234,
    height: 66,
    url: "https://www.xeniamaterials.com/en/"
  },
  {
    src: "/img/logos/logo-2.webp",
    alt: "Thermex Logo",
    width: 242,
    height: 69,
    url: "https://thermhex.com/"
  },
  {
    src: "/img/logos/logo-1.webp",
    alt: "SILTEX Logo",
    width: 234,
    height: 62,
    url: "https://www.siltex.eu/"
  },
]

export function Logos(): JSX.Element {
  return (
      <section
          id="partners"
          className="
        w-full
        py-[40px] lg:py-[100px]
        bg-gradient-to-b from-white to-gray-50
      "
      >
        <div className="container-1320 px-4">
          <Marquee
              speed={50}
              pauseOnHover={true}
              gradient={false}
          >
            {[...logos, ...logos].map((logo, index) => (
                <a
                    key={`logo-${index}`}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                inline-flex items-center justify-center
                mx-10 lg:mx-16
                hover:opacity-80 transition-opacity duration-300
                flex-shrink-0
              "
                >
                  <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      unoptimized={true}
                      className="
                  object-contain
                  w-[140px] lg:w-auto
                "
                  />
                </a>
            ))}
          </Marquee>
        </div>
      </section>
  )
}

