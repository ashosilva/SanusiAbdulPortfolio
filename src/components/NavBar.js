import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import { VscChevronUp } from "react-icons/vsc";
import sanityClient from "../sanityConfig/client.js"




export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inquiryData, setInquiryData] = useState(null)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

        useEffect(() => {
            sanityClient
                .fetch(`*[_type == "inquiry"]{
                socialType,
                profileLink,

            }`)
                .then((data) => setInquiryData(data))
                .catch(console.error);
        }, []);

    return (
        <header className="navbar border-sky-500 fixed top-0 left-0 right-0 py-2">

            <div className="container mx-auto pt-12">
                <div className="flex justify-center">
                    <NavLink
                        to="/"
                        className="text-white hover:text-gray-300 text-8xl cursive tracking-widest"
                    >RadiiSolis</NavLink>

                </div>

                <div className="py-3 rounded"></div>

                <div className="grid grid-cols-3 font-thin ">
                    <div></div>

                    <nav className="justify-self-center grid grid-cols-3 gap-x-10 justify-items-center">

                        <NavLink
                            to="/" exact
                            activeClassName="text-zinc-500 border-b-0 border-neutral-900 hover:border-neutral-900"
                            className="text-white hover:text-gray-500 border-b-2 border-white hover:border-gray-500"
                           
                        >HOME</NavLink>

                        <NavLink
                            to="/espial"
                            activeClassName="text-zinc-500 border-b-0 border-neutral-900 hover:border-neutral-900"
                            className="text-white hover:text-gray-500 border-b-2 border-white hover:border-gray-500"
                        >ESPIAL</NavLink>

                        <NavLink
                            to="/projects"
                            activeClassName="text-zinc-500 border-b-0 border-neutral-900 hover:border-neutral-900"
                            className="text-white hover:text-gray-500 border-b-2 border-white hover:border-gray-500"
                        >PORTFOLIO</NavLink>

                    </nav >

                    {/* Social links in navbar */}
                    <div className="justify-self-end relative cursive">

                        <div className="flex">
                            <div className=" bg-white text-black px-1.5 rounded-l-lg ">
                                CONTACT
                            </div>
                            <button>
                                <VscChevronUp 
                                    onClick={toggleDropdown}  
                                    className=" ml-0.5 bg-white text-black rounded-r-lg hover:bg-gray-300"
                                    style={{ height: 24, width: 18 }}
                                />
                            </button>
                        </div>

                        

                        {dropdownOpen && (
                            <div className="absolute -top-10 grid grid-rows-1 grid-flow-col gap-1.5">
                                {inquiryData && inquiryData.map((inquiry, index) => (
                                    <SocialIcon
                                        url={inquiry.profileLink}
                                        network={inquiry.socialType}
                                        className="hover:opacity-75"
                                        target="_blank"
                                        fgColor="white"
                                        bgColor=""
                                        style={{ height: 30, width: 30 }}
                                    />
                                ))}
                                
                                <NavLink
                                    to="/inquiry"
                                    className=" bg-blue-500 text-white my-0.5 px-1.5 py-0.5 rounded hover:bg-blue-700"
                                >Inquiry</NavLink>
                                
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </header>
    )
}