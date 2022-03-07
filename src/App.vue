<template>
  <div id="app" class="container mt-5">
    <nav class="level">
      <p class="level-item has-text-centered">
        <router-link to="/">Home</router-link>
      </p>
      <p class="level-item has-text-centered">
        <router-link to="/test">Test API</router-link>
      </p>
       <p class="level-item has-text-centered">
        <router-link to="/tasks">Tasks</router-link>
      </p>
      <p v-if="!authStore.isLoggedIn" class="level-item has-text-centered">
        <router-link to="/login">Login</router-link>
      </p>
    </nav>

    <section>
      <router-view></router-view>
    </section>

    <section v-if="authStore.isLoggedIn" class="mt-5">
      <p>
        <b-button native-type="button" class="is-danger" @click="logout">Logout - {{ authStore.userId }} </b-button>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from '@/hooks/vueRouter'
const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.userLogoutAction()
  router.go()
}
</script>

<style>
</style>
