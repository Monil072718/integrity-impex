"use client"

import { useState } from "react"
import bgImage from '../assets/bg-room.webp';

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    Message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div
      className="relative w-full h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center" id="home"
      style={{ 
        backgroundImage: `url(${bgImage.src})`,
        // Preload hint for the browser
        imageRendering: '-webkit-optimize-contrast'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div className="relative max-w-screen-xl px-3 z-10">
        <h1 className="text-4xl md:text-[50px] font-semibold mb-4">Welcome to Sourcing Made Simple</h1>
        <p className="leading-relaxed container mx-auto mb-10 text-base md:text-[17px]">
          We are a team of passionate people, hold product integrity at the core of our values. We know how vital it is
          to match the right product to the right project and business, so we are here to advise you every step of the
          way.
        </p>

        <form
          action="https://formsubmit.co/info@integrityimpex.com"
          method="POST"
          className="w-full max-w-5xl mx-auto"
        >
          {/* Hidden inputs for configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting us! We'll get back to you shortly."
          />

          <div className="flex flex-wrap justify-center gap-3 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={formData.name}
              className="flex-1 min-w-[200px] px-4 py-2 rounded bg-transparent border-[1px] text-[#918C8C] placeholder-[#918C8C] focus:outline-none focus:ring-1 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={formData.email}
              className="flex-1 min-w-[200px] px-4 py-2 rounded bg-transparent border-[1px] text-[#918C8C] placeholder-[#918C8C] focus:outline-none focus:ring-1 focus:ring-white"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              required
              onChange={handleChange}
              value={formData.mobile}
              className="flex-1 min-w-[200px] px-4 py-2 rounded bg-transparent border-[1px] text-[#918C8C] placeholder-[#918C8C] focus:outline-none focus:ring-1 focus:ring-white"
            />
            <input
              type="text"
              name="Message"
              placeholder="Message"
              required
              onChange={handleChange}
              value={formData.Message}
              className="flex-1 min-w-[200px] px-4 py-2 rounded bg-transparent border-[1px] text-[#918C8C] placeholder-[#918C8C] focus:outline-none focus:ring-1 focus:ring-white"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-[#F6F3E9] text-[#918C8C] font-semibold rounded hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-white"
            >
              Call Back Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}