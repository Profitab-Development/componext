import Image from "next/image"
import type { JSX } from "react"
import { Button } from "@/components/ui/button"

export function Header(): JSX.Element {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container-1320 px-4 h-16 flex items-center justify-between pt-[28px]">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={190} height={45} alt="Logo" priority />
        </a>

        <nav className="hidden md:flex h-[51px] rounded-full border border-blue-200/20 bg-black/[0.03] backdrop-blur-sm shadow-[inset_0_0_68px_0_rgba(29,78,216,0.05),inset_0_2px_4px_0_rgba(29,78,216,0.1)] px-7 py-3 gap-9 items-center justify-center text-gray-700 fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50">
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:text-white transition-colors" href="#who-we-are">Хто ми</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:text-white transition-colors" href="#materials">Матеріали</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:text-white transition-colors" href="#partners">Партнери</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:text-white transition-colors" href="#industries">Галузі</a>
          <a className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:text-white transition-colors" href="#contacts">Контакти</a>
        </nav>

        <Button asChild variant="phone">
          <a href="tel:+380983800400">
            +380 98-380-04-00
          </a>
        </Button>
      </div>
    </header>
  )
}


