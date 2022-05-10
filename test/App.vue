<template>
  <div id="app">
    {{ msg }}
    <b-button @click="pro" :handle="sync1" :delay="1000">按钮测试</b-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '1234',
      loading: false
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    const p = new Promise((resolve => {

    }))
    console.log(p)
  },
  methods: {
    lo() {
      // setTimeout(() => {
      //   this.loading = true
      // }, 5000)
    },
    handle() {
      const p = new Promise((resolve => {
        setTimeout(() => {
          resolve(6)
        }, 5000)
      }))
      p.finally((e) => {
        console.log('XXXXXXXXX')
      }).finally(() => {
        console.log('YYYYYYYY')
        this.msg = '通知'
      })
      return p
    },
    async pro(e) {
      console.log('**********', await e)
    },
    sync1() {
      console.log(1)
      return 2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
