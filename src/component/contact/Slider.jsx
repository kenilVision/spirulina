import React from 'react'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slider() {

    const [mode, setMode] = useState('slider'); // 'slider', 'grid-2x2', 'grid-4x1'

    useEffect(() => {
      const checkMode = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
          setMode('grid-4x1'); // lg and up
        } else if (width >= 768) {
          setMode('grid-2x2'); // md to lg
        } else {
          setMode('slider'); // below md
        }
      };
  
      checkMode();
      window.addEventListener('resize', checkMode);
      return () => window.removeEventListener('resize', checkMode);
    }, []);
  
    const cards = [
        {
          title: 'Address',
          content:
            '2nd Floor, Flat No. A/203, Dev Prayag Residency, Opp. Shraddhadip Society, Causeway Singanpor Road, Singanpor, Surat, Gujarat, 395004',
          icon: 'https://spiruswastha.com/cdn/shop/files/address_icon_75108f9e-76b8-4f23-949b-dec3e01a3121.png?v=1733720827&width=180',
        },
        {
          title: 'Timings',
          content: 'Mon - Sat: 10am - 7pm',
          icon: 'https://spiruswastha.com/cdn/shop/files/clock_icon_398de56c-7ad6-490a-9a5c-32295081efac.png?v=1733722877&width=180',
        },
        {
          title: 'Phone',
          content: '+91 99999 99999',
          icon: 'https://spiruswastha.com/cdn/shop/files/Phone.png?v=1733722979&width=180',
        },
        {
          title: 'Email',
          content: 'contact@spiruswastha.com',
          icon: 'https://spiruswastha.com/cdn/shop/files/Mail.png?v=1733723118&width=180',
        },
      ];
    

    const Card = ({ title, content, icon }) => (
        <div 
        className="border border-[#018d43]  p-5 flex items-start space-x-4 min-h-[107px] md:min-h-[114px] lg:min-h-auto bg-white shadow-sm"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >
          <div className="w-[40px] h-[40px] flex-shrink-0">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-gray-900  break-words break-all flex flex-wrap">{title}</h3>
            <p className="text-[16px] text-gray-600 break-words break-all flex flex-wrap ">{content}</p>
          </div>
        </div>
      );


  return (
    <section className="py-10  ">
        <div className="max-w-[1440px] px-[15px] mx-auto ">
      {mode === 'grid-4x1' ? (
        <div className="grid grid-cols-4 gap-6 ">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      ) : mode === 'grid-2x2' ? (
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      ) : (
        <Swiper spaceBetween={16} slidesPerView={1}>
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      </div>
    </section>
  )
}

export default Slider
