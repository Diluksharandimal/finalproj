import featuredImg from '../../assets/feature.svg'
import featuredImg1 from '../../assets/feature1.svg'
import featuredImg2 from '../../assets/feature2.svg'

import './main.css'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';


const Features = () => {
  const card=[
    {path:"scl"},

  ]
  return (
    <div class="sss" className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feture">
      
      <div  class="sss" className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
        
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="lg:w-1/4">
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">What manily you can do here</h3>
            <p className="text-xl text-tartiary">As a licensed driving school, you can mainly conduct online examinations, send practice schedules, and view new applicants.
                In addition, you can do many other things.</p>
        </motion.div>
        {/*Featured cards */}


        <motion.div
        
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer z-50'>
              <a href='/Sinup'>
                <div>
                    <img src={featuredImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conducting Examinaations</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                  <a href='/appli'>
                <div>
                    <img src={featuredImg1} alt="shashith" />
                
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Apllicants</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
              <a href='/Sinup'>
                <div>
                    <img src={featuredImg2} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Send Practice Schedules</h5>
                </div></a>
            </div>

            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
