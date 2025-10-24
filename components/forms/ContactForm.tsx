"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
// @ts-ignore - google-libphonenumber doesn't have types
import { PhoneNumberUtil } from "google-libphonenumber"

export function ContactForm() {
  const [phone, setPhone] = useState("")
  const [isBlurred, setIsBlurred] = useState(false)
  const [isBlurredName, setIsBlurredName] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const phoneUtil = PhoneNumberUtil.getInstance()
  
  const isPhoneValid = () => {
    try {
      if (!phone) return false
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
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
  } = useForm({ mode: 'all' })

  const watchedName = watch('name', '')

  const onSubmit = (data: any) => {
    const { name } = data
    if (name && isValid) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        console.log('Дані форми:', { name, phone })
        reset()
        setPhone("")
        setIsSubmitting(false)
        alert("Форма успішно відправлена!")
      }, 1000)
    }
  }

  // Visual validation styles
  const redBorder = {
    border: '2px solid #ef4444',
    boxShadow: 'inset 0px 0px 20px 1px rgba(239, 68, 68, 0.3)',
  }
  
  const greenBorder = {
    border: '2px solid #22c55e',
    boxShadow: 'inset 0px 0px 20px 10px rgba(34, 197, 94, 0.3)',
  }

  const getPhoneInputStyle = () => {
    if (!isValid && isBlurred) return redBorder
    if (isValid && isBlurred) return greenBorder
    return { border: '1px solid #d1d5db' }
  }

  const getNameInputStyle = () => {
    if (errors.name) return redBorder
    if (!errors.name && isBlurredName && watchedName) return greenBorder
    return { border: '1px solid #d1d5db' }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[1320px]">
        <div className="w-[900px] mx-auto bg-white rounded-md p-8 flex flex-col gap-10">
        <h4
          className="text-[26px] font-medium text-[#3F3F46] leading-none text-center"
          style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
        >
          Форма зворотного звʼязку
        </h4>
        
        

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 flex-1">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
              style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
            >
              Ім&apos;я
            </label>
            <div className="relative">
              {/* Person Icon */}
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
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
                {...register('name', {
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
                    value: /^[а-яА-Яa-zA-Z\s]+$/,
                    message: "Ім'я може містити тільки літери"
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

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[14px] font-medium text-[#71717A] mb-2 leading-none"
              style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
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
                  width: '100%',
                  height: '48px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '14px',
                  color: '#71717A',
                  ...getPhoneInputStyle()
                }}
                countrySelectorStyleProps={{
                  buttonStyle: {
                    height: '48px',
                    padding: '10px 12px',
                    border: 'none',
                    borderRadius: '8px 0 0 8px',
                    backgroundColor: 'transparent',
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '14px',
                    color: '#71717A',
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

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !watchedName}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                isSubmitting || !isValid || !watchedName
                  ? "bg-gray-400 cursor-not-allowed text-gray-600"
                  : "bg-[#6C3078] hover:bg-[#5a2a63] active:bg-[#4d2354] text-white"
              }`}
              style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
            >
              {isSubmitting ? "Відправляємо..." : "Надіслати запит"}
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
