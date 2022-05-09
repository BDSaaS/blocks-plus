<template>
    <div class="component-container">
        <div v-if="!showTime" class="message" @click="sendSMS">
            获取短信验证码
        </div>
        <div v-else class="recapture">
            <i>{{ time }}</i>
            <em>秒后可重新获取</em>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SmsCode',
    props: {
        countDown: {
            type: Number,
            default: 60
        }

    },
    data() {
        return {
            time: 0,
            timeId: null,
            showTime: false
        }
    },
    mounted() {
        this.time = this.countDown
    },
    methods: {
        // 不做防抖
        sendSMS() {
            this.showTime = true
            if (this.time === this.countDown) {
                clearInterval(this.timeId)
                this.timeId = setInterval(() => {
                    if (this.time <= 0) {
                        clearInterval(this.timeId)
                        this.showTime = false
                        this.time = this.countDown
                        return
                    }
                    this.time--
                }, 1000)
                this.$emit('send')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.component-container {
    user-select: none;
    font-size: 14px;
    font-style: normal;

    .message {
        cursor: pointer;
    }

    .recapture {
        & * {
            font-style: normal;
        }

        i {
            padding-right: 3px;
        }

        em {
            cursor: wait;
        }
    }
}
</style>
