import img1 from '../assets/about.gif';
import img2 from '../assets/about_img2.jpg';
import img3 from '../assets/about_img3.jpg';


import icon1 from '../assets/icons/analysis.png';
import icon2 from '../assets/icons/interface.png';
import icon3 from '../assets/icons/prediction.png';
import icon4 from '../assets/icons/quality.png';

import './css/About.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 500,
            once: true,
            easing: "ease-in-out",
        });
        AOS.refresh();
      }, []);

  return (
    <>

        <div className='bg-imgae-container'>
            
        <div className='body-about '>

        <nav className="home-nav-about" data-aos="fade-down" data-aos-delay="100">

          <NavLink to='/' style={{textDecoration: "none", color:"white"}}>Home</NavLink>
          <NavLink to='/about' style={{textDecoration: "none", color:"white"}}>About</NavLink>
            <NavLink to='/project' style={{textDecoration: "none", color:"white"}}>Project</NavLink>
            <NavLink to='/team' style={{textDecoration: "none", color:"white"}}>Team</NavLink>
        </nav>
            <div className="about-container  ">
          
            {/* bg-gradient-to-b from-gray-900 to-gray-600 */}
                <div className="logo-div text-4xl font-bold">
                    <div className='logo-name-about'>
                        <h2 className=' text-center-name about-title-name bg-clip-text  text-transparent' style={{ backgroundImage: 'conic-gradient(rgb(243, 244, 246), rgb(253, 186, 116), rgb(240, 171, 252))' }} data-aos-delay="1500" data-aos="fade-in"> CODE WARRIORS</h2>
                    </div>
                    <div className='ai-div'>

                    <p className="description-about text-white dark:text-white" data-aos="fade-in" data-aos-delay="1500" >Welcome to Code Warriors - Your Gateway to Learning Code Through Games and Challenges</p>
                    {/* <p className='description-about da-2 font-semibold text-white dark:text-white' data-aos="fade-in" data-aos-delay="1500">Join us in shaping a sustainable water future.</p> */}
                    </div>
                </div>

                <img className='about-front-img' data-aos="fade-left" data-aos-delay="1500" src={img1} alt="GeoWell Advisor"/>

            </div>
            <div className="features-container">
                <div className="features">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 items-center">
                        <div className="flex flex-col justify-center space-y-8 text-center">
                            <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500" data-aos="zoom-out">
                                Discover Our Unique Features
                            </h1>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto"  data-aos="zoom-out" data-aos-delay="500">
                                Our features are designed to enhance your programming knowledge and skills.
                            </p>
                            </div>
                            <div className="w-full max-w-full space-y-4 mx-auto">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1100">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg
                                    className="h-6 w-6 text-white mb-2 opacity-75"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l-1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l-1.42-1.42"
                                    />
                                </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Interactive Learning Modules</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Breakdown programming into easy-to-learn modules.


                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1200">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m-6 0l-3 3m3-3v6m4.5-9a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 0h0" />
                                </svg>


                                </div>
                                <h2 className="text-xl font-bold text-white">Guided Tutorials</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Begin with guided, beginner-friendly tutorials.


                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1300">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                
                                
                                

                                </div>
                                <h2 className="text-xl font-bold text-white">Challenge Your Skills</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Test yourself with quizzes and coding exercises.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1400">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.5 12a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0zm-9.5 6v-4l-6 3v-4l6-3v-4l-6 3-6-3v4l6 3v4l-6-3v4l6 3z" />
                                </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Gamified Learning Experience</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Earn points and compete in a fun, gamified environment.


                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1500">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m-6 0l-3 3m3-3v6m4.5-9a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 0h0" />
                                </svg>
                                    
                                </div>
                                <h2 className="text-xl font-bold text-white">Multi-Level Mastery</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Progress through topics with beginner, intermediate, and advanced levels.


                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" data-aos="zoom-out" data-aos-delay="1600">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <img src={icon2} alt="" height='28' width='28' />
                                </div>
                                <h2 className="text-xl font-bold text-white">Track Your Progress</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                Monitor your coding journey and see how you're advancing through our structured learning platform.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='photo-para-parentdiv'>
                {/* bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-indigo-900 */}
                <div className='photo-para'>

                    <div className='text' data-aos="fade-right">
                        <h1>Empower Your Coding Odyssey</h1>
                        <p>Turn coding into an adventure with "CODE WARRIORS." Conquer modules, topics, and levels, and become a coding hero. Redefine your learning experience one level at a time.</p>
                    </div>

                    <img className='image' data-aos="fade-left" data-aos-delay="200" src={img2} alt="Transfrom Watrer Well Decisions" />

                    <img className='image' data-aos="fade-right" data-aos-delay="200" src={img3} alt="Dynamic Platform, Structured Feedback" />
                    <div className='text' data-aos="fade-left">
                        <h1 className=''>
                        Join the Code Warriors Community
                        </h1>
                        <p>Elevate your coding skills with "CODE WARRIORS." Join our vibrant community, conquer levels, and unlock your full programming potential with engaging 2D game-style challenges.</p>
                    </div>

                </div>
                <NavLink to='/project'><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button></NavLink>
            </div>

            </div>
        </div>
        </>
    
  );
}
export default About;