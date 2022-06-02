<template>
  <transition
      name="b-layer-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
    <div class="b-notice" @click.self="closeLayer" v-show="visible">
      <div class="b-layer-box" :style="[{width:layerWidth}]">
        <div class="b-layer-btn-close" @click="closeLayer"></div>
        <div class="b-layer-box-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import Lib from '../../../wrenches/Lib'

export default {
  name: 'BNotice',
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    width: [Number, String],
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
