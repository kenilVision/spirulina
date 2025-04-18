import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";
import { GetproductbyCategories } from '../../Api/product';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const params = { isBestSeller: true };
      const queryString = new URLSearchParams(params).toString();
      const data = await GetproductbyCategories(queryString);  
      console.log(data.products);  
      setProducts(data.products || []);
    };

    fetchBestsellers();
  }, []);

  return (
    <div className="mt-[6.25rem] mb-[9.375rem]">
      <div className="w-full max-w-[1440px] mx-auto text-center px-[15px]">
        <HomeSectionHeading title="Bestsellers" />
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

export default Bestsellers;
