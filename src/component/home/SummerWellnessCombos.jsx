import React ,{useEffect} from 'react'
import ProductCard from '../common/ProductCard'
import 'aos/dist/aos.css';
import AOS from 'aos'; 
function SummerWellnessCombos() {
  
  const data = [
    {
      title: "Spiruswastha Vitality Pack",
      price: "₹1,070.00",
      price_value: 1070,
      image: "https://spiruswastha.com/cdn/shop/files/1_de5eda8d-7c0c-4f35-becd-9007ba88ec2e.jpg?v=1740032196"
    },
    {
      title: "Spiruswastha Energy Boost Pack",
      price: "₹1,590.00",
      price_value: 1590,
      image: "https://spiruswastha.com/cdn/shop/files/2_320ff308-c8f8-4927-8f15-75a0aad7e6eb.jpg?v=1740032248"
    },
    {
      title: "Spiruswastha Heart Wellness Pack",
      price: "₹799.00",
      price_value: 799,
      image: "https://spiruswastha.com/cdn/shop/files/3_1481e07a-f922-4937-bee0-35b7e8a5ece8.jpg?v=1740032336"
    },
    {
      title: "Spiruswastha Summer Stamina Pack",
      price: "₹1,199.00",
      price_value: 1199,
      image: "https://spiruswastha.com/cdn/shop/files/4_4bd5bd52-251b-4588-8ecd-322f420905bb.jpg?v=1740032430"
    },
    {
      title: "Spiruswastha Radiance Pack",
      price: "₹839.00",
      price_value: 839,
      image: "https://spiruswastha.com/cdn/shop/files/5_48c6fcf3-1b02-44e7-85ec-73d67f5a0218.jpg?v=1740032956"
    },
    {
      title: "Spiruswastha 24/7 Glow Pack",
      price: "₹1,249.00",
      price_value: 1249,
      image: "https://spiruswastha.com/cdn/shop/files/6_1.jpg?v=1740032884"
    },
    {
      title: "Spiruswastha Herbal Refresh Pack",
      price: "₹700.00",
      price_value: 700,
      image: "https://spiruswastha.com/cdn/shop/files/7_bb03f006-448a-435a-90dd-881c909ea7a9.jpg?v=1740027300"
    },
    {
      title: "Spiruswastha Pure Refresh Pack",
      price: "₹569.00",
      price_value: 569,
      image: "https://spiruswastha.com/cdn/shop/files/8_f06ae11b-8d89-4883-b9d0-c386d1bcf783.jpg?v=1740027309"
    }
  ];
  
  useEffect(() => {
    AOS.init({
      once: false, 
      offset: 100,
      duration: 1000,
    });
  }, []);
  
    return (
    <div className='mb-[9.375rem]'  >
    <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
     
      <h2 className="text-4xl font-bold relative inline-block " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  >
      SpiruSwastha Summer Wellness Combos

      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[15px]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  ></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto mb-[30px]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  >
                Enjoy summer the healthy way with SpiruSwastha! Our specially crafted Summer Wellness Combos help you stay hydrated, refreshed, and full of energy all season long. These natural blends are perfect for keeping your skin glowing and body strong even in the summer heat.
        </p>
        <div  className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] md:grid-cols-3 lg:grid-cols-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"   >   
            {data.map((x,index)=><ProductCard title={x.title} image={x.image} price={x.price}/>)}
        </div>
    </div>
    </div>
  )
}

export default SummerWellnessCombos
