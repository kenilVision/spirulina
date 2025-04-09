import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'

function HeartCare() {

  const image = [
    "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_79824743-c18c-4aa3-9b4b-d5f61b709e7a.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_7315625a-a49a-422a-b74f-735536495112.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_28f75a09-2a81-4059-a98e-c51aed2fcc9a.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_d99d1f4b-473f-4ec2-9cc3-80d2b3fcfedf.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_1dc5c166-1b7f-4985-b7cc-4a793e04242d.jpg"
  ]
  

    
  const data = [
    {
      "name": "Natural Spirulina Tablet",
      "price": {
        "original": 499.00,
        "discounted": 424.00,
        "discount_percentage": 15.03
      },
      "image": "https://spiruswastha.com/cdn/shop/products/NaturalSpirulinaTablet.jpg",
      "description": "High-quality Spirulina tablets that promote cardiovascular health and enhance energy levels."
    },
    {
      "name": "Natural Amla Powder",
      "price": {
        "original": 299.00,
        "discounted": 239.00,
        "discount_percentage": 20.07
      },
      "image": "https://spiruswastha.com/cdn/shop/products/NaturalAmlaPowder.jpg",
      "description": "A nutrient-rich powder made from natural Amla, known to support heart health and boost immunity."
    },
    {
      "name": "Natural Spirulina Tablets Pouch",
      "price": {
        "original": 559.00,
        "discounted": 559.00,
        "discount_percentage": 0.00
      },
      "image": "https://spiruswastha.com/cdn/shop/products/NaturalSpirulinaTabletsPouch.jpg",
      "description": "A pouch of natural Spirulina tablets to maintain heart health and boost vitality."
    },
    {
      "name": "Natural Spirulina Capsules",
      "price": {
        "original": 599.00,
        "discounted": 479.00,
        "discount_percentage": 20.03
      },
      "image": "https://spiruswastha.com/cdn/shop/products/NaturalSpirulinaCapsules.jpg",
      "description": "Convenient Spirulina capsules to support heart function and overall well-being."
    },
    {
      "name": "Arjun Chaal Powder: Benefits, Usage, and Precautions",
      "price": {
        "original": 299.00,
        "discounted": 239.00,
        "discount_percentage": 20.07
      },
      "image": "https://spiruswastha.com/cdn/shop/products/ArjunChaalPowder.jpg",
      "description": "Powdered Arjun Chaal, traditionally used to strengthen the heart and improve circulation."
    },
    {
      "name": "Arjun Chaal Tablets for Heart",
      "price": {
        "original": 499.00,
        "discounted": 399.00,
        "discount_percentage": 20.04
      },
      "image": "https://spiruswastha.com/cdn/shop/products/ArjunChaalTablets.jpg",
      "description": "Tablets formulated with Arjun Chaal extract to support cardiovascular health."
    }
  ]
  return (
    <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
   <Query />
   <DataCard data={data} image={image} />

   </div>
  )
}

export default HeartCare
