import { useState } from 'react';
import logo from '../../../assets/e31.png'
import "./NavbarD.css"
import { useNavigate } from 'react-router-dom';
import{FaBars, FaXmark} from 'react-icons/fa6'
import { Link } from 'react-scroll';




const NavbarD = () => {

    const[isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems =[
        {link:"Overview", path:"bottom"},
        {link:"Work", path:"feture"},
        {link:"About", path:"about"},
        {link:"Examinors", path:"examinors"},
        {path:"sign"}
    ]

     let Navigate = useNavigate()

   function handleLogout(){
    sessionStorage.removeItem('token')
    Navigate('/')
   }

    
  return (

    <>
    
    <nav className=' foot bg-red-100 md:px-14 p-6 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-10 rounded-br-3xl rounded-bl-3xl'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium ml-4 cursor-pointer'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary cursor-pointer'>
                    <img src={logo} alt="" className='w-24 inline-block items-center'/> 
                    </a>

                    {/*showing navItems using map */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path}) => <Link spy={true} smooth={true} offset={-100}key={Link} to={path} className='block hover:text-gray-100'>{link}</Link>)
                        }
                    </ul>
            </div>

            
            <div className='space-x-12 hidden md:flex items-center mr-8'>
                <a href='/' className='hidden lg:flex items-center hover:bg-blue-800'><span></span></a>


                <button  className='bg-blue-400 py-2 px-8 transition-all duration-300 rounded-2xl right-8
                 hover:text-gray-200 hover:bg-blue-900 ' onClick={handleLogout} ><a href='sign'>Sign Out</a></button>
            </div>

            
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none absolute
                focus:text-gray-300 z-100'>
                    {
                        isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>):(<FaBars className='w-6 h-6 text-primary absolute z-10'/>)
                    }

                </button>
            </div>
        </div>
    </nav>
    
    <div className={`dro space-y-4 px-4 pt-24 pb-5 z-10 justify-center text-center rounded-bl-3xl rounded-br-3xl  absolute text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0"
     : "hidden"}`}>
        {
             navItems.map(({link,path}) => <Link spy={true} smooth={true} offset={-100}key={Link} to={path} className='block hover:text-gray-300'>{link}</Link>)
        }

    </div>

    
    </>
  );
};

export default NavbarD;
