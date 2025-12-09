'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { JSX } from 'react'
import { useState } from 'react'

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header
        className="
          w-full
          bg-white xl:bg-transparent
          fixed xl:absolute
          top-0 left-0 right-0
          z-50
        "
      >
        <div
          className="
            container-1320
            px-4
            h-16
            flex items-center justify-between

            py-4           /* рівний відступ зверху і знизу для мобайла */
            xl:pt-[28px]   /* повертаємо твій старий відступ тільки для десктопа */
            xl:pb-0
          "
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.svg"
              width={190}
              height={45}
              alt="Logo"
              priority
              className="w-[142px] xl:w-[190px] h-auto"
            />
          </Link>

          {/* Desktop nav (тільки від ~1200px / xl і вище) */}
          <nav className="hidden xl:flex h-[51px] rounded-full border border-blue-200/20 bg-black/[0.03] backdrop-blur-sm shadow-[inset_0_0_68px_0_rgba(29,78,216,0.05),inset_0_2px_4px_0_rgba(29,78,216,0.1)] px-7 py-3 gap-9 items-center justify-center text-gray-700 fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50">
            <a
              className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth"
              href="#who-we-are"
            >
              Хто ми
            </a>
            <a
              className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth"
              href="#materials"
            >
              Матеріали
            </a>
            <a
              className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth"
              href="#partners"
            >
              Партнери
            </a>
            <a
              className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth"
              href="#industries"
            >
              Галузі
            </a>
            <a
              className="font-mono font-medium text-base leading-[130%] text-blue-500 hover:font-bold hover:text-[#2563EB] transition-all scroll-smooth"
              href="#contacts"
            >
              Контакти
            </a>
          </nav>

          {/* Desktop phone button (тільки xl+) */}
          <a
            href="tel:+380983800400"
            className="relative hidden xl:flex rounded-full font-mono font-medium text-base leading-[130%] group items-center justify-center pt-[15px] pr-9 pb-4 pl-9 bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat" />
            <span className="relative z-10 text-[#3B82F6] group-hover:text-[#2563EB] transition-colors duration-300">
              +380 98-380-04-00
            </span>
          </a>

          {/* Mobile / tablet menu trigger (все до xl) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex xl:hidden items-center gap-2 text-[15px] font-mono font-medium text-slate-700"
          >
            <span>Меню</span>
            <span className="flex flex-col gap-[4px]">
              <span className="block h-[2px] w-5 rounded-full bg-slate-700" />
              <span className="block h-[2px] w-5 rounded-full bg-slate-700" />
              <span className="block h-[2px] w-5 rounded-full bg-slate-700" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu bottom sheet */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-black/40 backdrop-blur-sm xl:hidden"
          onClick={() => setIsMenuOpen(false)} // клік по оверлею закриває
        >
          <div
            className="w-full rounded-t-[32px] bg-white shadow-[0_-18px_40px_rgba(15,23,42,0.25)] pt-6 pb-6 px-6 max-h-[70vh]"
            onClick={(e) => e.stopPropagation()} // не закриваємо при кліку всередині
          >
            {/* Top row: Закрити + X справа */}
            <div className="mb-8 flex w-full items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="font-medium text-[14px] leading-[130%] text-[#71717A] font-[Montserrat]">
                  Закрити
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-slate-600" />
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-slate-600" />
                  </span>
                </span>
              </button>
            </div>

            <div className="overflow-y-auto pr-1">
              {/* Навігаційні кнопки */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <a
                  href="#who-we-are"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-[12px] border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-center font-mono text-[15px] font-medium text-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.05)]"
                >
                  Хто ми
                </a>
                <a
                  href="#materials"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-[12px] border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-center font-mono text-[15px] font-medium text-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.05)]"
                >
                  Матеріали
                </a>
                <a
                  href="#partners"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-[12px] border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-center font-mono text-[15px] font-medium text-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.05)]"
                >
                  Партнери
                </a>
                <a
                  href="#industries"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-[12px] border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-center font-mono text-[15px] font-medium text-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.05)]"
                >
                  Галузі
                </a>
              </div>

              {/* Контакти — максимум 50% ширини, по центру */}
              <a
                href="#contacts"
                onClick={() => setIsMenuOpen(false)}
                className="mb-6 flex w-full max-w-[50%] mx-auto items-center justify-center rounded-[12px] border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-center font-mono text-[15px] font-medium text-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.05)]"
              >
                Контакти
              </a>

              <div className="mb-6 h-px w-full bg-slate-200" />

              {/* Телефон */}
              <a
                href="tel:+380983800400"
                onClick={() => setIsMenuOpen(false)}
                className="mb-6 block text-center font-[Roboto_Mono] text-[24px] font-bold text-[#344054]"
              >
                +38 (098)-380-04-00
              </a>

              {/* Консультація — як десктопна кнопка телефону */}
              <a
                href="#contacts"
                onClick={() => setIsMenuOpen(false)}
                className="relative flex items-center justify-center rounded-full font-mono font-medium text-base leading-[130%] group pt-[15px] pr-9 pb-4 pl-9 bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat" />
                <span className="relative z-10 text-[#3B82F6] group-hover:text-[#2563EB] transition-colors duration-300">
                  Консультація
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
