import React from 'react';
import { NavLink } from 'react-router-dom';
import { Products } from '../../Constant/Product';

function Orders() {
  const order = [
    { productid: "product_001" },
    { productid: "product_003" }
  ];
  
  const orderedProducts = []

  // const orderedProducts = order
  //   .map(({ productid }) => Products.find((item) => item.id === productid))
  //   .filter(Boolean); // Skip any unmatched products

  return (
    <div className="w-full p-4">
      {orderedProducts.length > 0 ? (
        <div className="space-y-4">
          {orderedProducts.map((product, index) => (
            <NavLink
              to={`/product/${product.slug}`}
              key={index}
              className="flex flex-row items-start gap-4 border border-[#b4b4b4] rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 text-green-600 font-bold">
                  ₹{product.variants?.[0]?.discounted_price}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2 mb-4" tabIndex={-1}>
          <NavLink
            to="/ShopAll"
            className="text-[#018d43] underline flex items-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              viewBox="0 0 13 13"
              width="16"
              className="fill-[#018d43] mr-1"
            >
              <path
                d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="0.7"
              />
              <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white" />
              <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white" />
            </svg>
            Make your first order
          </NavLink>
          <span className="text-gray-700">
            You haven't placed any orders yet.
          </span>
        </div>
      )}
    </div>
  );
}

export default Orders;
