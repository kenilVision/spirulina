import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RemovefromWishlist } from '../../Slice/wishlist';
import { useNavigate } from "react-router-dom";
import { AddtoCart } from '../../Slice/cart'

function ProductcardWishlist(product , type) {
const dispatch = useDispatch()
    const navigate = useNavigate();


    function handleCart(product, type) {
      // Create the cart item data structure
      const data = {
        ...product,
        qty: 1,
        type,
      };
    
      // If it's a variant-based product, include the selected variant info as object
      if (type === "product" ) {
        data.variant = {  // Changed to singular 'variant' (not array)
          label: product.variants[0].label,
          price: product.variants[0].price,
          originalPrice: product.variants[0].originalPrice,
          image: product.variants[0].images?.[0] || null,
          // Include any other variant-specific fields you need
        };
        
        // Remove the variants array if you don't want it in cart data
        delete data.variants; 
      } else if (!product.isVariantBased) {
        // For non-variant products
        data.price = product.effectivePrice || product.price;
        data.originalPrice = product.originalPrice;
      }
    
      console.log("Dispatched data:", data);
      dispatch(AddtoCart(data));
    }


  return (
    <div
      key={product.product._id || index}
      className="border border-[#dddddd] flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
      
    >
      <div
        className="relative w-full overflow-hidden group"
        onClick={() =>
          navigate(`/product/${product.product.slug}`,{state: product.type})
        } 
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
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="RED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
            </button>
        </div>
      </div>
      <div
        className="p-4 text-start mt-auto"
        onClick={() =>
          navigate(`/product/${product.product.slug}`,{state: product.type})
        } 
      >
        <p className="font-bold truncate hover:text-[#018d43]">{product.product.name}</p>
  
        {product.product.type === 'combo' ? (
          <p className="text-[1.25rem] text-[#018d43] leading-10">₹{product.product.price}</p>
        ) : (
          <>
        {product.product.variants.length > 1 ? (
        (() => {
          const prices = product.product.variants.map(
            v => v.originalPrice && v.originalPrice !== 0 ? v.originalPrice : v.price
          );
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          return (
            <p className="text-[1.25rem] text-[#018d43] leading-10">
              ₹{minPrice} - ₹{maxPrice}
            </p>
          );
        })()
      ) : (
        <>
          {product.product.variants[0].price && product.product.variants[0].originalPrice !== 0 ? (
            <div className="flex text-[1.25rem] leading-10 items-center gap-2">
              <span className="text-[#696969] line-through">₹{product.product.variants[0].price}</span>
              <span className="text-[#018d43]">₹{product.product.variants[0].originalPrice}</span>
            </div>
          ) : (
            <p className="text-[1.25rem] text-[#018d43] leading-10">
              ₹{product.product.price}
            </p>
          )}
        </>
      )}
          </>
        )}
      </div>
      <div className="flex">
        <div
          className="w-1/2 bg-[#222] flex items-center justify-center py-3 cursor-pointer hover:bg-[#444] transition duration-300"
          onClick={() =>{ handleCart(product.product)}}
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
