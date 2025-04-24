import React from 'react'
import { useNavigate } from 'react-router-dom';
import blogOne from '../assets/blog1.webp';
import blogTwo from '../assets/blog2.webp';
import blogThree from '../assets/blog3.webp';

const BlogNews = () => {
  const navigate = useNavigate();

  const data = [
    {
      image: blogOne,
      slug: "amla-tablets-benefits-the-super-supplement-for-daily-wellness",
      title: "Amla Tablets Benefits: The Super Supplement for Daily Wellness",
      description: "Ayurveda, the ancient science of life, has gifted us with countless treasures, but few are as remarkable as Amla, t..."
    },
    {
      image: blogTwo,
      slug: "amla-tablets-uses-for-hair-skin-and-immunity",
      title: "Amla Tablets Uses for Hair, Skin, and Immunity",
      description: "In the realm of Ayurveda, few superfoods shine as brightly as Amla, the Indian gooseberry (Phyllanthus emblica). Re..."
    },
    {
      image: blogThree,
      slug: "top-10-health-benefits-of-giloy-powder-you-need-to-know",
      title: "Top 10 Health Benefits of Giloy Powder You Need to Know",
      description: "Here are the top 10 reasons why Giloy powder is a must-have in your wellness arsenal:1. Boosts Immunity Giloy is o..."
    },
    // {
    //   image: "https://spiruswastha.com/cdn/shop/articles/Giloy_powder_in_Ayurveda__The_Ancient_Herb_with_Modern_Benefits.jpg?v=1744870939&width=600",
    //   slug: "four",
    //   title: "Giloy in Ayurveda: The Ancient Herb with Modern Benefits",
    //   description: "Ayurveda, the ancient Indian system of medicine, has been a beacon of holistic health for over 5,000 years. Among i..."
    // },
    // {
    //   image: "https://spiruswastha.com/cdn/shop/articles/10_Amazing_Health_Benefits_of_Amla_Powder_You_Should_Know.jpg?v=1744781386&width=600",
    //   slug: "five",
    //   title: "10 Amazing Health Benefits of Amla Powder You Should Know",
    //   description: "Welcome to Spiruswastha, where nature meets wellness! Since our inception in 2023 under Spiru Swastha India Pvt Ltd..."
    // },
    // {
    //   image: "https://spiruswastha.com/cdn/shop/articles/Amla_Powder__The_Ayurvedic_Superfood_for_Immunity_Hair_Skin.jpg?v=1744780567&width=600",
    //   slug: "six",
    //   title: "Amla Powder: The Ayurvedic Superfood for Immunity, Hair & Skin",
    //   description: "At Spiruswastha, we believe in harnessing the power of nature to nurture your health and wellness. Founded in 2023 ..."
    // },
  ];

  return (
    <div>
      <div className="relative w-full bg-black bg-opacity-20 bg-[url('https://spiruswastha.com/cdn/shop/files/product_brd.jpg?v=1733468275&width=3024')] bg-cover bg-center flex justify-center">
        <div className='absolute bg-black opacity-50 w-full h-full'></div>
        <div className="w-full max-w-[1440px] px-[15px] z-10 flex items-center">
          <p className=" py-[50px] md:py-[100px]  text-[20px] text-white font-semibold">Wishlist<br />
            <span className='flex items-center mt-[15px] text-[18px] cursor-pointer' onClick={() => navigate('/')}>
              Home
              <svg class="t4s-icon-arrow" height={9} width={9} viewBox="0 0 100 100" fill="white" className='mx-2' xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                  class="arrow"
                  transform="translate(100, 100) rotate(180)"
                />
              </svg>

              News
            </span>
          </p>
        </div>
      </div>
      <div className='w-full max-w-[1440px] p-4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
          {
            data?.map((blog) => (
              <div key={blog.title} className='flex flex-col pt-10' onClick={() => navigate(`/blog-details/${blog.slug}`)}>
                <div className='h-[300px] overflow-hidden after:con'>
                  <img
                    src={blog.image}
                    alt="blog post"
                    className='w-full h-full transition-transform duration-300 hover:scale-110 cursor-pointer'
                  />
                </div>
                <div className='pt-4'>
                  <h4 className='text-xl cursor-pointer hover:text-[#018D43] transition duration-300'>
                    {blog.title}
                  </h4>
                  <p className='text-[#696969] pt-2'>{blog.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BlogNews;
