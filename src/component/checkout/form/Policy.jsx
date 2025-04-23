import React from 'react'
import { NavLink } from "react-router-dom";
function Policy() {
    
    const policyLinks = [
        {
          label: "Privacy Policy",
          to: "/PrivacyPolicy",
        },
        {
          label: "Terms of Service",
          to: "/TermsAndServices",
        },
        {
          label: "Refund Policy",
          to: "/ReturnAndRefund",
        },
        {
          label: "Shipping Policy",
          to: "/Shipping",
        },
        {
          label: "Contact Information",
          to: "/Contactinformation",
        },
      ];          // policy links


  return (
    <div
    className="w-full pt-[14px] border-t   "
  >
    <ul className="flex justify-evenly flex-wrap gap-x-1 ">
      {policyLinks.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className="underline  text-[15px] lg:text-[13px] text-[#018d43] transition-colors"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Policy


