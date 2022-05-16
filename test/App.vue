<template>
  <div id="app">
    {{ msg }}
    <i @click="change">change</i>
    <hr>
    <b-button delay="400"></b-button>
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
    <hr>
    <b-steps :steps="[1,2,3,4]"></b-steps>
    <hr>
    <b-result name="Result提示" tips="这个部分是提示语展示的地方，请耐心使用！">
      <template slot="other">
        123456
      </template>
    </b-result>
    <hr>
    <div>
      <b-checkbox>这里是Checkbox</b-checkbox>
    </div>
    <hr>
    <b-input type="text" v-model="bSize" placeholder="这里修改Button的大小"></b-input>
    <hr>
    <b-form style="margin: 0 auto" ref="reg2" :rules="reg2ValidatorRules"
            :formData="reg2Form"
    >
      <b-form-item field="username">
        <b-input v-model="reg2Form.username" type="text" placeholder="请输入真实姓名"/>
      </b-form-item>
      <b-form-item field="password">
        <b-input v-model="reg2Form.password" type="password" placeholder="请设置您的密码"
                 :options="inputOptions"
        />
      </b-form-item>
      <b-form-item field="rePassword">
        <b-input v-model="reg2Form.rePassword" type="password" placeholder="再次确认您的密码"
                 :options="inputOptions"
        />
      </b-form-item>
      <b-form-item>
        <b-button size="large" :delay="2000" block>登录</b-button>
      </b-form-item>
    </b-form>
    <hr>
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
      bSize: 'small',
      inputOptions: {
        password: {
          showIcon: true,
        },
      },
      reg2Form: {
        username: '',
        password: '',
        rePassword: '',
      },
      // 重置密码验证器规则
      reg2ValidatorRules: {
        username: [{required: true, message: '姓名不得为空'}, {min: 2, message: '姓名不小于2位'}],
        password: [{required: true, message: '密码不得为空'}, {min: 6, message: '密码长度不小于6位'}],
        rePassword: [{required: true, message: '确认密码不得为空'}, {min: 6, message: '确认密码长度不小于6位'}],
      },
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
