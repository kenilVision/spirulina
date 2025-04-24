import React, { useRef, useState, useEffect } from 'react';
import blogOne from '../../assets/blog1.webp';
import blogTwo from '../../assets/blog2.webp';
import blogThree from '../../assets/blog3.webp';
import './blog.css'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const containerRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
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
        {
            image: "https://spiruswastha.com/cdn/shop/articles/Giloy_powder_in_Ayurveda__The_Ancient_Herb_with_Modern_Benefits.jpg?v=1744870939&width=600",
            slug: "amla-tablets-benefits-the-super-supplement-for-daily-wellness",
            title: "Giloy in Ayurveda: The Ancient Herb with Modern Benefits",
            description: "Ayurveda, the ancient Indian system of medicine, has been a beacon of holistic health for over 5,000 years. Among i..."
        },
        {
            image: "https://spiruswastha.com/cdn/shop/articles/10_Amazing_Health_Benefits_of_Amla_Powder_You_Should_Know.jpg?v=1744781386&width=600",
            slug: "amla-tablets-uses-for-hair-skin-and-immunity",
            title: "10 Amazing Health Benefits of Amla Powder You Should Know",
            description: "Welcome to Spiruswastha, where nature meets wellness! Since our inception in 2023 under Spiru Swastha India Pvt Ltd..."
        },
        {
            image: "https://spiruswastha.com/cdn/shop/articles/Amla_Powder__The_Ayurvedic_Superfood_for_Immunity_Hair_Skin.jpg?v=1744780567&width=600",
            slug: "top-10-health-benefits-of-giloy-powder-you-need-to-know",
            title: "Amla Powder: The Ayurvedic Superfood for Immunity, Hair & Skin",
            description: "At Spiruswastha, we believe in harnessing the power of nature to nurture your health and wellness. Founded in 2023 ..."
        },
    ]

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const position = container.scrollLeft;
            setIsAtStart(position === 0);
            setIsAtEnd(position + container.offsetWidth >= container.scrollWidth);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const handlePrevious = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='w-full max-w-[1440px] mx-auto py-10 px-4'>
            <div className='flex justify-between items-center'>
                <h3 className="text-3xl font-bold leading-[20px] block after:content-[''] after:inline-block after:w-[60%] after:max-w-[150px] after:bg-[#018d43] after:border-b-[#018d43] after:h-[2px] after:border-current after:mx-auto">
                    Blog
                </h3>
                <p className='text-[#696969] font-semibold hover:text-[#018D43] transition duration-500 cursor-pointer' onClick={() => navigate('/blogs/news')}>View All Blog</p>
            </div>

            <div className='relative mt-8'>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
                >
                    {data?.map((blog) => (
                        <div
                            key={blog.title}
                            onClick={() => navigate(`/blog-details/${blog.slug}`)}
                            className="group flex-shrink-0 w-full lg:w-1/2 xl:w-1/3 p-4 snap-start"
                        >
                            <div className="h-[300px] overflow-hidden cursor-pointer">
                                <img
                                    src={blog.image}
                                    alt="blog post"
                                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="pt-4">
                                <h4 className="text-xl cursor-pointer hover:text-[#018D43] transition duration-300">
                                    {blog.title}
                                </h4>
                                <p className="text-[#696969] pt-2">{blog.description}</p>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    disabled={isAtStart}
                    className={`absolute left-6 top-[35%] -translate-y-1/2 bg-white hover:bg-[#018D43] hover:text-white rounded-full p-2 shadow-lg transition-colors ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    disabled={isAtEnd}
                    className={`absolute right-6 top-[35%] -translate-y-1/2 hover:bg-[#018D43] hover:text-white bg-white rounded-full p-2 shadow-lg transition-colors ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Blog;
