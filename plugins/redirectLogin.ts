export default defineNuxtPlugin(() => {
    return {
        provide: {
            redirectLogin: async () => {
                const config = useRuntimeConfig();
                const queryParams = new URLSearchParams({
                    redirect: window.location.href
                });
            
                return await navigateTo(config.public.loginUrl + 
                    `?${queryParams.toString()}`, 
                    {
                        redirectCode: 302,
                        external: true
                    }
                )
            }
        }
    }
})