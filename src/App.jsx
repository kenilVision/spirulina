import React, { use, useEffect } from "react";
import "./App.css";
import { roots } from "./route/Route";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./component/common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CookiesProvider } from "react-cookie";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK); 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (Cookies.get("cookieConsent")) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-4T1FPJYJFF";
      script.async = true;
      document.body.appendChild(script);
  
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
  
      gtag("js", new Date());
      gtag("config", "GA_MEASUREMENT_ID");
    }
  }, []);

  
  return (
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
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
