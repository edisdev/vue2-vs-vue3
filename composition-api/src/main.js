import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/app.css'

import Goals from '@/components/Goals.vue'

const app = createApp(App)

app.component('Goals', Goals)

app.mount('#app')
