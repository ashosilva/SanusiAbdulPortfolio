import React, {useState, useEffect} from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url";
import { MdInsertDriveFile, MdSend } from "react-icons/md";
import BlockContent from "@sanity/block-content-to-react"
import Navbar from "./NavBar.js";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Inquiry() {

    const [personalEmail, setPersonalEmail] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "home"]{
            email
        }`)
            .then((data) => setPersonalEmail(data[0]) )
            .catch(console.error);
    }, []);

    if (!personalEmail) return <main className="bg-black min-h-screen"> <div className="text-white flex justify-center pt-40 "> Loading...</div> </main>;

    return (
       <main className="bg-black min-h-screen">

            <section className="p-20 px-40 lg:px-80">
                <h1 className="text-lg lg:text-2xl text-white flex justify-center cursive pt-20">Inquiry</h1>
                <p className="text-xs lg:text-base font-thin text-white flex justify-center mb-1 tracking-widest">Please enter your Name, Email and/or any Comment for styling inquiries.</p>
                <div className="bg-neutral-900 rounded-lg shadow-2xl p-20 lg:px-40">
                    <div  className="max-w-sm space-y-5">
                            <input 
                                type="text"
                                 className="peer lg:py-4 py-2 px-4 block lg:w-full w-48 rounded-lg border-2 border-neutral-700 bg-neutral-800 text-sm text-neutral-200 disabled:opacity-50 disabled:pointer-events-none placeholder-neutral-500 shadow-2xl shadow-neutral-800" 
                                placeholder="First name"
                            >
                            </input>
                            <input 
                                type="text" 
                                 className="peer lg:py-4 py-2 px-4 block lg:w-full w-48 rounded-lg border-2 border-neutral-700 bg-neutral-800 text-sm text-neutral-200 disabled:opacity-50 disabled:pointer-events-none placeholder-neutral-500 shadow-2xl shadow-neutral-800" 
                                placeholder="Last name"
                            >
                            </input>
                            <input 
                                type="email" 
                                 className="peer lg:py-4 py-2 px-4 block lg:w-full w-48 rounded-lg border-2 border-neutral-700 bg-neutral-800 text-sm text-neutral-200 disabled:opacity-50 disabled:pointer-events-none placeholder-neutral-500 shadow-2xl shadow-neutral-800" 
                                placeholder="Email"
                            >
                            </input>
                    </div>

                    {/* <!-- Textarea --> */}
                    <div className="relative pt-8">
                        <textarea 
                            className="p-4 pb-12 block w-full rounded-lg border-2 border-neutral-700 bg-neutral-800 text-sm text-neutral-200 placeholder-neutral-500 " 
                            placeholder="Comment here"
                        >
                        </textarea>

                        {/* <!-- Toolbar --> */}
                        <div  className="flex w-full justify-end py-5">
                            <button
                                 className="select-none rounded-full bg-white py-1 lg:py-2 px-2 lg:px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black hover:shadow-2xl hover:shadow-gray-200/50"
                                type="button">
                                Connect
                            </button>
                        </div>
                        {/* <!-- End Toolbar --> */}
                    </div>
                    {/* <!-- End Textarea --> */}

                  
                </div>
            </section>
        </main>
    )
}