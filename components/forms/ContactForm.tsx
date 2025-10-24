"use client"

import { useState } from "react"

interface CountryCode {
  code: string
  name: string
  flag: string
}

const countryCodes: CountryCode[] = [
  { code: "+380", name: "Україна", flag: "🇺🇦" },
  { code: "+1", name: "США", flag: "🇺🇸" },
  { code: "+44", name: "Великобританія", flag: "🇬🇧" },
  { code: "+49", name: "Німеччина", flag: "🇩🇪" },
  { code: "+33", name: "Франція", flag: "🇫🇷" },
  { code: "+39", name: "Італія", flag: "🇮🇹" },
  { code: "+7", name: "Росія", flag: "🇷🇺" },
  { code: "+48", name: "Польща", flag: "🇵🇱" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+380"
  })
  
  const [errors, setErrors] = useState({
    name: "",
    phone: ""
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
    if (!phone.trim()) return "Номер телефону обов'язковий"
    const phoneRegex = /^[0-9\s\-\(\)]+$/
    if (!phoneRegex.test(phone.trim())) return "Номер телефону може містити тільки цифри, пробіли, тире та дужки"
    if (phone.replace(/\D/g, "").length < 9) return "Номер телефону занадто короткий"
    if (phone.replace(/\D/g, "").length > 15) return "Номер телефону занадто довгий"
    return ""
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
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
      phone: phoneError
    })
    
    if (nameError || phoneError) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form
      setFormData({ name: "", phone: "", countryCode: "+380" })
      alert("Форма успішно відправлена!")
    } catch (error) {
      alert("Помилка при відправці форми. Спробуйте ще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl">
      <h4 className="text-[20px] font-medium text-[#3F3F46] mb-6" style={{ fontFamily: 'Suisse Intl, system-ui, sans-serif' }}>
        Форма зворотного зв'язку
      </h4>
      
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#3F3F46] mb-2">
            Ім'я *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Введіть ваше ім'я"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#3F3F46] mb-2">
            Номер телефону *
          </label>
          <div className="flex gap-2">
            {/* Country Code Select */}
            <select
              value={formData.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            
            {/* Phone Input */}
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Введіть номер телефону"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
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
      </div>
    </form>
  )
}
