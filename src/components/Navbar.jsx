import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between text-white'>
            <h1 className='w-full text-3xl font bold text-white'>Tenant Shield</h1>
            <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Check Eligiblity</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>

            </ul>
        </div>
    )
}

export default Navbar
