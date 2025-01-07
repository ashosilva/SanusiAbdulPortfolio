export default {
    name: "inquiry",
    title: "Inquiry",
    type: "document",
    fields: [
          {
            name: "socialType",
            title: "Social",
            type: "string",
            options: {
                list: [
                    { value: "instagram", title: "Instagram" },
                    { value: "tiktok", title: "TikTok" },

                ],
            },
        },
        {
          name: 'profileLink',
          title: 'Profile Link',
          type: 'string',
        },
    ],
};