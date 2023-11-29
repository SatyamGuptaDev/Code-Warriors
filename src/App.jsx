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
import {PythonModule1, PythonModule2, PythonModule3, PythonModule4} from './page/Project/Modules/Md-py';
import QuizContainer from './page/Project/Quiz/Container';
import { Sidebar } from './components/SideBar';
import LiveWebEditor from './page/Project/PracticeJS/LivewebEditor';
import MdSelectPy from './page/Project/MdSelect-py';
import Auth from './page/Auth/index';
import Progress from './page/Project/progress/card';
import Contact from './page/contact/Contact';
import DoubSolver from './page/ChatBot/ChatBot';

import { useSelector } from 'react-redux';



function App() {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/doubt-solver" element={<DoubSolver />} />




          {/* if the user is not logged in then redirect to login page */}

            <Route path="/project" element={isLogin ? <LanguageSelect /> : <Auth />} />
            <Route path="/project/js" element={isLogin ? <ModuleSelect /> : <Auth />} />
            <Route path="/project/py" element={isLogin ? <MdSelectPy /> : <Auth />} />

            <Route path="/project/md-1/*" element={isLogin ? <Md1 /> : <Auth />} />
            <Route path="/project/md-2/*" element={isLogin ? <Md2 /> : <Auth />} />
            <Route path="/project/md-3/*" element={isLogin ? <Md3 /> : <Auth />} />
            <Route path="/project/md-4/*" element={isLogin ? <Md4 /> : <Auth />} />

            <Route path="/project/py-1/*" element={isLogin ? <PythonModule1 /> : <Auth />} />
            <Route path="/project/py-2/*" element={isLogin ? <PythonModule2 /> : <Auth />} />
            <Route path="/project/py-3/*" element={isLogin ? <PythonModule3 /> : <Auth />} />
            <Route path="/project/py-4/*" element={isLogin ? <PythonModule4 /> : <Auth />} />

            <Route path="/project/js/try" element={isLogin ? <Try /> : <Auth />} />
            <Route path="/project/js/quiz" element={isLogin ? <QuizContainer /> : <Auth />} />
            <Route path='/project/practicejs' element={isLogin ? <LiveWebEditor /> : <Auth />} />
            <Route path='/project/progress' element={isLogin ? <Progress /> : <Auth />} />

            
            {/* <Route path="/project" element={<LanguageSelect />} />
            <Route path="/project/js" element={<ModuleSelect />} />
            <Route path="/project/py" element={<MdSelectPy />} />


            <Route path="/project/md-1/*" element={<Md1 />} />
            <Route path="/project/md-2/*" element={<Md2 />} />
            <Route path="/project/md-3/*" element={<Md3 />} />
            <Route path="/project/md-4/*" element={<Md4 />} />

            <Route path="/project/py-1/*" element={<PythonModule1 />} />
            <Route path="/project/py-2/*" element={<PythonModule2 />} />
            <Route path="/project/py-3/*" element={<PythonModule3 />} />
            <Route path="/project/py-4/*" element={<PythonModule4 />} />


            <Route path="/project/js/try" element={<Try />} />
            <Route path="/project/js/quiz" element={<QuizContainer />} />
            <Route path='/project/practicejs' element={<LiveWebEditor />} /> */}

          </Routes>
      </div>
    </>
  )
}

export default App
