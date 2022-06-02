<template>
  <div id="app">
    {{ msg }}
    <b-notice></b-notice>
    <hr>
    <b-switch></b-switch>
    <hr>
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
      <b-checkbox v-model="checkbox">这里是Checkbox</b-checkbox>
    </div>
    <hr>
    <b-input type="text" v-model="bSize" placeholder="这里修改Button的大小"></b-input>
    <hr>
    <b-form ref="login" :formData="loginForm" :rules="loginValidatorRules">
      <b-form-item field="mobile">
        <b-input v-model="loginForm.mobile" type="text" placeholder="请输入手机号"/>
      </b-form-item>
      <b-form-item field="password">
        <b-input v-model="loginForm.password" type="password" placeholder="请输入密码"/>
      </b-form-item>
      <div class="forget-password">
        <i class="cursor-point not-copy" @click="layerStatus='forget_password'">忘记密码?</i>
      </div>
      <b-form-item>
        <b-button style="height: 60px;line-height: 60px" :delay="1000" size="large" @click="login(loginForm)"
                  block>登录
        </b-button>
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
      // 登录表单
      loginForm: {
        mobile: '',
        password: '',
      },
      // 登录验证器规则
      loginValidatorRules: {
        mobile: [{required: true, message: '手机不得为空'}, {phone: true, message: '请输入正确的手机号'}],
        password: [{required: true, message: '密码不得为空'}, {min: 6, message: '密码不少于6位'}],
      },
      checkbox: false,
      listData: [
        {name: '张三', age: 20, gender: '男', key: '1'},
        {name: '小红', age: 20, gender: '女', key: '2'},
        {name: '张三', age: 20, gender: '男', key: '3'},
      ],
      columns: [
        {title: '姓名', dataIndex: 'name'},
        {title: '年龄', dataIndex: 'age'},
        {title: '性别', dataIndex: 'gender'},
      ],
      selectedRowKeys: ['1'],
    }
  },
  watch: {
    checkbox(nv, ov) {
      console.log('*************', nv, ov)
    },
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
    },
  },
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
