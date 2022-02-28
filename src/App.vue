<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world-component msg="Hello Vue 2 + Vite" />

    <h1>App Component: {{ applicationNumber }}</h1>
    <button @click="applicationNumber+=10">Increment Ten From Parent Cmponent</button>
    <counter-component v-model="applicationNumber" />
  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import HelloWorldComponent from './components/HelloWorld.vue';
import CounterComponent from './components/Counter.vue';

const applicationNumber = ref(10)
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
