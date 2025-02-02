import React, { useState, useEffect, } from "react"
import sanityClient from "../sanityConfig/client.js"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Espial() {
    const [espialData, setEspialData] = useState(null)
    //const [stackData, techStackData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "espial"]{

            "espialImage": image.asset->url,
            stylist,

        }`)
            .then((data) => setEspialData(data.sort((a, b) => {
                return new Date(a.date).getTime() -
                    new Date(b.date).getTime()
            }).reverse()))
            .catch(console.error);


    }, []);

    if (!espialData) return <main className="bg-black min-h-screen"> <div className="text-white flex justify-center  pt-40 "> Loading...</div> </main>;

    return (
        <main className="bg-black min-h-screen ">
            <section className="p-20">
                <h1 className="text-lg lg:text-2xl text-white flex justify-center pagetitle mb-5 pt-20">Inspo pieces</h1>

                <div className="grid grid-cols-5 gap-3 px-10 lg:px-20">

                    {espialData && espialData.map((espial, index) => (
                        <article key={espial.id || index} className="shadow-xl">
                            <img
                                    src={urlFor(espial.espialImage).url()}
                                    alt={espial.title}
                                    className="object-cover w-full h-48 lg:h-96"
                                />
                        </article>

                    ))}
                </div>
            </section>
        </main>
    )
}