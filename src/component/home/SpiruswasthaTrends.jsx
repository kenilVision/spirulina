import React , {useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";

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

   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  
      
      useEffect(() => {
  
        
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <>

<div className='mb-[9.375rem] px-[15px] lg:px-[40px] '>
    <div className="w-full   mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block ">
      SpiruswasthaTrends
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"></div>
    </div>

    {isLargeScreen?

        
<Swiper
    spaceBetween={20}
    freeMode={true}
    pagination={{ clickable: true }}
    modules={[FreeMode,Navigation]}
    className="mySwiper"
    breakpoints={{
        320: { slidesPerView: 1 },  // 1 slide on small screens
        480: { slidesPerView: 2 },  // 2 slides on mobile
        768: { slidesPerView: 3 },  // 3 slides on tablets
        1024: { slidesPerView: 4 }, // 4 slides on small desktops
        1280: { slidesPerView: 5 }, // 5 slides on large desktops
        1536: { slidesPerView: 6 }, // 6 slides on extra large screens
    }}
>
    {videos.map((videoSrc, idx) => (
        <SwiperSlide key={idx}>
            <video
                autoPlay
                loop
                muted
                className="w-full rounded-lg shadow-lg "
                playsInline
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
        </SwiperSlide>
    ))}
</Swiper>
:
<Swiper
    slidesPerView={3}
    spaceBetween={-30}
    initialSlide={2}
    centeredSlides={true}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    freeMode={true}
    pagination={{ clickable: true }}
    modules={[FreeMode , Navigation]}
    className="mySwiper"
>
    {videos.map((video, idx) => (
        <SwiperSlide key={idx} className="transition-transform duration-300">
            <video
                autoPlay
                loop
                muted={idx !== activeIndex}
                className={`w-full transition-all duration-300 ease-in-out ${idx === activeIndex ? "scale-100" : "scale-75 opacity-70"
                    }`}
            >
                <source src={video} type="video/mp4" />
            </video>
        </SwiperSlide>
    ))}
</Swiper>
}
    </div>

        
        </>
            
    );
}

export default SpiruswasthaTrends;
