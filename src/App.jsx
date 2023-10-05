import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';

function App() {

  return (
    <>
      <div className='body-app' >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </>
  )
}

export default App