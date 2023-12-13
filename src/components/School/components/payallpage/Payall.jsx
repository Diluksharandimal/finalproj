import React from 'react'
import payallimg from '../../assets/payallimg.svg'

import {fadeIn} from '../../../../variants'
//motion
import {motion} from "framer-motion"
import Navbar2 from '../Applipge/Navbar2'
import Pgway from '../pgway/Pgway'


const Payall = () => {
  return (
    <div>
      
    <Navbar2/>
      
      <motion.div
      
      
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}

      
      >
            <center><p className="font-bold text-5xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-32 text-blue-900 ml-14 " > you can handle Customer's, MTD and Driving school payments.</p></center>

      </motion.div>


      <motion.div
      
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      
      >

        <ul>
            <li className="font-bold text-5xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 text-blue-600 ml-40 "> -Pay MTD payments</li>
            <li className="font-bold text-5xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-8 text-blue-600 ml-40 ">-Pay Driving School payments</li>
        </ul>

      </motion.div>

      
    <motion.div
     
     variants={fadeIn("down", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >
    <img src={payallimg} alt=""  className=" ml-96 md:w-1/3 float-right lg:h-[386px] -mt-64  mr-32 " />
    </motion.div>


    <Pgway/>

    </div>
  )
}

export default Payall;
