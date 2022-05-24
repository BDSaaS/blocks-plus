<template>
  <transition
      name="b-layer-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
    <div class="b-layer" @click.self="closeLayer" v-show="visible">
      <div class="b-layer-box">
        <div class="b-layer-btn-close" @click="closeLayer"></div>
        <div class="b-layer-box-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BLayer',
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(nv, ov) {
      // console.log('watch-visible', nv, ov);
      if (nv !== ov) {
        // console.log(nv, ov);
      }
    },
  },
  methods: {
    openLayer() {
      console.log('开启')
    },
    closeLayer() {
      console.log('关闭')
      this.$emit('update:visible', false)
    },
    afterEnter() {
      console.log('进入')
    },
    afterLeave() {
      console.log('离开')
    },
  },
  mounted() {
    // console.log('-------', this.visible);
  },
}
</script>
