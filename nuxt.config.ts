// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
    css: ['@/assets/css/main.css'],
    plugins: [
        { src: '~/assets/js/gtag.js', mode: 'client' },
    ]
})
