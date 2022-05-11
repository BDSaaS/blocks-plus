<template>
  <!-- 简单方式实现 -->
  <div class="b-input">
    <input autocomplete="off" :value="value" :type="inputType" :placeholder="placeholder" @input="modelHandle"
           @blur="blurHandle">
    <div v-if="showPasswordEye" class="__eye" @click="changePasswordView(!showPasswordText)">
      <i class="__open" v-if="showPasswordText"></i>
      <i class="__close" v-else></i>
    </div>
  </div>
</template>

<script>
import Validator from "../../../wrenches/Validator";

export default {
  name: 'BInput',
  props: {
    value: [String, Number],
    placeholder: String,
    type: String,
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
  },
  inject: ['rules', 'field'],
  data() {
    return {
      showPasswordText: false,
    }
  },
  computed: {
    inputType() {
      return (this.type === 'password' && this.showPasswordText) ? 'text' : this.type
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
    modelHandle(e) {
      this.$emit('input', e.target.value)
      Validator.eventEmit(this.rules, this.field, e.target.value)
    },
    changePasswordView(status) {
      this.showPasswordText = status
    },
    blurHandle(e) {
      // Validator.eventEmit(this.rules, this.field, e.target.value)
    },
  },
}
</script>
