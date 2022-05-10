<template>
  <div id="app">
    {{ msg }}
    <i @click="change">change</i>
    <hr>
    <b-button @click="pro" :handle="handle" :delay="1000" size="small" shape="round">小按钮小按钮小按钮小按钮小按钮</b-button>
    <b-button @click="pro" :handle="sync1" :delay="1000" size="middle" shape="round">中等测试</b-button>
    <b-button @click="pro" :handle="sync1" :delay="1000" shape="round">默认测试</b-button>
    <b-button @click="pro" :handle="sync1" :delay="1000" size="large" shape="round">大按钮</b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small">Small</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle">Middle</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000">Default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" :shape="10">Large</b-button>
    <hr>
    <b-button :size="bSize" block>立即登录</b-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '按钮测试',
      loading: false,
      bSize: 'small'
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
    change() {
      this.bSize = this.bSize === 'small' ? 'large' : 'small'
    }
    ,
    lo() {
      // setTimeout(() => {
      //   this.loading = true
      // }, 5000)
    },
    handle() {
      const p = new Promise((resolve => {
        setTimeout(() => {
          resolve(1000)
        }, 3000)
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
      console.log('**********打印', await e)
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
