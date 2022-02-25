<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />

    <h1>App Component: {{ applicationNumber }}</h1>
    <button @click="applicationNumber+=10">Increment Ten From Parent Cmponent</button>
    <Counter v-model="applicationNumber" @increment="applicationNumber++" @decrement="applicationNumber--" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
export default {
  components: {
    HelloWorld,
    Counter
  },
  data() {
    return {
      applicationNumber: 10
    }
  }
};
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
