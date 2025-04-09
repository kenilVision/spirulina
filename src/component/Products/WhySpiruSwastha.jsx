import React from 'react'

function WhySpiruSwastha() {
    const data = [
        {
            "title": "Health Outcomes",
            "text": "Ayurvedic solutions delivered thoughtfully",
            "image": "https://spiruswastha.com/cdn/shop/files/Health_Outcomes_1.svg?v=1734004807"
          },
          {
            "title": "Bespoke Ayurveda",
            "text": "Programs Crafted by Ayurvedacharayas",
            "image": "https://spiruswastha.com/cdn/shop/files/ayurvedic_Products_1_1.svg?v=1734004832"
          },
          {
            "title": "Real Assistance",
            "text": "Ayurvedic Health Experts",
            "image": "https://spiruswastha.com/cdn/shop/files/Real_Assistance_1.svg?v=1734004853"
          },
          {
            "title": "Natural Ingredients",
            "text": "Safe and Natural Formulations",
            "image": "https://spiruswastha.com/cdn/shop/files/Natural_Ingredients_1.svg?v=1734004872"
          }
      ]
  return (
    <div className='mb-[20px] mt-[50px] md:mb-[50px] md:mt-[70px] lg:mb-[70px] lg:mt-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 
      className="text-4xl font-bold relative inline-block "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      >
      Why SpiruSwastha?
      </h2>
      <div 
      className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      ></div>
        <div 
        className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4'
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >   
        {data.map((x)=>{
                return (
                    <div className="flex flex-col items-center text-center px-[15px] mt-[1.875rem] bg-white">
                <div className="w-24 h-24 bg-cover bg-center  ">
                  <img src={x.image} className='transition-transform duration-300 transform scale-90 hover:scale-110'/>
                </div>
                <div className='pb-[0.9375rem] flex flex-col items-center '>
                <h3 className="text-[22px] font-semibold mt-4 mb-[0.3125rem]">{x.title}</h3>
                <p className="text-[18px] text-gray-600 mt-2">{x.text}</p>
                </div>
                </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default WhySpiruSwastha
