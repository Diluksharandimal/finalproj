import featuredImg from '../../../assets/feature.svg'
import featuredImg1 from '../../../assets/feature1.svg'
import featuredImg2 from '../../../assets/feature2.svg'
import './feature.css'






const Features = () => {

  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto  mt-40" id="feature" >
      <div className="flex flex-col lg:flex-row justify-between items-start  gap-10">
        <div className="lg:w-1/4" data-aos="flip-up">
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Further Informations</h3>
            <p className="text-base text-tartiary">As a Department , you can have online examinations, schedules and Aapplicants Registration.
                In addition, you can do many other things.</p>
        </div>
        {/*Featured cards */}
        <div className="w-full lg:w-4/4 mt-20">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer'>
                 <a href='/exam'><div data-aos="fade-right">
                    <img src={featuredImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Examination Details</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                <a href='/reg'><div data-aos="zoom-in-up">
                    <img src={featuredImg1} alt=""/>
                    <h5 className='text-2xl font-semibold text-indigo-800 px-5 text-center mt-5'> Applicant Registration Details</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
                <div  data-aos="fade-left">
                    <img src={featuredImg2} alt=""/>
                    <h5 className='text-2xl font-semibold text-blue-600 px-5 text-center mt-5'>Schedule Information</h5>
                </div>
            </div>

           

            

            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
