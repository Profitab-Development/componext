import Image from "next/image"
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export default function UnderDevelopment() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-white">

      <div className="flex flex-col justify-start p-8 lg:p-[60px] w-full lg:w-[22%] xl:w-[25%] items-center lg:items-start">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={38}
          priority
          className="lg:w-[200px] lg:h-[48px] w-[160px] h-[38px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-grow text-center w-full lg:w-[56%] xl:w-[50%] px-4 max-w-full">
        <div className="mb-8">
          <Image
            src="/trambitasvg.svg"
            alt="Trambita"
            width={200}
            height={200}
            className="lg:w-[260px] lg:h-[260px] w-[200px] h-[200px] mx-auto"
          />
        </div>
        <h1
          className={`
    ${robotoMono.variable}
    text-2xl lg:text-[36px] xl:text-[42px]
    font-normal leading-[100%] tracking-[0]
    text-center text-gray-800 mb-4
    relative inline-block px-8 py-7 custom-corner-border
  `}
          style={{ fontFamily: 'var(--font-roboto-mono)' }}
        >
          Сайт в розробці!
          <span className="corner-bl"></span>
          <span className="corner-br"></span>
          <span className="bottom-line"></span>
        </h1>
      </div>

      <div className="flex flex-col justify-end p-8 lg:p-[60px] w-full lg:w-[22%] xl:w-[25%] items-center lg:items-end">
        <div className="flex flex-col gap-3 text-gray-700 text-sm w-full max-w-xs">
          <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Image src="/Icon Frame.svg" alt="Phone" width={28} height={28} className="lg:w-[32px] lg:h-[32px] w-[28px] h-[28px]" />
            <span className={`${robotoMono.variable} text-base lg:text-[17px] font-normal leading-[100%] tracking-[0] text-center text-gray-800`}
              style={{ fontFamily: 'var(--font-roboto-mono)' }}>Номер телефону</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Image src="/Icon Frame-1.svg" alt="Email" width={28} height={28} className="lg:w-[32px] lg:h-[32px] w-[28px] h-[28px]" />
            <span className={`${robotoMono.variable} text-base lg:text-[17px] font-normal leading-[100%] tracking-[0] text-center text-gray-800`}
              style={{ fontFamily: 'var(--font-roboto-mono)' }}>Електронна пошта</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Image src="/Icon Frame-2.svg" alt="WhatsApp" width={28} height={28} className="lg:w-[32px] lg:h-[32px] w-[28px] h-[28px]" />
            <span className={`${robotoMono.variable} text-base lg:text-[17px] font-normal leading-[100%] tracking-[0] text-center text-gray-800`}
              style={{ fontFamily: 'var(--font-roboto-mono)' }}>WhatsApp</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Image src="/Icon Frame 3.svg" alt="Telegram" width={28} height={28} className="lg:w-[32px] lg:h-[32px] w-[28px] h-[28px]" />
            <span className={`${robotoMono.variable} text-base lg:text-[17px] font-normal leading-[100%] tracking-[0] text-center text-gray-800`}
              style={{ fontFamily: 'var(--font-roboto-mono)' }}>Telegram</span>
          </a>
        </div>
      </div>

    </main>
  )
}


