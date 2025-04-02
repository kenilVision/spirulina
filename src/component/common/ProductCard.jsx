import React from 'react';

function ProductCard({ image, title, price }) {
  return (
    <div className="px-[0.625rem] mt-[1.875rem]">
      <div className="border border-[#dddddd] h-full shadow-sm hover:shadow-md transition-shadow duration-300">
        <div>
          <img src={image} alt={title} className="w-full object-cover" />
        </div>
        <div className="p-4 text-start ">
          <p className="font-bold truncate">{title}</p>
          <p className="text-[1.25rem] text-[#018d43] leading-10">{price}</p>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-[#222] flex items-center justify-center py-3 cursor-pointer hover:bg-[#444] transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </div>
          <div className="w-1/2 flex items-center justify-center font-bold text-white text-lg bg-[#018d43] py-3 cursor-pointer hover:bg-[#016d32] transition duration-300">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
