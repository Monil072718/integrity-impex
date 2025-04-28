import { useState, useRef } from 'react'
import { Menu, User } from "lucide-react"
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Refs for each section
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with bounce effect */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex-shrink-0 flex items-center">
              <motion.button 
                className="text-black font-bold rounded-lg w-40 h-11 flex items-center text-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                onClick={() => scrollToSection(homeRef)}
              >
                Integrity Impex
              </motion.button>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.button 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </motion.button>
            
            <motion.button 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </motion.button>
            
            <motion.button 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => scrollToSection(productsRef)}
            >
              Products
            </motion.button>

            <motion.button 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </motion.button>
          </nav>

          {/* Mobile menu button with tap effect */}
          <div className="md:hidden flex items-center">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          {/* User Profile with wobble effect */}
          <div className="hidden md:block flex-shrink-0 ml-4">
            <motion.div
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide-down effect */}
      <motion.div
        className="md:hidden bg-white shadow-lg overflow-hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
          transition: { duration: 0.3 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <motion.button 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </motion.button>
          <motion.button 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </motion.button>
          <motion.button 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(productsRef)}
          >
            Products
          </motion.button>
          <motion.button 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </header>
  )
}