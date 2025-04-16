import React , {useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom';
import { GetCategories } from "../Api/Category";

function MenuSideBar({sidebarOpen, setSidebarOpen}) {


  const [navigation, setNavigation] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        const data = await GetCategories();
        if (data) {
          setNavigation(data);
        }
      };
  
      fetchCategories();
    }, []);

    // const navigation = [
    //     {
    //       to: '/Immunity',
    //       text: "Immunity",
    //       image: "https://spiruswastha.com/cdn/shop/files/immune_medium.svg?v=1736144279"
      
    //     },
    //     {
    //       to: '/SkinCare',
    //       text: "Skin Care",
    //       image: "//spiruswastha.com/cdn/shop/files/skin_care_medium.svg?v=1736144421"
    //     },
    //     {
    //       to: '/HairCare',
    //       text: "Hair Care",
    //       image: "//spiruswastha.com/cdn/shop/files/hair_care_medium.svg?v=1736144487"
    //     },
    //     {
    //       to: '/HeartCare',
    //       text: "Heart Care",
    //       image: "//spiruswastha.com/cdn/shop/files/heart_care_medium.svg?v=1736144448"
    //     },
    //     {
    //       to: '/Wellness',
    //       text: "Wellness",
    //       image: "//spiruswastha.com/cdn/shop/files/wellness_medium.svg?v=1736144535"
    //     },
    //     {
    //       to: '/Cleansing',
    //       text: "Cleansing",
    //       image: "//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
    //     }
      
    //   ]


  return (
    <>
          <div className={`fixed inset-0 bg-black  bg-opacity-50 z-40 transition-opacity ${sidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>
      <div className={`fixed flex top-0 left-0 w-[calc(100vw-20px)] z-110  sm:w-[340px] h-full shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50`}>
        <div className='  bg-white w-full'>
        <div className="flex justify-between items-center p-4 min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">MENU</h2>
          
        </div>
        <nav className="">
          <ul>
          
            {navigation.map((x , i) => (
              <li key={i} className='h-[50px] flex items-center border-b border-[#dddddd]'>
                <NavLink
                  to={`/collection/${x.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center py-3 px-6 text-xl hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <img src={`http://localhost:5050/image/categories/icons/${x.icon}`} alt={x.name} className="h-6 w-6 mr-3" />
                  {x.name}
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
    </>
  )
}

export default MenuSideBar
