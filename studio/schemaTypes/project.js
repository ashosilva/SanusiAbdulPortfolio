export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" },

                ],
            },
        },
        {
            name: "language",
            title: "Programming Language",
            type: "string",
            options: {
                list: [
                    { value: "C++", title: "C++" },
                    { value: "JAVA", title: "Java" },
                    { value: "Python", title: "Python" },
                    { value: "HTML/CSS", title: "HTML/CSS" },
                    { value: "N/A Check TechStacks", title: "N/A Check TechStacks" },


                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
        {
            name: "techStacks",
            type: "array",
            of: [
                {
                    name: "tools",
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};