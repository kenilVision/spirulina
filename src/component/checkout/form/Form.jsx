import React, { useState } from "react";
import logo from "../../../assets/checkout_logo_x320.avif";
import AccountSection from "./AccountSection";
import ShipTo from "./ShipTo";
import ShippingMethod from "./ShippingMethod";
import PaymentMethods from "./PaymentMethods";
import BillingAddress from "./BillingAddress";
import Policy from "./Policy";
import OrderSummary from "./OrderSummary";
function Form({
  user,
  selectedAddressId,
  setSelectedAddressId,
  selected,
  setSelected,
  submit,
  selectedType, 
  setSelectedType,
  formData, 
  setFormData,
  cart,
  total,
  errors,
  setErrors
}) {
  const [data, setData] = useState({
    addressId: "",
    items: [
      {
        productId: "",
        variantId: "",
        quantity: null,
      },
    ],
    paymentMethod: "",
  });
  return (
    <div className="w-full">
      <img
        src={logo}
        alt="Store Logo"
        width="130"
        height="56.76"
        className="checkout-logo mb-[52px]"
      />
      <AccountSection user={user} data={data} setData={setData} />
      <ShipTo
        user={user}
        selectedAddressId={selectedAddressId}
        setSelectedAddressId={setSelectedAddressId}
      />
      {/* <ShippingMethod user={user}  /> */}
      <div className="flex items-center space-x-2 pt-[14px]">
        <input
          type="checkbox"
          name="email"
          className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="marketing_opt_in" className="text-[14px] text-gray-700">
          Email me with news and offers
        </label>
      </div>
      <PaymentMethods selected={selected} setSelected={setSelected}  />
      <BillingAddress
         selectedType={selectedType} 
         setSelectedType={setSelectedType}
         formData={formData} 
         setFormData={setFormData}
         errors={errors}
            setErrors={ setErrors}
      />
      <div>
        <button
          type="submit"
          onClick={() => {
            submit();
        }}
          className="bg-[#018d43] w-full mt-5 mb-15 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pay now
        </button>
      </div>
        <OrderSummary cart={cart} total={total} />
      <Policy />
    </div>
  );
}

export default Form;
