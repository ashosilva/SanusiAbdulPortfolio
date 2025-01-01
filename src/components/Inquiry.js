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

export default function Inquiry() {

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

            <div className="p-10 lg:pt-36 container mx-auto">
                <img
                    src={urlFor(home.homeImage).url()}
                    alt={home.name}
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                />
                        
                <div class="overflow-visible"></div>
                        
                <div className="text-lg flex flex-col justify-center">
                    <h1 className=" bold text-5xl text-green-300 mb-4">
                        <span className="text-green-100">{home.name}</span>
                    </h1>
                    <div className="prose lg:prose-xl text-white">
                        <BlockContent
                            blocks={home.bio}
                            projectId="hxac9fk1"
                            dataset="production"
                        />
                    </div>
                </div>

            </div>

        </main>
    )
}