<template>
    <div class="b-checkbox">
        <label :for="id">
            <i class="b-checkbox-icon checked" v-if="checked"></i>
            <i class="b-checkbox-icon un-checked" v-else></i>
            <span class="slot-box"><slot></slot></span>
            <input :id="id" type="checkbox" :value="value" @change="handleChange" aria-hidden="true">
        </label>
    </div>
</template>

<script>
import Lib from '../../../wrenches/Lib'

export default {
    name: 'BCheckbox',
    props: {
        delay: {
            type: Number,
            default: 100,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        value: Boolean,

    },
    computed: {
        isLoading() {
            return this.loading || this.debounceRunning
        },
    },
    watch: {
        value(nv, ov) {
            console.log('~~', nv, ov)
            this.checked = nv
        },
    },
    data() {
        return {
            debounceRunning: false,
            id: 'b-checkbox-input-',
            checked: false,
        }
    },
    created() {
        this.createId()
        this.createStatus()
    },
    methods: {
        /**
         * 按钮点击
         * @param event
         * @constructor
         */
        VueClick(event) {
            // this.debounce(() => {
            //     this.$emit('click', event)
            // }, this.delay)
        },
        debounce(callback, delay) {
            if (!this.isLoading) {
                this.debounceRunning = true
                return new Promise(resolve => {
                    resolve(callback())
                    setTimeout(() => {
                        this.debounceRunning = false
                    }, delay)
                })
            }
        },
        handleChange(e) {
            // console.log(e.target.checked)
            this.$emit('change', e.target.checked)
            this.checked = e.target.checked
        },
        createId() {
            this.id = 'b-checkbox-input-' + this.randStr(8)
        },
        createStatus() {
            this.checked = this.value
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

<style lang="scss">
.b-checkbox {
    user-select: none;
    position: absolute;
    left: 0;
    line-height: 20px;
    cursor: pointer;

    input {
        display: none;
    }

    .b-checkbox-icon {
        display: inline-block;
        height: 16px;
        width: 16px;
        vertical-align: middle;
        cursor: pointer;

        &.checked {
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggZD0iTTEwLjI1NiAwaDQ5OS40ODhjMy41NjcgMCA0Ljg2LjM3MSA2LjE2MyAxLjA2OWE3LjI3IDcuMjcgMCAwIDEgMy4wMjQgMy4wMjRDNTE5LjYzIDUuMzk2IDUyMCA2LjY4OSA1MjAgMTAuMjU2djQ2Ny40ODhjMCAzLjU2Ny0uMzcxIDQuODYtMS4wNjkgNi4xNjNhNy4yNyA3LjI3IDAgMCAxLTMuMDI0IDMuMDI0Yy0xLjMwMy42OTgtMi41OTYgMS4wNjktNi4xNjMgMS4wNjlIMTAuMjU2Yy0zLjU2NyAwLTQuODYtLjM3MS02LjE2My0xLjA2OWE3LjI3IDcuMjcgMCAwIDEtMy4wMjQtMy4wMjRDLjM3IDQ4Mi42MDQgMCA0ODEuMzExIDAgNDc3Ljc0NFYxMC4yNTZjMC0zLjU2Ny4zNzEtNC44NiAxLjA2OS02LjE2M2E3LjI3IDcuMjcgMCAwIDEgMy4wMjQtMy4wMjRDNS4zOTYuMzcgNi42ODkgMCAxMC4yNTYgMHoiIGlkPSJiIi8+PGZpbHRlciB4PSItMTUuNCUiIHk9Ii0xNC4zJSIgd2lkdGg9IjEzMC44JSIgaGVpZ2h0PSIxMzIuOCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMTAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMzkwMTk4MTk1IDAgMCAwIDAgMC40MTg5MTcwNDggMCAwIDAgMCAwLjQ3ODE3NTk1MSAwIDAgMCAwLjEgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNLTg5MC01ODBoMjIwM1Y1MDBILTg5MHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDggLTMyMCkiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGc+PHJlY3QgZmlsbD0iIzAwNTZGRiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Ik00LjA0NCA3LjI2NWwyLjk1MiAyLjkyNCA1LjA0OC01Ii8+PC9nPjwvZz48L3N2Zz4=") no-repeat center center;
            background-size: 100%;
        }

        &.un-checked {
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggZD0iTTEwLjI1NiAwaDQ5OS40ODhjMy41NjcgMCA0Ljg2LjM3MSA2LjE2MyAxLjA2OWE3LjI3IDcuMjcgMCAwIDEgMy4wMjQgMy4wMjRDNTE5LjYzIDUuMzk2IDUyMCA2LjY4OSA1MjAgMTAuMjU2djQ2Ny40ODhjMCAzLjU2Ny0uMzcxIDQuODYtMS4wNjkgNi4xNjNhNy4yNyA3LjI3IDAgMCAxLTMuMDI0IDMuMDI0Yy0xLjMwMy42OTgtMi41OTYgMS4wNjktNi4xNjMgMS4wNjlIMTAuMjU2Yy0zLjU2NyAwLTQuODYtLjM3MS02LjE2My0xLjA2OWE3LjI3IDcuMjcgMCAwIDEtMy4wMjQtMy4wMjRDLjM3IDQ4Mi42MDQgMCA0ODEuMzExIDAgNDc3Ljc0NFYxMC4yNTZjMC0zLjU2Ny4zNzEtNC44NiAxLjA2OS02LjE2M2E3LjI3IDcuMjcgMCAwIDEgMy4wMjQtMy4wMjRDNS4zOTYuMzcgNi42ODkgMCAxMC4yNTYgMHoiIGlkPSJiIi8+PGZpbHRlciB4PSItMTUuNCUiIHk9Ii0xNC4zJSIgd2lkdGg9IjEzMC44JSIgaGVpZ2h0PSIxMzIuOCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMTAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMzkwMTk4MTk1IDAgMCAwIDAgMC40MTg5MTcwNDggMCAwIDAgMCAwLjQ3ODE3NTk1MSAwIDAgMCAwLjEgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRjVGN0ZCIiBkPSJNLTkzOC01NDZIOTgyVjUzNEgtOTM4eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0tOTM4LTU0Nkg5ODJWNTM0SC05Mzh6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ4IC0yOTYpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxyZWN0IHg9Ii41IiB5PSIuNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiByeD0iMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjOUNBNkI5Ii8+PC9nPjwvc3ZnPg==") no-repeat center center;
            background-size: 100%;
        }
    }

    .slot-box {
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;
        font-size: 14px;
        font-weight: 400;
        color: #646B7A;
        line-height: 14px;
    }
}
</style>
