<template>
  <div class='b-form-item'>
    <slot></slot>
    <div class='b-form-item-error' :class="eMsg?'error-show':'error-hide'">
      {{ eMessage }}
    </div>
  </div>
</template>

<script>
// Validator
import Validator from '../../../wrenches/Validator'

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
  inject: ['rules'],
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
  },
  methods: {},
}
</script>
