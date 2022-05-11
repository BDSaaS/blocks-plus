<template>
  <div class="b-result">
    <div class="b-result-icon">
      <slot name="icon">
        <i class="success"></i>
      </slot>
    </div>
    <div class="b-result-name">{{ name }}</div>
    <div class="b-result-tips">{{ tips }}</div>
    <slot name="other"></slot>
  </div>
</template>

<script>
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
  },
  computed: {
    classStatus(active) {
      if (active <= this.active) {
        return active === this.active ? 'through now' : 'through'
      }
      return ''
    },
  },
  methods: {
    to(n) {
      this.$emit('to', n)
    },
  },
}
</script>
