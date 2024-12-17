import React from "react";
import { Routes, Route } from "react-router-dom";


import "./style.css";

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Ln from './pages/Ln';
import Footer from './component/Footer'

import NavigationBar from './component/Navigationbar';

export default function App() {
    return (
      <div className="App"> 

          <NavigationBar />         
          
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/ln" element={<Ln/>}></Route>
        </Routes>
        <Footer/>
      </div>
    )
}

