import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import { Suspense, lazy, useEffect } from 'react';

const Footer = lazy(() => import('../components/Footer'))

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fefae0] flex flex-col">
        <Header />
        <div className="grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#6c584c] mb-4">Product Not Found</h2>
            <Link to="/" className="text-[#d4a373] hover:underline font-medium">Return to Home</Link>
          </div>
        </div>
        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefae0] flex flex-col">
      <Header />
      <div className="grow container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/" className="text-[#6c584c] hover:text-[#d4a373] flex items-center gap-2 transition-colors font-medium">
            <span>&larr;</span> Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row md:h-[400px]">
          <div className="w-full md:w-5/12 h-64 md:h-full bg-gray-100">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center h-full">
            <div className="uppercase tracking-wide text-xs text-[#d4a373] font-semibold mb-2">
              {product.category}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#6c584c] mb-3">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
              {product.description || `Discover the perfect ${product.name} for your home or office. Crafted with premium materials for lasting comfort and style.`}
            </p>
            
            <Link 
              to="/" 
              state={{ scrollTo: 'contact' }}
              className="bg-[#6c584c] hover:bg-[#5b4a40] text-white font-medium py-2.5 px-6 rounded-md shadow-sm transition-colors w-full sm:w-auto self-start text-center text-sm"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  );
}
