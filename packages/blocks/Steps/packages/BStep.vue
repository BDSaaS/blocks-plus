<template>
  <div class="b-step">
    <div v-for="(item,index) in steps" :key="index" class="line-box">
      <div class="line" :class="(active >= index + 1)?'through':''"/>
      <div class="item" :class="(active >= index + 1)?'through' + ' ' + ((active===index+1?'now':'')):''">
        <i v-if="active <= index + 1">{{ index + 1 }}</i>
        <div class="success-icon" @click="to(index+1)" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BSteps',
  props: {
    // 进度
    active: {
      type: Number,
      default: 3,
    },
    steps: {
      type: Array,
      default: () => {
        return []
      },
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
