import React from "react"
import bgHome from "../bgVir.png"
import { SocialIcon } from "react-social-icons"

export default function Home() {
    return (
        <main>
            <img src={bgHome} alt="Backgound Image" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-40 px-8">
                <h1 className="text-6xl text-gray-400 font-bold cursive home-name mb-60 ">
                    Hello. I'm Abdul and welcome.
                     
                    <div className="flex items-center justify-center py-3 px- my-10" >
                    <SocialIcon
                        url="https://www.linkedin.com/in/abayomi-shosilva/"
                        className="ml-1 mr-1 hover:opacity-75"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 75, width: 75 }}
                    />

                    <SocialIcon
                        url="https://github.com/ashosilva"
                        className="ml-1 mr-1 hover:opacity-75"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 75, width: 75 }}
                    />

                </div>
                </h1>
                
            </section>
            
        </main>
    )
}