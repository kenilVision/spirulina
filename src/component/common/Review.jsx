import React from 'react'

function Review({ rating, author, title, body, productTitle, productUrl }) {
  return (
    <div className="border-b  border-[#dbdbdb] py-4 text-start">
    <div className="flex  ">
      <div className="flex space-x-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
         <svg
         key={i}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 576 512"
         className="w-4 h-4"
         fill={i < rating ? "#FDCC0D" : "none"}
         stroke="#FDCC0D"
         strokeWidth="40"
     >
         <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
     </svg>
        ))}
      </div>
      
    </div>
    <div className="flex  mt-2 mb-1">
        <div className='h-[2.25rem] w-[2.25rem] me-2 bg-[#e9e9e9] flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1" stroke="#018d43" class="">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>
        </div>
        <div>
            <p className='text-[#018d43]'>{author}</p>
        </div>
    </div>
    <h3 className="font-semibold text-[#696969] mt-1 text-[18px]">{title}</h3>
    <p className="text-[18px] text-[#696969] mt-1">{body}</p>
    
  </div>
  )
}

export default Review
