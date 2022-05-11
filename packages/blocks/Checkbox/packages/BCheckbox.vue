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
