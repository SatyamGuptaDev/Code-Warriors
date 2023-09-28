
import Plx from "react-plx";
import React from "react";
import './css/Home.css'

export default function Home() {
  return (
    <div className="body-home">


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
        <img style={{ width: "100%" }} src="bg.png" />
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
            start: 100,
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
          top: "27vw",
          width: "100%",
          zIndex: 10
        }}
      >
          <div style={{width: "100vw", height: '100px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}> 

            <Plx
              parallaxData={[
                {
                  start: 100,
                  end: 400,
                  properties: [
                    {
                      startValue: 0,
                      endValue: -300,
                      property: "translateX",
                    }
                  ]
                }
              ]}
              style={{ 
              }}
            >
              <img style={{ height: '80px'}} src="code.png"  />  

            </Plx>
            

            
            <Plx
              parallaxData={[
                {
                  start: 100,
                  end: 400,
                  properties: [
                    {
                      startValue: 0,
                      endValue: 300,
                      property: "translateX",
                    }
                  ]
                }

              ]}
              style={{

              }}
              >

                <img style={{ height: '80px' }} src="warriors.png"  />
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
            end: 700,
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

    </div>
  );
}
