import React from 'react';
import lan from '../../assets/lan3.png'
import depa from '../../assets/cardep.svg'

import logo2 from '../../assets/undraw_professor_re_mj1s.svg'
import appli from '../../assets/people.svg'
import Navbar2 from '../Navbar2/Navbar2';
import Footer2 from '../../components/Footer/footer2';
import Footer from '../../components/Footer/footer';
import logo from '../../assets/e31.png'
import './landing.css'



const Page = () => {
  const btn=[
    {path:"/sign"}
  ]
  return (


    <div className='lande var4'>
    <div className='lande var3'>
    <div className='lande var2'>
    <div className=' lande variation'>
    <div className='land  lande  ' >
    <div className='land'>
      <Navbar2/>
      
      
      <center> <img src={logo} width={"1000px"} height={"1000px"} alt=""  className='mt-64 mb-56 '  data-aos="zoom-in-down" /></center>
      <div className=' align-middle justify-center max-w-7xl text-center ml-44 mt-28' id='about'>
      <h3 className=' text-3xl font-black drop-shadow-4xl shadow-black'  data-aos="zoom-in-down">About Us</h3>
      <br></br>
      <br></br>
              <p className='drop-shadow-3xl shadow-black text-xl'  data-aos="zoom-in-down">
An online driving license system refers to a digital platform or system that allows individuals to apply for, renew, or manage their driving licenses over the internet. This system offers a convenient and efficient way for citizens to handle their driving license-related tasks without having to visit physical offices or departments..</p>
            
            </div>
      <div className="md:w-2/5 ml-24 mt-48" id='depa'>
            
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal" data-aos="fade-down-right">Mottor Traffic Department
             <span className="text-secondary">(Sri Lanka.)</span></h2>
            <p className="text-tartiary text-lg mb-7" data-aos="fade-down-right">This is the 83rd performance report of the Department of the Motor Traffic which was established on the 1st January 1928.
            no person shall drive a light vehicle on a road unless he has completed the age of eighteen years and shall not drive a heavy vehicle on a road unless he has completed the age of twenty-one years.”. Amendment of section 123 of Chapter 203. Insertion of new section 141A in the principal enactment.</p>
     

            <div className=" card1  relative ">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 w-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-6 transition-all duration-300  cursor-pointer' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                  <a href='/sign'>
                <div>
                    <img src={depa} alt=""/>
                   
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Department </h5>
                </div>
                </a>
            </div>
            
            </div>
            

            <div className=" md:w-5/5 mt-36 t" id='scl'>
            <h2 className="para1  md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal" data-aos="fade-down-right">Driving schools
             <span className=" text-secondary">(Island wide.)</span></h2>
            <p className="subp text-tartiary text-lg mb-7" data-aos="fade-down-right">A driving school is a business that employs instructors who teach people how to drive a vehicles. To do that island wide driving schools can join to our system through this</p>


            <div className=" card2  relative -mt-96">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 w-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-6 transition-all duration-300  cursor-pointer ' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <div>
                    <img src={logo2} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Schools</h5>
                </div>
            </div>
            </div>

            <div className="md:w-5/5 ml-24 mt-32" id='cus'>
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal" data-aos="fade-down-right">Driving License Applicants
             <span className="text-secondary">(Sri Lanka.)</span></h2>
            <p className="text-tartiary text-lg mb-7" data-aos="fade-down-right">This is the 83rd performance report of the Department of the Motor Traffic which was established on the 1st January 1928.
            no person shall drive a light vehicle on a road unless he has completed the age of eighteen years and shall not drive a heavy vehicle on a road unless he has completed the age of twenty-one years.”. Amendment of section 123 of Chapter 203. Insertion of new section 141A in the principal enactment.</p>
     

            <div className=" card3  relative ">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 w-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-6 transition-all duration-300  cursor-pointer' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <div>
                    <img src={appli} alt=""/>
                   
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'> <a href='dep'>Applicants</a></h5>
                </div>
            </div>
          
            </div>
          
            
        </div>
        </div>
    </div>
   
<p className='text-gray-400'>Made by DSE 22.3</p>
<Footer/>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default Page;
