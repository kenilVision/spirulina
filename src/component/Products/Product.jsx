import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

function ProductGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [direction, setDirection] = useState('horizontal');

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth >= 1024 ? 'vertical' : 'horizontal');
    };

    handleResize(); // initial run
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      alt: 'Spirulina 1',
      url: 'https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg?v=1735211315&width=540'
    },
    {
      alt: 'Spirulina Tablets Benefits',
      url: 'https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_Benefites_e5293d9a-e4a4-4e9b-8ab5-857a65c93e6c.jpg?v=1735211341&width=540'
    },
    {
      alt: 'Video',
      url: 'https://spiruswastha.com/cdn/shop/files/preview_images/17ace68eccf245b594189252509973e5.thumbnail.0000000000.jpg?v=1740486945&width=540',
      type: 'video'
    }
  ];


  return (
    <div className="flex flex-col lg:flex-row-reverse gap-2 max-w-[600px] max-h-[600px] w-full h-[600px]">
      {/* Main Viewer */}
      <div className="flex-1 rounded overflow-hidden border h-full w-full">
        <Swiper
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          className="h-full"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className={direction === 'vertical' ? 'w-[100px] h-full' : 'h-[100px] w-full'}>
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={direction}
          spaceBetween={0}
          watchSlidesProgress
          slidesPerView={4}
          className="h-full"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={direction === 'vertical' ? 'h-[100px]' : 'h-full'}>
                <img
                  src={item.url}
                  alt={item.alt}
                  className="cursor-pointer w-full h-full object-cover rounded border"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductGallery;
