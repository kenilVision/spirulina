import React, { useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
function Footer() {
  

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>


      <div
        className='w-full py-[70px] lg:py-[150px]'
        style={{
          backgroundImage: "url('https://spiruswastha.com/cdn/shop/files/Subscribe_bg.jpg?v=1733745466&width=1944')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div className="w-full max-w-[1440px] flex flex-col items-center justify-center  mx-auto text-center px-[15px]"

        >
          <h2 className="text-4xl font-bold relative inline-block leading-1.2  mb-[35px]">
            Stay Up to Date with All News<br /> and Exclusive Offers
          </h2>


          <div className="flex w-full md:w-[600px] border-1 rounded-full border-[#018d43]" >
            <input
              autoComplete="off"
              className=' h-auto w-full border-0 ps-[20px] pe-50px focus:outline-none focus:border-0  text-[14px]'
              type="text"
              placeholder="Search"
            />
            <div className='p-[1px]'>
              <button type="submit" className='bg-[#018d43] text-white w-full h-full py-[13px] px-[15px] rounded-full text-[14px] '>
                Subscribe
              </button>
            </div>
          </div>


        </div>
      </div>




      <div className=' flex flex-col  items-center px-[15px] pt-[70px] md:pt-[80px] pb-[10p] lg:pb-[40px] lg:pt-[100px] '>

        <div className='max-w-[1650px]  gap-x-[0px] gap-y-[10px] md:gap-y-[30px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  >
          <div className='whitespace-nowrap' >

            <img src="https://spiruswastha.com/cdn/shop/t/25/assets/spiru_logo.svg?v=1687220542393843321737094841" className='mb-[25px] w-[210px]' />
            <p className=' mb-[10px] md:mb-[80px] text-[1.25rem] text-[#222222] '>
              Swastha for Lifе with Spirulina <br /> & Supеrfood Goodnеss
            </p>

            <div className="flex space-x-2 ">
              <div>
                <button className='bg-[#018d43] hover:cursor-pointer p-2'>

                  <svg fill="#ffffff" height="22px" width="22px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 310 310" xml:space="preserve">
                    <g id="XMLID_834_">
                      <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                        c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                        V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                        C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                        c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                    </g>
                  </svg>
                </button>
              </div>
              <div>
                <button className='bg-[#018d43] hover:cursor-pointer p-2'>

                  <svg viewBox="0 0 24 24" fill="#ffffff" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#222222" />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#222222" />
                    <circle cx="12" cy="12" r="3.5" stroke="#222222" />
                  </svg>
                </button>
              </div>
              <div>
                <button className='bg-[#018d43] hover:cursor-pointer p-2'>

                  <svg width="22px" height="22px" viewBox="0 -0.5 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
              </div>
            </div>
          </div>
          <div className=" w-full ">
            <div className="flex justify-between items-center md:block">
            <button
                className=" focus:outline-none text-[24px] flex justify-between items-center w-full"
                onClick={() => setIsOpen(!isOpen)}
              > 
              <h3 className="text-[22px] md:text-24 xl:text-[34px] font-medium ">Company</h3>
             
                <span className='md:hidden'>{isOpen ? "-" : "+"}</span>
              </button>
            </div>
            <div className={`mt-2 ${isOpen ? "block" : "hidden"} md:block`}>
              <ul className="space-y-2 w-full text-[17px] xl:text-[18px] font-medium">
                <div className='grid grid-cols-2 no-wrap leading-9'>
                  <div ><li> <NavLink to='/' className="">Home</NavLink></li></div><div><li><NavLink to='/About' >About Us</NavLink></li></div>
                  <div><li><NavLink to='/ShopAll' className="">Shop all</NavLink></li></div><div><li><NavLink to='/Contact' className="">Contact Us</NavLink></li></div>
                  <div><li><a className="">Blog</a></li></div><div><li><NavLink to='/MyAccount' className="">My Account</NavLink></li></div>
                  <div><li><NavLink to='/FAQ' className="">Faqs</NavLink></li></div><div><li><a className="">Track Your Order</a></li></div>

                  <div><li><NavLink to='/Training' className="">Training Center</NavLink></li></div><div></div>
                </div>

              </ul>
            </div>
          </div>
          <div className=" w-full ">
            <div className="flex justify-between items-center md:block"> 
              <button
                className=" focus:outline-none text-[24px] flex justify-between items-center w-full"
                onClick={() => setIsOpen2(!isOpen2)}
              > 
              <h3 className="text-[22px] md:text-24 xl:text-[34px] font-medium whitespace-nowrap ">Best Selling Products</h3>
              <span className='md:hidden'>  {isOpen2 ? "-" : "+"}</span>
              </button>
            </div>
            <div className={`mt-2 ${isOpen2 ? "block" : "hidden"} md:block`}>
              <ul className="space-y-2 w-full text-[18px] font-medium leading-9">
                <div ><li><NavLink to='/Products'>Spirulina Tablet</NavLink></li></div>
                <div><li><NavLink to='/Products'>Spirulina Capsule</NavLink></li></div>
                <div><li><NavLink to='/Products'>Spiruvita Oil</NavLink></li></div>
                <div><li><NavLink to='/Products'>Spirushine Shampoo</NavLink></li></div>
                <div><li><NavLink to='/Products'>Moringa Tablet</NavLink></li></div>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-[22px] md:text-24 xl:text-[34px] font-medium mb-5 "> Contact Us</h3>

            <div className='text-[15px] mb-[15px]'><span className=' font-semibold'>Address </span>: 2nd Floor, Flat No. A/203, Dev Prayag Residency, Opp. Shraddhadip Society, Causeway Singanpor Road, Singanpor, Surat, Gujarat, 395004</div>
            <div className='text-[15px] mb-[15px]'><span className=' font-semibold'>E-mail </span>: info@spiruswastha.com</div>
          </div>
        </div>
        <div className='w-full max-w-[1650px] pt-[10px]  md:pt-[20px]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  >
          <ul className=" flex justify-between flex-wrap space-y-3">
            <li>
              <NavLink to='/PrivacyPolicy' className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </NavLink>
            </li>
            <li>
            <NavLink to='/TermsAndServices' className="text-gray-600 hover:text-gray-900 transition-colors">
            Terms of Service
              </NavLink>
            </li>
            <li>
            <NavLink to='/ReturnAndRefund' className="text-gray-600 hover:text-gray-900 transition-colors">
            Return and Refund Policy
              </NavLink>
             
            </li>
            <li>
            <NavLink to='/Shipping' className="text-gray-600 hover:text-gray-900 transition-colors">
            Shipping Policy
              </NavLink>
              
            </li>
            <li>
            <NavLink to='/Contactinformation' className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact Information
              </NavLink>
              
            </li>
          </ul>
        </div>

      </div>

      <div className='py-[7px]  w-full flex justify-center items-center text-white bg-[#018d43] mb-[48px] md:mb-0'>
        <div className="px-2 md:px-4 text-center text-[14px] md:text-[16px] font-semibold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
          <p>© 2025 Spiru Swastha Developed By</p>
          <a href="#" className="underline">Visison Infotech</a>
        </div>
      </div>


    </>
  )
}

export default Footer
