<template>
  <div class="b-result">
    <div class="b-result-icon">
      <slot name="icon">
        <i :class="resultIcon">icon</i>
      </slot>
    </div>
    <div class="b-result-name">{{ name }}</div>
    <div class="b-result-tips">{{ tips }}</div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
const ResultIcon = {
  success: 'success',
  default: 'success'
}
export default {
  name: 'BResult',
  props: {
    // 名称
    name: {
      type: String,
      default: '温馨提示',
    },
    // 提示语
    tips: {
      type: String,
      default: '',
    },
    icon: String
  },
  computed: {
    resultIcon() {
      return ResultIcon[this.icon] || ResultIcon.default
    }
  },
  methods: {
    to(n) {
      this.$emit('to', n)
    },
  },
}
</script>
