import Vue from 'vue';
import App from './App.vue';
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)
Vue.use(Buefy)

const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
