export default defineNuxtPlugin((nuxtApp) => {
    const access_token = useCookie('auth.access_token');
    const config = useRuntimeConfig();

    const globalOptions = {
        baseURL: config.public.apiUrl,
        headers: {
            'Accept': 'application/json',
            'Authorization': access_token?.value 
        },
    };
    
    globalThis.$fetch = $fetch.create({...globalOptions});
})
