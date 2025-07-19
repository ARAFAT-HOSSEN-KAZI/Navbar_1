import React from 'react'
import './Nav.css'

function Nav () {
    return (
        <nav className='flex justify-center items-center h-[100vh] bg-black'  >
            <ul className='relative flex justify-around items-center gap-10 w-full bg-[#272727] h-20 mx-10 rounded-xl text-2xl text-white z-1 nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Signup</li>
                <span className='absolute bg-linear-to-r from-[#4f1919] to-[#ff3333] w-[20vw] h-20 rounded-xl top-0 left-0 duration-500 ease-linear'></span>
            </ul>
        </nav>
    )
}

export default Nav