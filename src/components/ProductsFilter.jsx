import { useState } from "react";
import clsx from "clsx";

const categories = ["Chair", "Sofa", "Table", "Lighting", "Decoration"];

const products = [
    { id: 1, category: "Chair", img: "url1" },
    { id: 2, category: "Chair", img: "url2" },
    { id: 3, category: "Chair", img: "url3" },
    { id: 4, category: "Chair", img: "url4" },
    { id: 5, category: "Chair", img: "url5" },
    { id: 6, category: "Chair", img: "url6" },
    { id: 7, category: "Sofa", img: "url7" },
    { id: 8, category: "Table", img: "url8" },
    
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
