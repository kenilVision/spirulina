import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";
import { GetproductbyCategories } from '../../Api/product';

const Mayalsolike = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const params = { isBestSeller: true , limit:4 };
      const queryString = new URLSearchParams(params).toString();
      const data = await GetproductbyCategories(queryString);  
      setProducts(data.products || []);
    };

    fetchBestsellers();
  }, []);

  return (
    <div className=" bg-[#f8f8f8] ">
      <div className="w-full max-w-[1440px] mx-auto bg-[#f8f8f8] text-center px-[15px]">
        <HomeSectionHeading title="Recomemded for you" />
        <div
          className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] md:grid-cols-3 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <ProductCard data={products} type="product" />
        </div>
      </div>
    </div>
  );
};

export default Mayalsolike;
