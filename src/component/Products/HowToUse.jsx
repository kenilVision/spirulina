import React from 'react'
function HowToUse({title ,detail }) {
  if (!detail || detail.length === 0) {
    return null; // Don't render anything if no benefits
  }

  const data = detail[0]

  return (
    <div className='mb-[20px] mt-[50px] md:mb-[50px] md:mt-[70px] lg:mb-[70px] lg:mt-[100px]'>
      <div className="w-full max-w-[1440px] mx-auto text-center px-[15px]">
        <h2
          className="text-4xl font-bold relative inline-block"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <div
          className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 lg:gap-x-15 pt-[25px] lg:pt-[35px]'>
          <div
            className="w-full items-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={`http://localhost:5050/image/productContent/howToUse/${data.stepImage}`}
              alt={data._id}
            />
          </div>

          <div
            className="w-full max-h-[300px] md:overflow-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {data.details.map((step, index) => (
              <div
                key={index}
                className={`text-start ${
                  index !== data.details.length - 1 ? 'border-b border-[#d6d6d6] pb-[10px] mb-[10px]' : ''
                } gap-5`}
              >
                <h3 className='text-[20px] md:text-[22px] lg:text-[28px] font-semibold text-[#018d43]'>
                  {step.stepName}
                </h3>
                <p className='text-[18px] md:text-[20px] lg:text-[24px] text-start'>
                  {step.instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToUse
