import React, { use, useEffect } from "react";
import "./App.css";
import { roots , pages } from "./route/Route";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./component/common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CookiesProvider } from "react-cookie";
import Checkout from "./page/Checkout";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK); 
import { Provider } from 'react-redux'
import store from './Store/Store'
import Bottomnotification from "./component/ui/Bottomnotification";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  
  return (
    <Provider store={store}>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <ScrollToTop />
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <Routes>
            {roots.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            ))}
               {pages.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={route.element}
              />
            ))}
            
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </Elements>
    <Bottomnotification />
    </Provider>
    
  );
}

export default App;
