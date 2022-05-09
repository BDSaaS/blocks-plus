// Components
import Button from './blocks/Button'
import Checkbox from './blocks/Checkbox'
import Form from './blocks/Form'
import FormItem from './blocks/FormItem'
import Input from './blocks/Input'
import Result from './blocks/Result'
import Steps from './blocks/Steps'

// Wrenches
import Lib from './wrenches/Lib'
import EventBus from './wrenches/EventBus'
import Validator from './wrenches/Validator'
import Tester from './wrenches/Validator/Tester'

// Blocks components
const blocks = { Button, Checkbox, Form, FormItem, Input, Result, Steps }

// Blocks wrenches
export {
    // ----------- Wrenches ----------- //
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
}

// Vue.prototype.use
export default { install }

// Blocks UI
export {
    // ----------- Components ----------- //
    Button,
    Checkbox,
    Form,
    FormItem,
    Input,
    Result,
    Steps,
}
