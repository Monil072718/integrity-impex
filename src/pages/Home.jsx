import { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import ContactHero from '../components/ContactHero'
import ProductCategories from '../components/ProductCategories'
import ServicesSection from '../components/ServicesSection'

// Lazy load below-the-fold components for better initial load performance
const AboutSection = lazy(() => import('../components/AboutSection'))
const ProductsFilter = lazy(() => import('../components/ProductsFilter'))
const BlogSection = lazy(() => import('../components/BlogSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

const LoadingFallback = () => null

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0
          const offsetPosition = section.offsetTop - headerHeight
          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  return (
    <>
      <Header />
      <ContactHero />
      <ProductCategories />
      <ServicesSection />
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
        <ProductsFilter />
        <BlogSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </>
  )
}
