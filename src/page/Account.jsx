import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';


function Account({children}) {
  const accountNavLinks = [
    {
      label: 'Dashboard',
      to: '/account/dashboard',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
    },
    {
      label: 'Order History',
      to: '/account/orders',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"></path>
          <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H6C3 2 2 3.79 2 6V7Z" ></path>
          <path d="M6 9H12" ></path>
          <path d="M6.75 13H11.25" ></path>
        </svg>
      ),
    },
    {
      label: 'Addresses',
      to: '/account/addresses',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      label: 'Logout',
      to: '/logout', // or handle logout differently
      function :()=>{
         Cookies.remove("Token");
         window.location.href = "/"; 
      },
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[30px] bg-[#f8f8f8]">
      <div className="w-full max-w-[1440px] md:flex mx-auto text-center px-[15px] gap-2">
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-1/4 ">
          <ul className='bg-white rounded-lg overflow-hidden'>
          {accountNavLinks.map(({ label, to, icon, function: customFunction }, index) => (
              <li key={index}>
                {customFunction ? (
                  <div
                    onClick={customFunction}
                    className="flex items-center gap-2 text-[18px] p-[17px] text-gray-700 hover:text-black hover:bg-[#f5f5f5] cursor-pointer transition-all duration-300"
                  >
                    {icon}
                    {label}
                  </div>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-[18px] p-[17px] transition-all duration-300 ${
                        isActive
                          ? 'bg-[#00800026] text-[#018d43] border-l-5'
                          : 'text-gray-700 hover:text-black hover:bg-[#f5f5f5]'
                      }`
                    }
                  >
                    {icon}
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Route Content */}
        <div className="w-full md:w-3/4 mt-5 md:mt-0 text-left">
        {children}
        </div>
      </div>
    </div>
  );
}

export default Account;
