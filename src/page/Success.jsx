import React from "react";
import { NavLink } from "react-router-dom";
const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Thank you for your purchase. A confirmation email has been sent to you.
      </p>
      <NavLink to='/'
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default Success;
