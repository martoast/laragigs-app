export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useUser().value;
    if (!user) {
        const { $redirectLogin } = useNuxtApp();
        return await $redirectLogin()
    }
})
