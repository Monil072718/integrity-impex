import { useState } from 'react'
import { Menu, User } from "lucide-react"
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm  top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with bounce effect */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex-shrink-0 flex items-center">
              <motion.div 
                className="bg-blue-600 text-white font-bold rounded-lg w-24 h-11 flex items-center text-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                Integrity Impex
              </motion.div>
              <motion.span 
                className="ml-3 text-xl font-semibold text-gray-900 hidden sm:block"
                whileHover={{ 
                  x: [0, 2, -2, 2, 0],
                  transition: { duration: 0.5 }
                }}
              >
                AppCo
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a 
              href="#" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Home
            </motion.a>
            
            <motion.a 
              href="#" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              About
            </motion.a>
            
            {/* Dropdown with enhanced effects */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.button 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", damping: 10 }
                }}
              >
                Products
                <motion.span
                  className="ml-1"
                  animate={{ 
                    rotate: isMenuOpen ? 180 : 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L1 4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L6 6.6 9.6 3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6 9z" fill="currentColor"/>
                  </svg>
                </motion.span>
              </motion.button>
              
              {/* Dropdown Menu with spring effect */}
              <motion.div 
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg origin-top"
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : -10,
                  scaleY: isMenuOpen ? 1 : 0.9,
                  display: isMenuOpen ? 'block' : 'none',
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    duration: 0.2
                  }
                }}
              >
                <div className="py-1">
                  <motion.a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                  >
                    Product 1
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                  >
                    Product 2
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                  >
                    Product 3
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    View All
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.a 
              href="#" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile menu button with tap effect */}
          <div className="md:hidden flex items-center">
            <motion.div
              whileTap={{ scale: 0.9 }}
            >
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
          <motion.a 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            About
          </motion.a>
          <div className="relative">
            <motion.button 
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 flex justify-between items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Products
              <svg className="ml-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L1 4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L6 6.6 9.6 3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6 9z" fill="currentColor"/>
              </svg>
            </motion.button>
            <div className="pl-4">
              <motion.a 
                href="#" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                Product 1
              </motion.a>
              <motion.a 
                href="#" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                Product 2
              </motion.a>
              <motion.a 
                href="#" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                Product 3
              </motion.a>
            </div>
          </div>
          <motion.a 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    </header>
  )
}