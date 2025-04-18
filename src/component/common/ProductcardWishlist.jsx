import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RemovefromWishlist } from '../../Slice/wishlist';


function ProductcardWishlist(product , type) {
const dispatch = useDispatch()

  return (
    <div
      key={product.product._id || index}
      className="border border-[#dddddd] flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
    >
      <div
        className="relative w-full overflow-hidden group"
        onClick={() => navigate(`/product/${product.type}`, { state: type })}
      >
        <img
          src={`http://localhost:5050/image/${product.product.type === 'combo' ? `productCombo/${product.product.images}` : `products/${product.product.variants[product.product.variants.length - 1].images[0]}`}`}
          className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={`http://localhost:5050/image/${product.product.type === 'combo' ? `productCombo/${product.product.images}` : `products/${product.product.variants[product.product.variants.length - 1].images[1]}`}`}
          className="w-full h-auto object-cover absolute top-0 left-0 transition-all duration-1000 opacity-0 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute top-0 right-0 p-5 flex items-center h-15 justify-end w-full">
        <button
            onClick={(e) => {
                e.stopPropagation();
                dispatch(RemovefromWishlist(product.product._id));
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                fill="red"
                d="M16 2C15.4477 2 15 2.44772 15 3V4H5C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H6V19C6 20.1046 6.89543 21 8 21H18C19.1046 21 20 20.1046 20 19V6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H11V3C11 2.44772 10.5523 2 10 2H16ZM8 6H18V19H8V6Z"
                />
                <rect x="10" y="8" width="2" height="9" fill="white" />
                <rect x="14" y="8" width="2" height="9" fill="white" />
            </svg>
            </button>
        </div>
      </div>
      <div
        className="p-4 text-start mt-auto"
        onClick={() => navigate(`/product/${product.product?.slug}`, { state: product.type })}
      >
        <p className="font-bold truncate hover:text-[#018d43]">{product.product.name}</p>
  
        {product.product.type === 'combo' ? (
          <p className="text-[1.25rem] text-[#018d43] leading-10">₹{product.product.price}</p>
        ) : (
          <>
            {product.product.variants[0].price && product.product.variants[0].originalPrice !== 0 ? (
              <div className="flex text-[1.25rem] leading-10 items-center gap-2">
                <span className="text-[#696969] line-through">₹{product.product.variants[0].price}</span>
                <span className="text-[#018d43]">₹{product.product.variants[0].originalPrice}</span>
              </div>
            ) : (
              <p className="text-[1.25rem] text-[#018d43] leading-10">₹{product.product.price}</p>
            )}
          </>
        )}
      </div>
      <div className="flex">
        <div
          className="w-1/2 bg-[#222] flex items-center justify-center py-3 cursor-pointer hover:bg-[#444] transition duration-300"
          onClick={() => handleCart(product)}
        >
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
        <div
          className="w-1/2 flex items-center justify-center font-bold text-white text-lg bg-[#018d43] py-3 cursor-pointer hover:bg-[#016d32] transition duration-300"
          onClick={(e) => handleSubmit(e, product.product._id)}
        >
          Buy Now
        </div>
      </div>
    </div>
  );
}

export default ProductcardWishlist;
