import './App.css'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import ContactHero from './components/ContactHero'
import ProductCategories from './components/ProductCategories'
import ServicesSection from './components/ServicesSection'

// Lazy load below-the-fold components for better initial load performance
const AboutSection = lazy(() => import('./components/AboutSection'))
const ProductsFilter = lazy(() => import('./components/ProductsFilter'))
const TestimonialSection = lazy(() => import('./components/TestimonialSection'))
const BlogSection = lazy(() => import('./components/BlogSection'))
const Footer = lazy(() => import('./components/Footer'))

// Minimal loading fallback
const LoadingFallback = () => null

function App() {
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
        <TestimonialSection />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
