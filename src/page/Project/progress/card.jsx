import UserActivityHeatmap from './HeatMap';
import React, { useEffect, useRef } from 'react';
import './styles.css';
import VanillaTilt from 'vanilla-tilt';
import ProgressBar from "@ramonak/react-progress-bar";
import  {Sidebar}  from '../../../components/SideBar';



function Card() {

  const signUpDate = '20230101'; // YYYYMMDD format
  const visitedDates = ['20231107','20231108','20231109','20231028','20231129','20231125','20231126','20231127','20231127', '20231128', '20231129']; // Replace with actual user data


  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const isLoggedIn =
    loggedInUser &&
    loggedInUser.email === 'sgatsatyam@gmail.com' &&
    loggedInUser.password === 'satyamgupta';


  // Set visited dates to today's date if not logged in or credentials don't match
  const jsprogress = isLoggedIn
    ? 28
    : 0;

  const pyprogress = isLoggedIn
    ? 8 
    : 0;


  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef1.current, {
      glare: true,
      reverse: true,
      "max-glare": 0.5
    });
  }, []);

  useEffect(() => {
    VanillaTilt.init(cardRef2.current, {
      glare: true,
      reverse: true,
      "max-glare": 0.2
    });
  }, []);

  return (
    <> 
      <div className="card-body fade-in">
        <div className=' sidebar-app text-white absolute top-5 left-5 ' style={{ opacity: '1'}}>
                  <Sidebar />
        </div>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "40px", marginTop:"100px", marginBottom: '100px'}}>Progress DashBoard</h1>
      <div className='container-progress' style={{ marginBottom: "100px" }} >
        
        <div ref={cardRef1} className="card rgb">

          <div className='container-js-card'>
                          <img className='img-js w-20 pb-8' src='https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png' alt='js' />
                          <h1 className='text-white text-center  font-mono text-2xl mt-2 mb-6'>Javascript</h1>
          </div>
          
          <div className="card-text card2">

            <ProgressBar completed={jsprogress} bgColor="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" animateOnRender={true} />

            {isLoggedIn ? <p className='text-white text-center  font-mono text-2xl mt-2 mb-6'>You have completed {jsprogress} % of the course</p> : <p className='text-white text-center  font-mono text-2xl mt-2 mb-6'>You have completed 0 % of the course</p>}
          </div>
                      

        </div>


        <div ref={cardRef2} className="card rgb">
            
          <div className='container-js-card'>
                          <img className='img-js w-20 pb-8' src='https://cdn.iconscout.com/icon/free/png-512/python-14-569257.png' alt='js' />
                          <h1 className='text-white text-center  font-mono text-2xl mt-2 mb-6'>Python</h1>

          </div>
          
          <div className="card-text card2">

            <ProgressBar completed={pyprogress} bgColor="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" animateOnRender={true} />
            {isLoggedIn ? <p className='text-white text-center  font-mono text-2xl mt-2 mb-6'>You have completed {pyprogress} % of the course</p> : <p className='text-white text-center  font-mono text-2xl mt-2 mb-6'>You have completed 0 % of the course</p>}
          </div>

        </div>
      </div> 


         <div className='heatmap-div' style={{ marginBottom: "100px" , display : 'flex', flexDirection: 'coloumn'}} >
            <p className=' text-4xl font-bold text-gray-200 mb-6 font-sans'>Your current streak (HeatMap) ! ! &#x1F601;</p>
            <UserActivityHeatmap signUpDate={signUpDate} visitedDates={visitedDates} />
         </div>
      </div>
      
      
    </>
  );
}

export default Card;









