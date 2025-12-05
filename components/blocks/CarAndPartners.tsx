// import type { JSX } from "react"
// import Image from "next/image"
//
// export function CarAndPartners(): JSX.Element {
//   return (
//       <section className="w-full pt-[40px] pb-[100px]">
//         <div className="container-1320 px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-40 items-center">
//             {/* Left Side - Car Images. Full-bleed to the left, ~65vw width */}
//             <div>
//               <div className="w-full lg:w-[59vw] lg:ml-[calc((100vw-1320px)/-2)] flex items-center">
//                 <div className="flex-1">
//                   {/* Мобільна картинка */}
//                   <Image
//                       src="/img/who-we-are/car-parts_mobile.webp"
//                       alt="Car Parts"
//                       width={960}
//                       height={600}
//                       unoptimized={true}
//                       className="w-full h-auto lg:hidden"
//                   />
//                   {/* Десктопна картинка (як було) */}
//                   <Image
//                       src="/img/who-we-are/car-parts.webp"
//                       alt="Car Parts"
//                       width={960}
//                       height={600}
//                       unoptimized={true}
//                       className="w-full h-auto hidden lg:block"
//                   />
//                 </div>
//               </div>
//             </div>
//
//             {/* Right Side - Partners (stays inside 1320px container) */}
//             <div>
//               <h3 className="font-mono font-medium text-[24px] leading-[130%] tracking-[0] text-[#3F3F46] mb-8 text-center lg:text-left">
//                 Офіційний партнер:
//               </h3>
//
//               {/* Logos Stack */}
//               <div className="flex flex-col gap-6 items-center lg:items-start">
//                 <div>
//                   <Image
//                       src="/img/who-we-are/xenia-logo.webp"
//                       alt="Xenia Logo"
//                       width={240}
//                       height={80}
//                       unoptimized={true}
//                       className="w-[195px] lg:w-[240px] h-auto"
//                   />
//                 </div>
//                 <div>
//                   <Image
//                       src="/img/who-we-are/thermhex-logo.webp"
//                       alt="ThermHex Logo"
//                       width={240}
//                       height={80}
//                       unoptimized={true}
//                       className="w-[195px] lg:w-[240px] h-auto"
//                   />
//                 </div>
//                 <div>
//                   <Image
//                       src="/img/who-we-are/siltex-logo.webp"
//                       alt="SILTEX Logo"
//                       width={240}
//                       height={80}
//                       unoptimized={true}
//                       className="w-[195px] lg:w-[240px] h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

//
// import type { JSX } from "react"
// import Image from "next/image"
//
// export function CarAndPartners(): JSX.Element {
//   return (
//       <section className="w-full pt-[50px] lg:pt-[40px] pb-[80px] lg:pb-[100px]">
//         <div className="container-1320 px-4">
//
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-40 items-center">
//
//             {/* Left Side - Car Images */}
//             <div className="flex justify-center lg:block">
//               <div className="w-full lg:w-[59vw] lg:ml-[calc((100vw-1320px)/-2)] flex items-center">
//                 <div className="flex-1">
//
//                   {/* Mobile image */}
//                   <Image
//                       src="/img/who-we-are/car-parts_mobile.webp"
//                       alt="Car Parts"
//                       width={960}
//                       height={600}
//                       unoptimized={true}
//                       className="w-full h-auto lg:hidden rounded-xl mt-[40px] lg:mt-0 mb-6"
//                   />
//
//                   {/* Desktop image */}
//                   <Image
//                       src="/img/who-we-are/car-parts.webp"
//                       alt="Car Parts"
//                       width={960}
//                       height={600}
//                       unoptimized={true}
//                       className="w-full h-auto hidden lg:block"
//                   />
//                 </div>
//               </div>
//             </div>
//
//             {/* Right Side - Partners */}
//             <div>
//               <h3
//                   className="
//                 font-mono font-medium text-[22px] lg:text-[24px]
//                 leading-[130%] text-[#3F3F46]
//                 mb-6 lg:mb-8
//                 text-center lg:text-left
//               "
//               >
//                 Офіційний партнер:
//               </h3>
//
//               <div className="flex flex-col gap-6 items-center lg:items-start">
//                 <Image
//                     src="/img/who-we-are/xenia-logo.webp"
//                     alt="Xenia Logo"
//                     width={240}
//                     height={80}
//                     unoptimized={true}
//                     className="w-[195px] lg:w-[240px] h-auto"
//                 />
//
//                 <Image
//                     src="/img/who-we-are/thermhex-logo.webp"
//                     alt="ThermHex Logo"
//                     width={240}
//                     height={80}
//                     unoptimized={true}
//                     className="w-[195px] lg:w-[240px] h-auto"
//                 />
//
//                 <Image
//                     src="/img/who-we-are/siltex-logo.webp"
//                     alt="SILTEX Logo"
//                     width={240}
//                     height={80}
//                     unoptimized={true}
//                     className="w-[195px] lg:w-[240px] h-auto"
//                 />
//               </div>
//
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

import type { JSX } from "react"
import Image from "next/image"

export function CarAndPartners(): JSX.Element {
  return (
      <section className="w-full pt-[50px] xl:pt-[40px] pb-[80px] xl:pb-[100px]">
        <div className="container-1320 px-4">

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-16 xl:gap-40 items-center">

            {/* LEFT SIDE — CAR IMAGES */}
            <div className="flex justify-center xl:block">
              <div className="w-full xl:w-[59vw] xl:ml-[calc((100vw-1320px)/-2)] flex items-center">
                <div className="flex-1">

                  {/* MOBILE + TABLET IMAGE (до 1199px) */}
                  <Image
                      src="/img/who-we-are/car-parts_mobile.webp"
                      alt="Car Parts"
                      width={960}
                      height={600}
                      unoptimized
                      className="
                    w-full h-auto
                    block xl:hidden
                    rounded-xl
                    mt-[40px] xl:mt-0
                    mb-6
                  "
                  />

                  {/* DESKTOP IMAGE (з 1200px) */}
                  <Image
                      src="/img/who-we-are/car-parts.webp"
                      alt="Car Parts"
                      width={960}
                      height={600}
                      unoptimized
                      className="w-full h-auto hidden xl:block"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — PARTNERS */}
            <div>
              <h3
                  className="
                font-mono font-medium text-[22px] xl:text-[24px]
                leading-[130%] text-[#3F3F46]
                mb-6 xl:mb-8
                text-center xl:text-left
              "
              >
                Офіційний партнер:
              </h3>

              <div className="flex flex-col gap-6 items-center xl:items-start">
                <Image
                    src="/img/who-we-are/xenia-logo.webp"
                    alt="Xenia Logo"
                    width={240}
                    height={80}
                    unoptimized
                    className="w-[195px] xl:w-[240px] h-auto"
                />

                <Image
                    src="/img/who-we-are/thermhex-logo.webp"
                    alt="ThermHex Logo"
                    width={240}
                    height={80}
                    unoptimized
                    className="w-[195px] xl:w-[240px] h-auto"
                />

                <Image
                    src="/img/who-we-are/siltex-logo.webp"
                    alt="SILTEX Logo"
                    width={240}
                    height={80}
                    unoptimized
                    className="w-[195px] xl:w-[240px] h-auto"
                />
              </div>

            </div>

          </div>
        </div>
      </section>
  )
}
