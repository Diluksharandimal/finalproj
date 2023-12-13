import React from "react";
import examImg from '../../assets/examImg.svg'
import exconImg from '../../assets/exconImg.svg'
import exstatImg from '../../assets/exstatImg.svg'
import extempImg from '../../assets/examtemImg.svg'


//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar2 from "../Applipge/Navbar2";

const Exhome = () => {
  return (
    <div className="home" >
        <Navbar2/>
   <motion.div 
    
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
   >
    <h2 className=' mx-auto py-10 mt-28 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Conducting Examinations</center></h2>
</motion.div>

<motion.div
 
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false, amount:0.7}}

>
    <p className="font-bold text-4xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-11 text-blue-800 ml-14" >Here mainly you can handle all the written<br/> examinations, update results status and<br/> releasing temporarry license "L".

    
    <br/><br/>"Enjoy E-license"</p>

    </motion.div>

    <motion.div
     
     variants={fadeIn("down", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >
    <img src={examImg} alt=""  className=" ml-96 md:w-1/3 float-right lg:h-[386px] -mt-64  mr-32 " />
    </motion.div>

    <motion.div
     
     variants={fadeIn("left", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >

    <h2 className=' mx-auto py-10 mt-48 text-6xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Choose what you are going <span className="text-blue-600">to do,</span></center></h2>
</motion.div>

<motion.div
 
 variants={fadeIn("up", 0.1)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false, amount:0.7}}

>

<div className="mt-12 md:px-14 px-4 max-w-7xl ">
    <div className="flex flex-col lg:flex-row items-start max-w-full  ">
   <div className="w-full  ml-48 ">
   <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-10 max-w-full ">

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer   '>
                <a href='/conx'>
                <div className=" border-spacing-1.5" >
                    <img src={exconImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conduct online exams</h5>
                </div></a>
            </div>


            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer  '>
                <a href='/exreg'>
                <div>
                    <img src={extempImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>View exam registations</h5>
                </div></a>
            </div>

            </div>
        </div>

    </div>
    </div>

    </motion.div>

    <motion.div
    
     
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
    >

    <h2 className=' mx-auto py-10 mt-28 md:text-4xl text-4xl font-bold text-[#010851] mb-6 leading-relaxed'><center>You can easily <span className="text-blue-600">conduct exams </span>for students through online technology <br/>and also have the facility to send <span className="text-blue-600">temporary license "L" </span>to <br/>customers through online technology.</center></h2>

    </motion.div>

    </div>
    
  );
};

export default Exhome;
     
