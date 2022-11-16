<template>
  <!-- 简单方式实现 -->
  <div class="b-input" :class="[inputSize]">
    <input autocomplete="off" :value="value" :type="inputType" :placeholder="placeholder" @input="inputHandle"
           @blur="blurHandle" :class="block?'b-input-block':''">
    <div v-if="showPasswordEye" class="__eye" @click="changePasswordView(!showPasswordText)">
      <i class="__open" v-if="showPasswordText"></i>
      <i class="__close" v-else></i>
    </div>
  </div>
</template>

<script>
import Validator from '../../../wrenches/Validator'

const Size = {
  small: 'b-input-small', // 24
  middle: 'b-input-middle', // 32
  default: 'b-input-default', // 40
  large: 'b-input-large', // 48
}

export default {
  name: 'BInput',
  props: {
    value: [String, Number],
    placeholder: String,
    type: String,
    size: String,
    options: {
      type: Object,
      default: () => {
        return {
          password: {
            showIcon: false,
            showText: false,
          },
        }
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  // ['rules', 'field']
  inject: {
    rules: { default: {} },
    field: { default: '' }
  },
  data() {
    return {
      showPasswordText: false,
    }
  },
  computed: {
    inputType() {
      return (this.type === 'password' && this.showPasswordText) ? 'text' : this.type
    },
    inputSize() {
      return Size[this.size] || Size.default
    },
    showPasswordEye() {
      // console.log('this.type === \'password\' && this.options.showIcon', this.type === 'password', this.options.showIcon)
      return this.type === 'password' && this.options.password.showIcon
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.showPasswordText = this.options.showText
      // console.log('options※', this.options, this.showPasswordEye)
    },
    inputHandle(e) {
      if (!this.rules) {
        return
      }
      setTimeout(() => {
        this.$emit('input', e.target.value)
        Validator.eventEmit(this.rules, this.field, e.target.value, 'input')
      }, 0)
    },
    blurHandle(e) {
      if (!this.rules) {
        return
      }
      setTimeout(() => {
        this.$emit('input', e.target.value)
        Validator.eventEmit(this.rules, this.field, e.target.value, 'blur')
      }, 0)
    },
    changePasswordView(status) {
      this.showPasswordText = status
    },
  },
}
</script>
