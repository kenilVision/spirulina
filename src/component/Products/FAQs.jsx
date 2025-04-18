import React, { useState } from 'react';
  

function FAQs( {FAQs}) {
  if (!FAQs || FAQs.length === 0) {
    return null; // Don't render anything if no benefits
  }

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };


  return (
    <div className='w-full mb-[30px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <div className="t4s-code__liquid" data-hdt-reveal="slide-in">
          <h2 
          className="text-4xl font-bold relative inline-block "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          >
            FAQs
            </h2>
            <div 
            className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            ></div>
          <div 
          className=" "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          >
          {FAQs.map((faq, index) => (
          <div key={index} className="border-b border-[#dddddd] py-[1.875rem] transition-all duration-300 ease-in-out">
            <button
              className={` w-full hover:cursor-pointer text-left rounded-lg  flex  items-center   text-[24px] transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'text-[#018d43]' : 'text-black'
              }`}
              onClick={() => toggleFAQ(index)}
            >
                <span
                className={`mr-3 border-2 rounded-full border-[#018d43] text-[#018d43] font-thin text-[30px] 
                    flex items-center justify-center transition-all duration-1000 ease-in-out
                w-10 h-10
                 ${
                    activeIndex === index ? "rotate-180" :"rotate-0"}
                `}
                >
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 ease-in-out"
              >
                {/* Vertical line (hide when open) */}
                <line
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="20"
                  stroke="#018d43"
                  strokeWidth="1.5"
                  className={`transition-all duration-300 ${
                    activeIndex === index ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
                  } origin-center`}
                />
                
                {/* Horizontal line (always visible) */}
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="#018d43"
                  strokeWidth="1.5"
                />
              </svg>
                </span>
              {faq.question}
            </button>
            <div
              className={`overflow-hidden transition-all  duration-1000 ease-in-out ${
                activeIndex === index ? "max-h-[1000px] " : "max-h-0 "
              }`}
            >
               <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out  ${
                activeIndex === index ? "max-h-[1000px] " : "max-h-0 "
              }`}
            >
              <div className={` ms-13 text-[18px] text-start     overflow-hidden  text-[#696969] transition-all duration-1000 ease-in-out`}>
                <p>{faq.answer}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>


    // <div className="my-12">
    //   <h3 className="text-2xl font-bold mb-6 text-center">FAQs</h3>
    //   <div className="space-y-4">
    //     {faqs.map((faq, index) => (
    //       <div key={index} className="border-b pb-4">
    //         <button
    //           className={`faq-question w-full text-left font-semibold flex justify-between items-center py-3 ${
    //             activeIndex === index ? 'text-blue-600' : 'text-black'
    //           }`}
    //           onClick={() => toggleFAQ(index)}
    //         >
    //           {faq.question}
    //           <span className="ml-2">{activeIndex === index ? '-' : '+'}</span>
    //         </button>
    //         {activeIndex === index && (
    //           <div className="faq-answer mt-2 text-gray-700">
    //             <p>{faq.answer}</p>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default FAQs
