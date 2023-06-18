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
    <div className=''>
        <ul className='mx-2'>
            <li>
                <a href='/' >Home</a>
            </li>
            <li>
                <a href='#gallery' >Gallery</a>
            </li>
            <li>
                <a href='#deals' >Deals</a>
            </li>
            <li>
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
            <FaBars className='mx-2'/>
        </div>
        <div>
        <ul className='mx-2'>
            <li>
                <a href='/' >Home</a>
            </li>
            <li>
                <a href='#gallery' >Gallery</a>
            </li>
            <li>
                <a href='#deals' >Deals</a>
            </li>
            <li>
                <a href='#contact' >Contact</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar