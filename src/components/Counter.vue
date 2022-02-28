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
    required: true,
    default: 0
  }
})

const emit = defineEmits(['input'])

/**
 * @param {number}  num
 * @returns {void}
 */
const increment = (num) => {
  emit('input', ++num)
}

/**
 * @param {number}  num
 * @returns {void}
 */
const decrement = (num) => {
  emit('input', --num)
}

</script>

<style scoped>
</style>