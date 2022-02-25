<template>
  <div>
    <h1>Counter Component: {{ number }}</h1>
    <div>
      <input type="number" v-model="number" />
      <button v-on:click="increment">Increment</button>
      <button v-on:click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/composition-api";

/**
 * @type {number}
 */
const number = ref(0);

/**
 * @returns {void}
 */
function increment() {
  number.value++;
}

/**
 * @returns {void}
 */
function decrement() {
  number.value--;
}

</script>

<style scoped>
</style>