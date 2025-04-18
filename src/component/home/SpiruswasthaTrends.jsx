import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "swiper/css";
import "swiper/css/free-mode";
import AOS from "aos";
import "aos/dist/aos.css";
import { FreeMode } from "swiper/modules";
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import "./SpiruswasthaTrends.css"
import { Getvideos } from "../../Api/Video";
const SpiruswasthaTrends = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await Getvideos();
        console.log(data)
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      };
    
    fetchVideos();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 769);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 769);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
  }, [selectedVideo]);

  return (
    <div className="mb-[9.375rem] px-[15px] lg:px-[40px]">
      <div className="w-full text-center">
        <HomeSectionHeading title="Spiruswastha Trends" />
      </div>

      {isLargeScreen ? (
        <div
          className="overflow my-4  px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Swiper
            spaceBetween={20}
            freeMode={true}
            slidesPerView="auto"
            modules={[FreeMode]}
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
                style={{ width: "auto" }}
              >
                <div className="rounded-lg overflow-hidden">
                  <video
                    onClick={() => openModal(videoSrc)}
                    autoPlay
                    src={`http://localhost:5050/image/productVideos/${videoSrc}`}
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer"
                    style={{ width: "280px", height: "500px" }}
                  >
                    
                  </video>
                </div>
              </SwiperSlide>  
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="overflow-hidden  px-2">
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
              640: { slidesPerView: 2 },
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
                  onClick={() => openModal(video)}
                  src={`http://localhost:5050/image/productVideos/${videoSrc}`}
                  autoPlay
                  loop
                  muted={idx !== activeIndex}
                  playsInline
                  className="w-full rounded-lg object-cover shadow-md cursor-pointer"
                  style={{ height: "500px" }}
                >

                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Modal */}
      {selectedVideo !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000063] p-4">
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:scale-110 transition-transform"
    >
      &times;
    </button>

    <div className="relative w-full max-w-6xl mx-auto flex items-center bg-transparent justify-center h-[80vh]">
      {/* Navigation arrows */}
      <button className="swiper-button-prev absolute left-0 z-10 text-white hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Main Swiper container */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        className="w-full h-full "
        initialSlide={videos.indexOf(selectedVideo)}
        onSlideChange={(swiper) => setSelectedVideo(videos[swiper.activeIndex])}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}
        slideToClickedSlide={true}
        style={{
          background: 'none',
        }}

      >
        {videos.map((video, idx) => (
          <SwiperSlide 
            key={idx} 
            className="flex  items-center bg-transparent justify-center h-full"
            style={{
              background: 'none',
            }}
          >
            <div 
            className="h-full flex bg-transparent items-center justify-center"
            style={{
              background: 'none',
            }}
            >s
              <video
                src={`http://localhost:5050/image/productVideos/${video}`}
                autoPlay={idx === videos.indexOf(selectedVideo)}
                playsInline
                loop
                muted={idx !== videos.indexOf(selectedVideo)}
                controls={idx === videos.indexOf(selectedVideo)}
                className="max-h-full max-w-full bg-transparent rounded-xl shadow-2xl transition-all duration-300 object-contain"
                style={{
                  background: 'none',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button className="swiper-button-next absolute right-0 z-10 text-white hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default SpiruswasthaTrends;
