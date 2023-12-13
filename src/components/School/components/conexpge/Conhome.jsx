import React from 'react'

import {fadeIn} from '../../../../variants'

import {motion} from "framer-motion"
import Navbar2 from "../Applipge/Navbar2";
import { Emailpro } from '../email/emailpro';








const Conhome = () => {
  return (
    <div>
      <Navbar2/>

      <motion.div
      
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}

      >
          <center><p className="font-bold text-6xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-36 text-blue-900 ml-14 " >You can conduct the online written exams here</p></center>
      </motion.div>

      <motion.div
      
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      
      >
          <center><p className="font-bold text-4xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 text-blue-700 ml-14 " >Send the exam link to your students through the e-mail.</p></center>
      </motion.div>


     <motion.div 
     
     variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      
     
     >

     <Emailpro/>

     </motion.div>
    
      
    </div>
  )
}

export default Conhome;
