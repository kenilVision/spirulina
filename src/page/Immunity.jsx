import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'

function Immunity() {

  const image = [
    "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_7315625a-a49a-422a-b74f-735536495112.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_28f75a09-2a81-4059-a98e-c51aed2fcc9a.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_94e758bf-9436-47a1-a378-141500e8dd5b.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_d55b4e07-c829-4fdb-b8cd-5bc36b231a96.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_63685293-b94b-4458-8821-c0231820cd69.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_1dc5c166-1b7f-4985-b7cc-4a793e04242d.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_147288a9-b36d-4356-8ac5-775dc5e04ada.jpg",
    "https://spiruswastha.com/cdn/shop/files/Spirulina_b8ad039e-c547-41e5-a134-51d57a4bce2c.jpg",
    "https://spiruswastha.com/cdn/shop/files/Triphala_Churna.jpg",
    "https://spiruswastha.com/cdn/shop/files/varunadichurna.jpg",
    "https://spiruswastha.com/cdn/shop/files/Madhunashini.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaHoneywithMixNuts_5304a774-4274-4bd8-8b2d-e137c4542de6.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaFloralHoney_5b1c671c-a17c-46af-abf2-ff6f1bbc0b37.jpg",
    "https://spiruswastha.com/cdn/shop/files/SpirulinaTulsiHoney_299d8d69-cdb2-45da-a3fb-e4de17207a8f.jpg",
    "https://spiruswastha.com/cdn/shop/files/ForestHoneyHoney_0c3ef2cd-1331-4032-bb90-4ce0950122bd.jpg"
  ]


  
const data =  [
        {
          "name": "Natural Spirulina Tablet",
          "price": {
            "original": 499.00,
            "discounted": 424.00,
            "discount_percentage": 15.03
          },
          "image": "https://tse2.mm.bing.net/th?id=OIP.3Qh5-EmHeTgJVjGSh7ctxQHaHw&pid=Api",
          "description": "A supplement made from spirulina, known for its rich nutrient profile and immune-boosting properties."
        },
        {
          "name": "Natural Spirulina Tablets Pouch",
          "price_range": {
            "from": 559.00,
            "to": 3599.00
          },
          "image": "https://tse1.mm.bing.net/th?id=OIP.WzimTWciXhDzal-pUUWa1AHaHa&pid=Api",
          "description": "This pouch offers spirulina tablets in various quantities, catering to different needs."
        },
        {
          "name": "Natural Spirulina Capsules",
          "price": {
            "original": 599.00,
            "discounted": 479.00,
            "discount_percentage": 20.03
          },
          "image": "https://tse1.mm.bing.net/th/id/OIP.AncK9QoIrjCh3SNurP0GUwHaHa?pid=Api",
          "description": "Capsules containing spirulina, providing an alternative form for consumption."
        },
        {
          "name": "Natural Moringa Leaf Tablets",
          "price": {
            "original": 499.00,
            "discounted": 399.00,
            "discount_percentage": 20.04
          },
          "image": "https://tse4.mm.bing.net/th?id=OIP.wLLsLEcfCc9s4sPyk5yiaAHaFh&pid=Api",
          "description": "Tablets made from moringa leaves, recognized for their antioxidant content and support for immune function."
        },
        {
          "name": "Natural Ashwagandha Tablets",
          "price": {
            "original": 499.00,
            "discounted": 399.00,
            "discount_percentage": 20.04
          },
          "image": "https://tse2.mm.bing.net/th?id=OIP.T9vQDhlfVSSuwTVTpHPeiAHaMT&pid=Api",
          "description": "Ashwagandha tablets that may help in reducing stress and boosting immunity."
        },
        {
          "name": "Natural Giloy Tablets",
          "price": {
            "original": 499.00,
            "discounted": 399.00,
            "discount_percentage": 20.04
          },
          "image": "https://tse1.mm.bing.net/th?id=OIP.cQNVBZZmAV58o1KAHAKLjgHaHa&pid=Api",
          "description": "Tablets formulated with giloy, an herb traditionally used to enhance the immune system."
        },
        {
          "name": "Triphala Churna",
          "price": {
            "original": 349.00,
            "discounted": 314.00,
            "discount_percentage": 10.03
          },
          "image": "https://tse3.mm.bing.net/th?id=OIP.EJcD20qjk6PRM51INK42hwHaFC&pid=Api",
          "description": "A traditional Ayurvedic formulation that supports digestion and overall health."
        },
        {
          "name": "Varunadi Churna",
          "price": {
            "original": 499.00,
            "discounted": 449.00,
            "discount_percentage": 10.02
          },
          "image": "https://example.com/image.jpg",
          "description": "An herbal blend aimed at supporting kidney and urinary health."
        },
        {
          "name": "Madhunashini",
          "price": {
            "original": 899.00,
            "discounted": 799.00,
            "discount_percentage": 11.12
          },
          "image": "https://tse1.mm.bing.net/th?id=OIP.TdDtadpIZeVUDQZ-EyTEfwHaE8&pid=Api",
          "description": "A supplement traditionally used to help manage blood sugar levels."
        },
        {
          "name": "Honey with Mix Nuts",
          "price": {
            "original": 375.00,
            "discounted": 300.00,
            "discount_percentage": 20.00
          },
          "image": "https://tse4.mm.bing.net/th?id=OIP.Z0KnKfkTiiZCVTLrdoIX7gHaE7&pid=Api",
          "description": "A blend of honey and mixed nuts, offering both taste and health benefits."
        }
      ]
  return (
   <>
   <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
   <Query />
   <DataCard data={data} image={image} />

   </div>
   </>
  )
}

export default Immunity
