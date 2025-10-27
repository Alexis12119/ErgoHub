import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import { PRODUCTS } from '../data/productData';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'rating'>('name');
  const [filtersExpanded, setFiltersExpanded] = useState(true);

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)]);
    }
  }, [searchParams]);

  const categories = ['Chairs', 'Desks', 'Accessories', 'Lighting'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = Object.values(PRODUCTS).filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategories.length === 0 ||
                             selectedCategories.some(cat =>
                               product.name.toLowerCase().includes(cat.toLowerCase().slice(0, -1)) // Remove 's' from plural
                             );

      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      // Rating filter
      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategories, priceRange, minRating, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange([0, 600]);
    setMinRating(0);
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop All Products</h1>
          <p className="text-gray-600">Discover our complete collection of ergonomic furniture</p>
        </div>

        {/* Search and Filters - Sticky */}
        <div className="sticky top-16 z-30 bg-white border-b border-gray-200 py-4 mb-8 -mx-4 px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>


          </div>

          {/* Filters Panel */}
          <div className="bg-gray-50 rounded-lg mt-3 overflow-hidden">
            {/* Filter Toggle Header */}
            <button
              onClick={() => setFiltersExpanded(!filtersExpanded)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-900">Filters</span>
              {filtersExpanded ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {/* Filter Content */}
            <div className={`px-4 pb-4 ${filtersExpanded ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Categories</h3>
                <div className="space-y-1">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      min="0"
                    />
                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Minimum Rating</h3>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={0}>All Ratings</option>
                  <option value={4}>4+ Stars</option>
                  <option value={3}>3+ Stars</option>
                  <option value={2}>2+ Stars</option>
                  <option value={1}>1+ Stars</option>
                </select>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters to see all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;