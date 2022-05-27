<template>
  <div class='b-form-item'>
    <div class="b-form-item-label" v-if="config.labelDisplay">{{ label }}{{
        config.labelWidth
      }}{{ config.labelDisplay }}
    </div>
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
    field: String,
  },
  provide() {
    return {
      rules: this.rules,
      field: this.field,
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
        }, 300)
      }
    },
  },
  computed: {
    errorMsg() {
      return '错误提示'
    },
  },
  mounted() {
    // 绑定校验事件
    Validator.eventOn(this.rules, this.field, ({error}) => {
      this.eMsg = error
    })
    setTimeout(() => {
      console.log('&&&&&&&&', this.config)
    }, 5000)
  },
  methods: {},
}
</script>
