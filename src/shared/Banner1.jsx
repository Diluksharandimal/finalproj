import dev from '../assets/team.svg'

const Banner = ( { heading, subheading, btn1, btn2})=> {
  return (
    
      <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
             {/*Banner Image */}
             <div className="img"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img src={dev} alt="" className='lg:h-[386px]'/>
            </div>

            {/*Banner content */}
            <div className="md:w-3/5">
              <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
              <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
           
          
            </div>
           
        </div>
      </div>
    
  );
};

export default Banner;
