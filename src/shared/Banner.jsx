

const Banner = ( {banner, heading, subheading, })=> {
  return (
    
      <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9  mt-2'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10' >
             {/*Banner Image */}
             <div data-aos="fade-right">
                <img src={banner} alt="" className='lg:h-[386px]'/>
            </div>

            {/*Banner content */}
            <div className="md:w-3/5" data-aos="zoom-in">
              <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
              <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
           
           
            </div>
           
        </div>
      </div>
    
  );
};

export default Banner;
