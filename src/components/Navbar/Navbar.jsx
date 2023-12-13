import { useState } from 'react';
import logo from '../../assets/e31.png'
import { GrLanguage } from "react-icons/gr";
import{FaBars, FaXmark} from 'react-icons/fa6'
import { Link } from 'react-scroll';

const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    function handleLogout(){
        sessionStorage.removeItem('token')
        Navigate('/')
       }
    

    const navItems =[
        {link:"Department", path:"home"},
        {link:"Feature", path:"feature"},
        {link:"DSchool", path:"payment"},
        {link:"About", path:"campaigns"},
        {path:"/sel"},
        {path:"/profile"}
   
    ]
    
   function handleLogout(){
    sessionStorage.removeItem('token')
    Navigate('/')
   }
  return (
    <>
    <nav className='bg-indigo-300 md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 rounded-br-3xl rounded-bl-3xl'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a id='image' href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary'>
                    <img src={logo} width={180} height={50} alt="" className='w-50 inline-block items-center'/> 
                    </a>

                    {/*showing navItems using map */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-indigo-600 cursor-pointer'>{link}</Link>)
                        }
                    </ul>
            </div>

            {/*language and signup */}
            <div className='space-x-12 hidden md:flex items-center'>
                <a href='/' className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/></a>
             
<a href='/' >  <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
                hover:text-pink hover:bg-indigo-600' onClick={handleLogout}>Sign Out</button> </a>
            </div>

            {/*menu button only dsplay on mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none
                focus:text-gray-300'>
                    {
                        isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>):(<FaBars className='w-6 h-6 text-primary'/>)
                    }

                </button>
            </div>
        </div>
    </nav>
    
    <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0"
     : "hidden"}`}>
        {
             navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 '
             onClick={toggleMenu} >{link}</Link>)
        }

    </div>

    {/*navItems for the mobile devices*/}
    </>
  );
};

export default Navbar;

