import { User } from "~~/utils/User"

export default defineNuxtPlugin(async (nuxtApp) => {
    const access_token = useCookie('auth.access_token');
    if (access_token.value) {
        try {
            const response = await $fetch('/auth/user');
            const user: User = response.data
            useState('user', () => user)
        } catch(error) {
            nuxtApp.callHook('logout:clearToken')
        }
    }
})
