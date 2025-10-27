import React from 'react';
import Navbar from './Navbar';
import ImageGallery from './ImageGallery';
import DetailsCTA from './DetailsCTA';
import ReviewsSummary from './ReviewsSummary';
import ReviewsSection from './ReviewsSection';
import RelatedProducts from './RelatedProducts';
import { PRODUCT, REVIEWS, RELATED_PRODUCTS } from '../data/productData';

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Low Stock Banner - Scarcity */}
      {PRODUCT.stockStatus === 'low' && (
        <div className="bg-red-500 text-white text-center py-2 text-sm font-medium sticky top-16 z-40">
          ⚠️ Only 3 left in stock - order now!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <ImageGallery images={PRODUCT.images} />
          </div>

          {/* Product Details & CTA */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{PRODUCT.name}</h1>
              <p className="text-gray-600 text-lg">{PRODUCT.description}</p>
            </div>

            <ReviewsSummary rating={PRODUCT.rating} reviewCount={PRODUCT.reviewCount} />

            <DetailsCTA
              price={PRODUCT.price}
              originalPrice={PRODUCT.originalPrice}
              colors={PRODUCT.colors}
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