import React from "react";
import { NavLink } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-2">Payment Cancelled</h1>
      <p className="text-lg text-gray-600 mb-6">
        Looks like the payment didn’t go through. You can try again anytime.
      </p>
      <NavLink to='/'
        className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default Cancel;
