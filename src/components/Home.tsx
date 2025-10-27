import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

// Hardcoded data
const featuredProducts = [
  {
    id: 1,
    name: "Ergonomic Cloud Chair Pro",
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviewCount: 1543,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&fit=crop&w=600&h=600",
    category: "Chairs"
  },
  {
    id: 2,
    name: "Standing Desk Converter",
    price: 299.99,
    rating: 4.5,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&fit=crop&w=600&h=600",
    category: "Desks"
  },
  {
    id: 3,
    name: "Wireless Ergonomic Mouse",
    price: 79.99,
    rating: 4.8,
    reviewCount: 1247,
    image: "https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?ixlib=rb-4.1.0&fit=crop&w=600&h=600",
    category: "Accessories"
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 149.99,
    rating: 4.6,
    reviewCount: 756,
    image: "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&fit=crop&w=600&h=600",
    category: "Lighting"
  }
];

const categories = [
  {
    name: "Chairs",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 13,
    href: "/shop?category=chairs"
  },
  {
    name: "Desks",
    image: "https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 9,
    href: "/shop?category=desks"
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 16,
    href: "/shop?category=accessories"
  },
  {
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    count: 7,
    href: "/shop?category=lighting"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    content: "ErgoHub transformed my home office. The chair is incredibly comfortable and has eliminated my back pain.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    content: "Finally found furniture that combines style with functionality. Highly recommend!",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&fit=crop&w=400&h=400",
    content: "The quality is outstanding and the customer service is excellent. Worth every penny.",
    rating: 5
  }
];

const benefits = [
  {
    icon: TruckIcon,
    title: "Free Shipping",
    description: "Free delivery on all orders over $200"
  },
  {
    icon: ShieldCheckIcon,
    title: "30-Day Returns",
    description: "Not satisfied? Return within 30 days"
  },
  {
    icon: UserGroupIcon,
    title: "Expert Support",
    description: "Our team is here to help you choose"
  },
  {
    icon: StarIcon,
    title: "Premium Quality",
    description: "Crafted with the finest materials"
  }
];

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.1.0&w=1200')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Elevate Your Workspace
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Discover ergonomic furniture designed for comfort, productivity, and style. Transform your work environment with premium quality products.
            </p>

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} products</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose ErgoHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get exclusive offers and the latest updates on ergonomic products
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🪑</div>
                <span className="text-xl font-bold">ErgoHub</span>
              </div>
              <p className="text-gray-400">
                Premium ergonomic furniture for the modern workspace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><a href="#" className="hover:text-white">Shop</a></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Chairs</a></li>
                <li><a href="#" className="hover:text-white">Desks</a></li>
                <li><a href="#" className="hover:text-white">Accessories</a></li>
                <li><a href="#" className="hover:text-white">Lighting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ErgoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;