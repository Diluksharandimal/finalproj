import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Exams", path: "/exm" },
        { link: "Applicants", path: "/appli" },
        { link: "Schedules", path: "/schedule" },
        { link: "Campaigns", path: "/camp" },
        { link: "Payments", path: "/pay" },
        {path:"/profile"}
    ];

    return (
        <>
            <nav className='bg-blue-100 md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 rounded-br-3xl rounded-bl-3xl'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <Link to="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo1} width={180} height={50} alt="" className='w-50 inline-block items-center' />
                        </Link>

                        {/*showing navItems using map */}
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => (
                                <Link key={link} to={path} className='block hover:text-blue-700 cursor-pointer'>{link}</Link>
                            ))}
                        </ul>
                    </div>

                    {/*language and signup */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href='/profile' className='hidden lg:flex items-center hover:text-blue-700'><span>My Proflie</span></a>
                        <button className='bg-blue-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-blue-900'>Log out</button>
                    </div>

                    {/*menu button only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? <FaTimes className='w-6 h-6 text-primary' /> : <FaBars className='w-6 h-6 text-primary' />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-blue-500  text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => (
                    <Link key={link} to={path} className='block text-white hover:text-blue-900 cursor-pointer' onClick={toggleMenu}>{link}</Link>
                ))}
            </div>
            {/*navItems for the mobile devices*/}
        </>
    );
};

export default Navbar2;
