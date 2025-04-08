import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Swiper as SwiperCore } from 'swiper';
import ImageMagnifier from '../common/ImageMagnifier'

SwiperCore.use([Thumbs]);

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [thumbDirection, setThumbDirection] = useState('horizontal');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setThumbDirection(window.innerWidth >= 1024 ? 'vertical' : 'horizontal');
    };
    handleResize();
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
      alt: 'Spirulina Tablets Ingredients',
      url: 'https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_Ingredients_2a36b862-597b-4bf1-9ead-15dc640cd50e.jpg?v=1735211350&width=540'
    },
    {
      alt: 'Spirulina Tablets Image',
      url: 'https://spiruswastha.com/cdn/shop/files/Spirulina_Tablets_73b6b571-e40c-4e5d-954a-5487d3a49df1.jpg?v=1735799965&width=540'
    },
    {
      alt: 'Video Thumbnail',
      url: 'https://spiruswastha.com/cdn/shop/files/preview_images/17ace68eccf245b594189252509973e5.thumbnail.0000000000.jpg?v=1740486945&width=540',
      type: 'video'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gallery Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-2 w-full md:max-w-1/2 max-h-[600px]  h-[600px]">
          {/* Main Image Viewer */}
          <div className="flex-1 rounded overflow-hidden border h-full w-">
            <Swiper
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              className="h-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    {item.type === 'video' ? (
                      <>
                       <video
                        className="w-full h-full object-cover rounded"
                        controls
                        src={item.url}
                        poster={item.url} />
                      </>
                    ) : activeIndex === i ? (
                     <ImageMagnifier src={item.url} alt={item.alt} zoom={2} />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          <div className="w-full lg:w-[100px] h-[100px] lg:h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={thumbDirection}
              spaceBetween={10}
              watchSlidesProgress
              slidesPerView={5}
              className="h-full"
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[100px]">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="cursor-pointer w-full h-full object-cover rounded border"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
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

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-[32px] font-bold">Natural Spirulina Tablet</h2>
          <div className="flex items-center gap-4 mt-2 text-[18px]">
            <span className="line-through text-[#696969]">₹499.00</span>
            <span className="text-[#018d43] font-semibold">₹424.00</span>
          </div>
          <p className='text-[18px]'><a href="/policies/shipping-policy">Shipping</a> calculated at checkout.</p>

          <p className="mt-1 text-[18px]text-[#018d43]">Availability: <span className="text-[#018d43]">In Stock</span></p>
          <p className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐ 5 Reviews</p>

          <div className="mt-4  flex flex-col lg:flex-row  gap-y-5 gap-4">
            <div className="flex items-center border px-2 py-1 w-fit rounded-full ">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span className="px-3">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className="bg-[#018d43] text-white px-6 py-2 w-full lg:w-auto rounded-full">Add to Cart</button>
            <button className="bg-black text-white px-6 py-2 rounded-full">Buy It Now</button>
          </div>
          <div
 
  style={{ '--height-img': '30px' }}
  className="flex  flex-wrap mt-5 md:flex-nowrap items-center justify-center lg:justify-start gap-2 "
>
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
    alt="visa"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
    alt="master"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c.svg"
    alt="maestro"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/rupay-7dd8b2a3c63957a0174f9ad530376abbac88ed8baeb14d78e7887eec4208e63d.svg"
    alt="rupay"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/upi-cfcad01ffc22c9edd8f9c30feb4ae9d9423272669625ff218a6973768e552e6c.svg"
    alt="upi"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg"
    alt="netbanking"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
    alt="google pay"
    className="h-[30px] w-[48px] object-contain"
  />
  <img
    width="48"
    height="30"
    src="https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/payzapp-9276d25b935c69d0eb05b150d5112c4c8301c3e17898e8d4834edb8dfdc01dd3.svg"
    alt="payzapp"
    className="h-[30px] w-[48px] object-contain"
  />
</div>

          <div className="mt-6 text-sm leading-relaxed">
            <p>
              Natural and herbal Spirulina Tablets are a rich source of protein, vitamins, and antioxidants derived from pure spirulina algae.
            </p>
            <p className="mt-2">
              Spirulina is incredibly high in protein and Vitamin B.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[23px] font-medium mb-2">Globally Certified</h3>
            <div className="flex gap-4"><img src="	https://cdn.shopify.com/s/files/1/0611/1038/6771/files/our_company_brand_new_logo.png?v=1741693691"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

