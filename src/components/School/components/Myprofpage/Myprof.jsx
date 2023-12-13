import React from 'react'

import profileimg from '../../assets/profileimg.svg'
import '../Myprofpage/profile.css'

import {fadeIn} from '../../variants'
//motion
import {motion} from "framer-motion"
import Navbar2 from '../Applipge/Navbar2'

const Myprof = () => {
  return (
    <div>
      
      <Navbar2/>
      <motion.div 
    
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
   >
    <h2 className=' mx-auto py-10 mt-28 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>My Profile</center></h2>
</motion.div>


    
    


      <motion.div
 
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false, amount:0.7}}

>
    <p className="font-bold text-4xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-14 text-blue-800 ml-14" >As a licensed driving school, here you<br/> can <span className='text-blue-500 sspn'>make your profile</span> to show your<br/> details to your customers.<br/><br/><span className='text-blue-500 sspn'>"Enjoy</span> e-license."</p>

    </motion.div>

    <motion.div
     
     variants={fadeIn("down", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >
    <img src={profileimg} alt=""  className=" ml-96 md:w-1/3 float-right lg:h-[386px] -mt-56  mr-32 " />
    
    </motion.div>


    <div class="containers mt-3">
    <div class="cards p-3 text-center">
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="simage"> <img src="https://i.imgur.com/hczKIze.jpg" class="rounded-circle"/> <span className='sspn'><i class='bx bxs-camera-plus'></i></span> </div>
            <div class="d-flex flex-column ms-3 user-details">
                <h4 class="mb-0">Zenda Grace</h4>
                <div class="ratings"> <span className='sspn'>4.0</span> <i class='bx bx-star ms-1'></i> </div> <span className='sspn'>Pro Member</span>
            </div>
        </div>
        <h4>Edit Profile</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="inputs"> <label>Name</label> <input class="form-control" type="text" placeholder="Name"/> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>Email</label> <input class="form-control" type="text" placeholder="Email"/> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>City</label> <input class="form-control" type="text" placeholder="City"/> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>Country</label> <input class="form-control" type="text" placeholder="Country"/> </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="about-inputs"> <label>About</label> <textarea class="form-control" type="text" placeholder="Tell us about yourself"> </textarea> </div>
            </div>
        </div>
        <div class="mt-3 gap-2 d-flex justify-content-end"> <button class="px-3 btn btn-sm btn-outline-primary">Cancel</button> <button class="px-3 btn btn-sm btn-primary">Save</button> </div>
    </div>
</div>

    </div>
  )
}

export default Myprof
