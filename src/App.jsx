import "./App.css";
import Plx from "react-plx";
import React, { useState, useEffect } from "react";

export default function App() {
const [showScrollText, setShowScrollText] = useState(true);
const [showPlayButton, setShowPlayButton] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>

      <Plx
        parallaxData={[
          {
            start: 500,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 55,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: "30vw",
          top: "-50px",
          width: "30%",
          zIndex: 200
        }}
      >
        <nav style={{paddingTop: "5px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", color: "white",gap:"110px"}}>
          <a style={{textDecoration: "none", color:"white"}}>Home</a>
          <a style={{textDecoration: "none", color:"white"}} >About</a>
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
                endValue: 1.6,
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
          src="/background-01.jpg"
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
          left: 0,
          top: "30vw",
          width: "100%",
          zIndex: 10
        }}
      >
          <div style={{width: "100%", height: '100px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}> 

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
            <img style={{ height: '65px'}} src="code.png" alt="background" />  

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

              <img style={{ height: '70px' }} src="warriors.png" alt="background" />
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
          src="/background.jpg"
        />
      </Plx>
{showScrollText && (
        <div
        className={`scroll-down-container ${showScrollText ? "scroll-visible" : ""}`}
        style={{
          position: "fixed",
          bottom: "10px", // Adjust the bottom position
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <span className="scroll-text">Scroll</span>
        <span className="arrow">↓</span>
        </div>
      )}
      {showPlayButton && (
        <div
        className={`play-button-container ${showPlayButton ? "crash" : ""}`}
          style={{
            position: "fixed",
            top: "70%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        > 
       <button style={{ background: "transparent",color:"green" }}>
  <h1>
    <span>PLAY</span>
  </h1>
</button>
        
        </div>
      )}
    </div>
  );
}
