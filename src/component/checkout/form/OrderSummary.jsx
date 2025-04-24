import React, { useState } from 'react';

function OrderSummary({ cart, total }) {
  const [showDetails, setShowDetails] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="block lg:hidden">
      <section className="bg-white  p-4 md:p-6 w-full  mx-auto">
        {/* Mobile Summary Toggle */}
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h2 className="text-lg font-semibold">Order summary</h2>
          <span className="flex items-center space-x-1 text-sm text-blue-600">
            <span>{showDetails ? 'Hide' : 'Show'}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                showDetails ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 14 14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.75 7 9.5 2 4.75"
              ></path>
            </svg>
          </span>
        </button>

        {/* Cart Items */}
        {showDetails && (
          <div className="mb-6 space-y-4">
            {cart.map((item, index) => {
              const isProduct = item.data.type === 'product';
              const imageUrl = isProduct
                ? `http://localhost:5050/image/products/${item.data.variants?.image}`
                : `http://localhost:5050/image/productCombo/${item.data.images}`;
              const price = isProduct
                ? item.data.variants?.price * item.qty
                : item.data.price * item.qty;
              const variantLabel = isProduct ? item.data.variants?.label : 'Combo';

              return (
                <div key={index} className="grid grid-cols-4 items-center py-4">
                  <div className="flex items-center justify-center relative">
                    <div className="relative">
                      <img
                        src={imageUrl}
                        alt={item.data.name}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.jpg';
                        }}
                      />
                      <div className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {item.qty}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 px-2">
                    <p className="font-medium text-sm">{item.data.name}</p>
                    <p className="text-xs text-gray-500">{variantLabel}</p>
                  </div>

                  <div className="text-right font-semibold text-sm">
                    ₹{price.toLocaleString('en-IN')}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Cost Summary */}
        <div>
          <h3 className="text-md font-semibold mb-3">Cost summary</h3>
          <div className="text-sm divide-y divide-gray-200">
            <div className="flex justify-between py-2">
              <span>
                Subtotal · {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
              <span className="font-medium">₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-base">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderSummary;
