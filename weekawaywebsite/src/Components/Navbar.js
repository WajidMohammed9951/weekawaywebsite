import React,{useState, useEffect} from 'react'

import { BsChatSquareDots } from 'react-icons/bs'
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
    
  } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className=' w-full min-h-[50px] flex justify-between items-center absolute text-white bg-gray-700/80'>
        <ul className='hidden sm:flex text-lg'>
            <li className='px-4'>
                <a href='/' >Home</a>
            </li>
            <li className='px-4'>
                <a href='#gallery' >Gallery</a>
                
            </li>
            <li className='px-4'>
                <a href='#deals' >Deals</a>
            </li>
            <li className='px-4'>
                <a href='#contact' >Contact</a>
            </li>
        </ul>
        <div>
            <FaFacebookF className='mx-2'/>
            <FaTwitter className='mx-2'/>
            <FaGooglePlusG className='mx-2'/>
            <FaInstagram className='mx-2'/>
        </div>

        <div>
            <FaBars size={20} className='mr-4 cursor-pointer' />
        </div>
        <div>
        <ul className='h-full w-full text-center pt-12 px-4'>
            <li className='text-2xl py-4'>
                <a href='/' >Home</a>
            </li>
            <li className='text-2xl py-4'>
                <a href='#gallery' >Gallery</a>
            </li>
            <li className='text-2xl py-4'>
                <a href='#deals' >Deals</a>
            </li>
            <li className='text-2xl py-4'>
                <a href='#contact' >Contact</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar