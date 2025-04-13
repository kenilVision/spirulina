import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
function CookieConcent({ cookies, setCookie }) {

  const handleAccept = async() => {
    setCookie("cookieConsent", true, { path: "/" });
    console.log("cookies", cookies); 

    // await axios.get("http://localhost:5000/acceptCookie", { withCredentials: true });

  };

  const handleReject = async () => {
    setCookie("cookieConsent", false, { path: "/" });
    console.log("cookies", cookies);

    // await axios.get("http://localhost:5000/rejectCookie", { withCredentials: true });
  };

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="24"
      height="24"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="#f4c542"
        stroke="#d4a017"
        stroke-width="4"
      />
      <circle cx="22" cy="20" r="3" fill="#8b5e3c" />
      <circle cx="40" cy="18" r="2.5" fill="#8b5e3c" />
      <circle cx="28" cy="36" r="3" fill="#8b5e3c" />
      <circle cx="36" cy="28" r="2.5" fill="#8b5e3c" />
      <circle cx="24" cy="44" r="2.5" fill="#8b5e3c" />
      <circle cx="42" cy="40" r="3" fill="#8b5e3c" />
    </svg> 
  );
  const rightTick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
  return (
    <div className="w-full  flex items-center justify-center">
      <div
        className="fixed bottom-[50px] z-100  rounded-xl max-w-[750px] w-[calc(100%-30px)]  bg-[#ffffff] py-[1rem] px-[1rem]  flex flex-col items-center justify-center gap-4"
        style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}
      >
        <div class="text-[18px] bext-bold">
          <h6>Do you allow us to use cookies?</h6>
        </div>
        <div className="flex items-center justify-center gap-4">
          {svg}
          <p className="text-[16px] text-center">
            We use cookies to ensure that we give you the best experience on our
            website.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="bg-[#018d43] flex justify-center items-center gap-2 text-[16px] text-white px-4 font-semibold hover:cursor-pointer rounded-full hover: transition duration-300 ease-in-out"
            onClick={handleAccept}
          >
            {rightTick}
            Accept
          </button>
          <button
            className="px-4 flex justify-center items-center  text-[16px] gap-2 rounded-full bg-black text-white font-semibold hover: transition hover:cursor-pointer duration-300 ease-in-out"
            onClick={handleReject}
          >
            {cross}Reject
          </button>
          <NavLink
            to="/PrivacyPolicy"
            className="hover:cursor-pointer font-semibold text-[16px]"
          >
            learn more
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CookieConcent;
