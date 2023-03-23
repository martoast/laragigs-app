// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            cookieDomain: process.env.COOKIE_DOMAIN,
            loginUrl: process.env.LOGIN_URL
        }
    }
})
