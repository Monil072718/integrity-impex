"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import bgImage from '../assets/bg-room.jpg';

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.mobile || !formData.location) {
      alert("Please fill out all fields.")
      return
    }

    console.log("Form Submitted Successfully ✅", formData)

    setFormData({
      name: "",
      email: "",
      mobile: "",
      location: "",
    })
  }

  return (
    <div
    className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-screen-xl px-3 z-10">
        <h1 className="text-[50px] font-semibold mb-4">Welcome to Sourcing Made Simple</h1>
        <p className="leading-relaxed container mx-auto mb-10 text-[17px]">
          We are a team of passionate people, hold product integrity at the core of our values. We know how vital it is
          to match the right product to the right project and business, so we are here to advise you every step of the
          way.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:flex-row">
            {["name", "email", "mobile", "location"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                required
                className="flex-1 min-w-[200px] px-4 py-2 rounded bg-transparent border-[1px] text-[#918C8C] placeholder-[#918C8C]"
              />
            ))}

            <button
              type="submit"
              className="px-6 py-2 bg-[#F6F3E9] text-[#918C8C] font-semibold rounded hover:bg-gray-200 transition duration-300"
            >
              Call Back Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
