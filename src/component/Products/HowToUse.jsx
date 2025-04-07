import React from 'react'

function HowToUse() {
    const title = "Spirulina Face Pack Powder"
    const image = "https://spiruswastha.com/cdn/shop/files/How_to_Use.jpg?v=1734697181" 
    const steps = [

        {
            "step": "Step 1: Mix and Apply",
            "description": "Combine 1 teaspoon of Spirulina Face Pack Powder with water, Apply evenly to your face and neck, avoiding the eye area."
          },
          {
            "step": "Step 2: Wait and Rinse",
            "description": "Leave the pack on for 10-15 minutes, Rinse off with lukewarm water, pat dry, and follow with a gentle moisturizer."
          }
         
        ]
  return (
    <div className='mb-[20px] mt-[50px] md:mb-[50px] md:mt-[70px] lg:mb-[70px] lg:mt-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block ">
        How to Use {title}
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5  gap-x-5 lg:gap-x-15  pt-[25px] lg:pt-[35px]    ' > 
        <div className="w-full items-start ">
          <img
            src="https://spiruswastha.com/cdn/shop/files/How_to_Use.jpg?v=1734697181"
            alt="Mix and Apply: Combine 1 teaspoon of Spirulina Face Pack Powder with water, Apply evenly to your face and neck, avoiding the eye area."
           
          />
        </div>
        <div className="w-full max-h-[300px] md:overflow-scroll ">
            {
                steps.map((step, index) => (

                    <div key={index} className={`text-start  ${
                        index !== steps.length - 1 ? 'border-b border-[#d6d6d6] pb-[10px] mb-[10px]' : ''
                      } gap-5`}>
                      <h3 className=' text-[20px] md:text-[22px] lg:text-[28px] font-semibold text-[#018d43]' >{step.step}</h3>
                      <p className='text-[18px] md:text-[20px] lg:text-[24px] text-start'>{step.description}</p>
                      </div>
                ))
            }
        </div>

        </div>
    </div>
    </div>
  )
}

export default HowToUse
