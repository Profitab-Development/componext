"use client"

import { useState } from "react"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateName = (name: string): string => {
    if (!name.trim()) return "Ім'я обов'язкове"
    if (name.trim().length < 2) return "Ім'я має бути мінімум 2 символи"
    if (name.trim().length > 50) return "Ім'я має бути максимум 50 символів"
    if (!/^[а-яА-Яa-zA-Z\s]+$/.test(name.trim())) return "Ім'я може містити тільки літери"
    return ""
  }

  const validatePhone = (phone: string): string => {
    if (!phone) return "Номер телефону обов'язковий"
    if (!isValidPhoneNumber(phone)) return "Некоректний номер телефону"
    return ""
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameError = validateName(formData.name)
    const phoneError = validatePhone(formData.phone)

    setErrors({
      name: nameError,
      phone: phoneError,
    })

    if (nameError || phoneError) return

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormData({ name: "", phone: "" })
      alert("Форма успішно відправлена!")
    } catch {
      alert("Помилка при відправці форми. Спробуйте ще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[900px] bg-white rounded-md p-8 flex flex-col gap-10">
        <h4
          className="text-[26px] font-medium text-[#3F3F46] leading-none text-center"
          style={{ fontFamily: "Suisse Int'l, system-ui, sans-serif" }}
        >
          Форма зворотного зв&apos;язку
        </h4>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-[16px] font-medium text-[#71717A] mb-2 leading-none tracking-[-0.01em]"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              Ім&apos;я
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-[#71717A] text-[16px] leading-6 tracking-normal ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              style={{ fontFamily: "Roboto Mono, monospace" }}
              placeholder="Уведіть своє ім'я"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[16px] font-medium text-[#71717A] mb-2 leading-none tracking-[-0.01em]"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              Телефон
            </label>
            <div
              className={`flex items-center border rounded-lg px-3 py-[6px] focus-within:ring-2 focus-within:ring-blue-500 transition-colors ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            >
              <PhoneInput
                international
                defaultCountry="UA"
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value || "")}
                className="w-full text-[#71717A] text-[16px] leading-6 tracking-normal focus:outline-none"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            } text-white`}
          >
            {isSubmitting ? "Відправляємо..." : "Надіслати запит"}
          </button>
        </form>
      </div>
    </div>
  )
}
