import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-zinc-100 dark:bg-gray-800 md:px-9 lg:px-9  shadow-md">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className='text-3xl font-semibold text-amber-500'>Explore</h1>
                    </div>

                    <div className="flex md:hidden  lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <NavLink to="/" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FF444A] dark:hover:text-[#FF444A]
                         focus:underline focus:text-[#FF444A]
                        hover:underline md:mx-4 md:my-0" href="#">Home</NavLink>
                        <NavLink to="/SignUp" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FF444A] dark:hover:text-[#FF444A]
                        focus:underline focus:text-[#FF444A] hover:underline md:mx-4 md:my-0" href="#">SignUp</NavLink>
                        <NavLink to="/LogIn" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FF444A] dark:hover:text-[#FF444A] focus:underline focus:text-[#FF444A]
                        hover:underline md:mx-4 md:my-0" href="#">LogIn</NavLink>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
