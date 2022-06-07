<template>
  <li
      :class="[$props.value === selectedValueInner && 'selected', 'dz-select-option']"
      @click="clickHandler"
  >
    {{ $props.label }}
  </li>
</template>

<script>
import emitter from "../emitter";

export default {
  name: "BOption",
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  inject: ['selectHandler', 'selectedValue'],
  data() {
    return {
      selectedValueInner: ''
    }
  },
  created() {
    this.selectedValue === this.value && this.clickHandler()
    this.selectedValueInner = this.selectedValue
    emitter.on('getSelectedValue', (value) => {
      this.selectedValueInner = value
    })
  },
  methods: {
    clickHandler() {
      this.selectHandler({
        label: this.label,
        value: this.value,
      })
    }
  }
}
</script>
