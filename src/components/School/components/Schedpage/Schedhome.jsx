import React from 'react'
import Schpic from '../../assets/Schedpic1.svg'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar2 from '../Applipge/Navbar2';
import { Emailpro } from '../email/emailpro';


const Schedhome = () => {
  return (
    <div>
      <Navbar2/>
    <motion.div
    
    variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
    >
       <h2 className=' mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Send Schedules</center></h2>
    </motion.div>

<motion.div 

variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
>
<h2 className=' mx-auto  mt-4 md:text-4xl text-4xl font-bold text-blue-950 mb-6 leading-relaxed'><center>Here you have <span className="text-blue-600">pre-made schedules</span>  for customers. There are uploaded<br/> in google drive and the link is sent to the customer.</center></h2>


</motion.div>

<motion.div 

variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.2}}

className='mt-20 ml-56 mb-32' >

<center><img src={Schpic} alt=""/></center>

</motion.div>

<Emailpro/>


    </div>
  )
}

export default Schedhome
