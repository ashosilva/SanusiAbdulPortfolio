import React, {useState, useEffect} from "react"
import { NavLink, useLocation } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import { VscChevronUp } from "react-icons/vsc";
import sanityClient from "../sanityConfig/client.js"
import clsx from "clsx";





export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inquiryData, setInquiryData] = useState(null)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const location = useLocation();
    const isActiveProjects = location.pathname === "/projects";
    const isActiveHome = location.pathname === "/";


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
                        className="text-white hover:text-gray-300 text-8xl navtitle tracking-widest"
                    >RadiiSolis</NavLink>

                </div>

                <div className="py-3 rounded"></div>

                <div className="grid grid-cols-3 font-thin ">
                    <div></div>

                    <nav className="justify-self-center grid grid-cols-2 gap-x-20 justify-items-center tabfont">

                        <NavLink
                            to="/" exact
                            className={clsx(
                                isActiveHome
                                  ? "text-neutral-500 border-b-0"
                                  : "text-white border-b-2 hover:text-neutral-500 hover:border-b-0 transition-border duration-100")
                              }
                           
                        >HOME</NavLink>

                        {/* <NavLink
                            to="/espial"
                            activeClassName="text-gray-500 border-b-0 border-gray-900 hover:border-gray-900"
                            className="text-white hover:text-gray-500 border-b-2 border-white hover:border-gray-500 transition-colors duration-300"
                        >ESPIAL</NavLink> */}

                        <NavLink
                            to="/projects"
                            className={clsx(
                                isActiveProjects
                                  ? "text-neutral-500 border-b-0"
                                  : "text-white border-b-2 hover:text-neutral-500 hover:border-b-0 transition-border duration-100")
                              }
                        >PORTFOLIO</NavLink>

                    </nav >

                    {/* Social links in navbar */}
                    <div className="justify-self-end relative navtitle">

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