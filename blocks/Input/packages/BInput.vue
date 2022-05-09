<template>
    <!-- 简单方式实现 -->
    <div class="b-input">
        <input autocomplete="off" :value="value" :type="inputType" :placeholder="placeholder" @input="modelHandle"
               @blur="blurHandle">
        <div v-if="showPasswordEye" class="__eye" @click="changePasswordView(!showPasswordText)">
            <i class="__open" v-if="showPasswordText"></i>
            <i class="__close" v-else></i>
        </div>
    </div>
</template>

<script>
import Lib from '../../../wrenches/Lib'
import Validator from '../../../wrenches/Validator'

export default {
    name: 'BInput',
    props: {
        value: [String, Number],
        placeholder: String,
        type: String,
        options: {
            type: Object,
            default: () => {
                return {
                    password: {
                        showIcon: false,
                        showText: false,
                    },
                }
            },
        },
    },
    inject: ['rules', 'field'],
    data() {
        return {
            showPasswordText: false,
        }
    },
    computed: {
        inputType() {
            return (this.type === 'password' && this.showPasswordText) ? 'text' : this.type
        },
        showPasswordEye() {
            // console.log('this.type === \'password\' && this.options.showIcon', this.type === 'password', this.options.showIcon)
            return this.type === 'password' && this.options.password.showIcon
        },
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.showPasswordText = this.options.showText
            // console.log('options※', this.options, this.showPasswordEye)
        },
        modelHandle(e) {
            this.$emit('input', e.target.value)
            Validator.eventEmit(this.rules, this.field, e.target.value)
        },
        changePasswordView(status) {
            this.showPasswordText = status
        },
        blurHandle(e) {
            // Validator.eventEmit(this.rules, this.field, e.target.value)
        },
    },
}
</script>

<style lang="scss">
.b-input {
    position: relative;

    input {
        display: block;
        //width: 100%;
        //height: 100%;
        border: none;
        width: 424px;
        height: 60px;
        background: rgba(245, 247, 251, 0.6);
        font-family: Montserrat-SemiBold, "microsoft yahei ui", "microsoft yahei", PingFangSC-Light, "helvetica neue", "hiragino sans gb", arial, simsun, sans-serif;
        font-size: 20px;
        color: #242934;
        border-radius: 4px;
        text-indent: 24px;
        transition: background 1s;
        letter-spacing: 1px;
        //outline: none;

        &:hover, &:active {
            background: #F5F7FB;
        }

        &:active {
            outline: none;
        }

        &::-webkit-input-placeholder { /* WebKit browsers */
            color: #999;
            font-size: 16px;
            font-weight: 400;
        }

        &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #999;
            font-size: 16px;
            font-weight: 400;
        }

        &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #999;
            font-size: 16px;
            font-weight: 400;
        }
    }

    .__eye {
        position: absolute;
        top: 50%;
        right: 16px;
        margin-top: -12px;
        cursor: pointer;

        .__open {
            display: block;
            height: 24px;
            width: 24px;
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUNBNkI5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiA1YzMuMzYyIDAgNi40MzQgMS45NDYgOS4yMTUgNS44MzdhMiAyIDAgMCAxIDAgMi4zMjZsLS4yNTQuMzQ4QzE4LjI0NyAxNy4xNzEgMTUuMjYxIDE5IDEyIDE5Yy0zLjM2MiAwLTYuNDM0LTEuOTQ2LTkuMjE1LTUuODM3YTIgMiAwIDAgMSAwLTIuMzI2bC4yNTQtLjM0OEM1Ljc1MyA2LjgyOSA4LjczOSA1IDEyIDV6bTAgM2E0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6bTAgMS42YTIuNCAyLjQgMCAxIDEgMCA0LjggMi40IDIuNCAwIDAgMSAwLTQuOHoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PC9nPjwvc3ZnPg==") no-repeat center center;
            background-size: 24px 24px;
        }

        .__close {
            display: block;
            height: 24px;
            width: 24px;
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM5Q0E2QjkiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjAxOCA4LjAyM2M0LjQ3NCA0Ljk3IDEyLjEzIDUuMzc0IDE3LjEuOS4zMTYtLjI4NC42MTYtLjU4NC45LS45TTUuNTUzIDEwLjg4OWwtMi41MzUgMi45MjJNMTguOCAxMC42OTVsMi41NzcgMy4xMTZNMTAuMTIzIDEyLjQ4NGwtMS4yNjYgMy4xNDdNMTQuNzUxIDEyLjM3M2wxLjMxNiAzLjI1OCIvPjwvZz48L3N2Zz4=") no-repeat center center;
            background-size: 24px 24px;
        }
    }
}
</style>
