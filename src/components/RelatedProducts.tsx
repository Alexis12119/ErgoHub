import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>

      <div className="flex items-center space-x-4">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`flex-shrink-0 p-4 rounded-full shadow-xl border-2 transition-all text-xl ${
            canScrollLeft
              ? 'bg-white bg-opacity-90 hover:bg-opacity-100 border-gray-300 cursor-pointer'
              : 'bg-gray-100 border-gray-300 cursor-not-allowed text-gray-400'
          }`}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden pb-4 flex-1"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        {i < Math.floor(product.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`flex-shrink-0 p-4 rounded-full shadow-xl border-2 transition-all text-xl ${
            canScrollRight
              ? 'bg-white bg-opacity-90 hover:bg-opacity-100 border-gray-300 cursor-pointer'
              : 'bg-gray-100 border-gray-300 cursor-not-allowed text-gray-400'
          }`}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;