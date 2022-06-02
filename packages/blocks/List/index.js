import BList from './packages/BList'

BList.install = function(Vue) {
    Vue.component(BList.name, BList)
}

export default BList
