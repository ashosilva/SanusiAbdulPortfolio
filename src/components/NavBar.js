import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";




export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="navbar border-sky-500 fixed top-0 left-0 right-0 py-2">

            <div className="container mx-auto cursive pt-12">
                <div className="flex justify-center">
                    <NavLink
                        to="/"
                        className="text-white hover:text-gray-300 text-8xl font-bold cursive tracking-widest"
                    >RadiiSolis</NavLink>

                </div>

                <div className="py-3 rounded"></div>

                <div className="grid grid-cols-3 ">
                    <div></div>

                    <nav className="justify-self-center grid grid-cols-3 gap-x-10 justify-items-center">

                        <NavLink
                            to="/" exact
                            activeClassName="text-gray-500 underline"
                            className="text-white hover:text-gray-400 hover:underline"
                        >HOME</NavLink>

                        <NavLink
                            to="/project"
                            activeClassName="text-gray-500 underline"
                            className="text-white hover:text-gray-400 hover:underline"
                        >ESPIAL</NavLink>

                        <NavLink
                            to="/projects"
                            activeClassName="text-gray-500 underline"
                            className="text-white hover:text-gray-400 hover:underline"
                        >PROJECTS</NavLink>

                    </nav >

                    {/* Social links in navbar */}
                    <div className="justify-self-end relative">

                        <div className=" bg-white text-black px-1.5 rounded-l-lg  absolute right-4 ">
                            CONTACT
                        </div>
                        <button>
                            <VscChevronUp 
                                onClick={toggleDropdown}  
                                className="bg-white text-black rounded-r-lg hover:text-gray-500 focus:outline-none"
                                style={{ height: 24, width: 15 }}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-11 -top-8 w-16 z-50">

                                <div className="grid grid-cols-4">
                                    <div></div>
                                    <SocialIcon
                                        url="https://www.instagram.com/a8itonz/"
                                        className="hover:opacity-75"
                                        target="_blank"
                                        fgColor="#fff"
                                        style={{ height: 25, width: 25 }}
                                    />
                                    <div></div>
                                    
                                    <div><NavLink
                                    to="/inquiry"
                                    className=" bg-gray-800 text-white px-1 rounded hover:bg-gray-700"
                                    >Inquiry</NavLink></div>
                                    

                                </div>
                                
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </header>
    )
}