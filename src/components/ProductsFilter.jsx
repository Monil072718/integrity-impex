import { useState, useMemo } from "react";
import clsx from "clsx";

// Import all images using Vite's glob import
const productImages = import.meta.glob('../assets/*.webp', { eager: true });

const categories = ["Sofa", "Chair", "Dining", "Lighting", "Decoration"];

const products = [
    // Sofas
    { id: 1, category: "Sofa", img: productImages['../assets/sofa1.webp'].default, name: "Modern Sofa" },
    { id: 2, category: "Sofa", img: productImages['../assets/sofa2.webp'].default, name: "Leather Sofa" },
    { id: 3, category: "Sofa", img: productImages['../assets/sofa3.webp'].default, name: "Sectional Sofa" },
    
    // Chairs
    { id: 4, category: "Chair", img: productImages['../assets/char1.webp'].default, name: "Armchair" },
    { id: 5, category: "Chair", img: productImages['../assets/char2.webp'].default, name: "Dining Chair" },
    { id: 6, category: "Chair", img: productImages['../assets/char3.webp'].default, name: "Accent Chair" },
    { id: 7, category: "Chair", img: productImages['../assets/char4.webp'].default, name: "Office Chair" },
    
    // Dining Tables
    { id: 8, category: "Dining", img: productImages['../assets/table1.webp'].default, name: "Wooden Table" },
    { id: 9, category: "Dining", img: productImages['../assets/table2.webp'].default, name: "Glass Table" },
    { id: 10, category: "Dining", img: productImages['../assets/table3.webp'].default, name: "Extendable Table" },
    { id: 11, category: "Dining", img: productImages['../assets/table4.webp'].default, name: "Round Table" },
    { id: 12, category: "Dining", img: productImages['../assets/table5.webp'].default, name: "Outdoor Table" },
    
    // Lighting
    { id: 13, category: "Lighting", img: productImages['../assets/light1.webp'].default, name: "Pendant Light" },
    { id: 14, category: "Lighting", img: productImages['../assets/light2.webp'].default, name: "Floor Lamp" },
    { id: 15, category: "Lighting", img: productImages['../assets/light3.webp'].default, name: "Table Lamp" },
    { id: 16, category: "Lighting", img: productImages['../assets/light4.webp'].default, name: "Chandelier" },
    { id: 17, category: "Lighting", img: productImages['../assets/light5.webp'].default, name: "Wall Sconce" },
    
    // Decoration
    { id: 18, category: "Decoration", img: productImages['../assets/decor1.webp'].default, name: "Vase Set" },
    { id: 19, category: "Decoration", img: productImages['../assets/decor2.webp'].default, name: "Wall Art" },
];

const ProductsFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("Sofa");

    const filteredProducts = useMemo(() => (
        products.filter(product => (
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        ))
    ), [selectedCategory]);

    return (
        <div className="px-4 py-8 sm:px-6 sm:py-10 bg-[#fefae0] min-h-screen" id="products">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8 text-[#6c584c]">
                FEATURED PRODUCTS
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={clsx(
                            "uppercase text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full transition-colors duration-200",
                            selectedCategory.toLowerCase() === category.toLowerCase()
                                ? "bg-[#6c584c] text-white shadow-md"
                                : "text-[#6c584c] hover:bg-[#d4a373]/20"
                        )}
                        aria-label={`Filter by ${category}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-2 sm:px-4">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-8 text-[#6c584c]">
                        No products found in this category
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="rounded-lg overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg bg-white"
                            >
                                <div className="relative aspect-square">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        loading="lazy"
                                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-90 transition-all duration-200"
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
                                    <h3 className="text-base sm:text-lg font-medium text-[#6c584c]">
                                        {product.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsFilter;