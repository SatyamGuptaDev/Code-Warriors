import "./css/Home.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Plx from "react-plx";
import Volume from "../components/Volume"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {

  const isLogin = useSelector((state) => state.authentication.isAuthenticated);





  const navigate = useNavigate();

const [showScrollText, setShowScrollText] = useState(true);
const [showPlayButton, setShowPlayButton] = useState(false);
const [showPressEnter, setShowPressEnter] = useState(false);
const [pressedEnter, setPressedEnter] = useState(false);
const playButtonRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      setShowScrollText(false);
    } else {
      setShowScrollText(true);
    }

    if (scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
      setShowPlayButton(true);
    } else {
      setShowPlayButton(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setPressedEnter(true);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  document.addEventListener("keydown", handleKeyPress);
  window.addEventListener("scroll", handleScroll);

  return () => {
    document.removeEventListener("keydown", handleKeyPress);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);




    const animateCircle = () => {

      const cursor = document.getElementById("cursor");
      const cursorBorder = document.getElementById("cursor-border");
      const PlayBTN = document.getElementById("play-btn-home");


      PlayBTN.style.display = "none";
      cursor.style.visibility = "visible";
      cursor.style.transition = "transform 3s ease-in, background 1s ease-out";
      cursor.style.transform = "scale(10000)";
      cursor.style.background = "black";

      // Simulate a delay for 4 seconds before loading the project page
      setTimeout(() => {
        // navigate to project page with useNavigate hook
        if(isLogin){
          navigate("/auth");
        }
        else{
          navigate("/project");

        }

      }, 1000);
    };
    
  
  




    return (


        <div className="home-body">
                <div id="cursor"></div>

              
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
              zIndex: 200,
              // filter: "brightness(400%)"
            }}
          >
            <nav dataCursor='pointer' className="home-nav" style={{paddingTop:"-24px", display: "flex",height: "43px", paddingBottom: "7px", transform: "translateX(-50%)", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", color: "white",    borderTop: 0}}>
              <NavLink to='/' style={{textDecoration: "none", color:"white"}}>Home</NavLink>
              <NavLink to='/about' style={{textDecoration: "none", color:"white"}}>About</NavLink>
              <Link to='/project' style={{textDecoration: "none", color:"white"}}>Project</Link>
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
              <span className="scroll-text arrow ">Scroll <FontAwesomeIcon icon={faChevronDown} /> </span>
              
              <span className="press-enter-text ml-1">
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
              <button className="play-btn-home" ref={playButtonRef} id="play-btn-home" dataCursor='pointer2' style={{ background: "transparent", color: "green" }} onClick={animateCircle}>
                <h1 className="play-btn-h1">
                  <span>PLAY</span>
                </h1>
              </button>
            </div>
          )}

          <div style={{position:"fixed", bottom: "20px", left: "30px", zIndex: 300}} > <Volume url={'intro.mp3'} /> </div>
          
        </div>
    
    
      );
}


export default Home