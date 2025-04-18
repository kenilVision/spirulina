import React from 'react'

function Ingredient({ Ingredient ,name }) {

  if (!Ingredient || Ingredient.length === 0) {
    return null; // Don't render anything if no benefits
  }

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
            {name}
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
                Ingredient.map((ingredient, index) => (
                    <div key={index} className='flex justify-center items-center gap-5'  >
                      <img src={`http://localhost:5050/image/productContent/ingredients/${ingredient.ingredientImage}`} alt={ingredient._id} className=' rounded-full max-w-[110px] lg:max-w-[208px]' />
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


