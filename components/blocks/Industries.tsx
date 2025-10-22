import type { JSX } from "react"
import Image from "next/image"

export function Industries(): JSX.Element {
  return (
    <section className="w-full py-[100px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/industries/Section.webp"
          alt="Industries Background"
          fill
          className="object-cover"
          priority={false}
          sizes="100vw"
          quality={95}
          unoptimized={false}
        />
      </div>

      <div className="relative z-10 container-1320 px-4">
        {/* Title with Icon (same style as WhoWeAre) */}
        <div className="flex items-center gap-3  px-4">
          <Image
            src="/img/industries/Icon Title.svg"
            alt="Industries Icon"
            width={36}
            height={36}
            quality={100}
            unoptimized={true}
          />
          <h2 className="text-[21px] font-medium leading-[100%] text-center text-[#3B82F6]" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
            Галузеві рішення
          </h2>
        </div>

     
        {/* Cards */}
        <div className="mt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 1 */}
          <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col" style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>
            <div className="flex items-center justify-center mb-6">
              <Image src="/img/industries/icon-1.svg" alt="Icon" width={56} height={56} quality={100} unoptimized={true} />
            </div>
            <h3 className="text-[#3F3F46] text-[16px] font-medium leading-[100%] mb-4 text-center" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>Авіація</h3>
            <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3" style={{ backgroundColor: '#1E3A8A05' }}>
              <p className="font-mono font-medium text-[13px]  text-gray-500">Легкі та міцні композитні матеріали для авіаційної промисловості, що забезпечують високу міцність при мінімальній вазі.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col" style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>
            <div className="flex items-center justify-center mb-6">
              <Image src="/img/industries/icon-2.svg" alt="Icon" width={56} height={56} quality={100} unoptimized={true} />
            </div>
            <h3 className="text-[#3F3F46] text-[16px] font-medium leading-[100%] mb-4 text-center" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>Автоспорт</h3>
            <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3" style={{ backgroundColor: '#1E3A8A05' }}>
              <p className="font-mono font-medium text-[13px]  text-gray-500">Високотехнологічні матеріали для гоночних автомобілів, що забезпечують максимальну продуктивність та безпеку.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col" style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>
            <div className="flex items-center justify-center mb-6">
              <Image src="/img/industries/icon-3.svg" alt="Icon" width={56} height={56} quality={100} unoptimized={true} />
            </div>
            <h3 className="text-[#3F3F46] text-[16px] font-medium leading-[100%] mb-4 text-center" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>Енергетика</h3>
            <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3" style={{ backgroundColor: '#1E3A8A05' }}>
              <p className="font-mono font-medium text-[13px]  text-gray-500">Спеціалізовані матеріали для енергетичного сектору, що витримують екстремальні умови експлуатації.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="gradient-card bg-white/70 backdrop-blur-sm p-4 pt-6 flex flex-col" style={{ boxShadow: 'inset 0px 0px 68px 0px #1D4ED80D, inset 0px 2px 4px 0px #1D4ED81A' }}>
            <div className="flex items-center justify-center mb-6">
              <Image src="/img/industries/icon-4.svg" alt="Icon" width={56} height={56} quality={100} unoptimized={true} />
            </div>
            <h3 className="text-[#3F3F46] text-[16px] font-medium leading-[100%] mb-4 text-center" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>Суднобудування</h3>
            <div className="flex-1 rounded-[6px] border border-[#6BABFA29] p-3" style={{ backgroundColor: '#1E3A8A05' }}>
              <p className="font-mono font-medium text-[13px]  text-gray-500">Корозійностійкі композити для морської промисловості, що забезпечують довговічність у агресивному середовищі.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
