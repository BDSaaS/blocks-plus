<template>
    <form class="b-form">
        <slot></slot>
    </form>
</template>

<script>
import Validator from '../../../packages/wrenches/Validator'
import Lib from '../../../packages/wrenches/Lib'
// block-view
export default {
    name: 'BForm',
    props: {
        // 验证器
        rules: Object,
        // 验证数据
        formData: Object
    },
    provide() {
        return {
            rules: this.rules

        }
    },
    mounted() {
        // Register validator
        // if (this.rules) {
        //     Validator.register(this.rules)
        // }
    },
    methods: {
        // 校验方法
        validator(callback) {
            if (!Lib.isObject(this.rules) || !Lib.isObject(this.formData)) {
                console.warn('Rules and form data must be objects')
            } else {
                return Lib.isFunction(callback) ? Validator.validate(this.rules, this.formData, callback) : Validator.validate(this.rules, this.formData)
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
