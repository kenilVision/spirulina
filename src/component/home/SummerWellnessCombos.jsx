import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import "aos/dist/aos.css";
import AOS from "aos";
import HomeSectionHeading from "../common/HomeSectionHeading";
import { Getallcombo } from "../../Api/combo";

const  SummerWellnessCombos = () => {
  const [data, setdata] = useState([])

  useEffect(() => {

    const fetchCombo = async () => {
      try {
        const comboData = await Getallcombo();
        setdata(comboData);
      } catch (error) {
        console.error("Failed to fetch combo data:", error);
        setdata([]); // fallback to empty array on error
      }
    };
    fetchCombo();
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
      duration: 1000,
    });
  }, []);

  return (
    <div className="mb-[9.375rem]">
      <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <HomeSectionHeading title="SpiruSwastha Summer Wellness Combos" />
        <p
          className="text-gray-600 mt-4 max-w-2xl mx-auto mb-[30px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Enjoy summer the healthy way with SpiruSwastha! Our specially crafted
          Summer Wellness Combos help you stay hydrated, refreshed, and full of
          energy all season long. These natural blends are perfect for keeping
          your skin glowing and body strong even in the summer heat.
        </p>
        <div
          className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] md:grid-cols-3 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >

            <ProductCard data= {data} type="combo" />

        </div>
      </div>
    </div>
  );
}

export default SummerWellnessCombos;
