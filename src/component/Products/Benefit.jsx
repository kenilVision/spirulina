import React from 'react'

function Benefit({benefits ,name }) {
  console.log(benefits)

  if (!benefits || benefits.length === 0) {
    return null; 
  }



  return (
    <div className='w-full mb-[30px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]'>
    <div 
    className="w-full max-w-[1440px]  mx-auto text-center px-[15px]"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    >
        <div>
          <h2 className="text-4xl font-bold relative inline-block ">
            {name}
            </h2>
            <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "></div>
            <div className="flex flex-wrap md:flex-nowrap gap-4  justify-center">

          {benefits.map((benefit, index) => (
          <div
            key={index}
            className="  md:w-full flex flex-col items-center text-center p-2"
          >
            <img
              src={`http://localhost:5050/image/productContent/benefits/${benefit.benefitImage}`} 
              alt={benefit.title}
              className=' w-[100px] h-[100px] md:h-[140px] md:w-[140px] lg:h-auto lg:w-auto'
            />
            <h3 className="text-xl font-semibold pt-[25px] pb-[10px] text-[23px]">
              {benefit.name}
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
