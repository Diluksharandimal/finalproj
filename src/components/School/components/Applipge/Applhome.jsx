import React from 'react'
import ApplvappImg from '../../assets/Applvapp.svg'
import ApprefImg from '../../assets/Applref.svg'
import Appbot from '../../assets/Appbot.svg'
import Appdwn from '../../assets/Appdown.jpg'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar2 from "../Applipge/Navbar2";
import Applicant from '../../../../Applicant/newapplicant'
import CustomerList from '../../../../Applicant/newapplicant'


const Applhome = () => {
  return (
    <div>
        <Navbar2/>
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        >
          <h2 className=' mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>New Applicants</center></h2>

          </motion.div>

        <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        
        className='mb-28'>
        <center><img src={Appbot} alt=""/></center>
        </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
            >
          <h2 className=' mx-auto  mt-4 md:text-4xl text-4xl font-bold text-blue-950 mb-6 leading-relaxed'><center>Here you can see the details of all the <span className="text-blue-600">new applicants</span> and <br/>accordingly you can<span className="text-blue-600"> refer them </span>to the<span className="text-blue-600">written exam. </span></center></h2>
          </motion.div>
            

            <center><h1 className='mt-10 text-6xl'>Approve applicant form</h1></center>

            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}

            className='mt-5'>
        <center><img src={Appdwn} alt=""  className=" md:w-10/12  lg:h-[300px]  "/></center>
        </motion.div>
        <CustomerList/>
    </div>
  )
}

export default Applhome;
