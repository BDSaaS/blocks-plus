<template>
  <div class="dz-input">
    <input
        ref="input"
        class="dz-input__inner error"
        placeholder="请输入"
        :type="type"
        :value="value"
        :class="inputClass"
        :readonly="readonly"
        :disabled="disabled"
        @input="changeHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        @keydown.enter="query"
    />
    <div :class="suffixClass" @click="query">
      <i v-if="isSearch" class="iconfont icon-icon-test"></i>
      <slot v-else name="suffix"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DzInput",
  props: {
    value: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    isError: {
      type: Boolean,
      default: false,
    },
    // 是否用在 Select 组件中
    isSelect: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
  },
  computed: {
    isSearch() {
      return this.type === 'search'
    },
    inputClass() {
      return [
        this.disabled && 'is-disabled',
        this.readonly && 'is-readonly',
        this.isError && 'is-error',
        this.isSearch && 'is-suffix',
        this.isSelect && 'is-select',
        this.$slots.suffix && 'is-suffix',
      ]
    },
    suffixClass() {
      return [
        'suffix',
        this.isSelect && 'no-event',
        this.hasRotate && 'rotate',
      ]
    }
  },
  data() {
    return {
      hasRotate: false
    }
  },
  methods: {
    changeHandler(e) {
      this.$emit('input', e.target.value)
    },
    focusHandler(e) {
      this.$emit('focus', e)
    },
    blurHandler(e) {
      this.$emit('blur', e)
      this.$emit('change', e)
    },
    query() {
      if (this.isSelect) {
        this.$refs.input && this.$refs.input.focus()
      } else {
        this.$emit('change', this)
      }
    },
    setRotate(value) {
      this.hasRotate = value
    },
  }
}
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_3204185_3xgowegymjk.css';

.dz-input {
  width: 260px;
  position: relative;
  display: inline-flex;

  .dz-input__inner {
    width: 260px;
    height: 40px;
    padding-left: 16px;
    padding-right: 15px;
    border-radius: 4px;
    border: 1px solid #E1E4E8;
    font-size: 14px;
    font-weight: 400;
    color: #242934;
    outline: none;
    box-sizing: border-box;
    transition: .3s ease-in;

    &:focus {
      border: 1px solid #0056FF;
    }

    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: #9CA6B9;
    }

    &.is-error {
      width: 260px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #F12525;
      color: #F12525;
    }

    &.is-disabled {
      background: rgba(245, 247, 251, 0.5);
      border: 1px solid #E1E4E8;
      cursor: not-allowed;
    }

    &.is-readonly {
      background: rgba(245, 247, 251, 0.5);
    }

    &.is-suffix {
      padding-right: 35px
    }
  }

  .suffix {
    display: grid;
    place-items: center;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    right: 12px;
    transform: translate3d(0, -50%, 0);
    font-size: 18px;
    transition: .3s ease-in-out;
    cursor: pointer;
    &.rotate {
      transform: translate3d(0, -50%, 0) rotate(180deg);
      transform-origin: center center;
    }
  }
}

//清除搜索框样式
input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

</style>
