import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'

function HairCare() {

  const image = [
    "https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg",
    "https://spiruswastha.com/cdn/shop/files/1_8b256a4e-8500-4c21-94cf-9bddfab4ce59.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_Ayurveda_Shampoo.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaConditioner.jpg"
  ]

    
  const data = [
    {
      "name": "Spiruvita Hair Oil",
      "price": {
        "original": 399.00,
        "discounted": 149.00,
        "discount_percentage": 62.66
      },
      "image": "https://spiruswastha.com/cdn/shop/products/SpiruvitaHairOil.jpg",
      "description": "A nourishing hair oil formulated to strengthen hair roots and promote healthy growth."
    },
    {
      "name": "Spiru Shine Shampoo",
      "price": {
        "original": 749.00,
        "discounted": 239.00,
        "discount_percentage": 68.08
      },
      "image": "https://spiruswastha.com/cdn/shop/products/SpiruShineShampoo.jpg",
      "description": "A revitalizing shampoo that cleanses the scalp and adds shine to your hair."
    },
    {
      "name": "Spiru Ayurveda Shampoo",
      "price": {
        "original": 399.00,
        "discounted": 319.00,
        "discount_percentage": 20.05
      },
      "image": "https://spiruswastha.com/cdn/shop/products/SpiruAyurvedaShampoo.jpg",
      "description": "An Ayurvedic shampoo infused with natural herbs for gentle cleansing and nourishment."
    },
    {
      "name": "Spiru Conditioner",
      "price": {
        "original": 399.00,
        "discounted": 319.00,
        "discount_percentage": 20.05
      },
      "image": "https://spiruswastha.com/cdn/shop/products/SpiruConditioner.jpg",
      "description": "A moisturizing conditioner that detangles and softens hair, leaving it smooth and manageable."
    },
    {
      "name": "Spiru Swastha Hair Care Combo",
      "price": {
        "original": 250.00,
        "discounted": 225.00,
        "discount_percentage": 10.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/SpiruSwasthaHairCareCombo.jpg",
      "description": "A comprehensive hair care set including shampoo and conditioner for complete hair nourishment."
    }
  ]
  
  const combinedData = data.map((item, index) => ({
    ...item,
    image: image[index] || item.image, 
  }));
  return (
    <>
    <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
    <Query />
    <DataCard combinedData={combinedData} />
 
    </div>
    </>
  )
}

export default HairCare
HairCare