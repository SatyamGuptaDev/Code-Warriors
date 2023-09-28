import "./App.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div>

      <Plx
        parallaxData={[
          {
            start: 600,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 100,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 40,
          width: "60%",
          zIndex: 200
        }}
      >
        <nav style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", color: "white"}}>
          <a>Home</a>
          <a>About</a>
          <a>Project</a>
          <a>Developers</a>
          
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






      {/* <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div> */}





    </div>
  );
}
