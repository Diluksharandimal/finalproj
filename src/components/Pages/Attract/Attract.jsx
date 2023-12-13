import { useState } from "react";
import './attract.css';



const Attract = () => {

    const [isPay, setPay]=  useState(false);
    
    const payPack=[
      
        {name:"Select Driving school", description:"Here you can inform the customers about the traffic rules and conduct a campaign.",href:"/"},
        {name:"Register for Exams ", description:"Here you can inform customers about license renewal and conduct a campaign." },
        {name:"View Result", description:"Here you can inform customers about what to do when a license is lost." },
        
       
    ]
        

    
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 mt-9" id="about" >
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">You can launch these campings and <br/>attract customers.</h2>
      </div>
      <p className="text-tartiary md:w-2/5 mx-auto px-6 "><center> Here you can inform customers about what to do when a license is lost, inform about traffic rules and license renewal.</center></p>

      {/* campaign cards*/ }
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto items-center  mb-11">
        
        {
          payPack.map((act, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
  
            <h3 className="text-3xl font-bold text-center text-primary">{act.name}</h3>
            <p className="text-black text-center my-5">{act.description}</p>
            <button className="btnPrimary w-60 mx-auto mt-8 flex items-center justify-center" >Launch</button>
          </div>)
        }
      </div>
    </div>
 
  );
};

export default Attract;
