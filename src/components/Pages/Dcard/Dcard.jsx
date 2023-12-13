import React from 'react'
import featuredImg from '../../../assets/feature.svg'
import featuredImg1 from '../../../assets/feature1.svg'
import featuredImg2 from '../../../assets/feature2.svg'

const Dcard = () => {
    const link=[
        {path:"/exam"}
    ]
  return (
    <div>
         <div className="w-full lg:w-3/4 mt-20 ml-44 mb-28">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start md:gap-12 gap-8">
            <div className='bg-[rgba(255, 13, 13, 0.04)] rounded-[35px] h-auto  shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer'>
                 <a href='/viewE'><div data-aos="fade-right">
                    <img src={featuredImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>View E-License</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                <a href='/ds'><div data-aos="zoom-in-up">
                    <img src={featuredImg1} alt=""/>
                    <h5 className='text-2xl font-semibold text-indigo-800 px-5 text-center mt-5'>Select Driving School</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
            <a href='/select'><div  data-aos="fade-left">
                    <img src={featuredImg2} alt=""/>
                    <h5 className='text-2xl font-semibold text-blue-600 px-5 text-center mt-5'>Register for Exam</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                <a href="/sel"><div data-aos="zoom-in-up">
                    <img src={featuredImg1} alt=""/>
                    <h5 className='text-2xl font-semibold text-indigo-800 px-5 text-center mt-5'>View Result</h5>
                </div></a>
            </div>
 
          
            

            

            </div>
        </div>
    </div>
  )
}

export default Dcard;