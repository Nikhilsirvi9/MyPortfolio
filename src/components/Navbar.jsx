import React, { useState } from 'react'
import logo from '../assets/logo-removebg-preview.png'
import tile from '../assets/tile.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setIsSidebarOpen(false)
        }
    }

    return (
        <div className="text-white flex justify-between items-center p-5 md:mx-28">
            <div className="relative">
                <img src={logo} alt="logo" className="h-16 md:h-20" />
                <img src={tile} alt="tile" className="absolute right-0 bottom-3 md:bottom-7" />
            </div>

            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleSidebar}>
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-[70%] bg-black text-white z-50 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300`}
            >
                <ul className="flex flex-col gap-6 p-6 font-outfit">
                    <li
                        className="cursor-pointer hover:text-indigo-500 transition-colors"
                        onClick={() => scrollToSection('home')}
                    >
                        HOME
                    </li>
                    <li
                        className="cursor-pointer hover:text-indigo-500 transition-colors"
                        onClick={() => scrollToSection('about')}
                    >
                        About Me
                    </li>
                    <li
                        className="cursor-pointer hover:text-indigo-500 transition-colors"
                        onClick={() => scrollToSection('services')}
                    >
                        Services
                    </li>
                    <li
                        className="cursor-pointer hover:text-indigo-500 transition-colors"
                        onClick={() => scrollToSection('portfolio')}
                    >
                        Portfolio
                    </li>
                    <li
                        className="cursor-pointer hover:text-indigo-500 transition-colors"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </li>
                </ul>
            </div>

            <ul className="hidden md:flex flex-row gap-4 md:gap-9 font-outfit text-center">
                <li
                    className="cursor-pointer hover:text-indigo-500 transition-colors"
                    onClick={() => scrollToSection('home')}
                >
                    HOME
                </li>
                <li
                    className="cursor-pointer hover:text-indigo-500 transition-colors"
                    onClick={() => scrollToSection('about')}
                >
                    About Me
                </li>
                <li
                    className="cursor-pointer hover:text-indigo-500 transition-colors"
                    onClick={() => scrollToSection('Projects')}
                >
                    Projects
                </li>
        
                <li
                    className="cursor-pointer hover:text-indigo-500 transition-colors"
                    onClick={() => scrollToSection('contact')}
                >
                    Contact
                </li>
            </ul>

            <li className='list-none' onClick={()=>scrollToSection('contact')}>
            <div className="hidden md:block bg-gradient-to-r from-indigo-500 to-pink-500 py-2 md:py-3 rounded-2xl px-4 cursor-pointer border-black hover:scale-110 transition-transform">
                Connect With Me
            </div>
            </li>
        </div>
    )
}

export default Navbar