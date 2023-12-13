import React from "react";
import cusPay from "../../assets/cuspayImg.svg";
import sclPay from "../../assets/sclpyImg.svg";
import dePay from "../../assets/depayImg.svg";
import payImg from "../../assets/paymImg.svg";


//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar2 from "../Applipge/Navbar2";

const Payhome = () => {
  return (

    <div className="home" >
        <Navbar2/>
   <motion.div 
    
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
   >
    <h2 className=' mx-auto py-10 mt-28 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Hnadle Payments</center></h2>
</motion.div>
<motion.div
 
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false, amount:0.7}}

>
    <p className="font-bold text-4xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-11 text-blue-800 ml-14" >As a licensed driving school you can display <br/>your school prices to students and handle<br/> Customer's, MTD and Driving school<br/><span className="text-5xl"> payments.</span></p>

    </motion.div>

    <motion.div
     
     variants={fadeIn("down", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >
    <img src={payImg} alt=""  className=" ml-96 md:w-1/3 float-right lg:h-[386px] -mt-64  mr-32 " />
    </motion.div>

    <motion.div
     
     variants={fadeIn("left", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >

    <h2 className=' mx-auto py-10 mt-48 text-6xl font-bold text-[#010851] mb-6 leading-relaxed'><center>These are the catagories that you're<br/> goinng to <span className="text-blue-600">handle</span></center></h2>
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
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-10 max-w-full ">

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer   '>
                 <a href='/payll'>
                <div className=" border-spacing-1.5" >
                    <img src={cusPay} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Handle customer payments</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                <a href='/payll'>
                <div>
                    <img src={sclPay} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Handle school payments</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
                <a href='/payll'>
                <div>
                    <img src={dePay} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Handle MTD payments</h5>
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

    <h2 className=' mx-auto py-10 mt-28 md:text-4xl text-4xl font-bold text-[#010851] mb-6 leading-relaxed'><center>Here you will be able to further devide school payments among eployees.<br/> "Get the experience of <span className="text-blue-500">e-license."</span>
 </center></h2>

    </motion.div>

    </div>
    
  );
};

export default Payhome;
     
