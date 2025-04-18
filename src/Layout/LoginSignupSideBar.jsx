import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { loginUser , signupUser  } from "../Slice/user";


function LoginSignupSideBar({ loginbarOpen, setloginbarOpen }) {

  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
});
  const [login, setLogin] = useState({
    email: "",
    password: ""
});

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    console.log(login);
  };
  const handleChangeregister = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
    console.log(register);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
  
    try {
      console.log(login);
      const resultAction = await dispatch(loginUser(login));
  
      if (loginUser.fulfilled.match(resultAction)) {
        setloginbarOpen(false)   
      } else {
        console.error("Login failed:", resultAction.payload);
      }
  
    } catch (err) {
      console.error("Error during login:", err);
    }
  };
  const [isSignup, setIsSignup] = useState(false);
const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    console.log(register);
    const resultAction = await dispatch(signupUser(register));

    if (signupUser.fulfilled.match(resultAction)) {
      setIsSignup(!isSignup); 
    } else {
      console.error("Signup failed:", resultAction.payload);
    }

  } catch (err) {
    console.error("Error during signup:", err);
  }

}


  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          loginbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setloginbarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[calc(100vw-65px)] sm:w-[340px] h-full bg-white shadow-lg transform ${
          loginbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-[110]`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">
            {isSignup ? "Register" : "LOGIN"}
          </h2>
          <button
            onClick={() => setloginbarOpen(false)}
            className="p-2 transition h-[50px] w-[50px] flex justify-center duration-700 hover:rotate-180"
            aria-label="Close login sidebar"
          >
            <svg
              className="t4s-iconsvg-close"
              role="presentation"
              viewBox="0 0 16 14"
              width="16"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-5">
          <div id="login_login-sidebar" className="bg-white">
            <form
              method="post"
            >
              {isSignup && (
                <>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      name="firstname"
                      required
                      autoComplete="off"
                      placeholder="First Name"
                      onChange={handleChangeregister}
                      value={register.firstname}
                      className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                      First Name <span className="text-red-500">*</span>
                    </span>
                  </div>

                  <div className="relative mb-6">
                    <input
                      type="text"
                      name="lastname"
                      required
                      autoComplete="off"
                      onChange={handleChangeregister}
                      value={register.lastname}
                      placeholder="Last Name"
                      className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                      Last Name <span className="text-red-500">*</span>
                    </span>
                  </div>
                </>
              )}

              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  id="CustomerEmail"
                  required
                  autoComplete="off"
                  onChange={isSignup ? handleChangeregister : handleChangelogin}
                  value={isSignup ? register.email : login.email}
                  placeholder="Email"
                  className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                />
                <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                  Email <span className="text-red-500">*</span>
                </span>
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  name="password"
                  id="CustomerPassword"
                  required
                  autoComplete="off"
                  onChange={isSignup ? handleChangeregister : handleChangelogin}
                  value={isSignup ? register.password : login.password}
                  placeholder="Password"
                  className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                />
                <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                  Password <span className="text-red-500">*</span>
                </span>
              </div>

              {!isSignup && (
                <a className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] underline mb-[30px]">
                  Forgot your password?
                </a>
              )}

              <button
                type="submit"
                className="w-full bg-[#018d43] hover:cursor-pointer text-[14px] font-semibold text-white py-2 px-4 h-[40px] mb-5 hover:bg-[#16569d]"
                onClick={isSignup ? handleSignUp : handlelogin}
              >
                {isSignup ? "Create Account" : "Sign In"}
                
              </button>

              <a
                className="block text-[#8C8C8C] hover:text-[#018d43] text-[14px] underline text-center cursor-pointer"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup
                  ? "Already have an account? Sign in"
                  : "New customer? Create your account"}
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignupSideBar;
