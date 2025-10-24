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
      <div className="w-[900px] bg-white rounded-md p-8 flex flex-col gap-10">
        <h4
          className="text-[26px] font-medium text-[#3F3F46] leading-none text-center"
          style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
        >
          Заявка на консультацію
        </h4>
        
        <p
          className="text-[14px] text-[#71717A] text-center"
          style={{ fontFamily: "Roboto Mono, monospace" }}
        >
          Наш менеджер перетелефонує Вам якнайшвидше
        </p>

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
            <input
              type="text"
              id="name"
              placeholder="Введіть ваше ім'я"
              className="w-full px-3 py-3 rounded-lg focus:outline-none transition-all text-[#71717A] text-[14px] leading-6"
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
              {isSubmitting ? "Відправляємо..." : "Отримати консультацію"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
