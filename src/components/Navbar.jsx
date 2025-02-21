import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="header   flex justify-between text-end  p-5 text-white bg-gray-800">
    <img src={logo} alt="sorry" className='w-[10rem] h-[3rem]' />
    <div className=" ">
            <ul className='flex font-medium '>
                <li className='px-2  hover:text-orange-400  cursor-pointer'><Link to="/">Home</Link></li>
                <li className='px-2  hover:text-orange-400 cursor-pointer'><Link to="/services">Services</Link></li>
                <li className='px-2  hover:text-orange-400 cursor-pointer'><Link to="/about">About Us</Link></li>
                <li className='px-2  hover:text-orange-400 cursor-pointer '><Link to="/team">Our Team</Link></li>
            </ul>
        </div>
    </div>
   
    </>
  )
}

export default Header
