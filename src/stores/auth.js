import { defineStore } from 'pinia'
import { ref, computed } from '@vue/composition-api'
import authService from '@/service/auth'

export const useAuthStore = defineStore('auth', () => {
    /** State */
    let userId = ref(null)
    let token = ref(null)

    /** Getters aka Computed Propoerties */
    const isLoggedIn = computed(() => (!!token.value))

    /** Actions */
    const userLoginAction = (credentials) => {
        return authService.loginService(credentials)
    }
    const userLogoutAction = () => {
        userId = null
        token = null
    }

    return {
        userId,
        token,
        isLoggedIn,

        userLoginAction,
        userLogoutAction
    }
})
