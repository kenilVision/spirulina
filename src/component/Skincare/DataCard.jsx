import React from 'react'
import ProductCard from '../common/ProductCard'
function DataCard() {
  const image = [
    "https://spiruswastha.com/cdn/shop/files/facepack_power_first.jpg",
    "https://spiruswastha.com/cdn/shop/files/Facepackcream.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_04c3d88c-51eb-41a5-ac67-6f42a0dea0c7.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_6b5c2660-cfa0-4bad-8f5a-8043c3cada93.jpg",
    "https://spiruswastha.com/cdn/shop/files/MosturizingBodyLotion_34167e29-6d78-4b7e-b8fe-5f22b5a774ca.jpg",
    "https://spiruswastha.com/cdn/shop/files/MassageCream.jpg"
  ]
  const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"
  
const data =  [
  {
    "name": "Spirulina Face Pack Powder",
    "price": {
      "original": 199.00,
      "discounted": 199.00,
      "discount_percentage": 0.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/SpirulinaFacePackPowder.jpg?v=1618853281",
    "description": "A natural face pack powder enriched with spirulina to detoxify and rejuvenate the skin, promoting a healthy glow."
  },
  {
    "name": "Spiru Facepack Cream",
    "price": {
      "original": 349.00,
      "discounted": 279.00,
      "discount_percentage": 20.06
    },
    "image": "https://spiruswastha.com/cdn/shop/products/SpiruFacepackCream.jpg?v=1618853281",
    "description": "A nourishing facepack cream infused with spirulina to deeply cleanse, hydrate, and brighten the skin."
  },
  {
    "name": "Day Cream",
    "price": {
      "original": 599.00,
      "discounted": 449.00,
      "discount_percentage": 25.04
    },
    "image": "https://spiruswastha.com/cdn/shop/products/DayCream.jpg?v=1618853281",
    "description": "A lightweight day cream formulated to moisturize and protect the skin throughout the day."
  },
  {
    "name": "Avocado Night Cream",
    "price": {
      "original": 799.00,
      "discounted": 599.00,
      "discount_percentage": 25.03
    },
    "image": "https://spiruswastha.com/cdn/shop/products/AvocadoNightCream.jpg?v=1618853281",
    "description": "A rich night cream with avocado extracts that repairs and hydrates the skin overnight for a refreshed complexion."
  },
  {
    "name": "Moisturizing Body Lotion",
    "price": {
      "original": 350.00,
      "discounted": 280.00,
      "discount_percentage": 20.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/MoisturizingBodyLotion.jpg?v=1618853281",
    "description": "A hydrating body lotion that leaves the skin soft, smooth, and nourished."
  },
  {
    "name": "Massage Cream",
    "price": {
      "original": 350.00,
      "discounted": 280.00,
      "discount_percentage": 20.00
    },
    "image": "https://spiruswastha.com/cdn/shop/products/MassageCream.jpg?v=1618853281",
    "description": "A soothing massage cream that relaxes muscles while moisturizing the skin."
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
