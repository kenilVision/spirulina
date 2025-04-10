import React from "react";

function LoginSignupSideBar({ loginbarOpen, setloginbarOpen }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          loginbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setloginbarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[calc(100vw-65px)] sm:w-[340px] z-110 h-full bg-white shadow-lg transform ${
          loginbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-50`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">LOGIN</h2>
          <button
            onClick={() => setloginbarOpen(false)}
            className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180"
          >
            <svg
              class="t4s-iconsvg-close"
              role="presentation"
              viewBox="0 0 16 14"
              width="16"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-5">
          <div id="login_login-sidebar" className=" bg-white  ">
            <form method="post" action="/account/login" acceptCharset="UTF-8">
              <div className="relative w-full ">
                <div className="relative mb-6">
                  <input
                    type="email"
                    name="customer[email]"
                    id="CustomerEmail"
                    required
                    autoComplete="off"
                    className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    placeholder="Email"
                  />
                  <span
                    className="absolute left-3 text-[#696969] text-sm transition-all duration-200 
                  top-2 peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 
                  peer-focus:top-2 peer-focus:translate-y-0 
                  peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Email <span className="text-red-500">*</span>
                  </span>
                </div>
              </div>

              <div className="relative w-full ">
                <input
                  type="password"
                  name="password"
                  id="CustomerPassword"
                  required
                  autoComplete="off"
                  className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                  placeholder="Password"
                />
                <span
                  className="absolute left-3 text-[#696969] text-sm transition-all duration-200 
                  top-2 peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 
                  peer-focus:top-2 peer-focus:translate-y-0 
                  peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Password <span className="text-red-500">*</span>
                </span>
              </div>

              <a className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] text-underline mb-[30px] underline ">
                Forgot your password?
              </a>

              <button
                type="submit"
                className="w-full bg-[#018d43] hover:cursor-pointer text-[14px] font-semibold text-white py-2 px-4  h-[40px] mb-5 hover:bg-[#16569d]"
              >
                Sign In
              </button>

              <a className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] text-underline underline ">
                {" "}
                New customer? Create your account
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignupSideBar;
