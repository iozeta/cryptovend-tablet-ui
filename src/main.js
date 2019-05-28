import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import fullscreen from 'vue-fullscreen'
import './registerServiceWorker'

import start from './components/start.vue'
import invoice from './components/invoice.vue'
import thanks from './components/thanks.vue'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(fullscreen)

const routes = [
  { path: "/", component: start },
  { path: "/invoice", component: invoice },
  { path: "/thanks", component: thanks },
]

const router = new Router({
	routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
