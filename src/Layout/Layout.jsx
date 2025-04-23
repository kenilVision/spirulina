import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";
import BottomNavbar from "./BottomNavbar";
import LoginSignupSideBar from "./LoginSignupSideBar";
import CartSideBar from "./CartSideBar";
import SearchSideBar from "./SearchSideBar";
import MenuSideBar from "./MenuSideBar";


function Layout({ children }) {


  // State variables to manage the visibility of different components
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchbarOpen, setsearchbarOpen] = useState(false);
  const [loginbarOpen, setloginbarOpen] = useState(false);
  return (
    <>  
      <Navbar
        loginbarOpen={loginbarOpen}
        setloginbarOpen={setloginbarOpen}
        searchbarOpen={searchbarOpen}
        setsearchbarOpen={setsearchbarOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {children}
      <Footer />
      <WhatsappButton />
      <BottomNavbar setloginbarOpen={setloginbarOpen} />
      <LoginSignupSideBar
        loginbarOpen={loginbarOpen}
        setloginbarOpen={setloginbarOpen}
      />
      <CartSideBar/>
      <SearchSideBar
        searchbarOpen={searchbarOpen}
        setsearchbarOpen={setsearchbarOpen}
      />
      <MenuSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* {cookies.cookieConsent == undefined ? (
        <CookieConcent cookies={cookies} setCookie={setCookie} />
      ) : null} */}
    </>
  );
}

export default Layout;
