import { useState } from "react";
import { motion } from "framer-motion";

// Category images
const light3 = "../assets/light3.jpeg";
const imgLighting = "/placeholder.svg?height=400&width=600&text=Lighting";
const imgDecorative = "/placeholder.svg?height=400&width=600&text=Decorative";

export default function Home() {
  // Categories state
  const [hoveredCard, setHoveredCard] = useState(null);

  const productCategories = [
    {
      id: 1,
      // title: "Furniture",
      image: light3,
      description: 'People ignore design that ignores people." We help you find Furniture which is Elegant, Exclusive and Extra Ordinary',
    },
    {
      id: 2,
      // title: "Lighting",
      image: imgLighting,
      description: 'Let light shine out of darkness." We help you in finding light which gives lightning look to your property.',
    },
    {
      id: 3,
      // title: "Decorative",
      image: imgDecorative,
      description: 'Where utility ends and decoration begins is perfection." We get best of the art for you.',
    },
  ];

  // Animation variants
  const categoriesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoriesItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans">
      {/* Product Categories Section */}
      <div className="w-full mx-auto px-5 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[2.5rem] mb-5 font-semibold text-[#8b4513]"
        >
          Product Categories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-[900px] mx-auto mb-[50px] leading-relaxed text-[#333] text-base"
        >
          Discover furniture that embodies elegance and exclusivity, transforming your space into an extraordinary haven.
          Illuminate your surroundings with our unique lighting selection, casting a mesmerizing radiance that transcends
          the ordinary.
        </motion.p>
        <div className="container mx-auto">
          <motion.div
            variants={categoriesContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-between gap-7 flex-wrap"
          >
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={categoriesItemVariants}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex flex-col items-center text-center cursor-pointer relative transition-all duration-400 ease-in-out min-w-[300px] flex-1 ${
                  hoveredCard === category.id ? "-translate-y-2" : ""
                }`}
              >
                <div
                  className={`w-full h-[350px] rounded-[40px] overflow-hidden relative mb-5 shadow-md transition-all duration-500 ease-in-out ${
                    hoveredCard === category.id
                      ? "shadow-2xl after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[40px] after:shadow-[0_0_30px_rgba(139,69,19,0.3)] after:animate-pulse"
                      : ""
                  }`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                      hoveredCard === category.id ? "scale-105" : ""
                    }`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 ${
                      hoveredCard === category.id ? "bg-black/10" : "bg-transparent"
                    }`}
                  ></div>
                </div>
                <h2
                  className={`text-[2rem] mb-2 transition-colors duration-300 font-semibold ${
                    hoveredCard === category.id ? "text-[#8b4513]" : "text-[#333]"
                  }`}
                >
                  {category.title}
                </h2>
                <p
                  className={`text-[#555] leading-[1.5] max-w-[300px] transition-colors duration-300 ${
                    hoveredCard === category.id ? "text-[#333]" : ""
                  }`}
                >
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}