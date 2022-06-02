// Components
import Button from './blocks/Button'
import Checkbox from './blocks/Checkbox'
import Form from './blocks/Form'
import FormItem from './blocks/FormItem'
import Input from './blocks/Input'
import Layer from './blocks/Layer'
import List from './blocks/List'
import Notice from './blocks/Notice'
import Result from './blocks/Result'
import Steps from './blocks/Steps'
import Switch from './blocks/Switch'
import Teleport from './blocks/Teleport'

// Wrenches
import Lib from './wrenches/Lib'
import EventBus from './wrenches/EventBus'
import Validator from './wrenches/Validator'
import Tester from './wrenches/Validator/Tester'

// Css
import './theme/highlight.less'

// Package
import Package from '../package.json'

// Blocks components
export const blocks = {
  Button,
  Checkbox,
  Form,
  FormItem,
  Input,
  Layer,
  List,
  Notice,
  Result,
  Steps,
  Switch,
  Teleport,
}

// Blocks wrenches
const wrenches = {
  Lib,
  EventBus,
  Validator,
  Tester,
}

// Vue components install
function install(Vue) {
  const blocksKeys = Object.keys(blocks)
  blocksKeys.map((blockName) => {
    Vue.component(blocks[blockName].name, blocks[blockName])
  })
  console.log(
      `${'\n'} %c BDSaaS UI ${Package.version} %c npm i blocks-plus ${'\n'}`,
      'color: #fadfa3; background: #030307; padding:5px 0;border-radius:3px 0 0 3px;',
      'color:#000000;background: #ebd29a; padding:5px 0;border-radius:0 3px 3px 0;')
}

// Vue.prototype.use
export default {install}

// Blocks UI
// export const BlocksPlus = {
//   ...blocks,
//   ...wrenches,
// }

export {
  Button,
  Checkbox,
  Form,
  FormItem,
  Input,
  Layer,
  List,
  Notice,
  Result,
  Steps,
  Switch,
  Teleport,
}

export {
  Lib,
  EventBus,
  Validator,
  Tester,
}
