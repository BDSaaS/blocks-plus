import Teleport from './packages/Teleport'

Teleport.install = function(Vue) {
    Vue.component(Teleport.name, Teleport)
}

export default Teleport
