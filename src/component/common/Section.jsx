import React from 'react'

function Section({ title, description, children }) {
  return (
    <div className='my-[9.375rem]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block ">
        {title}
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-green-600 mx-auto mx-auto mt-[12px] mb-[15px]"></div>

  
      {description && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
      )}

 
      <div className="mt-8">{children}</div>
    </div>
    </div>
  )
}

export default Section
