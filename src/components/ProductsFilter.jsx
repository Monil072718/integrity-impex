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

// decoration
import decor1 from '../assets/decor1.jpeg';
import decor2 from '../assets/decor2.jpeg';

const categories = ["Sofa", "chair", "Dinning", "Lighting", "Decoration"];

const products = [
    { id: 1, category: "Sofa", img: char1 },
    { id: 2, category: "Sofa", img: char2 },
    { id: 3, category: "Sofa", img: char3 },
    { id: 4, category: "Sofa", img: char4 },
    { id: 5, category: "Sofa", img: char1 },
    { id: 6, category: "Sofa", img: char2 },
    { id: 7, category: "chair", img: sofa1 },
    { id: 8, category: "chair", img: sofa2 },
    { id: 9, category: "chair", img: sofa3 },
    { id: 11, category: "Dinning", img: table1 },
    { id: 12, category: "Dinning", img: table2 },
    { id: 13, category: "Dinning", img: table3 },
    { id: 14, category: "Dinning", img: table4 },
    { id: 15, category: "Dinning", img: table5 },
    { id: 16, category: "Lighting", img: light1 },
    { id: 17, category: "Lighting", img: light2 },
    { id: 18, category: "Lighting", img: light3 },
    { id: 19, category: "Lighting", img: light4 },
    { id: 20, category: "Lighting", img: light5 },
    { id: 20, category: "Decoration", img: decor1 },
    { id: 21, category: "Decoration", img: decor2 },

];


const ProductsFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("Chair");

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <div className="px-6 py-10 bg-[#fefae0] min-h-screen">
            <h2 className="text-4xl font-semibold text-center mb-8 text-[#6c584c]">
                FEATURED PRODUCTS
            </h2>

            {/* Category Filters */}
            <div className="flex justify-center space-x-6 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={clsx(
                            "uppercase text-sm font-medium px-4 py-1 rounded-full transition duration-300",
                            selectedCategory === category
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-xl overflow-hidden group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
                        >
                            <img
                                src={product.img}
                                alt="Product"
                                className="w-full h-[280px] object-cover group-hover:brightness-90 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;
