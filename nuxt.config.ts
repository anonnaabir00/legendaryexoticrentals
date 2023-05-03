// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
    css: ['@/assets/css/main.css'],
    app:{
        head: {
            script: [
                { src: 'https://code.jquery.com/jquery-1.12.4.min.js' },
            ]
        }
    },
    plugins: [
        { src: '~/assets/js/gtag.js', mode: 'client' },
    ]
})
