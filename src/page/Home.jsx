import "./css/Home.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Plx from "react-plx";
import Volume from "../components/Volume"; 



const Home = () => {





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



  const handleMouseOver = (item) => {
    const cursorBorder = document.querySelector("#cursor-border");

    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  };

  const handleMouseOut = () => {
    const cursorBorder = document.querySelector("#cursor-border");
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  };

  useEffect(() => {
    const items = document.querySelectorAll("[data-cursor]");
    items.forEach(item => {
      item.addEventListener("mouseover", () => handleMouseOver(item));
      item.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener("mouseover", () => handleMouseOver(item));
        item.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);


  
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBorderPos, setCursorBorderPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBorder = document.querySelector("#cursor-border");

    document.addEventListener("mousemove", (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    const easting = 8;
    function loop() {
      setCursorBorderPos(prevPos => ({
        x: prevPos.x + (cursorPos.x - prevPos.x) / easting,
        y: prevPos.y + (cursorPos.y - prevPos.y) / easting
      }));
      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

  }, [cursorPos, cursorBorderPos]);



  // const animateCircle = () => {
  //   //when user clicks the play button then the cursor will animate and become a circle bigger and bigger and then cover the whole screen with its white color for the time until the project page loads, the animation of the circle becoming bigger will be for 4 seconds and then the /project page will load

    
  // }


    const animateCircle = () => {
      // Get references to the cursor and cursor border elements
      const cursor = document.getElementById("cursor");
      const cursorBorder = document.getElementById("cursor-border");
      const PlayBTN = document.getElementById("play-btn-home");

      // Add CSS styles to animate the cursor
      PlayBTN.style.display = "none";
      cursor.style.visibility = "visible";
      cursor.style.transition = "transform 3s ease-in, background 1s ease-out";
      cursor.style.transform = "scale(10000)";
      cursor.style.background = "black";

      // Simulate a delay for 4 seconds before loading the project page
      setTimeout(() => {
        // Replace this with the actual URL of the project page
        window.location.href = "/project";
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