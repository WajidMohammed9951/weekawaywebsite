import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 py-4 bg-blue-100'>
            <div className='flex items-center'>
                <BsChatSquareDots size={30} className=' mr-2' />
                <h1 className='text-2xl font-bold text-purple-950'>WEEKAWAY</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-3'>
                    <AiOutlineClockCircle size={30} className='mr-1' />
                    <p className=' text-purple-950 text-xl mr-1'>9AM - 5AM</p>
                </div>

                <div className='hidden md:flex items-center px-3'>
                    <AiFillPhone size={30} className='mr-1 ' />
                    <p className=' text-purple-950 text-xl mr-1'>1-888-817-1234</p>
                </div>
                <button className='text-xl mr-3 ml-6 border-0  font-sans  bg-blue-500 px-2 py-2 rounded-lg border-b-2 text-black'>Get a Free Quote</button>


            </div>
        </div>
    )
}

export default Header