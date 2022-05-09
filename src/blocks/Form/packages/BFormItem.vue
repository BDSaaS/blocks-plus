<template>
    <div class='b-form-item'>
        <slot></slot>
        <div class='b-form-item-error' :class="eMsg?'error-show':'error-hide'">
            {{ eMessage }}
        </div>
    </div>
</template>

<script>
// Validator
import Validator from '../../../wrenches/Validator'

// block-view
export default {
    name: 'BFormItem',
    props: {
        // label 名称
        label: {
            type: String,
            default: '',
        },
        steps: {
            type: Array,
            default: () => {
                return []
            },
        },
        validator: Object,
        field: String,
    },
    provide() {
        return {
            rules: this.rules,
            field: this.field,
        }
    },
    inject: ['rules'],
    data() {
        return {
            eMsg: '',
            eMessage: '',
        }
    },
    watch: {
        eMsg(nv, ov) {
            if (nv !== ov) {
                setTimeout(() => {
                    this.eMessage = this.eMsg
                }, 300)
            }
        },
    },
    computed: {
        errorMsg() {
            return '错误提示'
        },
    },
    mounted() {
        // 绑定校验事件
        Validator.eventOn(this.rules, this.field, ({ error }) => {
            this.eMsg = error
        })
    },
    methods: {},
}
</script>

<style lang='scss' scoped>

@keyframes shake {
    0% {
        transform: translateY(-30px);
    }
    10% {
        transform: translateY(-25px);
    }
    20% {
        transform: translateY(-20px);
    }
    30% {
        transform: translateY(-15px);
    }
    40% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(-8px);
    }
    60% {
        transform: translateY(-5.5px);
    }
    70% {
        transform: translateY(-3.5px);
    }
    80% {
        transform: translateY(-2px);
    }
    90% {
        transform: translateY(-1px);
    }
    100% {
        transform: translateY(0px);
    }
}

//@keyframes shake {
//    0% {
//        transform: translateY(0px);
//    }
//    10% {
//        transform: translateY(5px);
//    }
//    20% {
//        transform: translateY(10px);
//    }
//    30% {
//        transform: translateY(5px);
//    }
//    40% {
//        transform: translateY(0px);
//    }
//    50% {
//        transform: translateY(5px);
//    }
//    60% {
//        transform: translateY(10px);
//    }
//    70% {
//        transform: translateY(5px);
//    }
//    80% {
//        transform: translateY(0px);
//    }
//    90% {
//        transform: translateY(10px);
//    }
//    100% {
//        transform: translateY(0px);
//    }
//}

.b-form-item {
    width: 424px;
    height: 60px;
    margin: 20px 0;
    position: relative;

    .b-form-item-error {
        user-select: none;
        position: absolute;
        bottom: -12px;
        right: 0;
        font-size: 12px;
        color: #F12525;
        background: #ffe7e7;
        padding: 0 6px;
        line-height: 23px;
        border-radius: 4px;

        &.error-show {
            opacity: 1;
            transition: opacity .5s;
            animation-name: shake;
            animation-duration: .5s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
        }

        &.error-hide {
            //display: none;
            opacity: 0;
            transition: opacity .5s;
        }
    }
}
</style>
