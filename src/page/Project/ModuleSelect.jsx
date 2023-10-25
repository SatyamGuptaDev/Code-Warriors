import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './ModuleSelect.css'
import AOS from "aos";


function ModuleSelect() {
    const [mdLevel, setMdLevel] = useState({
        md1: true,
        md2: false,
        md3: false,
        md4: false
    })

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });
        AOS.refresh();
      }, []);


    return (
        <div className=' body-ms  fade-in'>
            <h1 className='heading-ms text-center text-white font-bold font-serif text-4xl'>Select a module to start with</h1>
            <div className='p-3 flex-col '>

                <div className=' flex justify-around self-center m-10'>
                <NavLink to='/project/md-1' className='' data-aos='zoom-out' data-aos-delay='800' > 
                    <div className=' container-md flex flex-col justify-center items-center mr-5'>
                        <h1 className='text-white font-bold font-sans text-4xl pb-2'>Module 1:</h1>
                        <h1 className='text-white font-bold font-sans text-2xl'>JavaScript Essentials</h1>
                    </div>
                </NavLink>




                <NavLink to={(mdLevel.md2) ?'/project/md-2' : null}  className='' data-aos='zoom-out' data-aos-delay='1550'>
                    <div className= {(mdLevel.md2) ?'container-md flex flex-col justify-center items-center': 'container-md flex flex-col border justify-center items-center' }>
                            {mdLevel.md2 ? <> <h1 className='text-white font-bold font-sans text-4xl pb-2'>Module 2:</h1>
                        <h1 className='text-white font-bold font-sans text-2xl'>DOM Manipulation</h1> </> :                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>}
                    </div>
                </NavLink>
                </div>

                <div className=' flex justify-around self-center m-10 '>
                <NavLink to={(mdLevel.md3) ?'/project/md-3' : null}  className=' mr-5' data-aos='zoom-out' data-aos-delay='2100'>
                    <div className={(mdLevel.md3) ?'container-md flex flex-col justify-center items-center': 'container-md flex flex-col border justify-center items-center' }>
                            {mdLevel.md3 ? <> <h1 className='text-white font-bold font-sans text-4xl pb-2'>Module 3:</h1>
                        <h1 className='text-white font-bold font-sans text-2xl'>Interactive Web Development</h1> </> :                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>}
                    </div>
                </NavLink>



                <NavLink to={(mdLevel.md4) ?'/project/md-4' : null}  className='' data-aos='zoom-out' data-aos-delay='2650'>
                    <div className={(mdLevel.md4) ?'container-md flex flex-col justify-center items-center': 'container-md flex flex-col border justify-center items-center' }>
                            {mdLevel.md4 ? <> <h1 className='text-white font-bold font-sans text-4xl pb-2'>Module 4:</h1>
                        <h1 className='text-white font-bold font-sans text-2xl'>JavaScript Essentials</h1> </> :                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>}
                    </div>
                </NavLink>
                </div>


            </div>
        </div>
    )
}

export default ModuleSelect
