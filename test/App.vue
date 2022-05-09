<template>
  <div id="app">
    <b-button @click="lo" :delay="2000" :loading="loading">123</b-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      loading: false
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    lo() {
      setTimeout(() => {
        this.loading = true
      }, 5000)
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
