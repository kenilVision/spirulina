import React from 'react'
import './App.css'
import { roots } from './route/Route'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {roots.map((route, i) =><Route key={i} path={route.path} element={<Layout>{route.element}</Layout>} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
