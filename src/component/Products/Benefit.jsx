import React from 'react'

function Benefit() {


    const benefits = [
        {
          title: "Keeps Skin Oil-Free and Balanced",
          description:
            "Spirulina Face Pack Powder works wonders for oily skin by controlling excess oil production. Its natural and herbal properties absorb oil from the skin's surface, leaving it fresh, matte, and balanced without drying it out. Regular use helps prevent greasiness while maintaining a healthy, natural and herbal glow.",
          img: "https://spiruswastha.com/cdn/shop/files/Keeps_Skin_Oil-Free_and_Balanced.svg?v=1734697320",
        },
        {
          title: "Smoothens Skin Texture",
          description:
            "Packed with proteins and amino acids, Spirulina helps repair and renew skin cells, resulting in smoother and softer skin. By gently exfoliating dead skin cells, it improves skin texture, making your face feel silky, supple, and rejuvenated.",
          img: "https://spiruswastha.com/cdn/shop/files/Smoothens_Skin_Texture.svg?v=1734697361",
        },
        {
          title: "Brightens Skin Tone",
          description:
            "Spirulina Face Pack Powder is rich in vitamins and antioxidants like Vitamin C, which help to brighten the skin and even out the complexion. It combats dullness and dark spots caused by environmental stress, promoting a radiant, glowing skin tone.",
          img: "https://spiruswastha.com/cdn/shop/files/Brightens_Skin_Tone.svg?v=1734697406",
        },
      ];



  return (
    <div className='w-full mb-[30px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <div className="t4s-code__liquid" data-hdt-reveal="slide-in">
          <h2 className="text-4xl font-bold relative inline-block ">
                Benefits of Spirulina Face Pack Powder
            </h2>
            <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "></div>
          <div className="flex flex-wrap justify-center gap-y-10  ">

          {benefits.map((benefit, index) => (
          <div
            key={index}
            className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/3  flex flex-col items-center text-center   "
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className=' w-[100px] h-[100px] md:h-[140px] md:w-[140px] lg:h-auto lg:w-auto'
            />
            <h3 className="text-xl font-semibold pt-[25px] pb-[10px] text-[23px]">
              {benefit.title}
            </h3>
            <p className="text-[18px] text-gray-700 lg:mx-[30px]">{benefit.description}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit
