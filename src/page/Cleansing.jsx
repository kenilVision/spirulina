import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'

function Cleansing() {
  const image = [
    "https://spiruswastha.com/cdn/shop/files/SpirulinaFacewash.jpg",
    "https://spiruswastha.com/cdn/shop/files/UbtanFacewash.jpg",
    "https://spiruswastha.com/cdn/shop/files/D-Tan.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaWhiteningCleansingMilk.jpg",
    "https://spiruswastha.com/cdn/shop/files/Scrub.jpg",
    "https://spiruswastha.com/cdn/shop/files/MassageCream.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaConditioner.jpg"
  ]
  

    
  const data =  [
    {
      "name": "Spirulina Face Wash",
      "price": {
        "original": 199.00,
        "discounted": 199.00,
        "discount_percentage": 0.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Spirulina_Face_Wash.jpg",
      "description": "A gentle face wash enriched with Spirulina to deeply cleanse and refresh the skin."
    },
    {
      "name": "Ubtan Face Wash",
      "price": {
        "original": 299.00,
        "discounted": 239.00,
        "discount_percentage": 20.07
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Ubtan_Face_Wash.jpg",
      "description": "A natural Ubtan-based face wash that cleanses without drying, leaving skin refreshed and hydrated."
    },
    {
      "name": "D-Tan Cream",
      "price": {
        "original": 350.00,
        "discounted": 280.00,
        "discount_percentage": 20.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/D-Tan_Cream.jpg",
      "description": "An effective tan removal cream for face and body that hydrates while reducing pigmentation."
    },
    {
      "name": "Cleansing Milk",
      "price": {
        "original": 468.00,
        "discounted": 375.00,
        "discount_percentage": 19.87
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Cleansing_Milk.jpg",
      "description": "Aloe Vera-infused cleansing milk that gently removes impurities while nourishing the skin."
    },
    {
      "name": "Scrub",
      "price": {
        "original": 350.00,
        "discounted": 280.00,
        "discount_percentage": 20.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Scrub.jpg",
      "description": "Shea Butter and Walnut scrub that exfoliates dead skin cells, leaving skin smooth and radiant."
    },
    {
      "name": "Massage Cream",
      "price": {
        "original": 350.00,
        "discounted": 280.00,
        "discount_percentage": 20.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Massage_Cream.jpg",
      "description": "A nourishing massage cream that relaxes muscles while moisturizing the skin."
    },
    {
      "name": "Spiru Conditioner",
      "price": {
        "original": 399.00,
        "discounted": 319.00,
        "discount_percentage": 20.05
      },
      "image": "https://spiruswastha.com/cdn/shop/products/Spiru_Conditioner.jpg",
      "description": "A Spirulina-based conditioner that strengthens and revitalizes hair, leaving it soft and manageable."
    }
  ]

  const combinedData = data.map((item, index) => ({
    ...item,
    image: image[index] || item.image, 
  }));
  return (
    <div className='w-full max-w-[1470px] mx-auto px-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
   <Query />
   <DataCard combinedData={combinedData} />

   </div>
  )
}

export default Cleansing
