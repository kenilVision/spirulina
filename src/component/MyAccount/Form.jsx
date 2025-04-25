import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../../Slice/user";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Form() {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate()
  // Form state
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

  // Input change handlers
  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogin(prev => ({ ...prev, [name]: value }));
  };

  const handleChangeregister = (e) => {
    const { name, value } = e.target;
    setRegister(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser(login));
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success(resultAction.payload?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/')
      } else {
        toast.error(resultAction.payload?.message || "Login failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(signupUser(register));
      if (signupUser.fulfilled.match(resultAction)) {
        toast.success(resultAction.payload?.message , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSignup(false); // Switch to login after successful signup
      } else {
        toast.error(resultAction.payload?.message || "Signup failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-[15px] flex justify-center">
        <div className="w-full max-w-[410px]">
          <form >
            {isSignup && (
              <>
                {/* First Name Field */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="firstname"
                    required
                    onChange={handleChangeregister}
                    value={register.firstname}
                    className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    placeholder="First Name"
                  />
                  <span className="absolute left-3 text-[#696969] text-sm transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    First Name <span className="text-red-500">*</span>
                  </span>
                </div>

                {/* Last Name Field */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="lastname"
                    required
                    onChange={handleChangeregister}
                    value={register.lastname}
                    className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    placeholder="Last Name"
                  />
                  <span className="absolute left-3 text-[#696969] text-sm transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </div>
              </>
            )}

            {/* Email Field */}
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                required
                onChange={isSignup ? handleChangeregister : handleChangelogin}
                value={isSignup ? register.email : login.email}
                className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                placeholder="Email"
              />
              <span className="absolute left-3 text-[#696969] text-sm transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                Email <span className="text-red-500">*</span>
              </span>
            </div>

            {/* Password Field */}
            <div className="relative mb-4">
              <input
                type="password"
                name="password"
                required
                onChange={isSignup ? handleChangeregister : handleChangelogin}
                value={isSignup ? register.password : login.password}
                className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                placeholder="Password"
              />
              <span className="absolute left-3 text-[#696969] text-sm transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                Password <span className="text-red-500">*</span>
              </span>
            </div>

            {!isSignup && (
              <button
                type="button"
                className="block text-[#696969] hover:cursor-pointer underline mb-6"
              >
                Forgot your password?
              </button>
            )}

            <div className="mb-5">
              <button
                type="submit"
                className="w-full bg-[#018d43] hover:cursor-pointer text-white py-2"
                onClick={isSignup ? handleSignUp : handleLogin} 
              >
                {isSignup ? "Create Account" : "Sign In"}
              </button>
            </div>

            <button
              type="button"
              className="text-[#696969] hover:cursor-pointer underline block"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Already have an account? Sign in" : "New customer? Create your account"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Form;