import React, {useState, useEffect} from "react"
import sanityClient from "../sanityConfig/client.js"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

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
            email,
            "homeImage": image.asset->url,
            "personalImage": pimage.asset->url
        }`)
            .then((data) => setHome(data[0]))
            .catch(console.error);
    }, []);

    if (!home) return <main className="bg-black min-h-screen"> <div className="text-white flex justify-center  pt-40 "> Loading...</div> </main>;

    return (
        <main className="bg-black min-h-screen">
            <section className="lg:p-20 px-20 pt-40">

                <div className="grid grid-cols-3 justify-items-center pt-20">
                
                    <img
                        src={urlFor(home.homeImage).url()}
                        alt={home.name}
                        className="col-span-2 w-full h-full border-double border-2"
                    />
                    <div className="place-self-center">
                        <h1 className=" bold text-3xl lg:text-4xl text-green-300">
                            <span className="text-white">Featured Style</span>
                        </h1>
                    </div>

                </div>
                <div className="p-5"></div>

                <div className=" mx-auto rounded-xl shadow-md overflow-hidden pt-40 lg:-pt-80 ">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img 
                                className="object-cover h-48 w-48 lg:w-64 lg:h-64 rounded-full border-4 p-2 border-neutral-300" 
                                src={urlFor(home.personalImage).url()} 
                                alt={home.career}
                            />
                        </div>
                        <div className="px-3 py-3">
                            <h1 className="uppercase tracking-wide text-lg text-white font-extralight ">{home.name}</h1>
                            <h3 className="block text-md leading-tight font-thin text-white mb-1">{home.career}</h3>
                            <h3 className="block text-sm tracking-widest font-thin text-white "> -- Email: {home.email} --</h3>
                            <div className="my-1 text-white text-md lg:text-lg font-normal textfont">
                                <BlockContent
                                    blocks={home.bio}
                                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                                    dataset={process.env.REACT_APP_SANITY_DATASET}
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}