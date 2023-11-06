// This page is shortly ls(LanguageSelect) 

import React from 'react'
import './LanguageSelect.css'
import { NavLink } from 'react-router-dom'
import AOS from "aos";
import { useEffect } from 'react';
import { Sidebar } from '../../components/SideBar';

function LanguageSelect() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });
        AOS.refresh();
      }, []);

    return (
        <>
        <div className=' sidebar-app text-white absolute top-5 left-5 ' style={{ opacity: '1'}}>
                <Sidebar />
          </div>
          
        <div className=' body-ls  fade-in'>
            <h1 className='heading-ls text-center text-white font-bold font-serif text-4xl'>Select a language you want to start with</h1>
            <div className='p-3 flex justify-around self-center m-10'>
                <NavLink to='/project/js' className='' data-aos='zoom-out' data-aos-delay='800'> 
                    <div className='container-js'>
                        <img className='img-js w-20 pb-8' src='https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png' alt='js' />
                        <h1 className='text-white text-center  font-mono text-2xl mt-2'>Javascript</h1>
                    </div>
                </NavLink>

                <NavLink to='/project/python' className='' data-aos='zoom-out' data-aos-delay='1500'>
                    <div className='container-py'>
                        <img className='img-py w-20 ' src='https://cdn.iconscout.com/icon/free/png-512/python-14-569257.png' alt='py' />
                        <h1 className='text-white text-cente font-mono text-2xl mt-2'>Python</h1>

                    </div>     
                </NavLink>
            </div>
            {/* {
                setTimeout(() => {
                    document.getElementById('minion').style.display = 'block';
                    document.getElementById('minion').style.animation = 'minion 2s ease-in-out 1';

                }, 2000)
            } */}
            <img id='minion' src='namaste_minion.png'  />
        </div>
        </>
    )
}

export default LanguageSelect
