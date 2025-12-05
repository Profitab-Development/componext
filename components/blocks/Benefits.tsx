import type { JSX } from "react"
import Image from "next/image"

export function Benefits(): JSX.Element {
  return (
      <section className="w-full py-[60px] lg:py-[100px] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/img/benefits/Section.webp"
              alt="Benefits Background"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized={true}
          />
        </div>

        <div className="relative z-10 container-1320 px-4">

          {/* Title */}
          <div className="flex items-center gap-3 px-4 justify-center lg:justify-start">
            <Image
                src="/img/benefits/IconTitle.svg"
                alt="Benefits Icon"
                width={36}
                height={36}
                unoptimized={true}
            />

            {/* MOB: 19px, center / DESK: 21px, left */}
            <h2
                className="
              text-[19px] lg:text-[21px]
              font-medium
              leading-[100%] lg:leading-[100%]
              text-[#3B82F6]
              text-center lg:text-left
            "
                style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
            >
              Які переваги ви отримуєте
            </h2>
          </div>

          {/* Cards */}
          <div className="
          mt-[60px] lg:mt-[25px]
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-[20px] lg:gap-3
        ">

            {/* ==== CARD 1 ==== */}
            <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col"
                 style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>

              {/* Icon */}
              <div className="flex items-center justify-center mb-[16px]">
                <Image src="/img/benefits/icon-1.svg" alt="Icon" width={56} height={56} unoptimized={true} />
              </div>

              {/* Title */}
              <h3
                  className="
                text-[#3F3F46]
                text-[16px]
                font-medium
                leading-[100%]
                mb-[16px]
                text-center
              "
                  style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
              >
                Ексклюзивне партнерство
              </h3>

              {/* Text */}
              <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-[16px]"
                   style={{ backgroundColor: '#1E3A8A05' }}>
                <p className="font-mono font-medium text-[13px] leading-[130%] text-gray-500">
                  Офіційний імпортер Xenia, Siltex, ThermHex та інших брендів в Україні — гарантія оригінальної продукції та вигідних умов постачання.
                </p>
              </div>
            </div>

            {/* ==== CARD 2 ==== */}
            <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col"
                 style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>

              <div className="flex items-center justify-center mb-[16px]">
                <Image src="/img/benefits/icon-2.svg" alt="Icon" width={56} height={56} unoptimized={true} />
              </div>

              <h3
                  className="
                text-[#3F3F46]
                text-[16px]
                font-medium
                leading-[100%]
                mb-[16px]
                text-center
              "
                  style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
              >
                Інженерна підтримка на всіх етапах
              </h3>

              <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-[16px]"
                   style={{ backgroundColor: '#1E3A8A05' }}>
                <p className="font-mono font-medium text-[13px] leading-[130%] text-gray-500">
                  Консультації та допомога в підборі матеріалів для конкретного проєкту дозволяють скоротити час на випробування і запуск виробництва до 50%.
                </p>
              </div>
            </div>

            {/* ==== CARD 3 ==== */}
            <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col"
                 style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>

              <div className="flex items-center justify-center mb-[16px]">
                <Image src="/img/benefits/icon-3.svg" alt="Icon" width={56} height={56} unoptimized={true} />
              </div>

              <h3
                  className="
                text-[#3F3F46]
                text-[16px]
                font-medium
                leading-[100%]
                mb-[16px]
                text-center
              "
                  style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
              >
                Комплексні рішення під ключ
              </h3>

              <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-[16px]"
                   style={{ backgroundColor: '#1E3A8A05' }}>
                <p className="font-mono font-medium text-[13px] leading-[130%] text-gray-500">
                  Матеріали, верстати, технології, інструменти для обробки — все в одному місці. Забезпечуємо повний супровід: від ідеї до готового виробу.
                </p>
              </div>
            </div>

            {/* ==== CARD 4 ==== */}
            <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col"
                 style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>

              <div className="flex items-center justify-center mb-[16px]">
                <Image src="/img/benefits/icon-4.svg" alt="Icon" width={56} height={56} unoptimized={true} />
              </div>

              <h3
                  className="
                text-[#3F3F46]
                text-[16px]
                font-medium
                leading-[100%]
                mb-[16px]
                text-center
              "
                  style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}
              >
                Реальні результати
              </h3>

              <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-[16px]"
                   style={{ backgroundColor: '#1E3A8A05' }}>
                <p className="font-mono font-medium text-[13px] leading-[130%] text-gray-500">
                  Вироби виходять легші, міцніші та економічніші: економія сировини до 50%, скорочення часу виробництва вдвічі, підвищення конкурентоспроможності готової продукції.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
