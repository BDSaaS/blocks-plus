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
    <b-button @click="pro" :handle="handle" :delay="1000" size="small" shape="round">小按钮小按钮小按钮小按钮小按钮
    </b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="100000">Shape - default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="100000" shape="circle">Shape - circle</b-button>
    <b-button @click="pro" :handle="sync1" :delay="100000" shape="round">Shape - round</b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large">Default - primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" type="default">Default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" type="primary">Primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" type="success">Success</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" :shape="10" type="warning">Warning</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="large" type="danger">Danger</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="large" type="info">Info</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="large" type="text">Text</b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="3000">Default - primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" type="default">Default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" type="primary">Primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" type="success">Success</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" :shape="10" type="warning">Warning</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" type="danger">Danger</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" type="info">Info</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" type="text">Text</b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle">Default - primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle" type="default">Default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle" type="primary">Primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle" type="success">Success</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle" :shape="10" type="warning">Warning</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="middle" type="danger">Danger</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="middle" type="info">Info</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="middle" type="text">Text</b-button>
    <hr>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small">Default - primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small" type="default">Default</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small" type="primary">Primary</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small" type="success">Success</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small" :shape="10" type="warning">Warning</b-button>
    <b-button @click="pro" :handle="sync1" :delay="3000" size="small" type="danger">Danger</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="small" type="info">Info</b-button>
    <b-button @click="pro" :handle="sync1" :delay="30000" size="small" type="text">Text</b-button>
    <hr>
    <b-button :size="bSize" :delay="3000" block>立即登录</b-button>
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
      <b-form-item field="mobile" label="请输入手机号">
        <b-input v-model="loginForm.mobile" type="text" size="large" placeholder="请输入手机号" />
      </b-form-item>
      <b-form-item field="password" label="请输入密码">
        <b-input v-model="loginForm.password" type="password" size="middle" placeholder="请输入密码" />
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
    <b-layer :visible.sync="visible"></b-layer>
    <hr>
    <dz-input v-model="msg" />
    <hr>
    <p>展开状态：{{ visible2 }}</p>
    <p>selected：{{ selected }} selected2： {{ selected2 }}</p>
    <div style="display: flex; justify-content: space-around">
      <b-select
          v-model="selected"
          :options="options"
          @visible-change="getVisible"
      />
      <b-select v-model="selected2" @visible-change="getVisible">
        <b-option
            v-for="(item, index) of options"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
      </b-select>
    </div>
    <hr>
    <div style="height: 500px;"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import DzInput from '../packages/blocks/Select/packages/Input'

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
        mobile: [
          {email: true, anyOf: true, message: '请输入正确的手机号/邮箱', trigger: ['blur', 'input']},
          {phone: true, anyOf: true, message: '请输入正确的手机号/邮箱', trigger: ['blur', 'input']},
          {required: true, message: '手机号/邮箱不得为空', trigger: ['blur', 'input']},
          {max: 18, message: '邮箱长度不大于18位', trigger: ['blur', 'input']},
        ],
        password: [
          {required: true, message: '密码不得为空', trigger: ['blur', 'input']},
          {min: 6, message: '密码不少于6位', trigger: ['blur', 'input']},
        ],
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
      visible: false,
      visible2: false,
      selected: '1',
      selected2: '2',
      options: [
        {value: '1', label: '选项一'},
        {value: '2', label: '选项二'},
        {value: '3', label: '选项三'},
        {value: '4', label: '选项四'},
        {value: '5', label: '选项五'},
        {value: '6', label: '选项六'},
      ],
    }
  },
  watch: {
    checkbox(nv, ov) {
      console.log('*************', nv, ov)
    },
  },
  components: {
    DzInput,
    // HelloWorld
  },
  mounted() {
    const p = new Promise((resolve => {

    }))
    console.log(p)
  },
  methods: {
    getVisible(val) {
      this.visible2 = val
    },
    async login(formData) {
      this.$refs.login.validator(async (validate) => {
        if (validate) {
          // const res = await this.$command.use(LoginCommand).handle(formData.mobile, formData.password)
          // if (res.status) {
          //   this.$message.success('恭喜您，登录成功！')
          //   this.getUserInfo()
          //   this.closeLayer()
          // } else {
          //   this.$message.error(res.msg)
          // }
        }
      })

    },
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
