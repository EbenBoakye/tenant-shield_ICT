import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className='w-full text-4xl font bold text-white'>Tenant Shield®</h1>
            <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Eligiblity</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            </ul>
            <div>
                <AiOutlineMenu size={20}/>
            </div>
            <div>
            <ul>
            <li className='p-4'>Home</li>
            <li className='p-4'>Eligiblity</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>

            </ul>

            </div>
        </div>
    )
}

export default Navbar
