import bgImage from '../assets/bg-image-for-about-us.jpg'
import { Button } from './ui/button'

export default function AboutSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Fixed background image with overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
            Founded in 2015, we started as a small team with big dreams. Today, we're proud to serve 
            thousands of customers worldwide with innovative solutions that make a real difference. 
            Our mission is to simplify technology while delivering exceptional experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 text-lg font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
              Learn More
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg font-medium text-white border-white hover:bg-white/10">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
