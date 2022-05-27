<template>
  <div class="b-checkbox">
    <label :for="id">
      <i class="b-checkbox-icon checked" v-if="checked"></i>
      <i class="b-checkbox-icon un-checked" v-else></i>
      <span class="slot-box"><slot></slot></span>
      <input :id="id" type="checkbox"
             :checked="checked"
             @change="handleChange" aria-hidden="true">
    </label>
  </div>
</template>

<script>

export default {
  name: 'BCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      id: 'b-checkbox-input-',
    }
  },
  created() {
    this.createId()
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.checked)
    },
    createId() {
      this.id = 'b-checkbox-input-' + this.randStr(8)
    },
    randStr(strLen = 16, type) {
      // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
      const string = 'abcdefghijklmnopqrstuvwxyz'
      const number = '1234567890'
      let chars = `${string}${number}`
      if (type === 'string') {
        chars = string
      } else if (type === 'number') {
        chars = number
      }
      const maxNum = chars.length
      let str = ''
      for (let i = 0; i < strLen; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxNum))
      }
      return str
    },
  },
}
</script>
