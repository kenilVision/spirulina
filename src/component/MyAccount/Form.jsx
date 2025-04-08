import React from 'react';

function Form() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-[15px] flex justify-center">
        <div id="login" className="w-full max-w-[410px]">
          <form method="post" action="/account/login" noValidate>
            {/* Email Field */}
            <div className="relative mb-6">
              <input
                type="email"
                name="customer[email]"
                id="CustomerEmail"
                required
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

            {/* Password Field */}
            <div className="relative mb-4">
              <input
                type="password"
                name="password"
                id="CustomerPassword"
                required
                autoComplete="current-password"
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

            <button
              type="button"
              className="block text-[#696969] hover:cursor-pointer underline mb-6"
            >
              Forgot your password?
            </button>

            <div className="mb-5">
              <button
                type="submit"
                className="w-full bg-[#018d43] hover:cursor-pointer text-white py-2"
              >
                Sign In
              </button>
            </div>

            <a className="text-[#696969] hover:cursor-pointer underline block" >
              New customer? Create your account
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
