import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="container-1320 px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              width={190} 
              height={45} 
              alt="Logo" 
              priority 
              className="w-[190px] h-[45px]"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a 
              href="#who-we-are" 
              className="font-mono font-medium text-base leading-[130%] text-gray-700 hover:text-blue-500 transition-colors"
            >
              Хто ми
            </a>
            <a 
              href="#materials" 
              className="font-mono font-medium text-base leading-[130%] text-gray-700 hover:text-blue-500 transition-colors"
            >
              Матеріали
            </a>
            <a 
              href="#partners" 
              className="font-mono font-medium text-base leading-[130%] text-gray-700 hover:text-blue-500 transition-colors"
            >
              Партнери
            </a>
            <a 
              href="#industries" 
              className="font-mono font-medium text-base leading-[130%] text-gray-700 hover:text-blue-500 transition-colors"
            >
              Галузі
            </a>
            <a 
              href="#contacts" 
              className="font-mono font-medium text-base leading-[130%] text-gray-700 hover:text-blue-500 transition-colors"
            >
              Контакти
            </a>
          </nav>

          {/* Phone Link */}
          <a 
            href="tel:+380983800400"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-mono font-medium text-base leading-[130%] hover:bg-blue-600 transition-colors"
          >
            +380 98-380-04-00
          </a>

          {/* Divider Line */}
          <div className="w-full max-w-2xl border-b border-gray-200"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 font-mono">
            Designed and Developed by
          </p>
        </div>
      </div>
    </footer>
  )
}
