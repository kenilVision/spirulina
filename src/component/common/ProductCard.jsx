import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function ProductCard({
  image,
  image2,
  title,
  price,
  orignalPrice,
  discountedPrice,
  discountPercentage,
}) {
  const navigator = useNavigate();
  const stripePromise = loadStripe(
    "pk_test_51R7Wr4FS9PdJc9as9JGTC5u82YHtYLp3HdxLkTxLCXR5h0WVnUtYmLp1kyHqTp8OK6VsQSuFlMSBcvYsCSizGcTW00PlCHxj6L"
  );

  async function handleSubmit(e) {
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
        allowedCountries: ["IN", "US", "CA"], // Customize allowed countries
      },
      billingAddressCollection: "required",
    });

    if (result.error) {
      console.error(result.error.message);
    }
  }

  return (
    <div className="">
      <div className="border border-[#dddddd] h-full shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer">
        <div
          className="relative w-full overflow-hidden group"
          onClick={() => navigator("/Products")}
        >
          {" "}
          <img
            src={image}
            className="w-full object-cover transition-transform duration-100 "
          />
          {image2 && (
            <img
              src={image2}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:scale-105 group-hover:opacity-100  duration-1000"
            />
          )}
          <div className="absolute top-0 right-0 p-5 flex items-center justify-between w-full ">
            {discountPercentage ? (
              <span className="bg-[#018d43] text-white rounded-md h-[22px] text-[13px] px-[6px] min-w-[38px]">
                {discountPercentage}%
              </span>
            ) : (
              <p></p>
            )}

            <svg
              fill="#018d43"
              height="1.5rem"
              width="1.5rem"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 471.701 471.701"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                C444.801,187.101,434.001,213.101,414.401,232.701z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="p-4 text-start " onClick={() => navigator("/Products")}>
          <p className="font-bold truncate hover:text-[#018d43] ">{title}</p>
          {orignalPrice && discountedPrice ? (
            <div className="flex text-[1.25rem] leading-10  items-center gap-2 ">
              <span className=" text-[#696969]  line-through">
                <del>{`₹${orignalPrice}`}</del>
              </span>
              <span className=" text-[#018d43] ">{`₹${discountedPrice}`}</span>
            </div>
          ) : (
            <p className="text-[1.25rem] text-[#018d43] leading-10">{price}</p>
          )}
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
          <div
            className="w-1/2 flex items-center justify-center font-bold text-white text-lg bg-[#018d43] py-3 cursor-pointer hover:bg-[#016d32] transition duration-300"
            onClick={handleSubmit}
          >
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
