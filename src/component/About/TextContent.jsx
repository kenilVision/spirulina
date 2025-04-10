import React from "react";

function TextContent() {
  const certificateImages = [
    "https://spiruswastha.com/cdn/shop/files/Certificates_1.png?v=1733718742&width=600",
    "https://spiruswastha.com/cdn/shop/files/Certificates_2.png?v=1733718762&width=1000",
    "https://spiruswastha.com/cdn/shop/files/Certificates_3.png?v=1733718776&width=600",
    "https://spiruswastha.com/cdn/shop/files/Certificates_4.png?v=1733718791&width=1000",
    "https://spiruswastha.com/cdn/shop/files/Certificates_5.png?v=1733718807&width=1000",
  ];  // Array of certificate image URLs

  const contentData = [
    {
      title: "About Us",
      img: "https://spiruswastha.com/cdn/shop/files/about_us.jpg?v=1733717600&width=700",
      paragraphs: [
        "Spiru Swastha India Pvt Ltd was established in 2023 with the aim of producing healthy food and making it available to most people in India and other countries. The founder, Mr. Rajesh Pari, with the help of Spira Agro Wellness, initiated the efforts toward achieving the goal.",
        "Our dream comes true with the hygienic production of Spirulina with the highest quality of nutrition. We currently produce over 500 kg of Spirulina per month and expect to reach about a ton by the end of 2024.",
      ],
    },
    {
      title: "What is Spirulina?",
      img: "https://spiruswastha.com/cdn/shop/files/What_is_Spirulina.jpg?v=1733717708&width=1600",
      paragraphs: [
        "Spirulina is a blue-green algae that grows in fresh or salt water and is rich in nutrients and antioxidants. It is consumed by humans and other animals and is used as a dietary supplement, as well as protein and vitamin supplements, in aquaculture diets.",
        "Spirulina is rich in vitamins and minerals that are essential for maintaining a healthy immune system. It also has antioxidant properties and anti-inflammatory properties.",
        "Spirulina is one of the world's most popular supplements. It has been used as a food source for several centuries in Mexico and some African countries. NASA also used it as a dietary supplement for astronauts on space missions.",
        "Spirulina can be taken in tablet or powder form. Dried spirulina contains about 51%-71% protein.",
      ],
    },
    {
      title: "Why Spirulina?",
      img: "https://spiruswastha.com/cdn/shop/files/Why_Spirulina.jpg?v=1733717785&width=1600",
      paragraphs: [
        "These days, eating junk food and having erratic eating habits are normal. A daily dose of 2-4 grams of Spiru Swastha Spirulina is great for enhancing one's health. It is the best method to top up your low daily nutrition and nutrient intake.",
      ],
    },
  ];  // Array of content data
  return (
    <>
      {contentData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[10px] mt-[20px] md:mt-[60px] md:mb-[50px] max-w-[1440px] mx-auto px-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {/* Image block */}
          <div className={`mt-[10px] ${index % 2 == 0 ? "md:order-last" : ""}`}>
            <img src={item.img} className="w-full h-full object-contain" />
          </div>

          {/* Text block */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-[2.5rem] mt-[10px] md:mt-0 mb-[5px] md:mb-[20px] text-[#222222] font-[600] leading-[3.125rem]">
              {item.title}
            </h3>
            <div className="text-[#878787] text-[16px] md:text-[18px] mb-[1.25rem]">
              {item.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="mb-[20px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-[1440px] mx-auto  px-[15px] mb-[] md:my-[80px] lg:my-[100px] ">
        <h3
          className="  text-[2.5rem]   w-full  mb-[20px] text-[#222222] font-[600] leading-[3.125rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Certificate
        </h3>
        <div
          className=" flex flex-wrap justify-evenly  w-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {certificateImages.map((src, idx) => (
            <div
              key={idx}
              className=" w-1/2 lg:w-1/5 mt-[15px] px-[7.5px] group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                src={src}
                className="object-fill w-full h-full "
                alt={`Certificate ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TextContent;
