import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"



export default function Navbar() {
    return (
        <header className="bg-green-600">
            <div className="container mx-auto flex justify-between cursive">
                <nav className="flex">
                    <NavLink
                        to="/" exact
                        activeClassName="text-green-100"
                        className="inflex-flex items-center py-8 px-3 mr-4 rounded text-green-100 hover:text-green-800 text-4xl fon-bold cursive tracking-widest"
                    >ABAYOMI</NavLink>

                    {/* <NavLink
                        to="/post"
                        activeClassName="text-purple-100 bg-green-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-150 hover:text-green-300"
                    >BLOG POSTS</NavLink> */}

                    <NavLink
                        to="/project"
                        activeClassName="text-purple-100 bg-green-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-150 hover:text-green-300"
                    >PROJECTS</NavLink>

                    <NavLink
                        to="/about"
                        activeClassName="text-purple-100 bg-green-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-150 hover:text-green-300"
                    >ABOUT ME!</NavLink>

                </nav>
                {/* Social links in navbar */}
                {/* <div className="inline-flex py-3 px-3 my-6 bg-green-800 rounded" >
                    <SocialIcon
                        url="https://www.linkedin.com/in/abayomi-shosilva/"
                        className="ml-1 mr-1 hover:opacity-75 "
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />

                    <SocialIcon
                        url="https://github.com/ashosilva"
                        className="ml-1 mr-1 hover:opacity-75"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    
                    <SocialIcon
                        url="https://www.instagram.com/a8itonz/"
                        className="ml-1 mr-1 hover:opacity-75"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />

                </div> */}
            </div>
        </header>
    )
}