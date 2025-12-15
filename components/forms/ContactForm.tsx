// "use client"
//
// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { PhoneInput } from "react-international-phone"
// import "react-international-phone/style.css"
// // @ts-expect-error - google-libphonenumber doesn't have types
// import { PhoneNumberUtil } from "google-libphonenumber"
// import CryptoJS from "crypto-js"
//
// // ============================================================================
// // КОНФІГУРАЦІЯ - URL та дані для Rabbit Proxy
// // ============================================================================
// // URL endpoint для відправки email через Rabbit proxy
// const rabbitProxy = 'https://rbproxy.znaesh-test.pp.ua/sendEmailToRabbit'
//
// // Email одержувача (використовується Rabbit proxy)
// const DEFAULT_TO = 'info@componext.com.ua'
//
// // Читаємо з .env (NEXT_PUBLIC_*) - значення підставляються під час білду
// const AUTH_USER = process.env.NEXT_PUBLIC_USER as string
// const AUTH_PASS = process.env.NEXT_PUBLIC_PASS as string
// const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string
//
// // ============================================================================
// // ТИПИ ДАНИХ
// // ============================================================================
// interface FormData {
//   name: string
// }
//
// // ============================================================================
// // ОСНОВНИЙ КОМПОНЕНТ ФОРМИ
// // ============================================================================
// export function ContactForm() {
//   // Стан для номера телефону
//   const [phone, setPhone] = useState("")
//   // Honeypot (антиспам) - приховане поле; якщо заповнене, запит ігнорується на бекенді
//   const [honeypot, setHoneypot] = useState("")
//
//   // Стан для відстеження blur (коли користувач вийшов з поля)
//   const [isBlurred, setIsBlurred] = useState(false)           // Для телефону
//   const [isBlurredName, setIsBlurredName] = useState(false)   // Для імені
//
//   // Стан для відображення процесу відправки форми
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'sent' | 'error'>('idle')
//
//   // Ініціалізуємо валідатор номерів телефону (google-libphonenumber)
//   const phoneUtil = PhoneNumberUtil.getInstance()
//
//   // Перевірка чи коректний номер телефону
//   const isPhoneValid = () => {
//     try {
//       if (!phone) return false  // Якщо телефон порожній - не валідний
//       // Використовуємо google-libphonenumber для валідації
//       return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
//     } catch {
//       return false  // Якщо помилка парсингу - не валідний
//     }
//   }
//
//   // Запам'ятовуємо результат валідації телефону
//   const isValid = isPhoneValid()
//
//   // ============================================================================
//   // React Hook Form - для валідації та управління формою
//   // ============================================================================
//   const {
//     register,        // Реєстрація полів форми
//     handleSubmit,    // Обробка сабміту форми
//     reset,           // Скидання форми після успішної відправки
//     formState: { errors },  // Помилки валідації
//     watch            // Відстеження змін полів форми в реальному часі
//   } = useForm<FormData>({ mode: 'all' })
//
//   // Відстежуємо зміни поля name для динамічної валідації
//   const watchedName = watch('name', '')
//
//   // Логи стану прибрані — залишаємо тільки статус OK/ERROR у сабміті
//
//   // ============================================================================
//   // ОБРОБНИК ВІДПРАВКИ ФОРМИ
//   // ============================================================================
//   const onSubmit = async (data: FormData) => {
//     const { name } = data
//
//     // Якщо ім'я або телефон не валідні - не відправляємо
//     if (!name || !isValid) {
//       return
//     }
//
//     // Вмикаємо стан "відправляємо..."
//     setIsSubmitting(true)
//     setSubmitStatus('idle')
//
//     try {
//       // Перевіряємо чи є ключ шифрування
//       if (!SECRET_KEY) {
//         throw new Error('Missing encryption key')
//       }
//
//       // Формуємо дані авторизації та шифруємо їх (CryptoJS AES)
//       const authData = {
//         user: AUTH_USER,
//         pass: AUTH_PASS,
//         to: DEFAULT_TO,
//       }
//       const authDataEncrypt = CryptoJS.AES.encrypt(
//         JSON.stringify(authData),
//         SECRET_KEY
//       ).toString()
//
//       // Формуємо FormData з полями форми
//       const formData = new FormData()
//       formData.append('name', name)
//       formData.append('phone', phone)
//       formData.append('mailTitle', 'Нова заявка з сайту Componext')
//       formData.append('authData', authDataEncrypt)
//
//
//
//       // Надсилаємо на Rabbit proxy
//       const res = await fetch(rabbitProxy, {
//         method: 'POST',
//         body: formData,
//       })
//
//       // Перевіряємо чи запит успішний
//       if (!res.ok) {
//         throw new Error('Send failed')
//       }
//       console.log('[ContactForm] OK')
//
//       // Очищаємо форму після успішної відправки
//       reset()
//       setPhone("")
//       setHoneypot("")
//
//       // Показуємо повідомлення про успіх
//       setSubmitStatus('sent')
//       alert('Форма успішно відправлена!')
//       try {
//         // GTM подія generate_lead
//         type DataLayerEvent = { event: string; [key: string]: string }
//         interface DataLayerWindow extends Window { dataLayer?: DataLayerEvent[] }
//         const w = window as DataLayerWindow
//         w.dataLayer = w.dataLayer || []
//         w.dataLayer.push({
//           event: 'generate_lead',
//           phone,
//           lead_source: 'contact_form'
//         })
//       } catch {}
//       // Редірект прибрано за вимогою — залишаємо користувача на поточній сторінці
//
//     } catch (err) {
//       // Показуємо повідомлення про помилку — логуємо лише статус ERROR
//       console.error('[ContactForm] ERROR', err)
//       setSubmitStatus('error')
//     } finally {
//       // Вимикаємо стан "відправляємо..." в будь-якому випадку
//       setIsSubmitting(false)
//     }
//   }
//
//   // ============================================================================
//   // СТИЛІ ВАЛІДАЦІЇ - динамічна зміна стилю полів в залежності від валідації
//   // ============================================================================
//
//   // Стиль для помилки (червона рамка)
//   const redBorder = {
//     border: '2px solid #ef4444',
//     boxShadow: 'inset 0px 0px 20px 1px rgba(239, 68, 68, 0.3)',
//   }
//
//   // Стиль для успішної валідації (зелена рамка)
//   const greenBorder = {
//     border: '2px solid #22c55e',
//     boxShadow: 'inset 0px 0px 20px 10px rgba(34, 197, 94, 0.3)',
//   }
//
//   // Функція для визначення стилю поля телефону
//   const getPhoneInputStyle = () => {
//     if (!isValid && isBlurred) return redBorder      // Червоний якщо не валідний та blur
//     if (isValid && isBlurred) return greenBorder     // Зелений якщо валідний та blur
//     return { border: '1px solid #d1d5db' }           // Сірий за замовчуванням
//   }
//
//   // Функція для визначення стилю поля імені
//   const getNameInputStyle = () => {
//     if (errors.name) return redBorder                                 // Червоний якщо є помилка
//     if (!errors.name && isBlurredName && watchedName) return greenBorder  // Зелений якщо валідний та blur
//     return { border: '1px solid #d1d5db' }                            // Сірий за замовчуванням
//   }
//
//
//
//   // ============================================================================
//   // ОТРИМАННЯ JSX - рендер форми
//   // ============================================================================
//   return (
//     <div className="flex justify-center">
//       <div className="w-[1320px]">
//         {/* Контейнер форми з фоновим зображенням */}
//         <div
//           className="relative w-[900px] mx-auto  p-8 flex flex-col gap-10"
//           style={{
//             backgroundImage: "url('/img/contacts/Stroke Form.png')",
//             backgroundSize: '100% 100%',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundColor: 'white'
//           }}
//         >
//           <div className="relative" style={{ zIndex: 20 }}>
//           <h4
//             className="text-[26px] font-medium text-[#3F3F46] leading-none text-center"
//             style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
//           >
//             Форма зворотного звʼязку
//           </h4>
//           </div>
//
//
//
//           {/* Основна форма зворотного зв'язку */}
//           <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-6 flex-1" style={{ zIndex: 20 }}>
//           {/* Honeypot (антиспам) приховане поле */}
//           <input
//             type="text"
//             name="hp_field"
//             value={honeypot}
//             onChange={(e) => setHoneypot(e.target.value)}
//             autoComplete="off"
//             tabIndex={-1}
//             aria-hidden="true"
//             style={{ position: 'absolute', left: '-5000px', opacity: 0 }}
//           />
//           {/* ======================================= */}
//           {/* Поле введення імені */}
//           {/* ======================================= */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
//               style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
//             >
//               Ім&apos;я
//             </label>
//             <div className="relative">
//               {/* Person Icon */}
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-[#71717A]"
//                 >
//                   <path
//                     d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Уведіть своє імʼя"
//                 className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all text-[#71717A] text-[14px] leading-6"
//                 style={{
//                   fontFamily: "Roboto Mono, monospace",
//                   ...getNameInputStyle()
//                 }}
//                 onFocus={() => setIsBlurredName(true)}
//                 autoComplete="off"
//                 {...register('name', {
//                   required: "Ім'я обов'язкове",
//                   minLength: {
//                     value: 2,
//                     message: "Ім'я має бути мінімум 2 символи"
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: "Ім'я має бути максимум 30 символів"
//                   },
//                   pattern: {
//                     value: /^[\p{L}\s'’ʼ`-]+$/u,
//                     message: "Ім'я може містити тільки літери, апостроф, зворотний апостроф та пробіли"
//                   }
//                 })}
//               />
//             </div>
//             {errors.name && (
//               <p className="mt-1 text-sm text-red-500">
//                 {errors.name.message as string}
//               </p>
//             )}
//           </div>
//
//
//
//           {/* ======================================= */}
//           {/* Поле введення номера телефону */}
//           {/* ======================================= */}
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
//               style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
//             >
//               Номер телефону
//             </label>
//             <div className="relative">
//               <PhoneInput
//                 defaultCountry="ua"
//                 value={phone}
//                 onChange={setPhone}
//                 onBlur={() => setIsBlurred(true)}
//                 className="w-full"
//                 inputStyle={{
//                   width: '100%',
//                   height: '48px',
//                   padding: '10px 12px',
//                   borderRadius: '0 8px 8px 0',
//                   outline: 'none',
//                   borderLeft: 'none',
//                   fontFamily: 'Roboto Mono, monospace',
//                   fontSize: '14px',
//                   color: '#71717A',
//                   ...getPhoneInputStyle()
//                 }}
//                 countrySelectorStyleProps={{
//                   buttonStyle: {
//                     height: '48px',
//                     padding: '10px 12px',
//                     borderRight: 'none',
//                     borderRadius: '8px 0 0 8px',
//                     backgroundColor: 'transparent',
//                     fontFamily: 'Roboto Mono, monospace',
//                     fontSize: '14px',
//                     color: '#71717A',
//                     ...getPhoneInputStyle()
//                   }
//                 }}
//               />
//             </div>
//             {!isValid && isBlurred && (
//               <p className="mt-1 text-sm text-red-500">
//                 Некоректний номер телефону
//               </p>
//             )}
//           </div>
//
//
//
//           {/* ======================================= */}
//           {/* Кнопка відправки форми */}
//           {/* ======================================= */}
//           <div className="mt-4 flex justify-center">
//             <button
//               type="submit"
//               disabled={isSubmitting || !isValid || !watchedName}
//               onClick={(e) => {
//                 if (isSubmitting || !isValid || !watchedName) {
//                   e.preventDefault()
//                 }
//               }}
//               className={`relative h-[52px] rounded-full font-mono font-medium text-base leading-[130%] group flex items-center justify-center pt-[15px] pr-9 pb-4 pl-9 transition-all duration-200 ${
//                 isSubmitting || !isValid || !watchedName
//                   ? "w-[236px] bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat cursor-not-allowed"
//                   : "w-[236px] bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat cursor-pointer"
//               }`}
//               style={{ fontFamily: "Roboto Mono, monospace" }}
//             >
//               {/* Ефект hover - показується тільки коли кнопка активна */}
//               {!(isSubmitting || !isValid || !watchedName) && (
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat"></div>
//               )}
//               {/* Текст на кнопці */}
//               <span className={`relative z-10 transition-colors duration-300 ${
//                 isSubmitting || !isValid || !watchedName
//                   ? "text-[#3B82F6] opacity-60"
//                   : "text-[#3B82F6] group-hover:text-[#2563EB]"
//               }`}>
//                 {isSubmitting
//                   ? "Відправляємо..."
//                   : submitStatus === 'sent'
//                     ? "Надіслано!"
//                     : "Надіслати запит"}
//               </span>
//             </button>
//           </div>
//         </form>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
// @ts-expect-error - google-libphonenumber doesn't have types
import { PhoneNumberUtil } from "google-libphonenumber"
import CryptoJS from "crypto-js"

// ============================================================================
// КОНФІГУРАЦІЯ - URL та дані для Rabbit Proxy
// ============================================================================
const rabbitProxy = "https://rbproxy.znaesh-test.pp.ua/sendEmailToRabbit"
const DEFAULT_TO = "info@componext.com.ua"

const AUTH_USER = process.env.NEXT_PUBLIC_USER as string
const AUTH_PASS = process.env.NEXT_PUBLIC_PASS as string
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string

// ============================================================================
// ТИПИ ДАНИХ
// ============================================================================
interface FormData {
  name: string
}

// ============================================================================
// ОСНОВНИЙ КОМПОНЕНТ ФОРМИ
// ============================================================================
export function ContactForm() {
  const [phone, setPhone] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [isBlurred, setIsBlurred] = useState(false)
  const [isBlurredName, setIsBlurredName] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sent" | "error">(
      "idle"
  )

  const phoneUtil = PhoneNumberUtil.getInstance()

  const isPhoneValid = () => {
    try {
      if (!phone) return false
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch {
      return false
    }
  }

  const isValid = isPhoneValid()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm<FormData>({ mode: "all" })

  const watchedName = watch("name", "")

  const onSubmit = async (data: FormData) => {
    const { name } = data
    if (!name || !isValid) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (!SECRET_KEY) {
        throw new Error("Missing encryption key")
      }

      const authData = {
        user: AUTH_USER,
        pass: AUTH_PASS,
        to: DEFAULT_TO
      }
      const authDataEncrypt = CryptoJS.AES.encrypt(
          JSON.stringify(authData),
          SECRET_KEY
      ).toString()

      const formData = new FormData()
      formData.append("name", name)
      formData.append("phone", phone)
      formData.append("mailTitle", "Нова заявка з сайту Componext")
      formData.append("authData", authDataEncrypt)

      const res = await fetch(rabbitProxy, {
        method: "POST",
        body: formData
      })

      if (!res.ok) {
        throw new Error("Send failed")
      }

      reset()
      setPhone("")
      setHoneypot("")
      setSubmitStatus("sent")
      alert("Форма успішно відправлена!")

      try {
        type DataLayerEvent = { event: string; [key: string]: string }
        interface DataLayerWindow extends Window {
          dataLayer?: DataLayerEvent[]
        }
        const w = window as DataLayerWindow
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({
          event: "generate_lead",
          phone,
          lead_source: "contact_form"
        })
      } catch {}
    } catch (err) {
      console.error("[ContactForm] ERROR", err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const redBorder = {
    border: "2px solid #ef4444",
    boxShadow: "inset 0px 0px 20px 1px rgba(239, 68, 68, 0.3)"
  }

  const greenBorder = {
    border: "2px solid #22c55e",
    boxShadow: "inset 0px 0px 20px 10px rgba(34, 197, 94, 0.3)"
  }

  const getPhoneInputStyle = () => {
    if (!isValid && isBlurred) return redBorder
    if (isValid && isBlurred) return greenBorder
    return { border: "1px solid #d1d5db" }
  }

  const getNameInputStyle = () => {
    if (errors.name) return redBorder
    if (!errors.name && isBlurredName && watchedName) return greenBorder
    return { border: "1px solid #d1d5db" }
  }

  // ============================================================================
  // JSX
  // ============================================================================
  return (
      <div className="flex justify-center mt-10 lg:mt-0">
        <div className="w-full max-w-[1320px]">
          {/* Контейнер форми з фоновим зображенням */}
          <div
              className="relative w-full max-w-[900px] mx-auto px-4 py-10 lg:p-8 flex flex-col gap-10 contact-form-bg"
          >
            <div className="relative z-20">
              <p
                  className="text-[26px] font-medium text-[#3F3F46] leading-none text-center"
                  style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
              >
                Форма зворотного звʼязку
              </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative flex flex-col gap-6 flex-1"
                style={{ zIndex: 20 }}
            >
              {/* Honeypot */}
              <input
                  type="text"
                  name="hp_field"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px", opacity: 0 }}
              />

              {/* Ім'я */}
              <div>
                <label
                    htmlFor="name"
                    className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
                    style={{
                      fontFamily: "Suisse Int'l, system-ui, sans-serif"
                    }}
                >
                  Ім&apos;я
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#71717A]"
                    >
                      <path
                          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                      <path
                          d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                      type="text"
                      id="name"
                      placeholder="Уведіть своє імʼя"
                      className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all text-[#71717A] text-[14px] leading-6"
                      style={{
                        fontFamily: "Roboto Mono, monospace",
                        ...getNameInputStyle()
                      }}
                      onFocus={() => setIsBlurredName(true)}
                      autoComplete="off"
                      {...register("name", {
                        required: "Ім'я обов'язкове",
                        minLength: {
                          value: 2,
                          message: "Ім'я має бути мінімум 2 символи"
                        },
                        maxLength: {
                          value: 30,
                          message: "Ім'я має бути максимум 30 символів"
                        },
                        pattern: {
                          value: /^[\p{L}\s'’ʼ`-]+$/u,
                          message:
                              "Ім'я може містити тільки літери, апостроф, зворотний апостроф та пробіли"
                        }
                      })}
                  />
                </div>
                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message as string}
                    </p>
                )}
              </div>

              {/* Телефон */}
              <div>
                <label
                    htmlFor="phone"
                    className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
                    style={{
                      fontFamily: "Suisse Int'l, system-ui, sans-serif"
                    }}
                >
                  Номер телефону
                </label>
                <div className="relative">
                  <PhoneInput
                      defaultCountry="ua"
                      value={phone}
                      onChange={setPhone}
                      onBlur={() => setIsBlurred(true)}
                      className="w-full"
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        padding: "10px 12px",
                        borderRadius: "0 8px 8px 0",
                        outline: "none",
                        borderLeft: "none",
                        fontFamily: "Roboto Mono, monospace",
                        fontSize: "14px",
                        color: "#71717A",
                        ...getPhoneInputStyle()
                      }}
                      countrySelectorStyleProps={{
                        buttonStyle: {
                          height: "48px",
                          padding: "10px 12px",
                          borderRadius: "8px 0 0 8px",
                          backgroundColor: "transparent",
                          fontFamily: "Roboto Mono, monospace",
                          fontSize: "14px",
                          color: "#71717A",
                          ...getPhoneInputStyle()
                        }
                      }}
                  />
                </div>
                {!isValid && isBlurred && (
                    <p className="mt-1 text-sm text-red-500">
                      Некоректний номер телефону
                    </p>
                )}
              </div>

              {/* Кнопка */}
              <div className="mt-4 flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting || !isValid || !watchedName}
                    onClick={(e) => {
                      if (isSubmitting || !isValid || !watchedName) {
                        e.preventDefault()
                      }
                    }}
                    className={`relative h-[52px] rounded-full font-mono font-medium text-base leading-[130%] group flex items-center justify-center pt-[15px] pr-9 pb-4 pl-9 transition-all duration-200 ${
                        isSubmitting || !isValid || !watchedName
                            ? "w-[236px] bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat cursor-not-allowed"
                            : "w-[236px] bg-[url('/img/btn/Button-def.webp')] bg-contain bg-center bg-no-repeat cursor-pointer"
                    }`}
                    style={{ fontFamily: "Roboto Mono, monospace" }}
                >
                  {!(isSubmitting || !isValid || !watchedName) && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[url('/img/btn/Button-hover.webp')] bg-contain bg-center bg-no-repeat" />
                  )}
                  <span
                      className={`relative z-10 transition-colors duration-300 ${
                          isSubmitting || !isValid || !watchedName
                              ? "text-[#3B82F6] opacity-60"
                              : "text-[#3B82F6] group-hover:text-[#2563EB]"
                      }`}
                  >
                  {isSubmitting
                      ? "Відправляємо..."
                      : submitStatus === "sent"
                          ? "Надіслано!"
                          : "Надіслати запит"}
                </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
