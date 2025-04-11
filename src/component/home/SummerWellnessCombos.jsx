import React, { useEffect } from "react";
import ProductCard from "../common/ProductCard";
import "aos/dist/aos.css";
import AOS from "aos";
import HomeSectionHeading from "../common/HomeSectionHeading";


const  SummerWellnessCombos = () => {
  const data = [
    {
      name: "Spiruswastha Vitality Pack",
      price: {
        original: 1070.00,
        discounted: 1070.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/1_de5eda8d-7c0c-4f35-becd-9007ba88ec2e.jpg?v=1740032196",
      description: "Boost your overall vitality and well-being with this specially curated Spirulina-based health pack."
    },
    {
      name: "Spiruswastha Energy Boost Pack",
      price: {
        original: 1590.00,
        discounted: 1590.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/2_320ff308-c8f8-4927-8f15-75a0aad7e6eb.jpg?v=1740032248",
      description: "A high-energy combination pack designed to help you power through your day with natural nutrition."
    },
    {
      name: "Spiruswastha Heart Wellness Pack",
      price: {
        original: 799.00,
        discounted: 799.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/3_1481e07a-f922-4937-bee0-35b7e8a5ece8.jpg?v=1740032336",
      description: "Support heart health naturally with Spirulina and other vital nutrients in this wellness combo."
    },
    {
      name: "Spiruswastha Summer Stamina Pack",
      price: {
        original: 1199.00,
        discounted: 1199.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/4_4bd5bd52-251b-4588-8ecd-322f420905bb.jpg?v=1740032430",
      description: "Stay energized and hydrated during the summer months with this stamina-focused pack."
    },
    {
      name: "Spiruswastha Radiance Pack",
      price: {
        original: 839.00,
        discounted: 839.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/5_48c6fcf3-1b02-44e7-85ec-73d67f5a0218.jpg?v=1740032956",
      description: "Enhance your natural glow and skin radiance with the power of Spirulina and herbal ingredients."
    },
    {
      name: "Spiruswastha 24/7 Glow Pack",
      price: {
        original: 1249.00,
        discounted: 1249.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/6_1.jpg?v=1740032884",
      description: "Glow around the clock with this specially formulated pack for skin health and brightness."
    },
    {
      name: "Spiruswastha Herbal Refresh Pack",
      price: {
        original: 700.00,
        discounted: 700.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/7_bb03f006-448a-435a-90dd-881c909ea7a9.jpg?v=1740027300",
      description: "Rejuvenate your senses with herbal freshness, perfect for everyday revitalization."
    },
    {
      name: "Spiruswastha Pure Refresh Pack",
      price: {
        original: 569.00,
        discounted: 569.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/8_f06ae11b-8d89-4883-b9d0-c386d1bcf783.jpg?v=1740027309",
      description: "Experience pure herbal refreshment and wellness in one convenient and affordable combo."
    }
  ];

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

            <ProductCard data= {data} />

        </div>
      </div>
    </div>
  );
}

export default SummerWellnessCombos;
