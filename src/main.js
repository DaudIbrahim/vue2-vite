import Vue from 'vue';
import App from './App.vue';
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount('#app');
