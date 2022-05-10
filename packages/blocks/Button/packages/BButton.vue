<template>
  <div class="b-button" :class="[buttonSize,buttonDisplay,buttonShape]" :style="[buttonRadius]">
    <div class="b-button-loading" v-if="isLoading">
      <!--      <div class="loading-css"></div>-->
      <svg viewBox="0 0 50 50" class="loading-svg" :class="buttonSize">
        <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
    <div class="b-button-slot" :class="isLoading?'b-button-slot-loading':''" @click="VueClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Lib from "../../../wrenches/Lib"

const ButtonSize = {
  small: 'b-button-small', // 24
  middle: 'b-button-middle', // 32
  default: 'b-button-default', // 40
  large: 'b-button-large', // 48
}

const ButtonShape = {
  default: '',
  circle: 'b-button-shape-circle',
  round: 'b-button-shape-round'
}

export default {
  name: 'BButton',
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    jump: {
      type: String,
      default: '',
    },
    handle: Function,
    size: String,
    block: Boolean,
    shape: [String, Number]
  },
  computed: {
    isLoading() {
      return this.loading || this.debounceRunning || this.handleLoading
    },
    buttonSize() {
      return ButtonSize[this.size] || ButtonSize.default
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
    }
  },
  data() {
    return {
      debounceRunning: false,
      handleLoading: false
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
          if (typeof this.handle === 'function') {
            // 存在处理函数
            this.handleLoading = true
            // 执行函数
            const p = this.handle()
            if (p instanceof Promise) {
              // finally
              p.finally((e) => {
                this.handleLoading = false
              })
            } else {
              this.handleLoading = false
            }
            this.$emit('click', p)
            return
          }
          this.$emit('click', event)
        }
      }, this.delay)
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

<style lang="less">
// animate
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 95, 31;
    stroke-dashoffset: -31px;
  }

  to {
    stroke-dasharray: 6, 120;
    stroke-dashoffset: -120px;
  }
}

@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}

.b-button {
  border: none;
  outline: none;
  -webkit-appearance: none;
  // 去除button默认样式
  user-select: none;
  position: relative;
  display: inline-block;
  //width: 200px;
  //height: 60px;
  //line-height: 60px;
  text-align: center;
  background: #0056FF;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: all .4s;

  &.b-button-block {
    display: block;
    width: 100%;
  }

  &.b-button-shape-round {
    border-radius: 1000px;
  }

  & .b-button-slot {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    transition: opacity .4s;


    &.b-button-slot-loading {
      opacity: 0;
    }
  }

  &.b-button-small {
    //margin: 2px 4px;
    min-width: 40px;
    line-height: 24px;
    height: 24px;
    font-size: 12px;

    .b-button-slot {
      padding: 0 8px;
    }
  }

  &.b-button-middle {
    //margin: 2px 4px;
    min-width: 68px;
    line-height: 32px;
    height: 32px;
    font-size: 12px;

    .b-button-slot {
      padding: 0 10px;
    }
  }

  &.b-button-default {
    //margin: 2px 4px;
    min-width: 80px;
    line-height: 40px;
    height: 40px;
    font-size: 14px;

    .b-button-slot {
      padding: 0 12px;
    }
  }

  &.b-button-large {
    //margin: 2px 4px;
    min-width: 124px;
    line-height: 48px;
    height: 48px;
    font-size: 18px;

    .b-button-slot {
      padding: 0 14px;
    }
  }

  &:hover {
    background: #004DE5;
  }

  &:active {
    background: #0046D0;
  }

  .b-button-loading {
    cursor: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-svg {
      animation: loading-rotate 1.5s infinite ease-in-out;

      & > .path {
        stroke: rgba(255, 255, 255, 0.6);
        stroke-width: 5;
        animation: loading-dash 1.5s infinite ease-in-out;
      }

      &.b-button-small {
        width: 16px;
        height: 16px;
      }

      &.b-button-middle {
        width: 20px;
        height: 20px;
      }

      &.b-button-default {
        width: 24px;
        height: 24px;
      }

      &.b-button-large {
        width: 30px;
        height: 30px;

        //& > .path {
        //  stroke-width: 4;
        //}
      }
    }

    //.loading-css {
    //  box-sizing: border-box;
    //  width: 50px;
    //  height: 50px;
    //  display: inline-block;
    //  border: 5px solid #f3f3f3;
    //  border-top: 5px solid red;
    //  border-radius: 50%;
    //  /* 动画旋转效果 */
    //  animation: rotate-360 1s infinite linear;
    //  display: none;
    //}

    //@keyframes rotate-360 {
    //  0% {
    //    transform: rotate(0deg);
    //  }
    //  100% {
    //    transform: rotate(360deg);
    //  }
    //}
  }
}
</style>
