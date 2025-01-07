import React, { useState, useEffect, useReducer } from "react"
import sanityClient from "../client.js"
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

    return (
        <main className="bg-black min-h-screen ">
            <section className="p-20">
                <h1 className="text-xl text-white flex justify-center cursive mb-2 pt-20">Inspo pieces</h1>

                <div className="grid grid-cols-5 gap-3 px-20 lg:px-40">

                    {espialData && espialData.map((espial, index) => (
                        <article className="shadow-xl">
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