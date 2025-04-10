import React from "react";
import { NavLink } from "react-router-dom";
function SearchSideBar({ searchbarOpen, setsearchbarOpen }) {
  const products = [
    {
      name: "Natural Spirulina Tablet",
      image_url:
        "https://spiruswastha.com/cdn/shop/files/Spirulina_3fe544fc-dd3c-432e-a21b-9e52cf11d5fb.jpg",
    },
    {
      name: "Spiruvita Hair Oil",
      image_url: "https://spiruswastha.com/cdn/shop/files/Spirulina_50.jpg",
    },
    {
      name: "Natural Spirulina Powder",
      image_url:
        "https://spiruswastha.com/cdn/shop/files/Spirulina_5c11599d-41c1-480b-bc6b-772b9e067846.jpg",
    },
    {
      name: "Spiru Shine Shampoo",
      image_url:
        "https://spiruswastha.com/cdn/shop/files/Spirulina_7aed5f1c-f06f-467c-855e-6a5f3e56c44e.jpg",
    },
    {
      name: "Natural Amla Powder",
      image_url:
        "https://spiruswastha.com/cdn/shop/files/Spirulina_79824743-c18c-4aa3-9b4b-d5f61b709e7a.jpg",
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          searchbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setsearchbarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[calc(100vw-65px)] z-110 sm:w-[340px] bg-white shadow-lg transform ${
          searchbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-50 max-h-screen h-screen flex flex-col`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">
            SEARCH OUR SITE
          </h2>
          <button
            onClick={() => setsearchbarOpen(false)}
            className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180"
          >
            <svg role="presentation" viewBox="0 0 16 14" width="16">
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-5 border-1 border-[#dddddd]">
          <div className=" bg-white  ">
            <form>
              <div className="w-full mb-5 h-[40px] flex justify-center border  border-[#dddddd] relative">
                <select className="w-full ps-[15px] pe-[30px] focus:outline-none text-[14px] focus:border-0 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_10px_top_50%] bg-[length:auto_18px]">
                  <option value="*">All Categories</option>
                  <option value="Powder">Powder</option>
                </select>
              </div>

              <div className="flex  border-1 border-[#dddddd] ">
                <input
                  autoComplete="off"
                  className="w-full border-0 ps-[20px] pe-50px focus:outline-none focus:border-0 h-[40px] text-[14px]"
                  type="text"
                  placeholder="Search"
                />
                {/* <input type="search"   readOnly /> */}
                <button type="submit" className="w-[50px]">
                  <svg viewBox="0 0 18 19" width="16">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="font-semibold text-secondary-color px-5 py-[10px] border-b border-[#dddddd]  shadow-md leading-[36px]
          "
        >
          Need some inspiration?
        </div>

        <div className="flex-grow overflow-auto p-5">
          {products.map((product) => (
            <div key={product.id} className="  flex pb-[10px] mb-[10px]  ">
              <img
                src={product.image_url}
                alt={product.name}
                className=" h-20 w-20 ps-[15px] object-cover "
              />
              <h2 className="flex items-center px-[15px]">{product.name}</h2>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 left-0 w-full border-t border-gray-300 shadow-md bg-white">
          <NavLink
            to="/ShopAll"
            className="w-full flex  items-center py-[12px] px-[20px]"
            onClick={() => setsearchbarOpen(false)}
          >
            View All
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SearchSideBar;
