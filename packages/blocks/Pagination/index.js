import Component from './packages/BPagination'

Component.install = function(Vue) {
    Vue.component(Component.name, Component)
}

export default Component
