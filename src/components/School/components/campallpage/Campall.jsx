import React from 'react'

import {fadeIn} from '../../../../variants'
//motion
import {motion} from "framer-motion"
import Navbar2 from '../Applipge/Navbar2'

const Campall = () => {
  return (
    <div>

      <Navbar2/>
      <motion.div
      
      
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}

      
      >

        <center><p className="font-bold text-4xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-32 text-blue-900 ml-14 " >Here you can inform customers about what to do when a license is lost,<br/> inform about traffic rules and license renewal. By publishing <br/>video about them here.</p></center>

      </motion.div>
    </div>
  )
}

export default Campall
