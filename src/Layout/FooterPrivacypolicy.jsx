import React from 'react'
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";

const  FooterPrivacypolicy = () => {

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
          label: "Return and Refund Policy",
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
    className="w-full max-w-[1650px] pt-[10px]  md:pt-[20px]"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <ul className="flex justify-between flex-wrap gap-x-4 gap-y-3">
      {policyLinks.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className="text-[#000000]  text-[15px] lg:text-[18px] hover:text-[#018d43] transition-colors"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FooterPrivacypolicy
