<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Hello Vue 2 + Pinia + Vite" />

    <h1>App Component: {{ counter.count }}</h1>
  
    <button @click="counter.incrementCount(10)">Increment Ten From App Cmponent</button>
    <button @click="counter.$reset()">Reset State</button>
    <button @click="counter.emptyCount()">Empty</button>
  
    <counter v-model="counter.count" />
  </div>
</template>

<script setup>
import { useCounterStore } from './stores/counter'
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';

const counter = useCounterStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
