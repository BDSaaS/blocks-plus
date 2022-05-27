<template>
  <form class="b-form">
    <slot></slot>
  </form>
</template>

<script>
import Validator from '../../../wrenches/Validator'
import Lib from '../../../wrenches/Lib'
// block-view
export default {
  name: 'BForm',
  props: {
    // 验证器
    rules: Object,
    // 验证数据
    formData: Object,
    // 配置文件
    labelWidth: [String, Number],
    labelDisplay: {
      type: Boolean,
      default: true,
    },
    labelPosition: String,
  },
  provide() {
    return {
      rules: this.rules,
      config: {
        labelWidth: this.configLabelWidth,
        labelDisplay: this.labelDisplay,
      },
    }
  },
  computed: {
    configLabelWidth() {
      if (Lib.isNumber(this.labelWidth)) {
        return `${this.labelWidth}px`
      } else if (Lib.isString(this.labelWidth)) {
        return this.labelWidth
      }
      return '50px'
    },
  }
  ,
  mounted() {
    // Register validator
    // if (this.rules) {
    //     Validator.register(this.rules)
    // }
  },
  methods: {
    // 校验方法
    validator(callback) {
      if (!Lib.isObject(this.rules) || !Lib.isObject(this.formData)) {
        console.warn('Rules and form data must be objects')
      } else {
        return Lib.isFunction(callback) ? Validator.validate(this.rules, this.formData, callback) : Validator.validate(
            this.rules, this.formData)
      }
    },
  },
}
</script>
