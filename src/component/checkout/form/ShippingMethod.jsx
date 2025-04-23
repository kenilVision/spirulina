import React, { useState } from "react";

function ShippingMethod({user}) {
      const [isExpanded, setIsExpanded] = useState(false);
        const total = 200
      const shippingCost = total > 500 ? 0 : 60;
  return (
    <div>
      <div className="py-[14px] border-b border-b-[#dedede]">
        <h2>
          <button
            type="button"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex justify-between w-full">
              <span className="flex items-center">
                <span className="text-[#707070] hover:text-[#018d43]">
                  Shipping Method
                </span>
              </span>
              <div>
                <button
                  className={`rounded-full bg-[#F2F9F5] p-2 ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    focusable="false"
                    stroke="#018d43"
                    strokeWidth={2}
                    className="h-3 w-3 fill-none max-w-full max-h-full block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.75 7.354 9.396a.5.5 0 0 1-.708 0L2 4.75"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </button>
        </h2>
        <div className={`pt-[5px] overflow-hidden ${!isExpanded ? "h-auto" : "h-0"}`}>
          <div className=" ">
            {shippingCost === 0 ? (
              <span className="flex justify-between">Free Shipping</span>
            ) : (
              <span className="">Shipping Charges <span>.₹60</span> </span>
            )}
          </div>
        </div>

        <div className={`pt-[5px] overflow-hidden ${isExpanded ? "h-auto" : "h-0"}`}>
          <div className="flex items-center justify-between rounded-xl p-4  bg-[#F2F9F5]">
            {shippingCost === 0 ? (
              <span className="flex justify-between">Free Shipping</span>
            ) : (
              <span className="flex justify-between">Shipping Charges: <span>₹60</span> </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingMethod
