import React from 'react'

function Ingredient() {

    const ingredients = [
        {
            name: "Spirulina Powder",
            image: "//spiruswastha.com/cdn/shop/files/Spirulina_Powder.png?v=1734697234",
            alt: "Spirulina Powder",
          },
          {
            name: "Aloevera Powder",
            image: "//spiruswastha.com/cdn/shop/files/Aloevera_Powder.png?v=1734697262",
            alt: "Aloevera Powder",
          },
    ]
  return (
    <div className='w-full mb-[30px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <div >
          <h2 
          className="text-4xl font-bold relative inline-block "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          >
            Spirulina Powder
            </h2>
            <div 
            className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            ></div>
          <div 
          className="flex flex-wrap justify-evenly items-center gap gap-x-5 gap-y-5 "
          data-aos="fade-up"
          data-aos-duration="1000" 
          data-aos-once="true"
          >
            {
                ingredients.map((ingredient, index) => (
                    <div key={index} className='flex justify-center items-center gap-5'  >
                      <img src={ingredient.image} alt={ingredient.name} className=' rounded-full max-w-[110px] lg:max-w-[208px]' />
                      <h3 className='text-[18px]' >{ingredient.name}</h3>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredient
