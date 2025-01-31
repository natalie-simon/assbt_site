import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import App from './App.vue'
import router from './router'
import DialogService from 'primevue/dialogservice'
import DynamicDialog from 'primevue/dynamicdialog'

/**
 * L'application en elle même
 */
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(DialogService)
app.component('DynamicDialog', DynamicDialog)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.mount('#app')
