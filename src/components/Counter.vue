<template>
  <div>
    <h1>Counter Component: {{ value }}</h1>
    <div>
      <input type="number" :value="value" @input="$emit('input', $event.target.value)" />
      <button @click="increment(value)">Increment</button>
      <button @click="decrement(value)">Decrement</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['input'])

/**
 * @param {number} num
 */
const increment = (num) => {
  emit('input', ++num)
}

/**
 * @param {number} num
 */
const decrement = (num) => {
  emit('input', --num)
}

</script>

<style scoped>
</style>