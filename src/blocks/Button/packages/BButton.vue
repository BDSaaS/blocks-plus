<template>
    <div class="b-button" @click="VueClick">
        <div class="b-button-loading" v-if="isLoading">
            <div class="loading-css"></div>
            <svg viewBox="0 0 50 50" class="loading-svg">
                <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
            </svg>
        </div>
        <slot v-else></slot>
    </div>
</template>

<script>
import Lib from '../../../wrenches/Lib'

export default {
    name: 'BButton',
    props: {
        delay: {
            type: Number,
            default: 0,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        jump: {
            type: String,
            default: '',
        },
    },
    computed: {
        isLoading() {
            return this.loading || this.debounceRunning
        },
    },
    data() {
        return {
            debounceRunning: false,
        }
    },
    mounted() {

    },
    methods: {
        /**
         * 按钮点击
         * @param event
         * @constructor
         */
        VueClick(event) {
            this.debounce(() => {
                // 存在跳转地址
                if (this.jump) {
                    this.$router.push({
                        path: this.jump,
                        query: '',
                    })
                } else {
                    this.$emit('click', event)
                }
            }, this.delay)
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
    },
}
</script>

<style lang="scss">
.b-button {
    user-select: none;
    position: relative;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #0056FF;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #004DE5;
    }

    &:active {
        background: #0046D0;
    }

    .b-button-loading {
        cursor: auto;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .loading-css {
            box-sizing: border-box;
            width: 50px;
            height: 50px;
            display: inline-block;
            border: 5px solid #f3f3f3;
            border-top: 5px solid red;
            border-radius: 50%;
            /* 动画旋转效果 */
            animation: rotate-360 1s infinite linear;
            display: none;
        }

        @keyframes rotate-360 {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .loading-svg {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -15px 0 0 -15px;
            width: 30px;
            height: 30px;
            animation: loading-rotate 1.5s infinite ease-in-out;
        }

        @keyframes loading-rotate {
            to {
                transform: rotate(1turn);
            }
        }

        .loading-svg > .path {
            stroke: rgba(255, 255, 255, 0.6);
            stroke-width: 5;
            animation: loading-dash 1.5s infinite ease-in-out;
        }

        @keyframes loading-dash {
            0% {
                stroke-dasharray: 1, 125;
                stroke-dashoffset: 0;
            }

            50% {
                stroke-dasharray: 95, 31;
                stroke-dashoffset: -31px;
            }

            to {
                stroke-dasharray: 6, 120;
                stroke-dashoffset: -120px;
            }
        }

    }
}
</style>
