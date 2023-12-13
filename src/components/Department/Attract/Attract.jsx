import { useState } from "react";



const AttractD = () => {

    const [isPay, setPay]=  useState(false  );
    
    const link=[
      {path:"/exam"}
    ]

    const payPack=[
      
        {name:"Send Email", description:"Here you can send e-mails to the customers or driving schools."},
        {name:"To Update", description:"Here you can update exam resulstg of candidates." },
       
       
    ]

    
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" div data-aos="fade-up"
    data-aos-duration="3000" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl items-center text-3xl ml-80 font-extrabold text-blue-800 mb-2">You can do thode things in here <br/></h2>
      </div>
      <p className="text-tartiary md:w-2/5  mr-96 text-xl -ml-24 "><center> </center></p>

      {/* campaign cards*/ }
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto items-center " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        
        {
          payPack.map((act, index) => <div key={index} className="rounded-2xl py-10 md:px-6 px-4  shadow-3xl">
  
            <h3 className="text-3xl font-bold text-center text-blue-800">{act.name}</h3>
            <p className="text-tartiary text-center my-5">{act.description}</p>
            <a href='/exam'>
           <button className="btnPrimary w-60 mx-auto mt-8 flex items-center justify-center rounded-2xl" >View</button> </a>
          
          </div>)
        }
      </div>
    </div>
  );
};

export default AttractD;