import React, { useEffect, useState } from "react";
import ProductCard from '../common/ProductCard'
import { GetproductbyCategories } from '../../Api/product';
function MayalsoLike() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const params = { isBestSeller: true };
      const queryString = new URLSearchParams(params).toString();
      const data = await GetproductbyCategories(queryString);  
      setProducts(data.products || []);
    };

    fetchBestsellers();
  }, []);

      
  return (
    <div className='w-full  md:mt-[40px] mb-[50px] lg:mt-[75px] lg:mb-[50px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 
      className="text-4xl font-bold relative inline-block "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      >
      You may also like
      </h2>
      <div 
      className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      ></div>
        <div 
        className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] md:grid-cols-3 lg:grid-cols-4  ' 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >   
         <ProductCard data = {products}  />
        </div>
    </div>
    </div>
  )
}

export default MayalsoLike
