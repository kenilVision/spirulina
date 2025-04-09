import React, { useState } from 'react';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What makes SpiruSwastha products different from other wellness brands?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          SpiruSwastha focuses on pure, potent superfoods and sustainably sourced ingredients. Our nutrient-dense formulas are designed to support a holistic approach to wellness while maintaining the highest quality standards.
        </p>
      )
    },
    {
      title: "Are SpiruSwastha products certified Natural?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          Yes, many of our products, like Natural Amla Powder and Moringa Leaf Powder, are certified Natural and free from chemicals, pesticides, and artificial additives.
        </p>
      )
    },
    {
      title: "How can I include these Ayurvedic products in my daily routine?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          Our products are designed for easy integration into your daily life. For example:
          <br />– Add Spirulina Face Pack Powder to your skincare regimen.
          <br />– Use Spirulina Hair Oil for scalp nourishment.
          <br />– Take Natural Moringa Leaf Tablets as part of your morning health routine.
        </p>
      )
    },
    {
      title: "Can I consult an expert for personalized recommendations?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          Yes, SpiruSwastha offers free consultations with Ayurveda experts who can guide you on product usage, lifestyle adjustments, and diet plans to meet your wellness goals.
        </p>
      )
    },
    {
      title: "Are there any side effects of using your products?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          SpiruSwastha products are made from natural, plant-based ingredients and are generally safe for consumption and topical use. However, we recommend consulting with a healthcare professional if you have allergies or medical conditions.
        </p>
      )
    },
    {
      title: "What are the benefits of using Spirulina-based products?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          Spirulina is a nutrient powerhouse packed with vitamins, minerals, and antioxidants. It helps in strengthening immunity, improving skin and hair health, detoxification, and boosting overall energy levels.
        </p>
      )
    },
    {
      title: "How do I choose the right product for my health goals?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          – For immunity: Try Natural Amla Powder or Spirulina Powder.
          <br />– For skin health: Use Spirulina Face Pack Powder.
          <br />– For heart health: Opt for Arjun Chaal Tablets or Arjun Chaal Powder.
          <br />– For strength and cleansing: Moringa Leaf Powder and Tablets are ideal.
        </p>
      )
    },
    {
      title: "How can I complement these products for better results?",
      content: (
        <p className="mb-[15px] text-[#696969]">
          We recommend combining our Ayurvedic products with yoga asanas, mindful living, and balanced diet plans. Check out our lifestyle recommendations and reach out to our experts for tailored advice.
        </p>
      )
    }
  ];

  return (
    <section className="my-[50px] md:my-[100px]  bg-white">
      <div className="max-w-[1440px] mx-auto px-[15px] ">

      {accordionData.map((item, index) => (
        <div 
        key={index} 
        className="border border-[#f6f6f8] mb-2 rounded"
        >
          <button
  onClick={() => toggleAccordion(index)}
  className="flex items-center justify-between w-full bg-[#a3a3a331] text-[20px] font-medium text-black gap-3"
  aria-expanded={openIndex === index}
>
  <span
    className={`py-[10px] px-5 font-medium text-start text-[18px] ${
      openIndex === index ? 'text-[#018d43]' : 'text-black'
    }`}
  >
    {item.title}
  </span>

  <span
    className={`w-[36px] h-[36px] flex items-center justify-center text-white shrink-0 ${
      openIndex === index ? 'bg-[#018d43]' : 'bg-[#16569d]'
    }`}
  >
    <span
      className={`text-[28px] font-bold transition-transform duration-300 ease-in-out transform ${
        openIndex === index ? 'rotate-180' : 'rotate-0'
      }`}
    >
      {openIndex === index ? '−' : '+'}
    </span>
  </span>
</button>
          {openIndex === index && (
            <div className="pt-[25px]  text-[18px] text-[#878787]   px-5">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
}

export default FAQs;
