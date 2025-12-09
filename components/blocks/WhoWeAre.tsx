import type { JSX } from 'react'
import Image from 'next/image'

export function WhoWeAre(): JSX.Element {
  return (
    <section id="who-we-are" className="w-full pt-[40px] md:pt-[100px]">
      <div className="container-1320 px-4">
        {/* Заголовок */}
        <div className="flex items-center gap-3 pb-4 px-4 justify-center md:justify-start">
          <Image
            src="/img/who-we-are/IconTitle.svg"
            alt="Who We Are Icon"
            width={36}
            height={430}
            unoptimized={true}
          />
          <h2
            className="
              text-[21px] leading-[100%] text-[#3B82F6] font-medium
              text-center md:text-left
            "
            style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
          >
            Хто ми
          </h2>
        </div>

        {/* Лінія */}
        <div className="w-full border-b border-zinc-200"></div>

        {/* 2 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Ліва колонка */}
          <div>
            <p
              className="
                text-[17px] md:text-[26px]
                font-medium
                text-center md:text-left
                text-[#3F3F46]
                leading-normal md:leading-[130%]
              "
              style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
            >
              Компанія Компонекст – офіційний імпортер інноваційних композитних
              матеріалів із Німеччини та Італії: Xenia, Siltex, ThermHex.
            </p>
          </div>

          {/* Права колонка */}
          <div>
            <p
              className="
                text-[14px] md:text-[17px]
                leading-[130%]
                text-[#52525B]
                font-mono
                text-left
                mb-6
              "
            >
              Ми спеціалізуємось на постачанні композитних, термопластичних
              матеріалів в Україну від найкращих виробників Європи:
            </p>

            <p
              className="
                text-[14px] md:text-[17px]
                leading-[130%]
                text-[#52525B]
                font-mono
                text-left
              "
            >
              Наші рішення знаходять застосування в авіації, автоспорті,
              суднобудуванні, енергетиці, оборонній та будівельній галузях тощо.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
