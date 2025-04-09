import React , {useEffect} from 'react'
import './App.css'
import { roots } from './route/Route'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import ScrollToTop from './component/common/ScrollToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51R7Wr4FS9PdJc9as9JGTC5u82YHtYLp3HdxLkTxLCXR5h0WVnUtYmLp1kyHqTp8OK6VsQSuFlMSBcvYsCSizGcTW00PlCHxj6L'); 

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      offset: 100,    
    });
  }, []);
  
  return (
    <Elements stripe={stripePromise}>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {roots.map((route, i) =><Route key={i} path={route.path} element={<Layout>{route.element}</Layout>} />)}
      </Routes>
    </BrowserRouter>
    </Elements>
  )
}

export default App
