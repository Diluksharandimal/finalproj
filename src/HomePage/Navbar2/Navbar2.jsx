import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/e31.png';
import "./navbar2.css";
import { Dropdown } from 'rsuite';
import { Link as ScrollLink } from 'react-scroll';
import "rsuite/dist/rsuite.min.css"; 

const Navbar2 = () => {
   

    const navItems = [
        { link: "Department", path: "depa" },
        { link: "Driving Schools", path: "scl" },
        { link: "Applicants", path: "cus" },
        { link: "About Us", path: "about" },
        { path: "/school" },
        { path: "/LoginD" },
        {path: "/examinlog"},
        {path:"/sclregform"},
        {path:"/cus"},
        {path:"/sign2"}
    ];

    return (
        <>
            <nav className=' foot2 md:px-14 p-6 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-10 rounded-br-3xl rounded-bl-3xl'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium ml-4 cursor-pointer'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary cursor-pointer'>
                            <img src={logo} alt="" className=' w-48 inline-block items-center' />
                        </a>

                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <ScrollLink spy={true} smooth={true} offset={-100} key={path} to={path} className='block hover:text-gray-100'>{link}</ScrollLink>)
                            }
                        </ul>
                    </div>

                    <a href='' className='hidden lg:flex items-center hover:bg-blue-600'><span></span></a>

                 

                    <Dropdown title="Customer" className='bg-white rounded-xl font-extrabold'> 
                
  
                <Dropdown.Item as="a" href= 
                "/sel"> 
                    Register 
                </Dropdown.Item> 
  
                <Dropdown.Item as="a" href= 
                "/sign2"> 
                    Login 
                </Dropdown.Item> 
            </Dropdown> 

                    <Dropdown title="Department" className='bg-white rounded-xl font-extrabold'> 
                
  
                <Dropdown.Item as="a" href= 
                "/examinlog"> 
                    Examinor 
                </Dropdown.Item> 
  
                <Dropdown.Item as="a" href= 
                "/LoginD"> 
                    Admin 
                </Dropdown.Item> 
            </Dropdown> 
                    <Dropdown title="School" className='bg-white rounded-xl font-extrabold'> 
                
  
                <Dropdown.Item as="a" href= 
                "/school"> 
                    Loging 
                </Dropdown.Item> 
  
                <Dropdown.Item as="a" href= 
                "/sclregform"> 
                    Register 
                </Dropdown.Item> 
            </Dropdown> 
                    <div className='md:hidden'>
                       
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar2;
