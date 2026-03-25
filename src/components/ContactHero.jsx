"use client"

import bgImage from '../assets/bg-room.webp';

export default function ContactHero() {
  return (
    <div
      className="relative w-full h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center" id="home"
      style={{ 
        backgroundImage: `url(${bgImage.src})`,
        imageRendering: '-webkit-optimize-contrast'
      }}
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div className="relative max-w-7xl px-3 z-10">
        <h1 className="text-4xl md:text-[50px] font-semibold mb-4">Welcome to Sourcing Made Simple</h1>
        <p className="leading-relaxed container mx-auto mb-10 text-base md:text-[17px]">
          We are a team of passionate people, hold product integrity at the core of our values. We know how vital it is
          to match the right product to the right project and business, so we are here to advise you every step of the
          way.
        </p>
      </div>
    </div>
  )
}