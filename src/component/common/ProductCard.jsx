  import React, { useEffect ,useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { loadStripe } from "@stripe/stripe-js";
  import { useSelector, useDispatch } from 'react-redux'
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  import { AddtoCart } from '../../Slice/cart'
  import { AddtoWishlist, RemovefromWishlist } from '../../Slice/wishlist';
  import { toggleCartbar, openCartbar, closeCartbar } from "../../Slice/cart";
  import { Tooltip } from 'react-tooltip';
  function ProductCard({ data, type = "product" }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cartbarOpen = useSelector((state) => state.cart.cartbarOpen);
    const wishlist = useSelector(state => state.wishlist.items); // Access wishlist from the store
    function handleCart(product) {
   

      const data = {
        ...product,
        qty: 1,
        type: type,
        ...(type === "product" && {
          variants: {
            label: product.variants[0].label,
            variantid:product.variants[0]._id,
            price: product.variants[0].price,
            orignalprice: product.variants[0].originalPrice,
            discount : product.variants[0].discount,
            image:product.variants[0].images[0]
          }
        })

      };
      
      dispatch(AddtoCart(data));
     
    }
  
    async function handleSubmit(product) {

      const data = {
        ...product,
        qty: 1,
        type: type,
        ...(type === "product" && {
          variants: {
            label: product.variants[0].label,
            variantid:product.variants[0]._id,
            price: product.variants[0].price,
            orignalprice: product.variants[0].originalPrice,
            discount : product.variants[0].discount,
            image:product.variants[0].images[0]
          }
        })
        
      };
      
      dispatch(AddtoCart(data));
      navigate(`/checkout`)
    }


    return (
      <>
        {data.map((product, index) => {
          const {
            _id,
            name,
            isVariantBased, 
            ratings
          } = product;

          const firstVariant = isVariantBased ? product.variants[product.variants.length - 1] : product;
          
          return (
            <div
              key={_id || index}
              className="border border-[#dddddd] flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
            >
              <div
                className="relative w-full overflow-hidden group"
                onClick={() =>
                  navigate(`/product/${product.slug}`,{state:type})
                } 
              >
            <img
              src={`http://localhost:5050/image/${type === 'combo' ? `productCombo/${product.images}` : `products/${firstVariant.images[0]}`}`}
              alt={name}
              className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={`http://localhost:5050/image/${type === 'combo' ? `productCombo/${product.images}` : `products/${firstVariant.images[1]}`}`}
              alt={name}
              className="w-full h-auto object-cover absolute top-0 left-0 transition-all duration-1000 opacity-0 group-hover:scale-105 group-hover:opacity-100"
            />
                <div className="absolute top-0 right-0 p-5 flex items-center h-15 justify-between w-full">
                  {firstVariant.discount != 0 ? (
                    <span className="bg-[#018d43] text-white rounded-md h-[22px] text-[13px] px-[6px] min-w-[38px]">
                      {Math.round(firstVariant.discount)}% Off
                    </span>
                  ) : (
                    <p></p>
                  )}
                  

                  
             {wishlist.some(item => item._id === _id) ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: '0',
                          transform: 'translate(-50%, -50%)',
                        }}
                        data-tooltip-id="my-tooltip" data-tooltip-content="Remove wishlist"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(RemovefromWishlist(_id));
                        }}
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          stroke="red"  // Red color for the heart
                          strokeWidth="1.5"
                          fill="red"    // Optional: to make the heart solid red
                        />
                      </svg>
                    ) : (
                      // Default heart with hover effect when not in the wishlist
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-300 transform group-hover:translate-x-[0px] group-hover:opacity-100 opacity-0"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: '0',
                          transform: 'translate(-50%, -50%)',
                        }}
                        data-tooltip-id="my-tooltip" data-tooltip-content="Add to wishlist"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(AddtoWishlist({
                            ...product,
                            type, 
                          }));
                        }}
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          stroke="#018d43"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                </div>
              </div>
              <div
                className="p-4 text-start mt-auto"
                onClick={() =>
                  navigate(`/product/${product.slug}`,{state:type})
                }
              >
                <Tooltip 
                            id="my-tooltip" 
                            place="left"
                            style={{ padding: '5px' ,fontSize:'13px'}}
                
                            />
                <p className="font-bold truncate hover:text-[#018d43]">
                  {name}
                </p>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(ratings) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({ratings})</span>
                </div>
                {type === 'combo' ? (
                  <>
                  <p className="text-[1.25rem] text-[#018d43] leading-10">
                        ₹{product.price}
                      </p>
                  </>
                ) : (
                  <>
                   {product.variants.length > 1 ? (
                    (() => {
                      const prices = product.variants.map(
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
                      {firstVariant.price !== firstVariant.originalPrice && firstVariant.originalPrice !== 0 ? (
                        <div className="flex text-[1.25rem] leading-10 items-center gap-2">
                          <span className="text-[#696969] line-through">₹{firstVariant.price}</span>
                          <span className="text-[#018d43]">₹{firstVariant.originalPrice}</span>
                        </div>
                      ) : (
                        <p className="text-[1.25rem] text-[#018d43] leading-10">
                          ₹{firstVariant.price}
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
                  onClick={async () =>{ 
                    await handleCart(product)
                    dispatch(openCartbar())
                  }}
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
                  onClick={(e) => handleSubmit(product)}
                >
                  Buy Now
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  export default ProductCard;