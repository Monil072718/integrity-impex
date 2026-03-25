import { useState, useMemo } from "react";
import clsx from "clsx";

import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';

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
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className="block rounded-lg overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg bg-white"
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
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsFilter;