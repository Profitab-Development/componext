import type { JSX } from "react"
import Image from "next/image"

export function WhoWeAre(): JSX.Element {
  return (
    <section id="who-we-are" className="w-full pt-[100px]">
      <div className="container-1320 px-4">
        {/* Title with Icon */}
        <div className="flex items-center gap-3 pb-4 px-4">
          <Image
            src="/img/who-we-are/IconTitle.svg"
            alt="Who We Are Icon"
            width={36}
            height={430}
            unoptimized={true}
          />
          <h2 className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
            Хто ми
          </h2>
        </div>
                {/* Divider Line */}
        <div className="w-full border-b border-zinc-200"></div>
        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Left Column */}
          <div>
            <p className="text-[26px] font-medium leading-[130%] text-[#3F3F46]" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
              Компанія Компонекст – офіційний імпортер інноваційних композитних матеріалів із Німеччини та Італії: Xenia, Siltex, ThermHex.
            </p>
          </div>
          
          {/* Right Column */}
          <div>
            <p className="text-[17px] font-normal leading-[130%] text-[#52525B] font-mono mb-4">
              Ми спеціалізуємось на постачанні композитних, термопластичних матеріалів в Україну від найкращих виробників Європи:
            </p>
            <p className="text-[17px] font-normal leading-[130%] text-[#52525B] font-mono">
              Наші рішення знаходять застосування в авіації, автоспорті, суднобудуванні, енергетиці, оборонній та будівельній галузях тощо.
            </p>
          </div>
        </div>
        
        {/* Three Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Column 1 - Xenia */}
          <div>
            <p className="text-[17px] font-normal leading-[130%] text-[#52525B] font-mono">
              Xenia – армовані термопластичні композити для лиття під тиском і 3D-друку (PEEK, PESU, PEI, ABS і понад 100 сплавів для різних застосувань).
            </p>
          </div>
          
          {/* Column 2 - Siltex */}
          <div>
            <p className="text-[17px] font-normal leading-[130%] text-[#52525B] font-mono">
              Siltex – рукави, стрічки та шнури з гібридних термопластичних волокон, армовані карбоном, склом.
            </p>
          </div>
          
          {/* Column 3 - ThermHex */}
          <div>
            <p className="text-[17px] font-normal leading-[130%] text-[#52525B] font-mono">
              ThermHex – легкі, міцні, універсальні у використанні термопластичні поліпропіленові панелі з сотовою структурою, з можливою ламінацією веглеволокном або скловолокном.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}


