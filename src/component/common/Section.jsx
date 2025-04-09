import React from 'react'
import 'aos/dist/aos.css';

function Section({ title, description, children }) {
  return (
    <div className=' my-[3.125rem] md:mt-20 md:mb-[6.25rem] lg:my-[9.375rem]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl w-full font-bold relative inline-block " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        {title}
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-green-600 mx-auto  mt-[12px] mb-[15px]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" ></div>

  
      {description && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >{description}</p>
      )}

 
      <div className="mt-8">{children}</div>
    </div>
    </div>
  )
}

export default Section
