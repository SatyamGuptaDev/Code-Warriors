import "./css/Home.css";
import Plx from "react-plx";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { useRef } from "react";
import Volume from "../components/icons/volume";


export default function Home() {
  const [showScrollText, setShowScrollText] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showPressEnter, setShowPressEnter] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setShowScrollText(false);
      } else {
        setShowScrollText(true);
      }

      if (
        scrollY >=
        document.documentElement.scrollHeight - window.innerHeight
      ) {
        setShowPlayButton(true);
      } else {
        setShowPlayButton(false);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        smoothScrollTo(scrollRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const smoothScrollTo = (element) => {
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    const initialY = window.scrollY;
    const distance = Math.abs(targetY - initialY);
    const duration = 5000; // Adjust the duration (in milliseconds) for slower or faster scrolling
  
    let start;
  
    const step = (timestamp) => {
      if (!start) start = timestamp;
  
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
  
      window.scrollTo(0, targetY - percent * (targetY - initialY));
  
      if (time < duration) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  };
  
  
  

  return (


    <div className="home-body">

      <Plx
        parallaxData={[
          {
            start: 600,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 45,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: "50%",
          top: "-50px",
          width: "30vw",
          zIndex: 200
          // filter: "brightness(400%)"
        }}
      >
        <nav className="home-nav" style={{paddingTop:"-24px", display: "flex",height: "40px", paddingBottom: "5px", transform: "translateX(-50%)", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", color: "white"}}>
          <NavLink to='/' style={{textDecoration: "none", color:"white"}}>Home</NavLink>
          <NavLink to='/about' style={{textDecoration: "none", color:"white"}}>About</NavLink>
          <a style={{textDecoration: "none", color:"white"}} >Project</a>
          <a style={{textDecoration: "none", color:"white"}} >Developers</a>
        </nav>
      </Plx>





      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale"
              },
              {
                startValue: 1,
                endValue: 0.5,
                property: "brightness"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>






      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.22 ,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 0
        }}
      >
                <img
          style={{
            width: "100%"
          }}
          src="/background-01.jpeg"
        />
       
      </Plx>







      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: '0',
          bottom: "15vh",
          width: "100vw",
          zIndex: 10,
          height: "150px",
          display: "flex",
          flexDirection: "width",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <div className="logo-name" style={{ transform: 'translateX(10px)', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}> 

          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: 0,
                    endValue: -200,
                    property: "translateX",
                  }
                ]
              }
            ]}
            style={{ 
            }}
          >
            <img style={{ height: '65px'}} src="code.png" />  

          </Plx>
          

          
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateX",
                  }
                ]
              }

            ]}
            style={{

            }}
            >

              <img style={{ height: '70px' }} src="warriors.png" />
          </Plx>
          </div>
      </Plx>





      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "opacity",
              },
              {
                startValue: 1,
                endValue: 0.8,
                property: "brightness",
              }
            ]
          },
          {
            start: 500,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          },
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.22 ,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 1
        }}
      >
        <img
          style={{
            width: "100%"
          }}
          src="/background.jpeg"
        />
      </Plx>










      {showScrollText && (
        <div
          className={`scroll-down-container ${
            showScrollText ? "scroll-visible" : ""
          }`}
          style={{
            position: "fixed",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <span className="scroll-text arrow">Scroll</span>
          <AiOutlineDown className="arrow" />
          <span className="press-enter-text">
            or Press Enter
            {showPressEnter && (
              <span className="press-enter-highlight"> (Press Enter)</span>
            )}
          </span>
        </div>
      )}
      {showPlayButton && (
        <div
          className={`play-button-container ${
            showPlayButton ? "crash" : ""
          }`}
          style={{
            position: "fixed",
            top: "70%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          <button className="play-btn-home" style={{ background: "transparent", color: "green" }}>
            <h1 className="play-btn-h1">
              <span>PLAY</span>
            </h1>
          </button>
        </div>
      )}
      <div ref={scrollRef}></div>
      <div style={{position:"fixed", bottom: "20px", left: "30px", zIndex: 300}} > <Volume /> </div>
    </div>


  );
}