<template>
  <div class="b-button" :class="[buttonSize,buttonType,buttonDisplay,buttonShape]" :style="[buttonRadius]">
    <div class="b-button-loading" v-if="isLoading">
      <!--      <div class="loading-css"></div>-->
      <svg viewBox="0 0 50 50" class="loading-svg" :class="[buttonSize,buttonType]">
        <circle cx="25" cy="25" r="20" fill="none" class="path" :style="{'stroke':loadingColor}"></circle>
      </svg>
    </div>
    <div class="b-button-slot" :class="isLoading?'b-button-slot-loading':''" @click="VueClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Lib from '../../../wrenches/Lib'

const ButtonType = {
  default: 'b-button-default',
  primary: 'b-button-primary',
  success: 'b-button-success',
  warning: 'b-button-warning',
  danger: 'b-button-danger',
  info: 'b-button-info',
  text: 'b-button-text',
}

const ButtonSize = {
  small: 'b-button-size-small', // 24
  middle: 'b-button-size-middle', // 32
  default: 'b-button-size-default', // 40
  large: 'b-button-size-large', // 48
  huge: 'b-button-size-huge', // 60
}

const ButtonShape = {
  default: '',
  circle: 'b-button-shape-circle',
  round: 'b-button-shape-round',
}

export default {
  name: 'BButton',
  inject: {
    widgetSize: {default: ''},
  },
  props: {
    delay: {
      type: [Number, String],
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.6)',
    },
    jump: {
      type: String,
      default: '',
    },
    asyncHandle: Function,
    type: String,
    size: String,
    block: Boolean,
    shape: [String, Number],
  },
  computed: {
    isLoading() {
      return this.loading || this.debounceRunning || this.handleLoading
    },
    buttonType() {
      return ButtonType[this.type] || ButtonType.primary
    },
    buttonSize() {
      return ButtonSize[this.size || this.widgetSize] || ButtonSize.default
    },
    buttonDisplay() {
      return this.block ? 'b-button-block' : ''
    },
    buttonRadius() {
      if (Lib.isNumber(this.shape)) {
        return {'border-radius': this.shape + 'px'}
      }
      return {}
    },
    buttonShape() {
      return ButtonShape[this.shape] || ButtonShape.default
    },
  },
  data() {
    return {
      debounceRunning: false,
      handleLoading: false,
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 按钮点击
     * @param event
     * @constructor
     */
    VueClick(event) {
      // Loading
      if (this.isLoading) {
        return
      }
      // Debounce
      this.debounce(() => {
        // 存在路由地址跳转
        if (this.jump) {
          this.routeJump(this.jump)
        } else {
          // 存在Handle处理函数
          if (typeof this.asyncHandle === 'function') {
            // 存在处理函数
            this.handleLoading = true
            // 执行函数
            const send = this.asyncHandle()
            if (send instanceof Promise) {
              // Promise finally
              send.finally((e) => {
                this.handleLoading = false
              })
            } else {
              this.handleLoading = false
            }
            this.$emit('click', send)
            return
          }
          this.$emit('click', event)
        }
      }, Number(this.delay))
    },
    routeJump(path, query = '') {
      this.$router.push({
        path: path,
        query: query,
      })
    },
    debounce(callback, delay) {
      if (!this.isLoading) {
        this.debounceRunning = true
        return new Promise(resolve => {
          resolve(callback())
          setTimeout(() => {
            this.debounceRunning = false
          }, delay)
        })
      }
    },
  },
}
</script>
