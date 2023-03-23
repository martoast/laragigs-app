export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('logout:clearToken', async () => {
        const config = useRuntimeConfig();
        let expires_at = new Date();
        expires_at.setDate(expires_at.getDate() - 5);

        const expired_token = useCookie('auth.access_token', {
            maxAge: -1,
            expires: expires_at,
            domain: config.public.cookieDomain
        })
        expired_token.value = null

        await nuxtApp.$redirectLogin()
    })

    return {
        provide: {
            logout: async () => {
                const access_token = useCookie('auth.access_token');
                if (access_token.value) {
                    await $fetch('/auth/logout', {
                        method: 'post'
                    })

                    nuxtApp.callHook('logout:clearToken')
                }
            }
        }
    }
})