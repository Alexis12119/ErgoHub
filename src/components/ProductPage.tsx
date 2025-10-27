import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ImageGallery from './ImageGallery';
import DetailsCTA from './DetailsCTA';
import ReviewsSummary from './ReviewsSummary';
import ReviewsSection from './ReviewsSection';
import RelatedProducts from './RelatedProducts';
import { PRODUCTS, REVIEWS, RELATED_PRODUCTS } from '../data/productData';


const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productId = parseInt(id || '1');
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  // Scroll to top when component mounts or product ID changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Low Stock Banner - Scarcity */}
      {product.stockStatus === 'low' && (
        <div className="bg-red-500 text-white text-center py-2 text-sm font-medium sticky top-16 z-40">
          ⚠️ Only 3 left in stock - order now!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <ImageGallery images={product.images} />
          </div>

          {/* Product Details & CTA */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <ReviewsSummary rating={product.rating} reviewCount={product.reviewCount} />

            <DetailsCTA
              price={product.price}
              originalPrice={product.originalPrice}
              colors={product.colors}
            />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ReviewsSection reviews={REVIEWS} />
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProducts products={RELATED_PRODUCTS} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;