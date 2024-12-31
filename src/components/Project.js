import React, { useState, useEffect, useReducer } from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Project() {
    const [projectData, setProjectData] = useState(null)
    //const [stackData, techStackData] = useState(null)

    const menuItems = [...new Set(projectData && projectData.map((Val, id) => (Val.projectType)))];
    //const test = testt;

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            "projectImage": image.asset->url,
            projectType,
            link,
            tags,
            language,
            techStacks,
        }`)
            .then((data) => setProjectData(data.sort((a, b) => {
                return new Date(a.date).getTime() -
                    new Date(b.date).getTime()
            }).reverse()))
            .catch(console.error);


    }, []);



    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive mb-12">My Projects</h1>

                {/* <section className="grid grid-cols-3  gap-5">

                    <div className="d-flex justify-content-center">
                        {menuItems.map((Val, id) => (
                            <button
                                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                                key={id}
                                onClick={() => filterItem(Val)}
                            >
                                {Val}

                            </button>

                        ))}
                        <button
                            className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                            onClick={() => filterItem(null)}
                        >

                            All
                        </button>
                    </div>
                </section> */}

                <section className="grid grid-cols-3  gap-5">

                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-8 ">

                            {/* <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-500">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3> */}
                            <div className="rounded relative w-82 h-48 
                                border-solid border-4 border-gray-300 hover:border-red-400 ">
                                <a href={project.link}
                                    alt={project.title}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <img
                                        src={urlFor(project.projectImage).url()}
                                        alt={project.title}
                                        className="object-cover w-full h-full"

                                    />
                                    <div className="absolute w-full bottom-0 py-5 bg-opacity-95 bg-gray-400 ">
                                        <h3 className="text-center text-red-700 font-bold text-xl">
                                            {project.title}{" "}
                                            {/* <span role="img" aria-label="right pointer" >👉</span> */}
                                        </h3>

                                    </div>

                                </a>

                            </div>
                            <div className="test-gray-500 text-xs">

                                <div className="space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="space-x-4">
                                    <span>
                                        <strong className="font-bold">Company</strong>:{" "}
                                        {project.place}
                                    </span>

                                </div>


                                <div className="space-x-4">
                                    <span>
                                        <strong className="font-bold">Type</strong>:{" "}
                                        {project.projectType}

                                    </span>

                                </div>
                                <div className="space-x-4">
                                    <span>
                                        <strong className="font-bold">Programming Language</strong>:{" "}
                                        {project.language}
                                    </span>

                                </div>
                                <div className="space-x-4">
                                    <span>
                                        <strong className="font-bold">TechStacks</strong>:{" "}
                                        {project.techStacks.map(element => <span>{element}, </span>)}

                                    </span>

                                </div>

                                <h1 className="text-lg mt-2 font-bold underline">Description</h1>
                                <p className="text-base text-gray-700 leading-relaxed">{project.description}</p>





                            </div>
                            <a href={project.link}
                                alt={project.title}
                                target="_blank" rel="noopener noreferrer"
                                className="hover:underline text-red-500 hover:text-red-400"
                            >
                                Click to View Project
                                {/* <span role="img" aria-label="right pointer" className="no-underline" >  👉</span> */}
                            </a>


                        </article>

                    ))}
                </section>
            </section>
        </main>
    )
}