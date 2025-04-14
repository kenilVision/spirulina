import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Swiper as SwiperCore } from 'swiper';
import ImageMagnifier from '../common/ImageMagnifier';
import "./Product.css";
import MagnifierPreview from '../common/MagnifierPreview';
import { loadStripe } from '@stripe/stripe-js';
import { add, remove,addwithQuantity } from '../../Slice/cart'
import { useSelector, useDispatch } from 'react-redux'
SwiperCore.use([Thumbs]);

function Product({ product }) {

  const carts = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // Destructure product data
  const {
    name,
    description,
    variants,
    images: rawImages,
    rating,
    faqs,
    benefits,
    ingredients,
    certifications
  } = product;

  // Format images
  const images = rawImages.map(img => ({
    url: img,
    alt: name
  }));
  const quant = 10
  // State management
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [thumbDirection, setThumbDirection] = useState('horizontal');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [zoomData, setZoomData] = useState({
    show: false,
    backgroundPosition: '0% 0%',
    backgroundSize: '200%',
    src: ''
  });

  useEffect(()=>{

    console.log(selectedVariant)

  },[selectedVariant])
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setThumbDirection(window.innerWidth >= 1024 ? 'vertical' : 'horizontal');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Stripe checkout
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const stripe = await stripePromise;
  
    const result = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1RBxMVFS9PdJc9asxD3pIj9P',
        quantity: quantity,
      }],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
      shippingAddressCollection: {
        allowedCountries: ['IN', 'US', 'CA'],
      },
      billingAddressCollection: 'required',
    });
  
    if (result.error) {
      console.error(result.error.message);
    }
  }

  const handlecart = () => {
    const { name, images, variants } = product;
    // Using the selected variant for cart
    const cartItem = {
      id: product.id,
      name,
      image: images[0],
      price: selectedVariant.discounted_price,
      originalPrice: selectedVariant.original_price,
      qty: quantity,
      options: selectedVariant, // Passing selected variant as options
    };
    console.log(cartItem);
    dispatch(addwithQuantity(cartItem));
  }

  // Payment icons data
  const paymentIcons = [
    {
      alt: 'Visa',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg',
    },
    {
      alt: 'MasterCard',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg',
    },
    {
      alt: 'Maestro',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c.svg',
    },
    {
      alt: 'RuPay',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/rupay-7dd8b2a3c63957a0174f9ad530376abbac88ed8baeb14d78e7887eec4208e63d.svg',
    },
    {
      alt: 'UPI',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/upi-cfcad01ffc22c9edd8f9c30feb4ae9d9423272669625ff218a6973768e552e6c.svg',
    },
    {
      alt: 'Net Banking',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg',
    },
    {
      alt: 'Google Pay',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg',
    },
    {
      alt: 'PayZapp',
      src: 'https://spiruswastha.com/cdn/shopifycloud/shopify/assets/payment_icons/payzapp-9276d25b935c69d0eb05b150d5112c4c8301c3e17898e8d4834edb8dfdc01dd3.svg',
    },
  ];


  return (
    <div className="relative max-w-[1440px] mx-auto px-4 py-6">
      <div className="relative flex flex-col md:flex-row gap-8">
        {/* Gallery Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-2 w-full md:max-w-1/2 max-h-[600px] h-[600px] static"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
          
          {/* Main Image Viewer */}
          <div className="flex-1 rounded overflow-hidden h-full">
            <Swiper
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              className="h-full overflow-visible"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i} className="overflow-visible">
                  <div className="w-full h-full">
                    {activeIndex === i ? (
                      <ImageMagnifier 
                        src={item.url} 
                        alt={item.alt} 
                        zoom={2} 
                        onZoomDataChange={setZoomData} 
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full max-h-[600px] object-contain"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          {product.category == "Wellness Combo" ? null :(
          <div className="w-full lg:w-[100px] h-[100px] lg:h-full overflow-hidden ">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={thumbDirection}
              spaceBetween={5}
              watchSlidesProgress
              slidesPerView={5}
              className="h-full"
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-[100px]">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="cursor-pointer w-full h-full object-cover rounded"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>)}
        </div>
            
        {/* Product Info Section */}
        <div className="w-full md:w-1/2 text-black relative"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
          
          <MagnifierPreview {...zoomData} />
          <h2 className="text-[32px] font-bold">{name}</h2>
          
          {/* Price Display */}
          <div className="flex items-center text-[26px] gap-4 mt-2 mb-[14px]">
            <span className="line-through text-[#696969]">₹{selectedVariant.original_price}</span>
            <span className="text-[#018d43] font-semibold">₹{selectedVariant.discounted_price}</span>
            <span className='text-white bg-[#018d43] text-[12px] rounded-lg leading-4 px-[8px] py-[4px] mx-[5px]'>
              SAVE {Math.round(selectedVariant.discount_percentage)}%
            </span>
          </div>
          
          <p className='text-[18px] text-[#696969] mb-[10px]'>
            <a className='text-[#696969] underline'>Shipping</a> calculated at checkout.
          </p>

          <p className="mt-1 text-[18px] mb-[5px] text-[#018d43]">
            Availability: <span className="text-[#018d43]">In Stock</span>
          </p>
          
          {/* Rating */}
          <p className="mt-1 flex gap text-[#696969] text-[18px] gap-x-2 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-4 mb-1 h-4"
                fill="#FDCC0D" 
                stroke="#FDCC0D"
                strokeWidth="40"
              >
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
              </svg>
            ))} 
            {rating} Reviews
          </p>

          {/* Variant Selection */}
          {variants.length > 1 && (
            <div className="mt-4 mb-4">
              <h3 className="text-lg font-medium mb-2">Options:</h3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant,index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border rounded-full ${ selectedVariant == variant ? 'border-[#018d43] bg-[#018d43]/10 text-[#018d43]': 'border-gray-300 hover:border-[#018d43]'}`}
                  >
                    {variant.type === 'quantity' 
                      ? `${variant.quantity} Tablets` 
                      : variant.type === 'weight' 
                        ? variant.weight 
                        : variant.type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Action Buttons */}
          <div className="mt-4 flex flex-row gap-y-5 gap-4 mb-[15px]">
            <div className="flex items-center border w-[120px] h-[38px] text-[14px] text-bold justify-between rounded-full">
              <button 
                className='hover:cursor-pointer ps-[15px]' 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-3">{quantity}</span>
              <button 
                className='hover:cursor-pointer pe-[15px]' 
                onClick={() => setQuantity(q => (q < quant ? q + 1 : q))}
              >
                +
              </button>
            </div>
            <button 
            className="bg-[#018d43] hidden lg:block text-white px-6 py-2 w-full lg:w-auto rounded-full hover:cursor-pointer"
            onClick={handlecart}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="w-[38px] h-[38px] flex items-center justify-center border border-green-600 rounded-full hover:bg-green-50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="none"
                stroke="green"
                strokeWidth="32"
                className="w-5 h-5"
              >
                <path d="M256 448l-35.3-32.6C120 312 64 256 64 176c0-61.9 50.1-112 112-112 43.2 0 81.4 25.4 99.6 61.6C302.6 89.4 340.8 64 384 64c61.9 0 112 50.1 112 112 0 80-56 136-156.7 239.4L256 448z" />
              </svg>
            </button>
          </div>
          
          <button 
          className="bg-[#018d43] lg:hidden text-white px-6 py-2 w-full mb-[15px] rounded-full hover:cursor-pointer"
          onClick={handlecart}
          >
            Add to Cart
          </button>
          
          <button 
            className="bg-black text-white px-6 py-2 rounded-full hover:cursor-pointer w-full lg:w-[340px]"
            onClick={handleSubmit}
          >
            Buy It Now
          </button>

          {/* Payment Icons */}
          <div className="flex flex-wrap mt-5 items-center justify-center lg:justify-start gap-2">
            {paymentIcons.map(({ alt, src }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                width={48}
                height={30}
                className="h-[30px] w-[48px] object-contain transition-opacity duration-300 hover:opacity-75"
              />
            ))}
          </div>

          {/* Product Description */}
          <div className="mt-6 text-[18px] leading-relaxed">
            <p>{description}</p>
            {/* {benefits && benefits.length > 0 && (
              <ul className="mt-4 list-disc pl-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="mt-1">{benefit}</li>
                ))}
              </ul>
            )} */}
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="mt-6">
              <h3 className="text-[23px] font-medium mb-2">Globally Certified</h3>
              <div className="flex gap-4 w-full lg:w-1/2">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0611/1038/6771/files/our_company_brand_new_logo.png?v=1741693691" 
                  alt="Certifications" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;