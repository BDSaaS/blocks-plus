import Vue from 'vue'
import App from './App.vue'
import BlocksPlus from 'blocks-plus'


Vue.config.productionTip = false
Vue.use(BlocksPlus)

new Vue({
    render: h => h(App),
}).$mount('#app')
