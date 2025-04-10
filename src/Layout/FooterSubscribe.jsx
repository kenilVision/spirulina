import React from "react";

function FooterSubscribe() {
  return (
    <div
      className="w-full py-[70px] lg:py-[150px]"
      style={{
        backgroundImage:
          "url('https://spiruswastha.com/cdn/shop/files/Subscribe_bg.jpg?v=1733745466&width=1944')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center  mx-auto text-center px-[15px]">
        <h2 className="text-4xl font-bold relative inline-block leading-1.2  mb-[35px]">
          Stay Up to Date with All News
          <br /> and Exclusive Offers
        </h2>

        <div className="flex w-full md:w-[600px] border-1 rounded-full border-[#018d43]">
          <input
            autoComplete="off"
            className=" h-auto w-full border-0 ps-[20px] pe-50px focus:outline-none focus:border-0  text-[14px]"
            type="text"
            placeholder="Search"
          />
          <div className="p-[1px]">
            <button
              type="submit"
              className="bg-[#018d43] hover:cursor-pointer text-white w-full h-full py-[13px] px-[15px] rounded-full text-[14px] "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSubscribe;
