import { useState, useRef } from 'react';
import { Menu } from "lucide-react";
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Shared motion props for buttons
  const desktopButtonProps = {
    whileHover: { y: -2, scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    className: "text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
  };

  const mobileButtonProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="text-black font-bold rounded-lg w-40 h-11 flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
              onClick={() => scrollToSection(homeRef)}
            >
              Integrity Impex
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection(homeRef)}>
              Home
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection(aboutRef)}>
              About
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection(productsRef)}>
              Products
            </motion.button>
            <motion.button {...desktopButtonProps} onClick={() => scrollToSection(contactRef)}>
              Contact
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection(homeRef)}>
            Home
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection(aboutRef)}>
            About
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection(productsRef)}>
            Products
          </motion.button>
          <motion.button {...mobileButtonProps} onClick={() => scrollToSection(contactRef)}>
            Contact
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}