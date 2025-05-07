import bgImage from '../assets/bg-image-for-about-us.webp';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Optimized background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={bgImage}
          alt="About us background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          placeholder="blur" // Add if you have a blurDataURL
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Our Story
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Founded in 2015, we started as a small team with big dreams. Today, we're proud to serve 
            thousands of customers worldwide with innovative solutions that make a real difference. 
            Our mission is to simplify technology while delivering exceptional experiences.
          </p>

          <div className="flex justify-center">
            <Button 
              className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              aria-label="Learn more about our story"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}