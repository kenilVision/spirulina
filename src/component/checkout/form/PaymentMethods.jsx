import React, { useState } from "react";

const PaymentMethods = ({selected ,setSelected}) => {


  return (
    <div className=" mt-[15px]">
      <div>
        <h2 className="text-lg font-semibold mb-2">Payment</h2>
        <p className="text-sm text-gray-600 mb-4">
          All transactions are secure and encrypted.
        </p>
      </div>

      {/* Razorpay Option */}
      <div
        className={`border  rounded-t-lg cursor-pointer ${
          selected === "razorpay" ? "border-[#018d43]" : "border-gray-300"
        }`}
        onClick={() => setSelected("razorpay")}
      >
        <div className={`flex p-4 items-start rounded-t-lg justify-between
            ${selected === "razorpay" ? "bg-[#F3F8F4]" : "bg-white"}
        `}>
          <div className="flex items-start rounded-t-lg gap-3">
            <input
              type="radio"
              id="razorpay"
              name="payment"
              checked={selected === "razorpay"}
              onChange={() => setSelected("razorpay")}
              className="accent-green-600 w-4 h-4 mt-1"
            />
            <div>
              <label htmlFor="razorpay" className="text-gray-800 font-medium">
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </label>
              <div className="flex gap-2 mt-2">
              
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <img
              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg"
              alt="upi"
              className="w-8 h-5"
            />
            <img
              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
              alt="master"
              className="w-8 h-5"
            />
              <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                  alt="visa"
                  className="w-8 h-5"
                />
                <span className="text-xs text-gray-500 self-center">+11</span>

          </div>
        </div>
        <div className={` bg-[#F4F4F4]  overflow-hidden ${selected === "razorpay" ? "h-auto p-5 " : "h-0 p-0"}`} >
        <div className="flex items-center space-x-2 w-max-[350px]">
            <div className="flex flex-col items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-270.8 371 102 52" className="w-50 mb-5">
                <path
                fill="none"
                stroke="#696969"
                strokeMiterlimit="10"
                strokeWidth="1"

                d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
                ></path>
                <circle cx="-255.5" cy="376.5" r="1.5" fill="currentColor"></circle>
                <circle cx="-250.5" cy="376.5" r="1.5" fill="currentColor"></circle>
                <circle cx="-245.5" cy="376.5" r="1.5" fill="currentColor"></circle>
            </svg>
            <div className="max-w-[35rem]">
                <p className="text-sm text-center text-gray-700">
                After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.
                </p>
            </div>
            </div>
        </div>
        </div>
      </div>

      

      {/* COD Option */}
      <div
        className={`border rounded-b-lg cursor-pointer ${
          selected === "COD" ?  "border-[#018d43]" : "border-gray-300"
        }`}
        onClick={() => setSelected("COD")}
      >
        <div className={`flex p-4 rounded-b-lg items-center rounded-t-lg gap-3
            ${selected === "COD" ? "bg-[#F3F8F4]" : "bg-white"}
        `}>
          <input
            type="radio"
            id="cod"
            name="payment"
            checked={selected === "COD"}
            onChange={() => setSelected("COD")}
            className="accent-green-600  w-4 h-4"
          />
          <label htmlFor="cod" className="text-gray-800 font-medium">
            Cash on Delivery (COD)
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;