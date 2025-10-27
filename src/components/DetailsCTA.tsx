import React, { useState } from "react";

interface Color {
  name: string;
  code: string;
}

interface DetailsCTAProps {
  price: number;
  originalPrice: number;
  colors: Color[];
}

const DetailsCTA: React.FC<DetailsCTAProps> = ({
  price,
  originalPrice,
  colors,
}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    setIsBuyNowModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBuyNowModalOpen(false);
    setIsPurchaseSuccessful(false);
  };

  const handleConfirmPurchase = () => {
    setIsPurchaseSuccessful(true);
    setTimeout(() => {
      setIsBuyNowModalOpen(false);
      setIsPurchaseSuccessful(false);
    }, 5000);
  };

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-xl text-gray-500 line-through">
          ${originalPrice}
        </span>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
          {discount}% OFF
        </span>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
        <div className="flex space-x-3">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === index ? "border-gray-900" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.code }}
              title={color.name}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {colors[selectedColor].name}
        </p>
      </div>

      {/* Quantity Selector */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-colors ${
            isAdded
              ? "bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isAdded ? "✓ Added to Cart!" : "Add to Cart"}
        </button>

        <button
          onClick={handleBuyNow}
          className="w-full py-4 px-6 rounded-lg border-2 border-gray-300 font-medium text-lg hover:bg-gray-50 transition-colors"
        >
          Buy Now
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>🔒</span>
          <span>Secure Checkout</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>🚚</span>
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>↩️</span>
          <span>30-Day Returns</span>
        </div>
      </div>

      {/* Buy Now Modal */}
      {isBuyNowModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                {isPurchaseSuccessful
                  ? "Purchase Confirmed"
                  : "Complete Your Purchase"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              {isPurchaseSuccessful ? (
                <div className="p-6 space-y-6 text-center">
                  {/* Success Animation */}
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-4xl text-green-600">✓</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 animate-pulse">
                      Purchase Successful!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your purchase!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {/* Product Summary */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Ergonomic Cloud Chair Pro
                      </h3>
                      <p className="text-sm text-gray-600">
                        Color: {colors[selectedColor].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {quantity}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm">
                      <span>
                        Subtotal ({quantity} item{quantity > 1 ? "s" : ""})
                      </span>
                      <span>${(price * quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>Shipping</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                      <span>Total</span>
                      <span>${(price * quantity).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Simple Checkout Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Shipping Address
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <span>🔒</span>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💳</span>
                      <span>SSL Encrypted</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            {!isPurchaseSuccessful && (
              <div className="flex space-x-3 p-6 border-t border-gray-200 bg-white flex-shrink-0">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPurchase}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Confirm Purchase
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCTA;
