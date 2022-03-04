<template>
  <div>
    <h1 class="title">{{ msg }}</h1>
    <p>
      <a href="https://vuejs.org/v2/guide/" target="_blank"
        >Vue 2 Documentation</a
      >
      |
      <a href="https://pinia.vuejs.org/" target="_blank"
        >Pinia</a
      >
      |
       <a href="https://vitejs.dev/guide/features.html" target="_blank"
        >Vite Documentation</a
      >
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Hello Vue'
  }
})
</script>

<style scoped>
</style>
