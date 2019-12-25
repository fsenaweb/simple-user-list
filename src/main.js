import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'

Vue.use(VueTheMask)
Vue.use(Vuelidate)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
