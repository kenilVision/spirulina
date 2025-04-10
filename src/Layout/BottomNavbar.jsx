import React from 'react'
import { NavLink } from 'react-router-dom'

function BottomNavbar({ setloginbarOpen }) {
  const bottomNavData = [
    {
      to: '/ShopAll',
      label: 'Shop',
      isfunction: false,
      icon: (
        <svg
          aria-label="Shop"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      to: '/Wishlist',
      isfunction: false,
      label: 'Wishlist',
      icon: (
        <span className="relative">
          <svg
            aria-label="Wishlist"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full px-1">
            0
          </span>
        </span>
      ),
    },
    {
      label: 'Account',
      isfunction:true,
      function: () => setloginbarOpen(true),
      icon: (
        <svg
          aria-label="Account"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed md:hidden z-10 right-0 left-0 bottom-0 flex items-center justify-between bg-white shadow-md p-2">
      {bottomNavData.map((item, index) => (
        <div key={index} className="flex-1 text-center">
          {item.isfunction ? (
            <button
              onClick={item.function}
              className="flex flex-col items-center justify-center w-full"
            >
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-xs text-gray-700">{item.label}</span>
            </button>
          ) : (
            <NavLink to={item.to} className="flex flex-col items-center">
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-xs text-gray-700">{item.label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
}

export default BottomNavbar;
