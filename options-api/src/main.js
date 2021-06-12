import Vue from 'vue'
import App from './App.vue'

import '@/assets/app.css'

import Goals from '@/components/Goals.vue'

Vue.config.productionTip = false


Vue.component('Goals', Goals)

new Vue({
  render: h => h(App),
}).$mount('#app')
