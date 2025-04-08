import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsappButton from './WhatsappButton'

function Layout({children}) {
  return (
      <>       
      <Navbar /> 
      {children}
      <Footer/>
      <WhatsappButton />
      </>

  )
}

export default Layout
