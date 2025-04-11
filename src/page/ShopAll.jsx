import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'

function ShopAll() {
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
        "https://spiruswastha.com/cdn/shop/files/ForestHoneyHoney_0c3ef2cd-1331-4032-bb90-4ce0950122bd.jpg",
        "https://spiruswastha.com/cdn/shop/files/facepack_power_first.jpg",
        "https://spiruswastha.com/cdn/shop/files/Facepackcream.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_04c3d88c-51eb-41a5-ac67-6f42a0dea0c7.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_6b5c2660-cfa0-4bad-8f5a-8043c3cada93.jpg",
        "https://spiruswastha.com/cdn/shop/files/MosturizingBodyLotion_34167e29-6d78-4b7e-b8fe-5f22b5a774ca.jpg",
        "https://spiruswastha.com/cdn/shop/files/MassageCream.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg",
        "https://spiruswastha.com/cdn/shop/files/1_8b256a4e-8500-4c21-94cf-9bddfab4ce59.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_Ayurveda_Shampoo.jpg",
        "https://spiruswastha.com/cdn/shop/files/SpirulinaConditioner.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_79824743-c18c-4aa3-9b4b-d5f61b709e7a.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_7315625a-a49a-422a-b74f-735536495112.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_28f75a09-2a81-4059-a98e-c51aed2fcc9a.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_d99d1f4b-473f-4ec2-9cc3-80d2b3fcfedf.jpg",
        "https://spiruswastha.com/cdn/shop/files/Spirulina_1dc5c166-1b7f-4985-b7cc-4a793e04242d.jpg",
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
        "https://spiruswastha.com/cdn/shop/files/Vita_Shakti.jpg",
        "https://spiruswastha.com/cdn/shop/files/SpirulinaFacewash.jpg",
        "https://spiruswastha.com/cdn/shop/files/UbtanFacewash.jpg",
        "https://spiruswastha.com/cdn/shop/files/D-Tan.jpg",
        "https://spiruswastha.com/cdn/shop/files/SpirulinaWhiteningCleansingMilk.jpg",
        "https://spiruswastha.com/cdn/shop/files/Scrub.jpg",
        "https://spiruswastha.com/cdn/shop/files/MassageCream.jpg",
        "https://spiruswastha.com/cdn/shop/files/SpirulinaConditioner.jpg"
      ]
    

    const data=[
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
          },
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
          },
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
          },
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
          },
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
          },
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
    ]0


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

export default ShopAll
