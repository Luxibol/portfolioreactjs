import React from "react";
import { Routes, Route, Link } from "react-router-dom";


import "./style.css";

import Home from './pages/jsx/Home';
import Services from './pages/jsx/Services';
import Portfolio from './pages/jsx/Portfolio';
import Contact from './pages/jsx/Contact';
import Ln from './pages/jsx/Ln';
import Footer from './pages/js/Footer'

import NavigationBar from './pages/js/Navigationbar';

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

