import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ShoppingCartIcon,
  TagIcon,
  InformationCircleIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2); // Hardcoded for demo
  const [username] = useState("John Doe"); // Hardcoded username

  const navLinks = [
    { name: "Home", icon: HomeIcon, href: "#" },
    { name: "Shop", icon: ShoppingCartIcon, href: "#" },
    { name: "Categories", icon: TagIcon, href: "#" },
    { name: "About", icon: InformationCircleIcon, href: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <a
              href="#"
              className="flex items-center space-x-2 text-2xl font-bold text-gray-900"
            >
              <CubeIcon className="h-8 w-8" />
              <span>ErgoHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Account */}
            <div className="relative flex items-center space-x-2">
              <div className="bg-gray-100 rounded-full p-2">
                <UserIcon className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">{username}</span>
            </div>

            {/* Cart */}
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors relative">
                <ShoppingBagIcon className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="px-2 pb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile User Actions */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-between px-3">
                <div className="text-gray-700 py-2 text-base font-medium flex items-center space-x-2">
                  <div className="bg-gray-100 rounded-full p-2">
                    <UserIcon className="h-4 w-4 text-gray-600" />
                  </div>
                  <span>{username}</span>
                </div>
                <button className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-base font-medium transition-colors relative flex items-center space-x-2">
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

