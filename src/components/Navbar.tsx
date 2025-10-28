import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  CheckCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

interface PurchasedItem extends CartItem {
  purchaseDate: string;
  orderId: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutSuccessModalOpen, setIsCheckoutSuccessModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"cart" | "purchased">("cart");
  const [searchQuery, setSearchQuery] = useState("");
  const [username] = useState("John Doe"); // Hardcoded username

  // Cart items state (mutable)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "3",
      name: "Wireless Ergonomic Mouse",
      price: 79.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?ixlib=rb-4.1.0&w=200",
      color: "Black",
    },
    {
      id: "4",
      name: "LED Desk Lamp",
      price: 149.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&w=200",
      color: "White",
    },
    {
      id: "5",
      name: "Ergonomic Keyboard",
      price: 99.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.1.0&w=200",
      color: "Gray",
    },
    {
      id: "6",
      name: "Adjustable Monitor Stand",
      price: 129.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.1.0&w=200",
      color: "Black",
    },
    {
      id: "7",
      name: "Ergonomic Office Chair",
      price: 399.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&w=200",
      color: "Blue",
    },
    {
      id: "8",
      name: "Standing Desk",
      price: 499.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&w=200",
      color: "Brown",
    },
    {
      id: "9",
      name: "Desk Organizer",
      price: 29.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1616627458425-1c9c1f3b1c9c?ixlib=rb-4.1.0&w=200",
      color: "White",
    },
    {
      id: "10",
      name: "Anti-Fatigue Mat",
      price: 59.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1616627458425-1c9c1f3b1c9c?ixlib=rb-4.1.0&w=200",
      color: "Black",
    },
    {
      id: "1",
      name: "Ergonomic Cloud Chair Pro",
      price: 499.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?ixlib=rb-4.1.0&w=200",
      color: "Space Gray",
    },
    {
      id: "2",
      name: "Standing Desk Converter",
      price: 299.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&w=200",
      color: "Black",
    },
  ]);

  // Prevent body scrolling when modals are open
  useEffect(() => {
    if (isCartModalOpen || isCheckoutSuccessModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartModalOpen, isCheckoutSuccessModalOpen]);

  // Quantity control functions
  const increaseQuantity = (itemId: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (itemId: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    setIsCheckoutSuccessModalOpen(true);
    setIsCartModalOpen(false);
  };

  const purchasedItems: PurchasedItem[] = [
    {
      id: "3",
      name: "Wireless Ergonomic Mouse",
      price: 79.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?ixlib=rb-4.1.0&w=200",
      purchaseDate: "2024-01-15",
      orderId: "ORD-001",
    },
    {
      id: "4",
      name: "LED Desk Lamp",
      price: 149.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&w=200",
      purchaseDate: "2024-01-10",
      orderId: "ORD-002",
    },
  ];

  const cartCount = cartItems.length;

  const navLinks = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Shop", icon: ShoppingCartIcon, href: "/shop" },
    { name: "Categories", icon: TagIcon, href: "/categories" },
    { name: "About", icon: InformationCircleIcon, href: "/about" },
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
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar - Only enabled on product pages */}
          {location.pathname.startsWith('/product/') && (
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
          )}

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
              <button
                onClick={() => setIsCartModalOpen(true)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors relative"
              >
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
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
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
                <button
                  onClick={() => setIsCartModalOpen(true)}
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-base font-medium transition-colors relative flex items-center space-x-2"
                >
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

      {/* Shopping Bag Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[650px] shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 h-20 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">Shopping Bag</h2>
              <button
                onClick={() => setIsCartModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-4 border-b border-gray-200 h-16 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 h-14 flex-shrink-0">
              <button
                onClick={() => setActiveTab("cart")}
                className={`flex-1 py-3 px-6 text-center font-medium transition-colors flex items-center justify-center space-x-2 ${
                  activeTab === "cart"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>
                  Cart (
                  {
                    cartItems.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                    ).length
                  }
                  )
                </span>
              </button>
              <button
                onClick={() => setActiveTab("purchased")}
                className={`flex-1 py-3 px-6 text-center font-medium transition-colors flex items-center justify-center space-x-2 ${
                  activeTab === "purchased"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <CheckCircleIcon className="h-5 w-5" />
                <span>
                  Purchased (
                  {
                    purchasedItems.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                    ).length
                  }
                  )
                </span>
              </button>
            </div>

            {/* Modal Content */}
            <div
              className="overflow-y-auto"
              style={{
                height:
                  activeTab === "cart" &&
                  cartItems.filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
                  ).length > 0
                    ? "322px"
                    : "450px",
              }}
            >
              <div className="p-6">
                {activeTab === "cart" ? (
                  <div className="space-y-4">
                    {cartItems.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                    ).length > 0 ? (
                      cartItems
                        .filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                {item.name}
                              </h3>
                              {item.color && (
                                <p className="text-sm text-gray-600">
                                  Color: {item.color}
                                </p>
                              )}
                              <div className="flex items-center space-x-2 mt-2">
                                <button
                                  onClick={() => decreaseQuantity(item.id)}
                                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={item.quantity <= 1}
                                >
                                  <MinusIcon className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => increaseQuantity(item.id)}
                                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                  <PlusIcon className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-800 text-sm mt-1"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8">
                        <ShoppingCartIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">
                          {searchQuery
                            ? "No items match your search."
                            : "Your cart is empty."}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {purchasedItems.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                    ).length > 0 ? (
                      purchasedItems
                        .filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Order: {item.orderId}
                              </p>
                              <p className="text-sm text-gray-600">
                                Purchased: {item.purchaseDate}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">
                                ${item.price.toFixed(2)}
                              </p>
                              <p className="text-sm text-gray-600">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircleIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">
                          {searchQuery
                            ? "No purchases match your search."
                            : "No purchases yet."}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            {activeTab === "cart" &&
              cartItems.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()),
              ).length > 0 && (
                <div className="border-t border-gray-200 p-6 bg-gray-50 h-32 flex-shrink-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                      Total:
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      $
                      {cartItems
                        .filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0,
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
          </div>
        </div>
      )}

      {/* Checkout Success Modal */}
      {isCheckoutSuccessModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full shadow-2xl">
            <div className="p-8 text-center">
              {/* Success Animation */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>

              {/* Success Message */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Order Placed Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order has been confirmed.
              </p>

              {/* Order Details */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <p className="text-sm text-gray-600">
                  Order Total: <span className="font-medium">
                    ${cartItems
                      .filter((item) =>
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Items: <span className="font-medium">{cartItems.length}</span>
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setIsCheckoutSuccessModalOpen(false)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
