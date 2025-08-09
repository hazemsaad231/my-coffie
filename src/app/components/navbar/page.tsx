
"use client";



import React, { useState } from 'react';

const Navbar = () => {


const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="z-20 relative">

        <div className="flex justify-between items-center">
        <div>

            

            <h1 className="text-white text-2xl">Bean Scene</h1>
        </div>
        
        {/* desktop menu */}
    
        <div className='hidden md:flex'>
            {
                isOpen && (
                     <ul className="flex gap-12 text-white text-lg font-serif ">
                <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#home">Home</a></li>
                <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#about">About Us</a></li>
                <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#menu">Menu</a></li>
                <li className="cursor-pointer hover:text-[#F9C06A]"> <a href="#contact">Contact Us</a></li>
            </ul>
                )
            }
        </div>
        <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
                {isOpen ? '☰' : 'X'}
            </button>

        </div>

        {/* mobile menu */}
        <div className='md:hidden fixed  bottom-0 left-0 w-full  bg-opacity-80 p-4 transition-transform duration-300 transform' style={{ transform: isOpen ? 'translateY(100%)' : 'translateY(0)' }}> 

<div className='bg-amber-800 p-4 rounded-lg shadow-lg'>
    <ul className='flex gap-4 text-white text-md font-serif justify-center items-center'>
         <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#home">Home</a></li>
         <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#about">About Us</a></li>
         <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#menu">Menu</a></li>
        <li className="cursor-pointer hover:text-[#F9C06A]"><a href="#contact">Contact Us</a></li>
    </ul>
</div>
        </div>
     
    </div>
  );
};
export default Navbar;


