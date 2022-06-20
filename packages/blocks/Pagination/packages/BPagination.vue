<template>
  <div class="b-pagination">
    <div class="b-pagination-list">
      <ul>
        <li><em></em></li>
      </ul>
    </div>
  </div>
</template>

<script>

import Lib from '../../../wrenches/Lib'

export default {
  name: 'BPagination',
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    total: {
      type: [Number, String],
      default: 1,
    },
  },
  watch: {
    visible(nv, ov) {
      if (nv) {
        this.openLayer()
      }
    },
  },
  computed: {
    layerWidth() {
      if (Lib.isNumber(this.width)) {
        return `${this.width}px`
      } else if (Lib.isString(this.width)) {
        return this.width
      }
      return '520px'
    },
  },
  methods: {
    openLayer() {
      this.$emit('open')
    },
    closeLayer() {
      // console.log('关闭')
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    /**
     * 动画进入
     */
    afterEnter() {
      // console.log('进入')
      this.$emit('enter')
    },
    /**
     * 动画离开
     */
    afterLeave() {
      this.$emit('leave')
    },
  },
  mounted() {
    // console.log('-------', this.visible);
  },
}
</script>
