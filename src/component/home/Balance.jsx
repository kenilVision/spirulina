import React from 'react'

function Balance() {

  const data = [
    {
      "title": "Ayurvedic Products",
      "text": "That can easily integrate into your daily life",
      "image": "https://spiruswastha.com/cdn/shop/files/ayurvedic_Products_1.svg?v=1733747320&width=100"
    },
    {
      "title": "Lifestyle Recommendations",
      "text": "Complement it with yoga asanas for maximum benefit",
      "image": "https://spiruswastha.com/cdn/shop/files/yoga-pose_4941620_1.svg?v=1733747597&width=100"
    },
    {
      "title": "Wellness Tips",
      "text": "Blogs on Daily Ayurvedic self-care practices to enhance well-being.",
      "image": "https://spiruswastha.com/cdn/shop/files/garden-location_18861819_2.svg?v=1740049294&width=100"
    },
    {
      "title": "Free Consultation",
      "text": "Get in touch with our expert for personalized guidance",
      "image": "https://spiruswastha.com/cdn/shop/files/Expert_Connect_1_c88fb280-6826-4668-85c4-1705915eb957.svg?v=1735022925&width=100"
    }
  ]
  
  return (
<div className='mb-[6.25rem] mt-[3.125rem]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block ">
      4 Balance
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"></div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4' >   
        {data.map((x)=>{
                return (
                    <div className="flex flex-col items-center text-center px-[15px] mt-[1.875rem] bg-white">
                <div className="w-24 h-24 bg-cover bg-center  ">
                  <img src={x.image} className='transition-transform duration-300 transform scale-90 hover:scale-110'/>
                </div>
                <div className='pb-[0.9375rem]'>
                <h3 className="text-lg font-semibold mt-4 mb-[0.3125rem]">{x.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{x.text}</p>
                </div>
                </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Balance
