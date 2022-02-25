<template>
  <div>
    <h1>Counter Component: {{ value }}</h1>
    <div>
      <input type="number" :value="value" @input="$emit('input', $event.target.value)" />
      <button @click="$emit('increment')">Increment</button>
      <button @click="$emit('decrement')">Decrement</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['value'])
defineEmits(['input', 'increment', 'decrement'])

</script>

<style scoped>
</style>