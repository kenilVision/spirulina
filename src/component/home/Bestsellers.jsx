import React from "react";
import ProductCard from "../common/ProductCard";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";
import { Products } from "../../Constant/Product";

const  Bestsellers = () => {
  const data = Products.sort((a, b) => b.rating - a.rating).slice(0, 4); 
  return (
    <div className="mt-[6.25rem] mb-[9.375rem]">
      <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <HomeSectionHeading title="Bestsellers" />
        <div
          className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] md:grid-cols-3 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >

            <ProductCard data= {data}/>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
