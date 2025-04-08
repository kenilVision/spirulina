import React from 'react'
import './WhyChoosеSpiruSwastha.css'

function WhyChoosеSpiruSwastha() {

    const data = [
        {
          "heading": "Pure Potent Superfoods",
          "image": "https://spiruswastha.com/cdn/shop/files/Pure_Potent.png?v=1733461990"
        },
        {
          "heading": "Sustainably Sourced Ingredients",
          "image": "https://spiruswastha.com/cdn/shop/files/Sustainably.png?v=1733462903"
        },
        {
          "heading": "Nutrient Dense Formulas",
          "image": "https://spiruswastha.com/cdn/shop/files/Nutrient.png?v=1733462950"
        },
        {
          "heading": "Expert-Backed Blends",
          "image": "https://spiruswastha.com/cdn/shop/files/Quality.png?v=1733463001&width=200"
        },
        {
          "heading": "Proudly Made in India",
          "image": "https://spiruswastha.com/cdn/shop/files/Holistic.png?v=1733463033&width=200"
        }
      ]
  return (
    <div className='mb-[6.25rem] mt-[3.125rem]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block ">
      Why Choosе SpiruSwastha
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"></div>
        <div className='flex flex-wrap  justify-center items-center' >   
        {data.map((x)=>{
                return (
                    <div className="flex flex-col items-center text-center w-1/2 md:w-1/3 lg:w-1/5 mt-[0.625rem] bg-white">
                        <div className='p-5'>
                            <div className='flex justify-center mb-5'>
                                <img src={x.image} height='100' width='100' className='h-[6.25rem] jiggle-on-hover w-[6.25rem]'/>
                            </div>
                            <div >
                            <h3 className="text-[1.25rem] font-medium   ">{x.heading}</h3>
                            </div>
                        </div>
                </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default WhyChoosеSpiruSwastha
