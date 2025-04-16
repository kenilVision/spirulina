  import React, { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { loadStripe } from "@stripe/stripe-js";
  import { useSelector, useDispatch } from 'react-redux'
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  import { add, remove } from '../../Slice/cart'


  function ProductCard({ data, type }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    async function handleSubmit(e, productId) {
      e.preventDefault();
      const stripe = await stripePromise;

      const result = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1RBxMVFS9PdJc9asxD3pIj9P", 
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
        shippingAddressCollection: {
          allowedCountries: ["IN", "US", "CA"],
        },
        billingAddressCollection: "required",
      });

      if (result.error) {
        console.error(result.error.message);
      }
    }

    function handleCart(product) {
      const { name, images, variants } = product;
    
      const firstVariant = variants[0];
      
      const cartItem = {
        id: product.id,
        name,
        image: images[0],
        price: firstVariant.discounted_price,
        originalPrice: firstVariant.original_price,
        quantity: 1,
        variant: firstVariant
      };
      console.log(cartItem)
      dispatch(add(cartItem))
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

          const firstVariant = isVariantBased ? product.variants[0] : product;
          // useEffect(() => {
          //   if (isVariantBased) {
          //     const firstVariant = product.variants[0];
          //     const price = firstVariant.price;
          //     const discountedPrice = firstVariant.originalPrice;
          //     const discountPercentage = firstVariant.discount;
          //     const images = firstVariant.image[0] || product.images[0] || [];
          //     const image2 = firstVariant.image[0] || product.images[1] || [];
          //   }
          //   else {
          //     const price = product.price;
          //     const discountedPrice = product.originalPrice;
          //     const discountPercentage = product.discount;
          //     const images = product.images[0] || [];
          //     const image2 = product.images[1] || [];
          //   }
          // },[])
          // // // Using the first variant for display (consider adding variant selection)
          // // const firstVariant = variants[0];
          // // const originalPrice = firstVariant.original_price;
          // // const discountedPrice = firstVariant.discounted_price;
          // // const discountPercentage = firstVariant.discount_percentage;

          return (
            <div
              key={_id || index}
              className="border border-[#dddddd] shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
            >
              <div
                className="relative w-full overflow-hidden group"
                onClick={() => navigate(`/product/${product.name}/${product._id}`)}
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
                <div className="absolute top-0 right-0 p-5 flex items-center justify-between w-full">
                  {firstVariant.discount != 0 ? (
                    <span className="bg-[#018d43] text-white rounded-md h-[22px] text-[13px] px-[6px] min-w-[38px]">
                      {Math.round(firstVariant.discount)}%
                    </span>
                  ) : (
                    <p></p>
                  )}
                  {/* Heart icon */}
                  <svg
                    fill="#018d43"
                    height="1.5rem"
                    width="1.5rem"
                    viewBox="0 0 471.701 471.701"
                  >
                    <path d="...full path here..." />
                  </svg>
                </div>
              </div>
              <div
                className="p-4 text-start"
                onClick={() => navigate(`/product/${product.name}/${product._id}`)}
              >
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
                    {firstVariant.price && firstVariant.originalPrice != 0 ? (
                      <div className="flex text-[1.25rem] leading-10 items-center gap-2">
                        <span className="text-[#696969] line-through">
                          ₹{firstVariant.price}
                        </span>
                        <span className="text-[#018d43]">₹{firstVariant.originalPrice}</span>
                      </div>
                    ) : (
                      <p className="text-[1.25rem] text-[#018d43] leading-10">
                        ₹{firstVariant.price}
                      </p>
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
                  onClick={(e) => handleSubmit(e, product.id)}
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