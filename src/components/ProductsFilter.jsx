import { useState } from "react";
import clsx from "clsx";

// Chairs
import char1 from '../assets/char1.jpg';
import char2 from '../assets/char2.jpg';
import char3 from '../assets/char3.jpg';
import char4 from '../assets/char4.jpg';

// Sofas
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';

// Tables
import table1 from '../assets/table1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import table4 from '../assets/table4.jpg';
import table5 from '../assets/table5.jpg';

// Light
import light1 from '../assets/light1.jpeg';
import light2 from '../assets/light2.jpeg';
import light3 from '../assets/light3.jpeg';
import light4 from '../assets/light4.jpeg';
import light5 from '../assets/light5.jpeg';

// Decoration
import decor1 from '../assets/decor1.jpeg';
import decor2 from '../assets/decor2.jpeg';

const categories = ["Sofa", "Chair", "Dining", "Lighting", "Decoration"];

const products = [
    { id: 1, category: "Sofa", img: sofa1, name: "Modern Sofa" },
    { id: 2, category: "Sofa", img: sofa2, name: "Leather Sofa" },
    { id: 3, category: "Sofa", img: sofa3, name: "Sectional Sofa" },
    { id: 4, category: "Chair", img: char1, name: "Armchair" },
    { id: 5, category: "Chair", img: char2, name: "Dining Chair" },
    { id: 6, category: "Chair", img: char3, name: "Accent Chair" },
    { id: 7, category: "Chair", img: char4, name: "Office Chair" },
    { id: 8, category: "Dining", img: table1, name: "Wooden Table" },
    { id: 9, category: "Dining", img: table2, name: "Glass Table" },
    { id: 10, category: "Dining", img: table3, name: "Extendable Table" },
    { id: 11, category: "Dining", img: table4, name: "Round Table" },
    { id: 12, category: "Dining", img: table5, name: "Outdoor Table" },
    { id: 13, category: "Lighting", img: light1, name: "Pendant Light" },
    { id: 14, category: "Lighting", img: light2, name: "Floor Lamp" },
    { id: 15, category: "Lighting", img: light3, name: "Table Lamp" },
    { id: 16, category: "Lighting", img: light4, name: "Chandelier" },
    { id: 17, category: "Lighting", img: light5, name: "Wall Sconce" },
    { id: 18, category: "Decoration", img: decor1, name: "Vase Set" },
    { id: 19, category: "Decoration", img: decor2, name: "Wall Art" },
];

const ProductsFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("Sofa");

    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
        <div className="px-6 py-10 bg-[#fefae0] min-h-screen">
            <h2 className="text-4xl font-semibold text-center mb-8 text-[#6c584c]">
                FEATURED PRODUCTS
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={clsx(
                            "uppercase text-sm font-medium px-4 py-1 rounded-full transition duration-300",
                            selectedCategory.toLowerCase() === category.toLowerCase()
                                ? "bg-[#6c584c] text-white shadow-md"
                                : "text-[#6c584c] hover:bg-[#d4a373]/20"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="container mx-auto">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-10 text-[#6c584c]">No products found in this category</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl bg-white"
                            >
                                <div className="relative pt-[100%]"> {/* Square container */}
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-[#6c584c]">{product.name}</h3>
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