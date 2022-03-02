<template>
  <div class="container">
      <h1>Auth</h1>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" required v-model.trim="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>

  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'

const email = ref('')
const password = ref('')
const formIsValid = ref(true)

const submitForm = () => {
    formIsValid.value = true

    if (password.value.length < 6) {
        formIsValid.value = false
        return
    }

    alert('Ready to Submit')
    return
}
</script>

<style scoped>

</style>
