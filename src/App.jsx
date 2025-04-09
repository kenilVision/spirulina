import React , {useEffect} from 'react'
import './App.css'
import { roots } from './route/Route'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import ScrollToTop from './component/common/ScrollToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 5000, 
      offset: 100,    
    });
    AOS.refresh();
  }, []);
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {roots.map((route, i) =><Route key={i} path={route.path} element={<Layout>{route.element}</Layout>} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
