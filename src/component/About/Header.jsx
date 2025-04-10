import React from "react";

function Header() {
  return (
    <div className="relative w-full bg-black bg-opacity-20 bg-[url('https://spiruswastha.com/cdn/shop/files/about_banner.jpg?v=1733718095&width=3024')] bg-cover bg-center flex justify-center">
      <div className="absolute bg-black opacity-50 w-full h-full"></div>
      <div className="w-full max-w-[1440px] px-[15px] z-10 flex items-center">
        <p className=" py-[50px] md:py-[100px]  text-[20px] text-white font-semibold">
          About us
        </p>
      </div>
    </div>
  );
}

export default Header;
