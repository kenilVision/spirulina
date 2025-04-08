import React from 'react'

function Header() {
  return (
    <div className="relative w-full bg-black bg-opacity-20 bg-[url('https://spiruswastha.com/cdn/shop/files/Register_and_login.jpg?v=1733739790&width=3024')] bg-cover bg-center flex justify-center">
  <div className='absolute bg-black opacity-50 w-full h-full'></div>
  <div className="w-full max-w-[1440px] px-[15px] z-10 flex items-center">
    <p className=" py-[50px] md:py-[100px]  text-[20px] text-white font-semibold">LOGIN<br/>
    <span className='flex items-center mt-[15px] text-[18px]'> 
    Home
    <svg class="t4s-icon-arrow" height={9}   width={9} viewBox="0 0 100 100"  fill="white" className='mx-2' xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
        class="arrow"
        transform="translate(100, 100) rotate(180)"
      />
    </svg>

    LOGIN
    </span>
    </p>
  </div>
</div>
  )
}

export default Header
