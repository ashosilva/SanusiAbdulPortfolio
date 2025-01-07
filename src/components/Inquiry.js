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

            {/* do it like the projects page of abayomi portfolio with the box container */}

        </main>
    )
}