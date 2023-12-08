import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav) }


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className='w-full text-4xl font bold text-white'>Tenant Shield®</h1>
            <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Eligiblity</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            </ul>
            <div onClick={toggleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-500 ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className='w-full text-4xl font bold text-white m-4'>Tenant Shield®</h1>   
            <ul className='pt-24 uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Eligiblity</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4'>About</li>
            </ul>

            </div>
        </div>
    )
}

export default Navbar
