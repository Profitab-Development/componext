import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function Header(): JSX.Element {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container-1320 px-4 h-16 flex items-center justify-between pt-[28px]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.svg" width={190} height={45} alt="Logo" priority />
        </Link>

        <nav className="hidden md:flex h-[51px] rounded-full border border-blue-200/20 bg-black/[0.03] backdrop-blur-sm shadow-[inset_0_0_68px_0_rgba(29,78,216,0.05),inset_0_2px_4px_0_rgba(29,78,216,0.1)] px-7 py-3 gap-9 items-center justify-center text-gray-700 fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50">
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth" href="#who-we-are">Хто ми</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth" href="#materials">Матеріали</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth" href="#partners">Партнери</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth" href="#industries">Галузі</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth" href="#contacts">Контакти</a>
        </nav>

        <a 
          href="tel:+380983800400"
          className="relative rounded-full font-mono font-medium text-base leading-[130%] group  flex items-center justify-center pt-[15px] pr-9 pb-4 pl-9 bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat"
        >
          {/* Hover background */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat"
          ></div>
          {/* Text content */}
          <span className="relative z-10 text-[#3B82F6] group-hover:text-[#2563EB] transition-colors duration-300">+380 98-380-04-00</span>
        </a>
      </div>
    </header>
  )
}


