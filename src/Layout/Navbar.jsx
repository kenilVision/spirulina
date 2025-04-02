import React , { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom';



const navigation = [
      {
      to:'/Immunity',
      text:"Immunity",
      image:"//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
     
      },
      {
      to:'/SkinCare',
      text:"Skin Care",
      image:"//spiruswastha.com/cdn/shop/files/skin_care_medium.svg?v=1736144421"
      },
      {
        to:'/HairCare',
        text:"Hair Care",
        image:"//spiruswastha.com/cdn/shop/files/hair_care_medium.svg?v=1736144487"
      },
      {
        to:'/HeartCare',
        text:"Heart Care",
        image:"//spiruswastha.com/cdn/shop/files/heart_care_medium.svg?v=1736144448"
      },
      {
        to:'/Wellness',
        text:"Wellness",
        image:"//spiruswastha.com/cdn/shop/files/wellness_medium.svg?v=1736144535"
      },
      {
        to:'/Cleansing',
        text:"Cleansing",
        image:"//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
      }
      
  ] 
  
function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchbarOpen, setsearchbarOpen] = useState(false);
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; 
        };
    }, [sidebarOpen , searchbarOpen]);


    return (
        <>    <div className='py-[7px]  w-full flex justify-center items-center text-white bg-[#018d43]'>
            <div className='px-[5px] w-auto md:px-[15px] text-[14px] text-center'>
                <p>Spiru’s Summer Surprise – Save Up to 35% on Your Favorites! </p>
            </div>
        </div>
            <div className='lg:px-[32px] flex justify-between ' >


                <button 
                className="lg:hidden px-4 py-2 focus:outline-none"
                onClick={() => setSidebarOpen(true)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="currentColor"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
                </button>


                <div className='px-[15px] w-auto'>
                    <div className='ms-[10px]'>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0611/1038/6771/t/25/assets/spiru_logo.svg"
                        className='py-[5px]'
                        />
                    </div>
                </div>
                <div className='hidden lg:flex items-center px-[15px]'>

                <nav>
                        <ul className='flex'>
                        {navigation.map((x) => (
                            <li key={x.to}  >
                                <NavLink to={x.to} className= "flex py-[5px] text-base px-[1.375rem] whitespace-nowrap hover:text-[#F99106] text-[#00000080]">
                                <img src={x.image} height='24' width='24' />                                       
                                {x.text}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </nav>

                </div>
             
                   
                <div className='flex items-center px-[15px]'>
                     <div className="px-[8px] flex items-center ">
                        <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100"
                        onClick={() => setsearchbarOpen(true)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </button>
                    </div>
                    <div className="px-[8px]">
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
                  
                    <div className="px-[8px]">
                        <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
                        </button>
                    </div>
                    <div className="px-[8px]">
                        <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                        </button>
                    </div>
                    <div className="px-[8px]">
                        <button className="relative flex items-center justify-center  rounded-lg hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                        </button>
                    </div>

                </div>
                
            </div>



    <div className={`fixed inset-0 bg-black  bg-opacity-50 z-40 transition-opacity ${sidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>
      <div className={`fixed top-0 left-0 w-85 h-full bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {navigation.map((x) => (
              <li key={x.to}>
                <NavLink 
                  to={x.to} 
                  className="flex items-center py-3 px-6 text-base text-gray-700 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <img src={x.image} alt={x.text} className="h-6 w-6 mr-3" />
                  {x.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${searchbarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} 
     onClick={() => setsearchbarOpen(false)}></div>

<div className={`fixed top-0 right-0 w-[340px] h-full bg-white shadow-lg transform ${searchbarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform z-50`}>
  <div className="flex justify-between items-center p-4 border-b">
    <h2 className="text-lg font-semibold">Menu</h2>
    <button onClick={() => setsearchbarOpen(false)} className="p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
        <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
  <nav className="mt-4">
    <ul>
      {navigation.map((x) => (
        <li key={x.to}>
          <NavLink 
            to={x.to} 
            className="flex items-center py-3 px-6 text-base text-gray-700 hover:bg-gray-100"
            onClick={() => setsearchbarOpen(false)} // Fixed here
          >
            <img src={x.image} alt={x.text} className="h-6 w-6 mr-3" />
            {x.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
</div>

        </>

    )
}

export default Navbar
