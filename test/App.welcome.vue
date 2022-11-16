<template>
  <div class="container not-copy">
    <div class="container-box">
      <div class="toast" :class="showToast?'show-toast':''">
        <span>数企版本正在更新中，给您带来不便，敬请谅解！💞💞💞</span>
      </div>
      <div class="logo"></div>
      <div class="notice">
        <p class="big-text">哼几句心爱的歌~</p>
        <p class="small-text">刷新一下我就回来了</p>
      </div>
      <div class="tips ">
        请耐心等待不要着急，马上回来，给您带来不便，敬请谅解！
      </div>
      <div class="refresh">
        <b-button class="refresh-btn" :delay="3000" size="default" @click="check" loading-color="#0056FF">刷新</b-button>
      </div>
      <div class="official clear-text">
        <a href="https://www.bdsaas.com/?redirect" target="_self">
          <span>前往官网</span>
          <i></i>
        </a>
      </div>
      <div class="player">
        <img src="./static/player.png" alt="HT">
      </div>
      <div class="copyright">
        Copyright ©2013-2022 深圳市八度云计算信息技术有限公司版权所有
        <span class="icp">
          粤ICP备2021112291号
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showToastTimeout: null,
      showToast: false,
    }
  },
  watch: {},
  components: {},
  mounted() {
    setTimeout(()=>{
      clearTimeout(this.showToastTimeout)
      this.showToast = true
      this.showToastTimeout = setTimeout(() => {
        this.showToast = false
      }, 5000)
    },400)
  },
  methods: {
    check() {
      window.location.href = '/?hash='+Math.random()
    },
  },
}
</script>
<style>
/* 对a标签不做处理 */

* {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Light, microsoft yahei ui, microsoft yahei, helvetica neue, hiragino sans gb, arial, simsun, sans-serif;
}

html {
  /*overflow-y: hidden !important;*/
}

body {
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #333;
  min-width: 1280px;
  background: #FFFFFF;
}

a {
  text-decoration: none;
  color: #333;
}

ul {
  list-style: none;
}

.display-none {
  display: none !important;
}

input,
button,
select,
textarea {
  background: none;
  -webkit-appearance: none;
  /*去除input默认样式*/
  outline: none;
  /*去除边框*/
  border: 0;
}

::-webkit-input-placeholder {
  color: #888888;
}

::-moz-input-placeholder {
  color: #888888;
}

::-ms-input-placeholder {
  color: #888888;
}

textarea {
  resize: none;
  /*不可拖拽*/
}

input:focus {
  /*去除蓝色边框*/
  outline: none;
}

em,
i {
  font-style: normal;
}

img {
  border: 0;
}


/*浏览器滚动条*/

::-webkit-scrollbar {
  width: 1px;
  height: 6px;
}

::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}

::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}

::-webkit-scrollbar-thumb {
  background: #9ca6b9;
}


/*::selection {
	background: #f6c755;
	color: #231815;
}

::-moz-selection {
	background: #f6c755;
	color: #231815;
}

::-webkit-selection {
	background: #f6c755;
	color: #231815;
}

html {
	-webkit-tap-highlight-color: rgba(240, 240, 240, 0.7);
}*/

/* 网站标准内容宽度 */

.web-width {
  width: 1300px;
  margin: 0 auto;
}

.web-min-width {
  min-width: 1300px;
}

.box {
  overflow: hidden;
}

/* 网站标准色 */

.bgc {
  /* background: #fed802 !important; */
  /* background: #ffe60f !important; */
  background: #ffd93d !important;
}

.clearfix:after,
.clearfix:before {
  display: block;
  clear: both;
  content: "\200B";
  height: 0;
}

.cursor-point {
  cursor: pointer;
}

.ofh {
  overflow: hidden;
}

.hidden {
  display: none;
}

.show {
  display: block;
}

.not-copy {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.clear-text {
  transform: skewx(-0.1deg);
}
</style>
<style lang="less" scoped>


.container-box {
  width: 1300px;
  height: 1200px;
  margin: 0 auto;
  position: relative;


  .logo {
    width: 218px;
    height: 38px;
    background: url("data:image/png;base64,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") no-repeat center center;
    background-size: 100%;
    position: absolute;
    top: 50px;
    left: 0;
  }

  .notice {
    color: #242934;
    position: absolute;
    top: 283px;
    left: 0;

    .big-text {
      font-size: 65px;
      font-weight: 600;
    }

    .small-text {
      font-size: 56px;
      font-weight: 600;
    }
  }

  .tips {
    color: #9CA6B9;
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    top: 493px;
    left: 0;
  }

  .refresh {
    position: absolute;
    top: 739px;
    left: 0;

    .refresh-btn {
      border: 1px solid #0056FF;
      background: #FFFFFF;
      color: #0056FF;
      font-size: 20px;
      font-weight: 400;
      line-height: 58px;
      height: 58px;
      width: 115px;
    }
  }

  .official {
    position: absolute;
    top: 58px;
    right: 0;

    span {
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      color: #9CA6B9;
      line-height: 22px;
      vertical-align: middle;
    }

    i {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0iYXV0byIgaWQ9ImEiPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VHcmFwaGljIiB2YWx1ZXM9IjAgMCAwIDAgMC42MTI4MTcgMCAwIDAgMCAwLjY0OTU4NyAwIDAgMCAwIDAuNzI1NDU5IDAgMCAwIDEuMDAwMDAwIDAiLz48L2ZpbHRlcj48L2RlZnM+PHBhdGggc3Ryb2tlPSIjMDA1NkZGIiBzdHJva2Utd2lkdGg9IjEuMiIgZD0iTTYuNzUgMy41bDYgNi02IDYiIGZpbHRlcj0idXJsKCNhKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+") no-repeat center center;
      background-size: auto;
      line-height: 22px;
      vertical-align: middle;
    }
  }

  .player {
    position: absolute;
    top: 252px;
    right: 0;
  }

  .toast {
    position: fixed;
    z-index: 1;
    top: -100px;
    left: 0;
    right: 0;
    min-width: 800px;
    text-align: center;
    line-height: 48px;
    background: #0056ff;
    font-size: 16px;
    color: #FFFFFF;
    //border-radius: 8px;
    box-shadow: 1px 1px 11px #eaf1ff;
    opacity: 0;
    transition: top .5s ease-in-out, opacity .5s ease-in-out;

    &.show-toast {
      top: 0;
      opacity: 1;
      transition: top .9s ease-in-out, opacity .9s ease-in-out;
    }

    span {
    }
  }

  .copyright {
    font-size: 14px;
    color: #9ca6b9;
    font-weight: 400;
    line-height: 14px;
    position: absolute;
    bottom: 58px;
    left: 0;
    right: 0;

    .icp {
      float: right;
    }
  }
}
</style>
