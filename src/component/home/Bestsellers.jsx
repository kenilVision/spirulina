import React from "react";
import ProductCard from "../common/ProductCard";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";


const  Bestsellers = () => {
  const data = [
    {
      title: "Natural Spirulina Tablet",
      price: "₹424.00",
      original_price: "₹499.00",
      discount: "15% OFF",
      price_value: 424,
      original_price_value: 499,
      image:"https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg?v=1735211315",
      hover_image:"https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_Benefites_e5293d9a-e4a4-4e9b-8ab5-857a65c93e6c.jpg?v=1735211341",
    },
    {
      title: "Spiruvita Hair Oil",
      price: "₹149.00 – ₹399.00",
      price_value: 149,
      image:"https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg?v=1735195662",
      hover_image:"https://spiruswastha.com/cdn/shop/files/SpirulinaHairOilBenefits_0cb6676d-68e5-4542-9615-b0a8eea0ca8a.jpg?v=1735195662",
    },
    {
      title: "Natural Spirulina Powder",
      price: "₹319.00 – ₹1,875.00",
      original_price: 399.0,
      discount: "20% OFF",
      price_value: 319,
      original_price_value: 399,
      image: "https://spiruswastha.com/cdn/shop/files/Spirulina_5c11599d-41c1-480b-bc6b-772b9e067846.jpg?v=1735208239",
      hover_image:"https://spiruswastha.com/cdn/shop/files/Spirulina_Powder_Benefits.jpg?v=1735208250",
    },
    {
      title: "Spiru Shine Shampoo",
      price: "₹239.00 – ₹749.00",
      original_price: 299.0,
      discount: "20% OFF",
      price_value: 239,
      original_price_value: 299,
      image:"https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg?v=1735208060",
      hover_image:"https://spiruswastha.com/cdn/shop/files/Spirulina_Shampoo_Benefits_44404c1b-40f7-4799-9acc-b79333d7876b.jpg?v=1735208072",
    },
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
          {data.map((x) => (
            <ProductCard
              title={x.title}
              image={x.image}
              image2={x.hover_image}
              price={x.price_value}
              orignalPrice={x.original_price_value}
              discountedPrice={x.price_value}
              discountPercentage={Math.floor(
                ((x.original_price_value - x.price_value) /
                  x.original_price_value) *
                  100
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
