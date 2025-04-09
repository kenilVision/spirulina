import React, { useState } from "react";

function Description() {
  const title = "Spirulina Face Pack Powder";
  const Description =
    "Spirulina Face Pack Powder is crafted from pure nutrient dense spirulina, a superfood algae known for its high antioxidant and anti-inflammatory content. This spirulina face powder nourishes the skin helping to fight free radicals, reduce signs of ageing and enhance skin radiance. Ideal for cleansing and rejuvenating spirulina face pack powder gently detoxifies the skin making it a perfect addition to any natural and herbal skincare routine. Regular use helps reveal a clear smooth and revitalised complexion.";
  const [activeTab, setActiveTab] = useState("description");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      title: "Description",
      content: (
        <>
          <h3 className="text-[23px] text-[#018d43] pb-[10px] font-medium">
            {title}
          </h3>
          <p className="tracking-normal leading-[2] mb-[15px] text-[#696969] ">
            {Description}
          </p>
        </>
      ),
    },
    {
      title: "Additional Information",
      content: (
        <>
          <p className="mb-[15px] text-[#696969]">
            30-Days Return Policy: Items must be in original condition, unused,
            with tags and proof of purchase. Contact{" "}
            <a className="underline hover:text-[#018d43]" href="#">
              info@spiruswastha.com
            </a>
            . to initiate a return.
          </p>
          <p className="mb-[15px] text-[#696969]">
            Refund and Inspection: Refunds are processed within 10 business days
            after return inspection. Contact us if delays exceed 15 business
            days.
          </p>
          <p className="mb-[15px] text-[#696969]">
            Shipping and Delivery: Orders ship within 2-7 days with free
            shipping.
          </p>
        </>
      ),
    },
  ];

  return (
    //     <div className='bg-[#f6f6f8] w-full my-[60px]'>
    //     <div className='w-full max-w-[1440px] mx-auto px-[15px]  pt-[25px] lg:pt-[50px] pb-[50px] lg:pb-[30px] ] leading-9.5'>
    //         <div className='flex justify-center items-center text-[20px] gap-x-[25px]'>
    //             <div><button className='px-[25px] bg-[#018d43] text-white'>Description</button></div>
    //             <div className='lg:hidden'>Additional Information</div>

    //         </div>
    //         <div className='pt-[25px]'>
    //             <h3 className='text-[23px] text-[#018d43] pb-[10px] font-medium'>{title}</h3>
    //             <p className='tracking-normal leading-[2] mb-[15px] text-[#696969] '>{Description}</p>
    //         </div>

    //    </div>
    //    </div>

    <div className="bg-[#f6f6f8] w-full my-[60px]">
      <div
        className="w-full max-w-[1440px] mx-auto px-[15px]   lg:pt-[50px]  lg:pb-[30px] ] leading-9.5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Tabs */}
        <div className="hidden lg:flex    justify-center items-center text-[20px] gap-x-[25px]">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4  whitespace-nowrap w-full lg:w-auto flex: lg:block font-medium hover:cursor-pointer ${
              activeTab === "description"
                ? "px-[25px] bg-[#018d43] text-white "
                : "text-black "
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4  whitespace-nowrap w-full lg:w-auto font-medium hover:cursor-pointer ${
              activeTab === "info"
                ? "px-[25px] bg-[#018d43] text-white"
                : "text-black "
            }`}
          >
            Additional Information
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-4 hidden lg:block  leading-relaxed text-gray-700">
          {activeTab === "description" && (
            <div>
              <h3 className="text-[23px] text-[#018d43] pb-[10px] font-medium">
                {title}
              </h3>
              <p className="text-[18px] tracking-normal leading-[2] mb-[15px] text-[#696969]">
                {Description}
              </p>
            </div>
          )}
          {activeTab === "info" && (
            <div className="text-[18px] ">
              <p className="mb-[15px] text-[#696969]">
                30-Days Return Policy: Items must be in original condition,
                unused, with tags and proof of purchase. Contact{" "}
                <a className="underline hover:text-[#018d43]" href="#">
                  info@spiruswastha.com
                </a>
                . to initiate a return.
              </p>
              <p className="mb-[15px] text-[#696969]">
                Refund and Inspection: Refunds are processed within 10 business
                days after return inspection. Contact us if delays exceed 15
                business days.
              </p>
              <p className="mb-[15px] text-[#696969]">
                Shipping and Delivery: Orders ship within 2-7 days with free
                shipping.
              </p>
            </div>
          )}
        </div>

        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 mb-2 lg:hidden rounded"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full bg-[#a3a3a331] text-[20px]  font-medium text-black gap-3"
              aria-expanded={openIndex === index}
            >
              <span
                className={`py-[10px] px-5 font-medium ${
                  openIndex === index ? "text-[#018d43]" : "text-black"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`w-12 h-12 flex items-center justify-center text-[30px] text-white  ${
                  openIndex === index ? "bg-[#018d43]" : "bg-[#16569d]"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="pt-[25px] border-t border-gray-200">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;
