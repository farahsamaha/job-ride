import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueAos from 'vue-aos'
import 'animate.css'
import { ValidationProvider } from 'vee-validate'

Vue.use(VueAos)
Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
