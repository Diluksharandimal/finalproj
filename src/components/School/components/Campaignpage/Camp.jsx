import React from 'react'
import Campmid from '../../assets/Campmid.svg'


//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar2 from '../Applipge/Navbar2';

const Camp = () => {

    
    const payPack=[
      
        {name:"Traffic Rules", description:"Here you can inform the customers about the traffic rules and conduct a campaign."},
        {name:"License Renewal", description:"Here you can inform customers about license renewal and conduct a campaign." },
        {name:"Lost License", description:"Here you can inform customers about what to do when a license is lost." },
       
    ]
   
    
    const Pat=[
      {path:"/campss"}
    ]
    


  return (
    <div>
        <Navbar2/>
      <motion.div
      
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      >
      <h2 className=' mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Launch Campaigns</center></h2>
      </motion.div>

      <motion.div
      
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      
      className="mt-10 ml-28 mr-56 lg:h-[400px] mb-2">
      <center><img src={Campmid} alt=""/></center>
      </motion.div>

      <motion.div 
    
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}

    className="md:px-14 p-4 max-w-s mx-auto py-10"  id="campaigns">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-blue-800 mb-2">You can launch these campings and <br/>attract customers.</h2>
      </div>
      <p className="text-gray-700 md:w-2/5 mx-auto px-6 font-semibold text-lg"><center> Here you can inform customers about what to do when a license is lost, inform about traffic rules and license renewal.</center></p>

      {/* campaign cards*/ }
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto items-center mb-14 ">
        
        {
          payPack.map((act, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl">
  
            <h3 className="text-3xl font-bold text-center text-blue-950">{act.name}</h3>
            <p className="text-gray-700 text-center text-lg my-5">{act.description}</p>
          <a href="/campss" path="/campss"> <button  className="btnPrimary w-60 mx-auto mt-8 flex items-center justify-center" >Launch</button></a>
          </div>)
        }
      </div>
    </motion.div>

    </div>
  )
}

export default Camp
