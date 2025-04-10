import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsappButton from './WhatsappButton'
import BottomNavbar from './BottomNavbar'
import LoginSignupSideBar from './LoginSignupSideBar'
import CartSideBar from './CartSideBar'
import SearchSideBar from './SearchSideBar'
import MenuSideBar from './MenuSideBar'

function Layout({children}) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchbarOpen, setsearchbarOpen] = useState(false);
    const [loginbarOpen, setloginbarOpen] = useState(false);
    const [cartbarOpen, setcartbarOpen] = useState(false);

  return (
      <>       
      <Navbar loginbarOpen={loginbarOpen} setloginbarOpen={setloginbarOpen} cartbarOpen={cartbarOpen} setcartbarOpen={setcartbarOpen} searchbarOpen={searchbarOpen} setsearchbarOpen={setsearchbarOpen} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> 
      {children}
      <Footer/>
      <WhatsappButton />
      <BottomNavbar setloginbarOpen={setloginbarOpen}/>
      <LoginSignupSideBar loginbarOpen={loginbarOpen} setloginbarOpen={setloginbarOpen} />
      <CartSideBar cartbarOpen={cartbarOpen} setcartbarOpen={setcartbarOpen} />
      <SearchSideBar searchbarOpen={searchbarOpen} setsearchbarOpen={setsearchbarOpen} />
      <MenuSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>

  )
}

export default Layout
