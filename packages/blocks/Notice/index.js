import Component from './packages/BNotice'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
