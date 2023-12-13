import React from 'react'

import {fadeIn} from '../../variants'
//motion
import {motion} from "framer-motion"
import Navbar2 from '../Applipge/Navbar2'

const Statuphome = () => {
  return (
    <div>
      <Navbar2/>

      <motion.div
      
      
      variants={fadeIn("right", 0.2)}      
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}

      
      >
      <center><p className="font-bold text-6xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-32 text-blue-900 ml-14 " >Here you can update the exam details & results status.</p></center>
      </motion.div>
    </div>
  )
}

export default Statuphome
