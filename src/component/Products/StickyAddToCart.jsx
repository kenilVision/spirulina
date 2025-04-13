import React, { useEffect, useState } from "react";

const StickyAddToCart = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, value);
    setQuantity(newQuantity);
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setShowDropdown(false);
  };

  const calculatePrice = () => {
    const variant = product.variants.find(v => v.id === selectedVariant.id);
    return variant ? variant.discounted_price : product.variants[0].discounted_price;
  };

  const calculateOriginalPrice = () => {
    const variant = product.variants.find(v => v.id === selectedVariant.id);
    return variant ? variant.original_price : product.variants[0].original_price;
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Product Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border border-gray-100">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#018d43]">
                ₹{calculatePrice()}
              </span>
              {calculateOriginalPrice() > calculatePrice() && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{calculateOriginalPrice()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Variant and Quantity Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Variant Selector - Mobile */}
          <div className="md:hidden relative w-full">
            <select
              value={selectedVariant.id}
              onChange={(e) => {
                const selected = product.variants.find(v => v.id === e.target.value);
                if (selected) handleVariantSelect(selected);
              }}
              className="w-full h-10 pl-3 pr-8 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#018d43] focus:border-[#018d43] bg-white"
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.type === 'quantity' 
                    ? `${variant.quantity} Tablets` 
                    : variant.type === 'weight' 
                      ? variant.weight 
                      : variant.type}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Variant Selector - Desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between h-10 w-48 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#018d43]"
            >
              <span className="truncate">
                {selectedVariant.type === 'quantity' 
                  ? `${selectedVariant.quantity} Tablets` 
                  : selectedVariant.type === 'weight' 
                    ? selectedVariant.weight 
                    : selectedVariant.type}
              </span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute z-10 mt-1 w-full bottom-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(variant)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      selectedVariant.id === variant.id ? 'bg-[#018d43]/10 text-[#018d43]' : ''
                    }`}
                  >
                    {variant.type === 'quantity' 
                      ? `${variant.quantity} Tablets` 
                      : variant.type === 'weight' 
                        ? variant.weight 
                        : variant.weight}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-300 rounded-md h-10">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="w-10 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Decrease quantity"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              className="w-12 h-full text-center border-x border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#018d43]"
              aria-label="Quantity"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="w-10 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Increase quantity"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="h-10 px-6 bg-[#018d43] text-white rounded-md hover:bg-[#016d32] transition-colors focus:outline-none focus:ring-2 focus:ring-[#018d43] focus:ring-offset-2 flex-shrink-0 w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;