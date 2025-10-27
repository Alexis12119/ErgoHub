import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Categories: React.FC = () => {
const categories = [
  {
    name: "Chairs",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 13,
    description: "Ergonomic office chairs for all-day comfort",
    href: "/shop?category=chairs"
  },
  {
    name: "Desks",
    image: "https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 9,
    description: "Standing desks and workstation solutions",
    href: "/shop?category=desks"
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 16,
    description: "Keyboards, mice, and desk accessories",
    href: "/shop?category=accessories"
  },
  {
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 7,
    description: "Desk lamps and lighting solutions",
    href: "/shop?category=lighting"
  }
];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of ergonomic furniture organized by category.
            Find the perfect pieces for your workspace.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {category.count} products
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>Browse {category.name.toLowerCase()}</span>
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Browse our complete collection of ergonomic furniture and accessories.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Products
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;