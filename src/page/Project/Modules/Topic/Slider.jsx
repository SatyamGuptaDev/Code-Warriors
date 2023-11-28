
import React, { useRef, useEffect } from 'react';
import './Slider.css'; 
import myimage from './assets/images/img.jpeg';
import myimage2 from './assets/images/img2.jpeg';
import myimage3 from './assets/images/img3.jpeg';
import myimage4 from './assets/images/img4.jpeg';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../../../components/SideBar';


function Slider({infoArray, topicInfo, module}) {
   const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleNextClick = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);

  };

  const handlePrevClick = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };



  useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault(); // Prevent default behavior
            e.stopPropagation(); // Stop propagation to prevent multiple events
            if (e.key === 'ArrowRight') {
                nextRef.current.click();
            } else if (e.key === 'ArrowLeft') {
                prevRef.current.click();
            }
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress); // Clean up the event listener
    };
}, []);

  const imgArray = [myimage4, myimage, myimage2, myimage3, myimage4, myimage, myimage2, myimage3, myimage4, myimage, myimage2, myimage3];
  const imgs =[];

  for(let i = 0; i < infoArray.length; i++) {
    imgs.push(imgArray[i]);
  }

  return (
    <>

    <div className=" slider-container fade-in-slider bg-black ">

    <div className="slide">
  {imgs.map((item, index) => {
    if (infoArray[index].isUnlock === false) {
      return (
        // <div key={index} className="item" style={{ backgroundColor: "#252424b4", border: '1px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'blur(0px)' }}>
        <div key={index} className="item" style={{backgroundImage: `url(${item})` }}>
                      <div className=' slider-sidebar fade-in text-white absolute top-5 left-5  '>
                <Sidebar />
            </div>
            <p className="heading"> Next Topics :</p>
           <div className="content" style={{ border: '1px solid #fff ' }}>
                <div className="name">{infoArray[index].name}</div>
                <div className="des">{infoArray[index].des}</div>
                <button style={{padding: "10px 20px", }}>          
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <circle cx="12" cy="16" r="1" />
                          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                        </svg>
                </button>
            </div>
            <div className="lock" style={{width: '100%', height: '100%',backgroundColor: "#252424b4", border: '1px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'blur(0px)', borderRadius: '20px'}} >

              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="item" style={{ backgroundImage: `url(${item})` }}>
                      <div className=' fade-in  slider-sidebar text-white absolute top-5 left-5  '>
                <Sidebar />
            </div>
          <p className="heading"> Next Topics: </p> 
          <div className="content">
            <div className="name">{infoArray[index].name}</div>
            <div className="des">{infoArray[index].des}</div>
            <Link to={`/project/${module}/learn/${topicInfo[index].code}`} >
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      );
    }
  })}
</div>

      <div className='button-nextperev'>
        <button className="prev" ref={prevRef} onClick={handlePrevClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="40" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
        </button>
        <button className="next" ref={nextRef} onClick={handleNextClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="40" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
        </button>
      </div>
    </div>
    </>
  );
}

export default Slider;