import { useState, useEffect} from 'react'
import './App.css'
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './page/About';
import ScrollToTop from './components/ScrollToTop';
import LanguageSelect from './page/Project/LanguageSelect';
import ModuleSelect from './page/Project/ModuleSelect';

function App() {

  return (
    <>
      <div className='body-app' >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<LanguageSelect />} />
            <Route path="/project/js" element={<ModuleSelect />} />
          </Routes>
      </div>
    </>
  )
}

export default App
