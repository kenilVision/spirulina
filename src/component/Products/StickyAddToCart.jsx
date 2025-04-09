import React, { useEffect, useState } from "react";

const StickyAddToCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("120");
  const [showDropdown, setShowDropdown] = useState(false);

  const product = {
    title: "Natural Spirulina Tablet",
    price: 424,
    compareAtPrice: 499,
    variants: ["60", "120", "180"], // example variants
    image:
      "//spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg?v=1735211315&width=120",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 1500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="fixed bottom-0 left-0 right-0 mb-[48px] md:mb-0 opacity-100 pointer-events-auto z-50 bg-white shadow-md flex flex-col md:flex-row items-center justify-center px-4 py-3">
      {/* Product Info */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <div className="w-[65px] h-[65px] flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div>
          <div className="font-semibold">{product.title}</div>
          <div className="text-sm">
            <del className="text-gray-500 mr-2">₹{product.compareAtPrice}</del>
            <ins className="text-green-600 no-underline">₹{product.price}</ins>
          </div>
        </div>
      </div>

      {/* Variant Dropdown */}
      <div className="relative hidden md:block mt-2 md:mt-0 md:ml-4">
        <button
          onClick={toggleDropdown}
          className="flex items-center h-[40px] w-[190px] gap-1 border px-3 py-1 rounded-full justify-between"
        >
          <span>{selectedVariant} Tablets</span>
          <svg
            viewBox="0 0 19 12"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1l8.5 8.5L17 1" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {showDropdown && (
          <div className="absolute top-[110%] left-0 bg-white shadow-md rounded-md border mt-1 z-10 w-full">
            {product.variants.map((variant) => (
              <div
                key={variant}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedVariant(variant);
                  setShowDropdown(false);
                }}
              >
                {variant} Tablets
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center gap-3 mt-2 md:mt-0 md:ml-4">
        <div className="flex items-center text-[18px] justify-between border h-[40px] w-[160px] rounded-md overflow-hidden">
          <button
            className="ps-[15px] hover:cursor-pointer"
            onClick={decreaseQty}
          >
            <svg viewBox="0 0 10 2" className="w-3 h-3" fill="currentColor">
              <path d="M10 0v2H0V0z" />
            </svg>
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            className="w-12 h-9 text-center no-spinner outline-none"
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              setQuantity(isNaN(val) || val < 1 ? 1 : val);
            }}
          />
          <button
            className="pe-[15px] hover:cursor-pointer"
            onClick={increaseQty}
          >
            <svg viewBox="0 0 10 10" className="w-3 h-3" fill="currentColor">
              <path d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z" />
            </svg>
          </button>
        </div>

        <button className="bg-[#018d43] text-white h-[40px] w-[160px] hover:cursor-pointer px-4 py-2 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default StickyAddToCart;
