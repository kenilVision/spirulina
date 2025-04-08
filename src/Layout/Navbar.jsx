import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


const navigation = [
  {
    to: '/Immunity',
    text: "Immunity",
    image: "//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"

  },
  {
    to: '/SkinCare',
    text: "Skin Care",
    image: "//spiruswastha.com/cdn/shop/files/skin_care_medium.svg?v=1736144421"
  },
  {
    to: '/HairCare',
    text: "Hair Care",
    image: "//spiruswastha.com/cdn/shop/files/hair_care_medium.svg?v=1736144487"
  },
  {
    to: '/HeartCare',
    text: "Heart Care",
    image: "//spiruswastha.com/cdn/shop/files/heart_care_medium.svg?v=1736144448"
  },
  {
    to: '/Wellness',
    text: "Wellness",
    image: "//spiruswastha.com/cdn/shop/files/wellness_medium.svg?v=1736144535"
  },
  {
    to: '/Cleansing',
    text: "Cleansing",
    image: "//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
  }

]

const products = [
  {
    "name": "Natural Spirulina Tablet",
    "image_url": "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg"
  },
  {
    "name": "Spiruvita Hair Oil",
    "image_url": "https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg"
  },
  {
    "name": "Natural Spirulina Powder",
    "image_url": "https://spiruswastha.com/cdn/shop/files/Spirulina_5c11599d-41c1-480b-bc6b-772b9e067846.jpg"
  },
  {
    "name": "Spiru Shine Shampoo",
    "image_url": "https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg"
  },
  {
    "name": "Natural Amla Powder",
    "image_url": "https://spiruswastha.com/cdn/shop/files/Spirulina_79824743-c18c-4aa3-9b4b-d5f61b709e7a.jpg"
  }
]
function Navbar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchbarOpen, setsearchbarOpen] = useState(false);
  const [loginbarOpen, setloginbarOpen] = useState(false);
  const [cartbarOpen, setcartbarOpen] = useState(false);
  const [progress, setProgress] = useState(50);
  useEffect(() => {
    if (sidebarOpen || searchbarOpen || loginbarOpen || cartbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen, searchbarOpen , loginbarOpen , cartbarOpen]);


  return (
    <>    
    <div className='py-[7px]  w-full flex justify-center items-center text-white bg-[#018d43]'>
      <div className='px-[5px] w-auto md:px-[15px] text-[14px] text-center'>
        <p>Spiru’s Summer Surprise – Save Up to 35% on Your Favorites! </p>
      </div>
    </div>
      <div className='lg:px-[32px] w-full flex justify-between' >

    <div className='w-[68px] md:w-[190px] flex lg:hidden items-center'>
        <button
          className="lg:hidden px-4 py-2 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="currentColor"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
        </button>
        </div> 

        <div className='px-[15px]  w-auto'>
          <NavLink to='/' className='ms-[10px] flex items-center'>
            <img
              src="https://cdn.shopify.com/s/files/1/0611/1038/6771/t/25/assets/spiru_logo.svg"
              className='py-[5px] w-[95px] lg:w-[150px]'
            />
          </NavLink>
        </div>
        <div className='hidden lg:flex items-center px-[15px]'>

          <nav>
            <ul className='flex'>
              {navigation.map((x) => (
                <li key={x.to}  >
                  <NavLink to={x.to} className={({ isActive }) =>
                        `flex items-center font-semibold py-[5px] text-[14px] px-[1.375rem] whitespace-nowrap hover:text-[#018d43] ${
                          isActive ? 'text-[#018d43]' : 'text-[#00000080]'
                        }`
                      }>
                    <img src={x.image} height='24' width='24' />
                    {x.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>


        <div className='flex items-center justify-end px-[15px]'>
          <div className="px-[5px] flex items-center ">
            <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100"
              onClick={() => setsearchbarOpen(true)}
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg> */}
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#222222" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#222222" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </button>
          </div>

          <div className="px-[5px] hidden lg:flex">
            <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.34531 13.6758L8.08516 13.3922C8.01953 13.3219 6.48906 11.6437 5.50937 10.2188C5.12734 9.66328 4.88594 9.22969 4.76875 8.88984C4.70078 8.69531 4.65156 8.49609 4.61641 8.29219C4.58125 8.08125 4.5625 7.86797 4.5625 7.65234C4.5625 7.46484 4.57656 7.27734 4.60469 7.09453C4.73594 6.20625 5.18359 5.39062 5.86562 4.79766C6.55 4.19766 7.43125 3.86719 8.34531 3.86719C10.4312 3.86719 12.1305 5.56406 12.1305 7.65234C12.1305 7.8 12.1211 7.95 12.1047 8.09531C12.0977 8.16094 12.0883 8.22656 12.0766 8.29219C12.0414 8.49375 11.9898 8.69297 11.9242 8.8875C11.807 9.22734 11.5633 9.66328 11.1812 10.2188C10.2016 11.6461 8.66875 13.3219 8.60547 13.3922L8.34531 13.6758ZM8.34531 4.57031C6.82891 4.57031 5.51875 5.7 5.29844 7.19531C5.27734 7.34531 5.26562 7.49766 5.26562 7.65C5.26562 7.82578 5.27969 8.00156 5.31016 8.17266C5.33828 8.33672 5.38047 8.50078 5.43437 8.65781C5.53047 8.93437 5.75078 9.32344 6.09062 9.82031C6.80781 10.8633 7.8625 12.0844 8.34766 12.6281C8.83047 12.082 9.8875 10.8633 10.6047 9.82031C10.9445 9.32578 11.1672 8.93437 11.2609 8.65781C11.3148 8.50078 11.357 8.33906 11.3852 8.17266C11.3945 8.12109 11.4016 8.06719 11.4086 8.01562C11.4227 7.89609 11.4297 7.77422 11.4297 7.65234C11.4273 5.95312 10.0445 4.57031 8.34531 4.57031Z" fill="#222222"></path>
                <path d="M14.5898 18.5908H8.31328L8.30859 18.2439C8.30156 17.6041 7.77656 17.0861 7.13672 17.0861C6.49688 17.0861 5.97188 17.6064 5.96484 18.2439L5.96016 18.5908H3.48984C3.15 18.5908 2.81016 18.4596 2.55937 18.2275C2.29219 17.9814 2.14453 17.6557 2.14453 17.3064V9.17363C2.14453 8.47285 2.76094 7.87988 3.48984 7.87988H5.25703L5.30625 8.17285C5.33437 8.33691 5.37656 8.50098 5.43047 8.65801C5.52656 8.93457 5.74688 9.32363 6.08672 9.82051C6.80391 10.8635 7.85859 12.0846 8.34375 12.6283C8.82656 12.0822 9.88359 10.8635 10.6008 9.82051C10.9406 9.32598 11.1633 8.93457 11.257 8.65801C11.3109 8.50098 11.3531 8.33926 11.3813 8.17285L11.4305 7.87988H13.3148C14.0297 7.87988 14.5898 8.44941 14.5898 9.17363V18.5908ZM8.97656 17.8877H13.8867V9.17598C13.8867 8.84316 13.6359 8.58535 13.3148 8.58535H12.0117C11.9859 8.68848 11.9555 8.78926 11.9203 8.8877C11.8031 9.22754 11.5594 9.66348 11.1773 10.2189C10.1977 11.6463 8.66484 13.3221 8.60156 13.3924L8.34375 13.676L8.08359 13.3924C8.01797 13.3221 6.4875 11.6439 5.50781 10.2189C5.12578 9.66348 4.88437 9.22988 4.76719 8.89004C4.73203 8.78926 4.70156 8.68848 4.67578 8.58535H3.48984C3.14766 8.58535 2.84766 8.86191 2.84766 9.17598V17.3088C2.84766 17.6182 3.14766 17.89 3.48984 17.89H5.29922C5.37188 17.5268 5.55 17.1916 5.81953 16.9268C6.17344 16.5775 6.64219 16.3854 7.13906 16.3854C7.63594 16.3854 8.10469 16.5775 8.45859 16.9268C8.72578 17.1916 8.90391 17.5244 8.97656 17.8877Z" fill="#222222"></path>
                <path d="M17.3047 20.1328C16.2711 20.1328 15.4297 19.2914 15.4297 18.2578C15.4297 18.2484 15.4297 18.2414 15.4297 18.232C15.4367 17.7375 15.6336 17.2734 15.9852 16.9242C16.3391 16.575 16.8078 16.3828 17.3047 16.3828C17.8016 16.3828 18.2703 16.575 18.6242 16.9242C18.9758 17.2734 19.1727 17.7375 19.1797 18.232V18.2578C19.1797 19.2914 18.3383 20.1328 17.3047 20.1328ZM17.3047 17.0859C16.6648 17.0859 16.1398 17.6063 16.1328 18.2438V18.2531V18.2578C16.1328 18.9047 16.6578 19.4297 17.3047 19.4297C17.9516 19.4297 18.4766 18.9047 18.4766 18.2578V18.2438C18.4695 17.6063 17.9445 17.0859 17.3047 17.0859Z" fill="#222222"></path>
                <path d="M21.8539 18.5908H18.4812L18.4766 18.2439C18.4695 17.6041 17.9445 17.0861 17.3047 17.0861C16.6648 17.0861 16.1398 17.6064 16.1328 18.2439L16.1281 18.5908H13.8828V9.61426H18.7602L21.8516 13.4838V18.5908H21.8539ZM19.1445 17.8877H21.1508V13.7299L18.425 10.3174H14.5883V17.8877H15.4672C15.5398 17.5244 15.718 17.1893 15.9875 16.9244C16.3414 16.5752 16.8102 16.383 17.307 16.383C17.8039 16.383 18.2727 16.5752 18.6266 16.9244C18.8937 17.1916 19.0719 17.5244 19.1445 17.8877Z" fill="#222222"></path>
                <path d="M7.14062 20.1328C6.10703 20.1328 5.26562 19.2914 5.26562 18.2578C5.26562 18.2484 5.26562 18.2414 5.26562 18.232C5.27266 17.7375 5.46953 17.2734 5.82109 16.9242C6.175 16.575 6.64375 16.3828 7.14062 16.3828C7.6375 16.3828 8.10625 16.575 8.46016 16.9242C8.81172 17.2734 9.00859 17.7375 9.01562 18.232V18.2578C9.01562 19.2914 8.17422 20.1328 7.14062 20.1328ZM7.14062 17.0859C6.50078 17.0859 5.97578 17.6063 5.96875 18.2438V18.2555V18.2578C5.96875 18.9047 6.49375 19.4297 7.14062 19.4297C7.7875 19.4297 8.3125 18.9047 8.3125 18.2578V18.2438C8.30547 17.6063 7.77813 17.0859 7.14062 17.0859Z" fill="#222222"></path>
                <path d="M16.2891 13.2656H21.4922V13.9688H16.2891V13.2656Z" fill="#222222"></path>
                <path d="M8.34531 8.85469C7.68203 8.85469 7.14062 8.31562 7.14062 7.65C7.14062 6.98672 7.67969 6.44531 8.34531 6.44531C9.00859 6.44531 9.55 6.98437 9.55 7.65C9.55 8.31562 9.00859 8.85469 8.34531 8.85469ZM8.34531 7.15078C8.06875 7.15078 7.84375 7.37578 7.84375 7.65234C7.84375 7.92891 8.06875 8.15391 8.34531 8.15391C8.62187 8.15391 8.84687 7.92891 8.84687 7.65234C8.84687 7.37578 8.62187 7.15078 8.34531 7.15078Z" fill="#222222"></path>
              </svg>
              {/* <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            99+
                        </span> */}
            </button>

          </div>

          <div className=" hidden md:flex px-[5px]">
            <button 
            className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100"
            onClick={() => setloginbarOpen(true)}
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1" stroke="currentColor" class="">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>

            </button>
          </div>
          <div className="hidden md:flex px-[5px]">
            <NavLink to='/Wishlist'className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 6.784a5.443 5.443 0 00-9.193-2.143l-.559.626-.56-.626a5.443 5.443 0 00-9.192 2.143 5.634 5.634 0 001.272 6.295l8.48 8.482 8.48-8.482a5.634 5.634 0 001.272-6.295z" />
              </svg>

              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </NavLink>
          </div>
          <div className="px-[5px]">
            <button 
            className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100"
            onClick={() => setcartbarOpen(true)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"  stroke="currentColor" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.5l1.5 9h12.75a1.5 1.5 0 001.47-1.21l.75-3.75a1.5 1.5 0 00-1.47-1.79H6.21" />
            <circle cx="7" cy="20" r="1.4" stroke="currentColor" fill="none" stroke-width="1.5" />
            <circle cx="17" cy="20" r="1.4" stroke="currentColor" fill="none" stroke-width="1.5" />
          </svg>


              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg> */}
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>

        </div>

      </div>



      <div className={`fixed inset-0 bg-black  bg-opacity-50 z-40 transition-opacity ${sidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>
      <div>
      <div className={`fixed flex top-0 left-0 w-[calc(100vw-20px)] z-110  sm:w-[340px] h-full shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50`}>
        <div className='  bg-white w-full'>
        <div className="flex justify-between items-center p-4 min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">MENU</h2>
          
        </div>
        <nav className="">
          <ul>
          
            {navigation.map((x) => (
              <li key={x.to} className='h-[50px] flex items-center border-b border-[#dddddd]'>
                <NavLink
                  to={x.to}
                  className="flex items-center py-3 px-6 text-xl hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <img src={x.image} alt={x.text} className="h-6 w-6 mr-3" />
                  {x.text}
                </NavLink>
              </li>
            ))}

          <li  className='h-[50px] flex items-center border-b border-[#dddddd]'>
                          <NavLink
                            className="flex items-center py-3 px-6 text-xl hover:bg-gray-100"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                            <path fill="#FF7C35" d="M16.5 7.87523V13.5002H21.75V12.0002L17.094 7.34424L16.5 7.87523Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            <path fill="#FF7C35" d="M7.6875 12.3687C7.6875 12.3687 4.125 7.51164 4.125 5.42943C4.125 3.4633 5.721 1.8664 7.6875 1.8664C9.654 1.8664 11.25 3.4633 11.25 5.42943C11.25 7.51164 7.6875 12.3687 7.6875 12.3687Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            <path fill="#061946" d="M3.52907 5.26144C3.52382 5.26219 3.51855 5.26294 3.51405 5.26369L3.5073 5.25019V5.26443C2.3823 5.38893 1.50781 6.34219 1.50781 7.50019V17.2502C1.50781 17.8472 1.74481 18.4194 2.16706 18.8409C2.58856 19.2632 3.16156 19.5002 3.75781 19.5002H3.88605C3.8028 19.7349 3.75781 19.9877 3.75781 20.2502C3.75781 21.4922 4.76657 22.5009 6.00857 22.5009C7.24982 22.5009 8.25857 21.4922 8.25857 20.2502C8.25857 19.9877 8.21355 19.7349 8.1303 19.5002H15.5111C15.4278 19.7349 15.3828 19.9877 15.3828 20.2502C15.3828 21.4922 16.3916 22.5009 17.6336 22.5009C18.8748 22.5009 19.8836 21.4922 19.8836 20.2502C19.8836 19.9877 19.8386 19.7349 19.7553 19.5002H20.2578C20.8548 19.5002 21.4271 19.2632 21.8486 18.8409C22.2708 18.4194 22.5078 17.8472 22.5078 17.2502C22.5078 15.7974 22.5078 13.6652 22.5078 12.6212C22.5078 12.0249 22.2708 11.4527 21.8486 11.0304L18.2276 7.40944C17.8053 6.98719 17.2331 6.75019 16.6368 6.75019C16.1928 6.75019 15.5763 6.75019 15.0078 6.75019C14.7213 6.75019 14.4408 6.80494 14.1791 6.90844C13.9196 5.95294 13.0458 5.25019 12.0078 5.25019H11.8631C11.6418 3.14494 9.85982 1.50244 7.69682 1.50244C5.52932 1.50244 3.74432 3.15094 3.52907 5.26144ZM17.6336 19.5002C18.0476 19.5002 18.3836 19.8362 18.3836 20.2502C18.3836 20.6649 18.0476 21.0009 17.6336 21.0009C17.2188 21.0009 16.8828 20.6649 16.8828 20.2502C16.8828 19.8362 17.2188 19.5002 17.6336 19.5002ZM6.00857 19.5002C6.42257 19.5002 6.75857 19.8362 6.75857 20.2502C6.75857 20.6649 6.42257 21.0009 6.00857 21.0009C5.59382 21.0009 5.25781 20.6649 5.25781 20.2502C5.25781 19.8362 5.59382 19.5002 6.00857 19.5002ZM11.6913 6.75019C11.5466 7.21069 11.3276 7.71768 11.0591 8.23518C10.3346 9.63018 9.27482 11.1332 8.69882 11.9169H9.75781C10.1718 11.9169 10.5078 12.2529 10.5078 12.6669C10.5078 13.0809 10.1718 13.4169 9.75781 13.4169H6.00781C5.59381 13.4169 5.25781 13.0809 5.25781 12.6669C5.25781 12.2529 5.59381 11.9169 6.00781 11.9169H6.6948C6.11805 11.1332 5.05832 9.63018 4.33457 8.23518C4.06607 7.71843 3.84706 7.21144 3.70231 6.75244C3.31381 6.78094 3.00781 7.10494 3.00781 7.50019V17.2502C3.00781 17.4489 3.08731 17.6402 3.22756 17.7804C3.36856 17.9214 3.55906 18.0002 3.75781 18.0002H6.00781H12.7578V7.50019C12.7578 7.08619 12.4218 6.75019 12.0078 6.75019H11.6913ZM15.7578 8.25019H15.0078C14.8091 8.25019 14.6186 8.32894 14.4776 8.46994C14.3373 8.61019 14.2578 8.80144 14.2578 9.00019V18.0002H20.2578C20.4566 18.0002 20.6478 17.9214 20.7881 17.7804C20.9291 17.6402 21.0078 17.4489 21.0078 17.2502V14.2502H18.0078C16.7651 14.2502 15.7578 13.2429 15.7578 12.0002V8.25019ZM17.2578 8.56069V12.0002C17.2578 12.4142 17.5938 12.7502 18.0078 12.7502H21.0078V12.6212C21.0078 12.4224 20.9291 12.2319 20.7881 12.0909L17.2578 8.56069ZM7.69682 10.7469C7.12982 9.96168 6.27257 8.71294 5.66582 7.54444C5.29832 6.83644 5.0073 6.17269 5.0073 5.69194C5.0073 4.20694 6.21257 3.00244 7.69682 3.00244C9.18107 3.00244 10.3863 4.20694 10.3863 5.69194C10.3863 6.17269 10.0946 6.83644 9.72781 7.54444C9.12031 8.71294 8.26382 9.96168 7.69682 10.7469ZM7.82955 4.50019C8.47455 4.50019 8.99806 5.02369 8.99806 5.66869C8.99806 6.31294 8.47455 6.83644 7.82955 6.83644C7.1853 6.83644 6.66182 6.31294 6.66182 5.66869C6.66182 5.02369 7.1853 4.50019 7.82955 4.50019Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            Track Your Order
                          </NavLink>
                        </li>
          </ul>
        </nav>
        
        </div>
        <button onClick={() => setSidebarOpen(false)} className="p-2 h-[50px] w-[50px] flex items-center justify-center bg-black">
        <svg className='h-[20px] w-[20px]'  viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="white" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        
      </div>
      
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${searchbarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setsearchbarOpen(false)}></div>

<div className={`fixed top-0 right-0 w-[calc(100vw-65px)] z-110 sm:w-[340px] bg-white shadow-lg transform ${
    searchbarOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform z-50 max-h-screen h-screen flex flex-col`}>
      <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">SEARCH OUR SITE</h2>
          <button onClick={() => setsearchbarOpen(false)} className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180">
          <svg  role="presentation" viewBox="0 0 16 14" width="16"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        </div>
        




        <div className='p-5 border-1 border-[#dddddd]'>
        <div  className=" bg-white  ">
  
      <form >
      <div className="w-full mb-5 h-[40px] flex justify-center border  border-[#dddddd] relative">
  <select
    className="w-full ps-[15px] pe-[30px] focus:outline-none text-[14px] focus:border-0 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_10px_top_50%] bg-[length:auto_18px]"
  >
    <option value="*">All Categories</option>
    <option value="Powder">Powder</option>
  </select>
</div>

      <div className="flex  border-1 border-[#dddddd] " >
        <input
          autoComplete="off"
          className='w-full border-0 ps-[20px] pe-50px focus:outline-none focus:border-0 h-[40px] text-[14px]'
          type="text"
          placeholder="Search"
        />
        {/* <input type="search"   readOnly /> */}
        <button type="submit" className='w-[50px]'>
          <svg  viewBox="0 0 18 19" width="16">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </form>


        </div>
        </div>

        <div className="font-semibold text-secondary-color px-5 py-[10px] border-b border-[#dddddd]  shadow-md leading-[36px]
">
          Need some inspiration?
        </div>

        <div className="flex-grow overflow-auto p-5">
          {products.map((product) => (
            <div key={product.id} className="  flex pb-[10px] mb-[10px]  ">
              <img src={product.image_url} alt={product.name}  className=" h-20 w-20 ps-[15px] object-cover " />
              <h2 className="flex items-center px-[15px]">{product.name}</h2>
            </div>
          ))}
      </div>

      <div className="sticky bottom-0 left-0 w-full border-t border-gray-300 shadow-md bg-white">
    <button className="w-full flex  items-center py-[12px] px-[20px]">
      View All
      <svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path>
      </svg>
    </button>
  </div>



      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${loginbarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setloginbarOpen(false)}></div>

      <div className={`fixed top-0 right-0 w-[calc(100vw-65px)] sm:w-[340px] z-110 h-full bg-white shadow-lg transform ${loginbarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform z-50`}>
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">LOGIN</h2>
          <button onClick={() => setloginbarOpen(false)} className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180">
          <svg class="t4s-iconsvg-close" role="presentation" viewBox="0 0 16 14" width="16"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className='p-5'>
        <div id="login_login-sidebar" className=" bg-white  ">


      <form  method="post" action="/account/login" acceptCharset="UTF-8">
  
        
      <div className="relative w-full ">
        <input
          type="email"
          id="email"
          className="peer block w-full border border-gray-300  mb-[30px]  p-2 pt-5"
        />
        <label
          htmlFor="email"
          className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"
        >
          Email <span className="text-red-500">*</span>
        </label>
      </div>

      <div className="relative w-full ">
          <input
            type="password"
            name="password"
            className="peer block w-full border border-gray-300 mb-[10px]   p-2 pt-5"
            required
          />
          <label
            htmlFor="CustomerPassword"
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"
          >
            Password <span className="text-red-500">*</span>
          </label>
        </div>

        <a className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] text-underline mb-[30px] underline ">Forgot your password?</a>

        <button
          type="submit"
          className="w-full bg-[#018d43] hover:cursor-pointer text-[14px] font-semibold text-white py-2 px-4  h-[40px] mb-5 hover:bg-[#16569d]"
        >
          Sign In
        </button>


        <a className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] text-underline underline "> New customer? Create your account</a>

        </form>
        </div>
        </div>
      </div>



      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${cartbarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setcartbarOpen(false)}></div>

      <div className={`fixed top-0 right-0 w-[calc(100vw-65px)] sm:w-[340px] z-110 h-full bg-white shadow-lg transform ${cartbarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform z-50`}>
      <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[50px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">SHOPPING CART</h2>
          <button onClick={() => setcartbarOpen(false)} className="p-2 h-[50px] w-[50px] flex justify-center transition transform duration-700 hover:rotate-180">
          <svg class="t4s-iconsvg-close" role="presentation" viewBox="0 0 16 14" width="16"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        </div>
       
       

        <div className="p-4  text-center rounded-md border-b border-gray-300 shadow-md">
        <div className="text-sm text-start text-[#696969]">
  Free Shipping for all orders over <span className="text-red-600 font-bold">₹500.00</span>
</div>

<div className="relative w-full bg-gray-200 h-2 rounded-full mt-2 overflow-visible">
        {/* Hidden slider only for layout/tracking */}
        <RangeSlider
          className="opacity-0 absolute pointer-events-none"
          defaultValue={[0, progress]}
          thumbsDisabled={[true, true]}
          rangeSlideDisabled={true}
        />

        {/* Green progress bar */}
        <div
          className="absolute left-0 top-0 h-full bg-[#428445] rounded-full"
          style={{ width: `${progress}%` }}
        >
          <span
          className="absolute top-0 left-0 h-full w-full z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='60' height='30'><path fill='#fff' fill-opacity='0.47' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'/></svg>`)}`,
            backgroundRepeat: 'repeat',
            backgroundSize: '40px',
            animation: 'movePattern 5s linear infinite'
          }}
        />
        </div>
        <style>{`
        @keyframes movePattern {
          0% {
            background-position-x: 0px;
            background-position-y: 0px;
          }
          100% {
            background-position-x: -100px;
            background-position-y: -100px;
          }
        }
      `}</style>

        {/* Truck SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="26"
          className="absolute -top-3 z-10 transition-all duration-300"
          style={{ left: `calc(${progress}% - 11px)` }} 
        >
          <path
            className="fill-current text-red-600"
            d="M64 48C64 21.49 85.49 0 112 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H574.9C567.1 361.7 520.4 320 464 320C407.6 320 360.9 361.7 353.1 416H286.9C279.1 361.7 232.4 320 176 320C127.9 320 86.84 350.4 70.99 392.1C66.56 385.7 64 377.1 64 368V256H208C216.8 256 224 248.8 224 240C224 231.2 216.8 224 208 224H64V192H240C248.8 192 256 184.8 256 176C256 167.2 248.8 160 240 160H64V128H272C280.8 128 288 120.8 288 112C288 103.2 280.8 96 272 96H64L64 48zM544 256V237.3L466.7 160H416V256H544z"
          ></path>
          <path
            className="fill-current text-white"
            d="M272 128H16C7.164 128 0 120.8 0 112C0 103.2 7.164 96 16 96H272C280.8 96 288 103.2 288 112C288 120.8 280.8 128 272 128zM240 160C248.8 160 256 167.2 256 176C256 184.8 248.8 192 240 192H48C39.16 192 32 184.8 32 176C32 167.2 39.16 160 48 160H240zM208 224C216.8 224 224 231.2 224 240C224 248.8 216.8 256 208 256H16C7.164 256 0 248.8 0 240C0 231.2 7.164 224 16 224H208zM256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432zM544 432C544 476.2 508.2 512 464 512C419.8 512 384 476.2 384 432C384 387.8 419.8 352 464 352C508.2 352 544 387.8 544 432z"
          ></path>
        </svg>
      </div>

    </div>



         <div className="text-center mt-[2.5rem] text-[#696969] ">
      <svg
        id="icon-cart-empty"
        width="50"
        height="50"
        fill="#696969"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="mx-auto mb-[0.625rem]"
      >
        <path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path>
      </svg>
      <p className="text-lg font-medium text-gray-700 mb-4">Your cart is empty.</p>
      <button
          className="w-6/10 px-5 bg-[#018d43] hover:cursor-pointer text-white py-2   mb-[0.9375rem] hover:bg-[#16569d]"
        >
          Return To Shop
        </button>
    </div>
      </div>








      <div
      className="fixed md:hidden z-100 right-0 left-0 bottom-0 flex items-center justify-between bg-white shadow-md p-2"
      
    >
      <div className="flex-1 text-center">
        <NavLink to='/ShopAll'  className="flex flex-col items-center">
          <span className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
          <span className="text-xs text-gray-700">Shop</span>
        </NavLink>
      </div>

      {/* Wishlist */}
      <div className="flex-1 text-center">
        <NavLink to='/Wishlist' className="flex flex-col items-center">
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full px-1">0</span>
          </span>
          <span className="text-xs text-gray-700">Wishlist</span>
        </NavLink>
      </div>

      {/* Account */}
      <div className="flex-1 text-center">
        <button className="flex flex-col items-center justify-center w-full"
        onClick={() => setloginbarOpen(true)}
          >
          <span className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <span className="text-xs text-gray-700">Account</span>
        </button>
      </div>
    </div>

    </>

  )
}

export default Navbar
