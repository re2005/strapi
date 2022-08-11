module.exports = [
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: '*',
            origin: [
              'http://localhost:1337', 'http://localhost:3000', 'https://nuxt-strapi.vercel.app', 'https://estrapi.herokuapp.com',
              '*gitbook.io'
            ]
        }
    },
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ['\'self\'', 'https:'],
                    'img-src': ['\'self\'', 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com', '*gitbook.io'],
                    'media-src': ['\'self\'', 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com', '*gitbook.io'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    }
];
