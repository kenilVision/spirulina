import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FreeMode, } from "swiper/modules";

function SpiruswasthaTrends() {
    const videos = [
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_13d16737-6683-4bde-a6c9-d04d6c94f0b2.mp4?v=1739158911",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_41cc0459-29c4-4255-9836-e2c4719ee73c.mp4?v=1739159450",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_c3e12651-28e1-424a-bd86-daf9b2175354.mp4?v=1739159663",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_d2c06994-608a-4d9e-a211-9f8143aed366.mp4?v=1739525196",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_b77f7a45-53c4-495a-8f81-8d3205115476.mp4?v=1739764888",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_c64097d6-fd0d-4d20-ad94-99b98138b64a.mp4?v=1739861245",
        "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/whatmore_tn_8d3a3ef8-0cda-4c6b-8ce6-feb96ad02f3a.mp4?v=1740456060",
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 769);
  
    useEffect(() => {
        const handleResize = () => {
            const newIsLargeScreen = window.innerWidth >= 769;
            if (newIsLargeScreen !== isLargeScreen) {
                setIsLargeScreen(newIsLargeScreen);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLargeScreen]);

    useEffect(() => {
        
        AOS.refresh();
      }, []);

    return (
        <div className='mb-[9.375rem] px-[15px] lg:px-[40px]' data-aos="fade-up" data-aos-duration="1000"   >
            <div className="w-full mx-auto text-center px-[15px]">
                <h2 className="text-4xl font-bold relative inline-block"  >
                    SpiruswasthaTrends
                </h2>
                <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[15px]"></div>
            </div>

            {isLargeScreen ? (
                <div className="overflow-hidden px-4" >
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        slidesPerView="auto"
                        centeredSlides={false}
                        navigation={true}
                        modules={[FreeMode ]}
                        className="mySwiper"
                        breakpoints={{
                            320: { slidesPerView: 1.2 },
                            480: { slidesPerView: 2.2 },
                            768: { slidesPerView: 3.2 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                            1536: { slidesPerView: 6 },
                        }}
                    >
                        {videos.map((videoSrc, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="transition-transform duration-200 rounded-lg ease-in-out hover:scale-105 hover:z-10 hover:cursor-pointer"
                                style={{ width: 'auto' }}
                            >
                                <div className="rounded-lg overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                                        playsInline
                                        style={{ width: '280px', height: '500px' }}
                                    >
                                        <source src={videoSrc} type="video/mp4" />
                                    </video>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="overflow-hidden px-2"  >
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={10}
                        centeredSlides={true}
                        initialSlide={1}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                        breakpoints={{
                            480: { slidesPerView: 1.5 },
                            640: { slidesPerView: 2 }
                        }}
                    >
                        {videos.map((video, idx) => (
                            <SwiperSlide
                                key={idx}
                                className={`transition-transform duration-200 ease-in-out ${
                                    idx === activeIndex
                                        ? "scale-100 z-10"
                                        : "scale-90 opacity-90 z-0"
                                }`}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted={idx !== activeIndex}
                                    playsInline
                                    className="w-full rounded-lg object-cover shadow-md"
                                    style={{ height: '500px' }}
                                >
                                    <source src={video} type="video/mp4" />
                                </video>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default SpiruswasthaTrends;