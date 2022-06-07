<template>
  <div class="dz-select" @click.stop="showDropdown">
    <dz-input
        ref="input"
        v-model="label"
        readonly
        is-select
        @focus="focusHandler"
        @blur="blurHandler"
    >
      <template #suffix>
        <i class="iconfont icon-xiajiantou"></i>
      </template>
    </dz-input>
    <transition name="zoom-in-top">
      <div v-show="visible" class="dz-select-dropdown">
        <ul class="dz-select-dropdown-list">
          <template v-if="!$slots.default">
            <li
                v-for="(item, index) of $props.options"
                :key="index"
                :class="[
                item.value === $props.value && 'selected',
                'dz-select-option',
              ]"
                @click="selectHandler(item)"
            >
              {{ item.label }}
            </li>
          </template>
          <slot v-else></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import emitter from "../emitter";
import DzInput from "./Input";

export default {
  name: "BSelect",
  components: {DzInput},
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  provide() {
    return {
      selectHandler: this.selectHandler,
      selectedValue: this.value
    }
  },
  data() {
    return {
      label: '',
      visible: false,
    }
  },
  computed: {},
  watch: {
    visible(newVal) {
      this.$emit('visible-change', newVal)
      this.$refs.input.setRotate(newVal)
    }
  },
  created() {
    this.label = this.options.find((item) => item.value === this.value)?.label || ''
  },
  mounted() {
    document.addEventListener('click', this.hiddenDropdown)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hiddenDropdown)
  },
  methods: {
    hiddenDropdown() {
      this.visible = false
    },
    selectHandler(item) {
      this.label = item.label
      this.$emit('input', item.value)
      emitter.emit('getSelectedValue', item.value)
    },
    showDropdown() {
      this.visible = !this.visible
    },
    focusHandler(e) {
      this.$emit('focus', e)
    },
    blurHandler(e) {
      this.$emit('blur', e)
    }
  }
}
</script>

<style lang="less">
.dz-select {
  position: relative;
  display: inline-flex;
  width: 260px;

  .dz-input {
    width: 100%;

    .dz-input__inner {
      width: 100%;

      &.is-readonly {
        cursor: pointer;
        background: #fff;
      }
    }
  }

  &-dropdown {
    position: absolute;
    z-index: 1;
    left: 0;
    top: calc(100% + 8px);
    width: 100%;
    max-height: 224px;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0 8px 40px 0 rgba(100, 107, 122, 0.15);
    border-radius: 4px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar:horizontal {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #edf1f6;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      cursor: pointer;
      background-color: #d4e5fa;
    }

    &-list {
      margin: 0;
      padding: 20px 0;
      list-style: none;
      box-sizing: border-box;

      .dz-select-option {
        padding: 0 24px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          background: rgba(0, 86, 255, 0.03);
        }

        &.selected {
          background: rgba(0, 86, 255, 0.03);
          color: #0056ff;
        }
      }
    }
  }
}

/*========== animate ==========*/

//.slide-fade-active, .slide-fade-active {
//  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
//}
//
//.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//  opacity: 0;
//}

//.fade-enter-active, .fade-leave-active {
//  transition: opacity .5s;
//}
//.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//  opacity: 0;
//}

.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
  opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.zoom-in-top-enter,
.zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

</style>
