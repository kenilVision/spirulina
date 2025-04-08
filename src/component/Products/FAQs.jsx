import React, { useState } from 'react';


const faqs = [
    {
      question: 'What is Spirulina Face Pack Powder?',
      answer:
        'Spirulina Face Pack Powder is a natural skincare product crafted from spirulina, a nutrient-dense blue-green algae known for its high levels of vitamins, minerals, and antioxidants. This powder is designed to be used as a face mask, offering skin rejuvenation and nourishment. Spirulina is prized for its detoxifying and rejuvenating properties, helping to remove impurities and enhance skin radiance. Applying spirulina to the skin provides essential nutrients, leaving your face refreshed and revitalized.',
    },
    {
      question: 'What are the benefits of using Spirulina Face Pack Powder?',
      answer:
        'Using Spirulina Face Pack Powder brings multiple benefits to the skin. Its detoxifying properties help remove impurities, dirt, and toxins. Rich in antioxidants, it fights free radicals, reduces fine lines and wrinkles, and promotes a brighter, more even skin tone. It helps fade dark spots and pigmentation, while its moisturizing and soothing effects leave the skin hydrated, soft, and smooth. Suitable for most skin types, regular use can make your skin appear healthier and more vibrant.',
    },
    {
      question: 'How do I use Spirulina Face Pack Powder?',
      answer:
        'To use Spirulina Face Pack Powder, mix a small amount of the powder with your preferred liquid, such as water, rose water, or yogurt, to create a smooth paste. Apply evenly to your face, avoiding sensitive areas like the eyes and lips. Leave the mask on for 10-15 minutes to dry, then rinse off thoroughly with lukewarm water and pat your face dry. For best results, follow up with a moisturizer. Use once or twice a week for refreshed and rejuvenated skin.',
    },
    {
      question: 'Is Spirulina Face Pack Powder suitable for all skin types?',
      answer:
        'Yes, Spirulina Face Pack Powder is generally safe for all skin types, including dry, oily, sensitive, and combination skin. Its natural and gentle care makes it suitable for sensitive skin, although a patch test is recommended before first use. Apply a small amount on a discreet area like the wrist or behind the ear and wait 24 hours to check for any reaction. With its gentle formula, spirulina provides hydration without greasiness and nourishment without over-drying, making it versatile for various skin types.',
    },
    {
      question: 'Can Spirulina Face Pack Powder help with acne?',
      answer:
        'Yes, Spirulina Face Pack Powder can be beneficial for acne-prone skin. Its antibacterial and anti-inflammatory properties help reduce acne and calm irritated skin. Chlorophyll in spirulina detoxifies the skin, reduces acne-causing bacteria, and keeps pores clean. Regular use can minimize breakouts, soothe inflammation, and contribute to a clearer complexion. Its rich nutrients also help repair and regenerate skin cells, benefiting those with acne scars and uneven skin texture.',
    },
    {
      question: 'How often should I use Spirulina Face Pack Powder?',
      answer:
        'For most people, using Spirulina Face Pack Powder once or twice a week is sufficient to achieve noticeable results. Those with sensitive skin may find that once a week is more appropriate, while individuals with oily or acne-prone skin may benefit from twice-weekly use to control excess oil and impurities. Regular use can maintain a healthy, radiant appearance and promote ongoing detoxification and nourishment for the skin.',
    },
    {
      question: 'Are there any side effects of using Spirulina Face Pack Powder?',
      answer:
        'Spirulina Face Pack Powder is made from natural ingredients and is generally safe for most people. However, a patch test is recommended, especially for those with sensitive or reactive skin. Apply a small amount of the prepared face pack to a discreet area, such as the wrist, and wait 24 hours to observe any reaction. If redness, irritation, or discomfort occurs, discontinue use. In rare cases, some individuals may be allergic to spirulina, so this precaution ensures a comfortable experience.',
    },
    {
      question: 'Can Spirulina Face Pack Powder be mixed with other ingredients?',
      answer:
        'Yes, Spirulina Face Pack Powder can be customized by mixing it with other natural ingredients that complement its benefits. For example, mixing it with honey adds extra hydration and antibacterial properties, ideal for dry or acne-prone skin. Aloe vera gel provides soothing and calming effects, while a few drops of lemon juice can brighten the complexion (avoided by those with sensitive skin due to its acidity). This flexibility allows you to adapt the face pack to your unique skincare needs.',
    },
    {
      question: 'Does Spirulina Face Pack Powder have a strong smell?',
      answer:
        'Spirulina naturally has an earthy and ocean-like smell, which can be strong for some users. The scent is more pronounced when mixed with liquids but tends to fade after washing off. Mixing it with rose water or essential oils can help neutralize the scent for a more pleasant experience. Despite the smell, many users find the benefits of spirulina far outweigh any temporary discomfort.',
    },
    {
      question: 'Can Spirulina Face Pack Powder help with pigmentation and dark spots?',
      answer:
        'Yes, spirulina is rich in antioxidants, vitamins, and minerals that help reduce the appearance of pigmentation and dark spots. Regular use allows antioxidants to lighten dark spots, even out skin tone, and improve overall radiance. Its detoxifying and cell-regenerating properties encourage brighter skin and reduce pigmentation over time, making it a natural choice for achieving a more balanced complexion.',
    },
  ];

  

function FAQs() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };


  return (
    <div className='w-full mb-[30px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]'>
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <div className="t4s-code__liquid" data-hdt-reveal="slide-in">
          <h2 className="text-4xl font-bold relative inline-block ">
            FAQs
            </h2>
            <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[30px] "></div>
          <div className=" ">
          {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#dddddd] py-[1.875rem] transition-all duration-300 ease-in-out">
            <button
              className={` w-full hover:cursor-pointer text-left rounded-lg  flex  items-center   text-[24px] transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'text-[#018d43]' : 'text-black'
              }`}
              onClick={() => toggleFAQ(index)}
            >
                <span
                className={`mr-3 border-2 rounded-full border-[#018d43] text-[#018d43] font-thin text-[30px] 
                    flex items-center justify-center transition-all duration-300 ease-in-out
                w-10 h-10
                `}
                >
                {activeIndex === index ? '-' : '+'}
                </span>
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className={` ms-13 text-start ${activeIndex === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}     overflow-hidden  text-[#696969] transition-all duration-1000 ease-in-out`}>
                <p>{faq.answer}</p>
              </div>
            )}
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
