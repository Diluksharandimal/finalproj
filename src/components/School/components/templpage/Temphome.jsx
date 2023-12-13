import React from 'react'

import {fadeIn} from '../../variants'
//motion
import {motion} from "framer-motion"
import { Emailpro } from '../email/emailpro'
import Navbar2 from "../Applipge/Navbar2";

import Footer2 from '../Footer2/Footer2'
import Footer from '../Footer/Footer'

const Temphome = () => {
  return (
    <div>
      <Navbar2/>
      <motion.div
      
      
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}

      
      >
            <center><p className="font-bold text-5xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-32 text-blue-900 ml-14 " >According to the student's results, you can issuue the temporarry license to them.</p></center>

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

export default Temphome
