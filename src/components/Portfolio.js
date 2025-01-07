import React, { useState, useEffect, useReducer } from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Portfolio() {
    const [portfolioData, setPortfolioData] = useState(null)
    //const [stackData, techStackData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "portfolio"]{

            "portfolioImage": image.asset->url,
            stylist,

        }`)
            .then((data) => setPortfolioData(data.sort((a, b) => {
                return new Date(a.date).getTime() -
                    new Date(b.date).getTime()
            }).reverse()))
            .catch(console.error);


    }, []);

    return (
        <main className="bg-black min-h-screen ">
            <section className="p-20">
                <h1 className="text-xl text-white flex justify-center cursive mb-5 pt-20">Personal pieces</h1>

                <div className="grid grid-cols-4 gap-7 flex items-center px-5 lg:px-10">

                    {portfolioData && portfolioData.map((portfolio, index) => (
                        <article className="shadow-xl">
                            <img
                                    src={urlFor(portfolio.portfolioImage).url()}
                                    alt={portfolio.title}
                                    className="object-cover w-full h-full border"
                                />
                        </article>

                    ))}
                </div>
            </section>
        </main>
    )
}