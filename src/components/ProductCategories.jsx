import { useState } from "react";
import { motion } from "framer-motion";
import ligh from "../assets/ligh.webp";
import fur from "../assets/fur.webp";
import dec from "../assets/dec.webp";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const productCategories = [
    {
      id: 1,
      title: "Furniture",
      image: fur,
      description: 'People ignore design that ignores people. We help you find Furniture which is Elegant, Exclusive and Extra Ordinary',
    },
    {
      id: 2,
      title: "Lighting",
      image: ligh,
      description: 'Let light shine out of darkness. We help you in finding light which gives lightning look to your property.',
    },
    {
      id: 3,
      title: "Decorative",
      image: dec,
      description: 'Where utility ends and decoration begins is perfection. We get best of the art for you.',
    },
  ];

  const categoriesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        when: "beforeChildren"
      },
    },
  };

  const categoriesItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 12,
        mass: 0.5
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl sm:text-4xl mb-4 font-semibold text-[#8b4513]"
        >
          Product Categories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 leading-relaxed text-gray-700 text-base sm:text-lg"
        >
          Discover furniture that embodies elegance and exclusivity, transforming your space into an extraordinary haven.
        </motion.p>
        
        <motion.div
          variants={categoriesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoriesItemVariants}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`flex flex-col items-center text-center cursor-pointer group relative transition-all duration-300 ease-out ${
                hoveredCard === category.id ? "-translate-y-1" : ""
              }`}
            >
              <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden relative mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  width={400}
                  height={400}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                    hoveredCard === category.id ? "scale-103" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h2 className="text-2xl mb-2 font-semibold text-gray-800 group-hover:text-[#8b4513] transition-colors duration-300">
                {category.title}
              </h2>
              <p className="text-gray-600 leading-normal max-w-xs group-hover:text-gray-700 transition-colors duration-300">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}