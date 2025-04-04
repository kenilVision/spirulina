import React from 'react'
import ProductCard from '../common/ProductCard'
function DataCard() {
const image = [
  "https://spiruswastha.com/cdn/shop/files/Spirulina_5c11599d-41c1-480b-bc6b-772b9e067846.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_79824743-c18c-4aa3-9b4b-d5f61b709e7a.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_4cdb3b58-be50-4a22-8211-84e33bd077da.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_d99d1f4b-473f-4ec2-9cc3-80d2b3fcfedf.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_7ec66fa6-d39f-43cf-b3a4-60a674648b85.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_df968f31-3717-4b6b-ad71-111d582cdabe.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_04a58c90-87b6-482a-8ea0-2040886b7d22.jpg",
  "https://spiruswastha.com/cdn/shop/files/Shilajit_Himalaya.jpg",
  "https://spiruswastha.com/cdn/shop/files/Spirulina_911ff0e2-007f-4627-b06b-9fd0eda911de.jpg",
  "https://spiruswastha.com/cdn/shop/files/Jivan_URJA.jpg",
  "https://spiruswastha.com/cdn/shop/files/Vita_Shakti.jpg"
]

  const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"
  
const data =  [
  {
    "name": "Natural Spirulina Powder",
    "price": {
      "original": 319.00,
      "discounted": 319.00,
      "discount_percentage": 0.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/NaturalSpirulinaPowder.jpg",
    "description": "A nutrient-dense superfood powder that supports overall wellness and boosts energy levels."
  },
  {
    "name": "Natural Amla Powder",
    "price": {
      "original": 299.00,
      "discounted": 239.00,
      "discount_percentage": 20.07
    },
    "image": "https://spiruswastha.com/cdn/shop/products/NaturalAmlaPowder.jpg",
    "description": "Rich in vitamin C, this powder enhances immunity and promotes healthy skin and hair."
  },
  {
    "name": "Natural Moringa Leaf Powder",
    "price": {
      "original": 299.00,
      "discounted": 239.00,
      "discount_percentage": 20.07
    },
    "image": "https://spiruswastha.com/cdn/shop/products/NaturalMoringaLeafPowder.jpg",
    "description": "Packed with essential nutrients, it supports overall health and increases vitality."
  },
  {
    "name": "Arjun Chaal Powder",
    "price": {
      "original": 299.00,
      "discounted": 239.00,
      "discount_percentage": 20.07
    },
    "image": "https://spiruswastha.com/cdn/shop/products/ArjunChaalPowder.jpg",
    "description": "Traditionally used to support heart health and improve circulation."
  },
  {
    "name": "Natural Wheatgrass Powder",
    "price": {
      "original": 375.00,
      "discounted": 300.00,
      "discount_percentage": 20.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/NaturalWheatgrassPowder.jpg",
    "description": "A powerful detoxifier that aids digestion and boosts energy."
  },
  {
    "name": "Giloy Powder",
    "price": {
      "original": 299.00,
      "discounted": 239.00,
      "discount_percentage": 20.07
    },
    "image": "https://spiruswastha.com/cdn/shop/products/GiloyPowder.jpg",
    "description": "Known for its immunity-boosting properties and helps in managing chronic fevers."
  },
  {
    "name": "Natural Ashwagandha Powder",
    "price": {
      "original": 375.00,
      "discounted": 300.00,
      "discount_percentage": 20.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/NaturalAshwagandhaPowder.jpg",
    "description": "Helps reduce stress and anxiety while enhancing stamina and strength."
  },
  {
    "name": "Shilajit Resin",
    "price": {
      "original": 1599.00,
      "discounted": 1200.00,
      "discount_percentage": 24.95
    },
    "image": "https://spiruswastha.com/cdn/shop/products/ShilajitResin.jpg",
    "description": "A natural supplement that boosts energy, enhances performance, and supports overall vitality."
  },
  {
    "name": "Spirulina Tablets for Kids",
    "price": {
      "original": 350.00,
      "discounted": 315.00,
      "discount_percentage": 10.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/SpirulinaTabletsforKids.jpg",
    "description": "Specially formulated to support the nutritional needs and immunity of growing children."
  },
  {
    "name": "Jivan Urja Powder",
    "price": {
      "original": 649.00,
      "discounted": 584.00,
      "discount_percentage": 10.01
    },
    "image": "https://spiruswastha.com/cdn/shop/products/JivanUrjaPowder.jpg",
    "description": "An herbal blend designed to rejuvenate the body and boost energy levels."
  },
  {
    "name": "Vita Shakti",
    "price": {
      "original": 850.00,
      "discounted": 850.00,
      "discount_percentage": 0.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/VitaShakti.jpg",
    "description": "A comprehensive supplement that provides essential vitamins and minerals for overall health."
  }
]

      
  return (
    <div className='grid grid-cols-2 gap-x-[30px] gap-y-[30px]  lg:grid-cols-4' >   
    {data.map((item,index)=>{
        const hasDiscount = item.price && item.price.discounted !== undefined;
    
    return (     <ProductCard 
                            key={index}
                            title={item.name}
                            image={image[index]}
                            image2={image2}
                            orignalPrice={hasDiscount ? item.price.original : null}
                            discountedPrice={hasDiscount ? item.price.discounted : null}
                            discountPercentage={hasDiscount ? item.price.discount_percentage : null}
                            price={!hasDiscount && item.price_range ? `₹${item.price_range.from} - ₹${item.price_range.to}` : null}
    />)
    }
)}
    </div>
  )
}

export default DataCard
