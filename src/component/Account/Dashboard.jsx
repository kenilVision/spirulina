import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const { firstname, lastname, email, address } = useSelector((state) => state.User);
  const defaultAddress = address.find((addr) => addr.default === true);

  return (
    <div className="bg-white rounded-md p-6 shadow-md  ">
      <h2 className="text-2xl font-semibold mb-4">Account Details</h2>

      <div className="flex items-center mb-4 text-[#696969] text-sm">
      <NavLink to='/ShopAll'  className="flex underline mr-2 text-[#018d43]">
        <svg
          aria-hidden="true"
          viewBox="0 0 13 13"
          width="16"
          className="mr-2 fill-[#018d43]"
        >
          <path
            d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="0.7"
          />
          <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white" />
          <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white" />
        </svg>
        
          Make your first order
        </NavLink>  
        <span>You haven't placed any orders yet.</span>
      </div>

      <div className="overflow-hidden border border-gray-300 rounded-md">
        <table className="min-w-full text-[18px]">
          <tbody >
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-4 font-semibold border-b border-e border-gray-300 w-1/4">Name:</td>
              <td className="px-4 py-4 border-b border-gray-300">{firstname} {lastname}</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-4 font-semibold border-b border-e border-gray-300">E-mail:</td>
              <td className="px-4 py-4 border-b border-gray-300">{email}</td>
            </tr>
            {defaultAddress ? (
              <>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4 font-semibold border-b border-e border-gray-300">Address:</td>
                  <td className="px-4 py-4 border-b border-gray-300">{defaultAddress.address}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4 font-semibold border-b border-e border-gray-300">Address 2:</td>
                  <td className="px-4 py-4 border-b border-gray-300">{defaultAddress.address2}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4 font-semibold border-b border-e border-gray-300">Country:</td>
                  <td className="px-4 py-4 border-b border-gray-300">{defaultAddress.county}, India</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4 font-semibold border-b border-e border-gray-300">Zip:</td>
                  <td className="px-4 py-4 border-b border-gray-300">{defaultAddress.zip}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4  border-e border-gray-300 font-semibold">Phone:</td>
                  <td className="px-4 py-4">{defaultAddress.phone}</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="2" className="py-4 px-4 text-gray-500 text-center">
                  No default address found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
