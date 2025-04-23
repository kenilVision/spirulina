import React, { useState } from "react";

function AccountSection({user}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="py-[14px] border-b border-b-[#dedede]">
      <h2 className="">
        <button
          type="button"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between w-full">
            <span className="flex items-center">
              <span className= "text-[#707070]  hover:text-[#018d43]">Account</span>
            </span>
            <div className="">
              <button className={` rounded-full bg-[#F2F9F5] p-2 ${isExpanded ? "expanded" : ""}`}>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  focusable="false"
                  stroke="#018d43"
                  strokeWidth={2}
                  class=" h-3 w-3 fill-none max-w-full max-h-full block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.75 7.354 9.396a.5.5 0 0 1-.708 0L2 4.75"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-[5px]">
            <div className="text-start">
              <span className="">{user.email}</span>
            </div>
          </div>
        </button>
      </h2>
      <div
        className={`pt-[5px] overflow-hidden ${isExpanded ? "h-auto" : "h-0"}`}
      >
        <p className="underline text-[#018d43]">Logout</p>
      </div>
    </div>
  );
}

export default AccountSection;
