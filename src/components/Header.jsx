"use client"

import { useState, useRef } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import logo from "../assets/Integrity Impex.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll handler with offset for fixed header
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0
      const offsetPosition = section.offsetTop - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  const desktopButtonProps = {
    whileHover: { y: -2, scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    className: "text-gray-100 hover:text-gray-300 px-3 py-2 text-sm font-medium",
  }

  const mobileButtonProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-gray-300 hover:bg-gray-700 w-full text-left",
  }

  return (
    <header className="bg-[#252e32] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="font-bold rounded-lg w-40 h-11 flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
              onClick={() => scrollToSection('home')}
            >
              <img
                src={logo}
                alt="Integrity Impex Logo"
                className="object-contain h-full w-full"
                loading="eager" // Important for logo
              />
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection('home')}>
              Home
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection('service')}>
              Services
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection('products')}>
              Products
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection('blog')}>
              Blog
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection('contact')}>
              Contact
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-gray-800 shadow-lg overflow-hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
          transition: { duration: 0.3 },
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection('home')}>
            Home
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection('about')}>
            About
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection('products')}>
            Products
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection('contact')}>
            Contact
          </motion.button>
        </div>
      </motion.div>
    </header>
  )
}