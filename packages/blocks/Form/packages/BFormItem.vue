<template>
  <div class='b-form-item'>
    <div class="b-form-item-label" v-if="config.labelDisplay">{{ label }}</div>
    <div class="b-form-item-slot">
      <slot></slot>
    </div>
    <div class='b-form-item-error b-form-item-label-left' :class="eMsg?'error-show':'error-hide'">
      {{ eMessage }}
    </div>
  </div>
</template>

<script>
// Validator
import Validator from '../../../wrenches/Validator'
import Lib from '../../../wrenches/Lib'

// block-view
export default {
  name: 'BFormItem',
  props: {
    // label 名称
    label: {
      type: String,
      default: '',
    },
    steps: {
      type: Array,
      default: () => {
        return []
      },
    },
    validator: Object,
    field: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      rules: this.rules,
      field: this.field,
      widgetSize: this.config.size ?? '',
    }
  },
  inject: ['rules', 'config'],
  data() {
    return {
      eMsg: '',
      eMessage: '',
    }
  },
  watch: {
    eMsg(nv, ov) {
      if (nv !== ov) {
        setTimeout(() => {
          this.eMessage = this.eMsg
        }, 200)
      }
    },
  },
  computed: {
    errorMsg() {
      return '错误提示'
    },
  },
  mounted() {
    this.validatorOn()
  },
  methods: {
    validatorOn() {
      // 绑定校验事件
      Validator.eventOn(this.rules, this.field, ({error}) => {
        this.eMsg = error
      })
    },
  },
}
</script>
