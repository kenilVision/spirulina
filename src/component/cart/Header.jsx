import React from "react";
import image  from '../../assets/download.webp'
function Header() {
  return (
    <div className={`relative w-full   bg-cover bg-center flex justify-center`}
    style={{
      backgroundImage: `url(${image})`,
      // backgroundColor: "rgba(0, 0, 0, 0.2)",
    }}
    >
      <div className="absolute bg-black opacity-50 w-full h-full"></div>
      <div className="w-full max-w-[1440px] px-[15px] z-10 flex items-center">
        <p className=" py-[50px] md:py-[100px]  text-[20px] text-white font-semibold">
        SHOPPING CART
        </p>
      </div>
    </div>
  );
}

export default Header;
