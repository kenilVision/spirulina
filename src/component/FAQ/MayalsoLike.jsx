import React from 'react'
import ProductCard from '../common/ProductCard'

function MayalsoLike() {
    const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"
    const data =  [
      {
        name: "Natural Spirulina Tablet",
        price: {
          original: 499.00,
          discounted: 424.00,
          discount_percentage: 15.03
        },
        image: "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg?v=1735211315",
        hover_image: "https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_Benefites_e5293d9a-e4a4-4e9b-8ab5-857a65c93e6c.jpg?v=1735211341",
        description: "A natural Spirulina supplement for boosting energy and supporting overall wellness."
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
        description: "Pure Spirulina powder, perfect for mixing into shakes or meals for daily health support."
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
        description: "A Spirulina-enriched shampoo to strengthen and revitalize hair for a natural shine."
      }
    ];


      
  return (
    <div className='w-full  md:mt-[40px] mb-[50px] lg:mt-[75px] lg:mb-[50px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 
      className="text-4xl font-bold relative inline-block"
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
        className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] md:grid-cols-3 lg:grid-cols-4' 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >   
            <ProductCard 
            data={data}
            />
        </div>
    </div>
    </div>
  )
}

export default MayalsoLike
