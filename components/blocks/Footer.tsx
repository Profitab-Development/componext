// import Image from "next/image"
// import Link from "next/link"
//
// export function Footer() {
//   return (
//     <footer className="w-full py-15 relative overflow-hidden  ">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/img/footer/Footer.webp"
//           alt="Footer Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           unoptimized={true}
//         />
//       </div>
//
//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-white/20 z-0"></div>
//
//       <div className="relative z-10 container-1320 px-4">
//         {/* Main Footer Content */}
//         <div className="flex flex-col items-center text-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 mb-25">
//             <Image
//               src="/Logo.svg"
//               width={190}
//               height={45}
//               alt="Logo"
//               priority
//               className="w-[190px] h-[45px]"
//             />
//           </Link>
//
//           {/* Navigation Links */}
//           <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
//             <a
//               href="#who-we-are"
//               className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
//             >
//               Хто ми
//             </a>
//             <a
//               href="#materials"
//               className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
//             >
//               Послуги
//             </a>
//             {/* <a
//               href="#partners"
//               className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
//             >
//               Відгуки
//             </a> */}
//
//             <a
//               href="#contacts"
//               className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
//             >
//               Контакти
//             </a>
//           </nav>
//
//
//           {/* Copyright */}
//           <div className="flex items-center gap-2 text-xs leading-6 tracking-[0.2px] text-zinc-500 font-medium font-montserrat mt-10">
//             <span>Designed and Developed by</span>
//             <Image
//               src="/img/footer/logomark.svg"
//               alt="Logomark"
//               width={20}
//               height={20}
//               className="w-5 h-5"
//             />
//             <span className="underline">Profitab</span>
//             <span>in Ukraine</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
      <footer className="w-full py-15 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/img/footer/Footer.webp"
              alt="Footer Background"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized={true}
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 z-0" />

        <div className="relative z-10 container-1320 px-4">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <Link
                href="/"
                className="flex items-center gap-2 mb-10 lg:mb-25"
            >
              <Image
                  src="/Logo.svg"
                  width={190}
                  height={45}
                  alt="Logo"
                  priority
                  className="w-[190px] h-[45px]"
              />
            </Link>

            {/* Navigation Links */}
            <nav
                className="
              flex w-full max-w-[360px] justify-between
              lg:max-w-none lg:justify-center lg:gap-12
            "
            >
              <a
                  href="#who-we-are"
                  className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
              >
                Хто ми
              </a>
              <a
                  href="#materials"
                  className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
              >
                Послуги
              </a>
              <a
                  href="#contacts"
                  className="font-mono font-medium text-base leading-[130%] text-center text-gray-600 hover:text-blue-500 transition-colors scroll-smooth"
              >
                Контакти
              </a>
            </nav>

            {/* Copyright */}
            <div className="mt-10 text-xs leading-6 tracking-[0.2px] text-zinc-500 font-medium font-montserrat">
              {/* Мобільна версія: два рядки */}
              <div className="flex flex-col items-center gap-1 lg:hidden">
                <span>Designed and Developed by</span>
                <div className="flex items-center gap-2">
                  <Image
                      src="/img/footer/logomark.svg"
                      alt="Logomark"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                  />
                  <span className="underline">Profitab</span>
                  <span>in Ukraine</span>
                </div>
              </div>

              {/* Десктопна версія: все в один рядок як було */}
              <div className="hidden lg:flex items-center gap-2">
                <span>Designed and Developed by</span>
                <Image
                    src="/img/footer/logomark.svg"
                    alt="Logomark"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                />
                <span className="underline">Profitab</span>
                <span>in Ukraine</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
