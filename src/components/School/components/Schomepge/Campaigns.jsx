import campaignsImg from "../../assets/campaigns.svg"
import campaignsImg1 from "../../assets/campaigns1.svg"

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';


const Campaigns = () => {

  
  const Sin=[
    {path:"/applicant"},
    {path:"/sclprofile"}
  ]
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12" >
    
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
        
        variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}

        className="md:w-1/2">
            <img src={campaignsImg} alt=""/>
        </motion.div>

        {/*Campaigns content */}
        <motion.div 
        
        variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
        
        className="md:w-2/5">
         <h2 className="md:text-5x1 text-5xl mb-9 font-bold text-primary  leading-normal mt-10">You can view your
             <span className="text-secondary"> profile and edit them.</span></h2>
            <a href='/sclprofile'><button className="btnPrimary">View profile</button></a>
        </motion.div>
      </div>
     
    

      {/*second campaign */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div 
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-1/3">
            <img src={campaignsImg1} alt=""/>
        </motion.div>

        {/*Campaigns content */}
        <motion.div 
        
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-2/5">
       <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 mt-20 leading-normal">You can view 
             <span className="text-secondary"> new applicants here.</span></h2>
            <p className="text-tartiary text-lg mb-7">Here you can view newly registerd customers<br/> and mange them.</p>
            <a href='/applicant'><button className="btnPrimary">View Applicant</button></a>
        </motion.div>
      </div>
      

    </div>
  );
};

export default Campaigns;
