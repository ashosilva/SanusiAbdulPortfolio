export default {
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'stylist',
            title: 'Stylist',
            type: 'string',
          },

    ],
};