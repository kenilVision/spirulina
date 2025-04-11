import React from "react";
import ProductCard from "../common/ProductCard";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";


const  Bestsellers = () => {
  const data = [
    {
      name: "Natural Spirulina Tablet",
      price: {
        original: 499.00,
        discounted: 424.00,
        discount_percentage: 15.03
      },
      image: "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg?v=1735211315",
      hover_image: "https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_Benefites_e5293d9a-e4a4-4e9b-8ab5-857a65c93e6c.jpg?v=1735211341",
      description: "Natural Spirulina tablets packed with essential nutrients to support daily health and immunity."
    },
    {
      name: "Spiruvita Hair Oil",
      price: {
        original: 149.00,
        discounted: 149.00,
        discount_percentage: 0.00
      },
      image: "https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg?v=1735195662",
      hover_image: "https://spiruswastha.com/cdn/shop/files/SpirulinaHairOilBenefits_0cb6676d-68e5-4542-9615-b0a8eea0ca8a.jpg?v=1735195662",
      description: "Spiruvita hair oil nourishes the scalp and strengthens hair from root to tip with Spirulina goodness."
    },
    {
      name: "Natural Spirulina Powder",
      price: {
        original: 399.00,
        discounted: 319.00,
        discount_percentage: 20.05
      },
      image: "https://spiruswastha.com/cdn/shop/files/Spirulina_5c11599d-41c1-480b-bc6b-772b9e067846.jpg?v=1735208239",
      hover_image: "https://spiruswastha.com/cdn/shop/files/Spirulina_Powder_Benefits.jpg?v=1735208250",
      description: "Pure Spirulina powder to boost energy, detoxify, and enhance skin and hair health."
    },
    {
      name: "Spiru Shine Shampoo",
      price: {
        original: 299.00,
        discounted: 239.00,
        discount_percentage: 20.07
      },
      image: "https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg?v=1735208060",
      hover_image: "https://spiruswastha.com/cdn/shop/files/Spirulina_Shampoo_Benefits_44404c1b-40f7-4799-9acc-b79333d7876b.jpg?v=1735208072",
      description: "Spiru Shine Shampoo deeply cleanses and revitalizes hair with Spirulina’s natural nutrients."
    }
  ];
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
