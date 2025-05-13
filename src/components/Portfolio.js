import React, { useState, useEffect, } from "react"
import sanityClient from "../sanityConfig/client.js"
import imageUrlBuilder from "@sanity/image-url";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Portfolio() {
    const [portfolioData, setPortfolioData] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

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

    const handlePrev = () => {
        setSelectedImage((prevImage) =>
            prevImage === 0 ? portfolioData.length - 1 : prevImage - 1
        );
    };

    const handleNext = () => {
        setSelectedImage((prevImage) =>
            prevImage === portfolioData.length - 1 ? 0 : prevImage + 1
        );
    };




    if (!portfolioData) return <main className="bg-black min-h-screen"> <div className="text-white flex justify-center  pt-40 "> Loading...</div> </main>;

    return (
        <main className="bg-black min-h-screen ">
            <section className="p-20">
                <h1 className="text-lg lg:text-2xl text-white flex justify-center pagetitle my-5 pt-10">Glints</h1>

                <div className="grid grid-cols-4 gap-7 items-center px-10 lg:px-20">

                    {portfolioData && portfolioData.map((portfolio, index) => (
                        <article key={portfolioData.id || index} className="shadow-xl cursor-pointer"
                            onClick={() => setSelectedImage(index)}
                            >
                            <img
                                    src={urlFor(portfolio.portfolioImage).url()}
                                    alt={portfolio.title}
                                    className="object-cover w-full h-full border-4 border-neutral-400 p-2"
                                />
                        </article>

                    ))}
                </div>
                
                {/* Navigating through the images */}
                {selectedImage !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center"
                        onClick={() => { setIsZoomed(false); setSelectedImage(null); }}
                    >
                        <div className="relative max-w-lg w-full flex items-center mr-40 ">
                            <button
                                className=" text-white text-3xl p-4 hover:text-gray-400"
                                onClick={(e) => { e.stopPropagation(); handlePrev(); setIsZoomed(false);}}
                            >
                                <VscArrowLeft 
                                    style={{ height: 50, width: 50 }}
                                />
                            </button>
                            <img
                                src={urlFor(portfolioData[selectedImage].portfolioImage).url()}
                                alt="Enlarged view"
                                className={`w-full h-auto rounded-lg shadow-lg border-2 border-neutral-500 transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsZoomed((prev) => !prev);;
                                }}
                            />
                            <button
                                className="text-white text-3xl p-4 hover:text-gray-400"
                                onClick={(e) => { e.stopPropagation(); handleNext(); setIsZoomed(false); }}
                            >
                                <VscArrowRight 
                                    style={{ height: 40, width: 40 }}
                                />
                            </button>
                        </div>
                    </div>
                )}

            </section>
        </main>
    )
}