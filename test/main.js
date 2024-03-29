import Vue from 'vue'
import App from './App.vue'
import BlocksPlus from '../packages'
// import '../lib/blocks-plus.css'
// import BlocksPlus from 'blocks-plus'
// import 'blocks-plus/lib/blocks-plus.css'


Vue.config.productionTip = false
Vue.use(BlocksPlus)

new Vue({
    render: h => h(App),
}).$mount('#app')
