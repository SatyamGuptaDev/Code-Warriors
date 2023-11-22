import { useState, useEffect} from 'react'
import './App.css'
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './page/About';
import ScrollToTop from './components/ScrollToTop';
import LanguageSelect from './page/Project/LanguageSelect';
import ModuleSelect from './page/Project/ModuleSelect';
import Try from './page/Project/gameComp/Game';
import {Md1, Md2, Md3, Md4} from './page/Project/Modules/Md';
import QuizContainer from './page/Project/Quiz/Container';
import { Sidebar } from './components/SideBar';
import LiveWebEditor from './page/Project/PracticeJS/LivewebEditor';



function App() {

    const handleSideBar = () => {
    // if the path is ["/project", "/project/js", "/project/md-1", "/project/md-2", "/project/md-3", "/project/md-4"] then show sidebar
    if(window.location.pathname === "/project" || window.location.pathname === "/project/js" || window.location.pathname === "/project/md-1" || window.location.pathname === "/project/md-2" || window.location.pathname === "/project/md-3" || window.location.pathname === "/project/md-4" || window.location.pathname === "/project/js/try" || window.location.pathname === "/project/js/quiz" ){
      document.querySelector('.sidebar-app').style.display = 'block';
  }
  else{
      document.querySelector('.sidebar-app').style.display = 'none';
  }
  }

  useEffect(() => {
    handleSideBar();
  }, [window.location.pathname])

  return (
    <>
      <div className='body-app' >
          <ScrollToTop />
          <div className=' sidebar-app text-white absolute top-5 left-5 ' style={{display: 'none', opacity: '1'}}>
                <Sidebar />
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<LanguageSelect />} />
            <Route path="/project/js" element={<ModuleSelect />} />
            <Route path="/project/md-1/*" element={<Md1 />} />
            <Route path="/project/md-2/*" element={<Md2 />} />
            <Route path="/project/md-3/*" element={<Md3 />} />
            <Route path="/project/md-4/*" element={<Md4 />} />
            <Route path="/project/js/try" element={<Try />} />
            <Route path="/project/js/quiz" element={<QuizContainer />} />
            <Route path='/project/practicejs' element={<LiveWebEditor />} />

          </Routes>
      </div>
    </>
  )
}

export default App
