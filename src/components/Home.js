import React, {useState, useEffect} from "react"
import sanityClient from "../client.js"
import bgAbout from "../bgAbt.png"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import Navbar from "./NavBar.js";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Home() {

    const [home, setHome] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "home"]{
            name,
            bio,
            career,
            "homeImage": image.asset->url,
            "personalImage": pimage.asset->url
        }`)
            .then((data) => setHome(data[0]))
            .catch(console.error);
    }, []);

    if (!home) return <main className="bg-black min-h-screen"> <div className="text-white flex justify-center"> Loading...</div> </main>;

    return (
        <main className="bg-black min-h-screen">
            <section className="p-20">

                <div className="grid grid-cols-3 justify-items-center pt-20">
                
                    <img
                        src={urlFor(home.homeImage).url()}
                        alt={home.name}
                        className="col-span-2 w-full h-full border-double border-2"
                    />
                    <div className="place-self-center">
                        <h1 className=" bold text-3xl lg:text-4xl text-green-300">
                            <span className="text-white">Feratured Style</span>
                        </h1>
                    </div>

                </div>
                <div className="p-5"></div>

                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img 
                                className="object-cover h-48 w-48 lg:w-64 lg:h-64 rounded-full" 
                                src={urlFor(home.personalImage).url()} 
                                alt={home.career}
                            />
                        </div>
                        <div className="px-5 py-3">
                            <h1 className="uppercase tracking-wide text-lg text-white font-extralight">{home.name}</h1>
                            <h3 className="block text-md leading-tight font-thin text-white ">{home.career}</h3>
                            <p className="mt-2 text-white text-sm font-normal">
                                <BlockContent
                                    blocks={home.bio}
                                    projectId="hxac9fk1"
                                    dataset="production"
                                />
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}