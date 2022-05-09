<template>
    <div class="b-step">
        <div class="line" />
        <div v-for="(item,index) in steps" :key="index" class="line-box">
            <div class="item" :class="(active >= index + 1)?'through' + ' ' + ((active===index+1?'now':'')):''">
                <i v-if="active <= index + 1">{{ index + 1 }}</i>
                <div class="success-icon" @click="to(index+1)" v-else></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSteps',
    props: {
        // 进度
        active: {
            type: Number,
            default: 2,
        },
        steps: {
            type: Array,
            default: () => {
                return []
            },
        },
    },
    computed: {
        classStatus(active) {
            if (active <= this.active) {
                return active === this.active ? 'through now' : 'through'
            }
            return ''
        },
    },
    methods: {
        to(n) {
            this.$emit('to', n)
        },
    },
}
</script>

<style scoped lang="less">

* {
    font-style: normal;
    font-family: "microsoft yahei ui", "microsoft yahei", PingFangSC-Light, "helvetica neue", "hiragino sans gb", arial, simsun, sans-serif;
    list-style: none;
}

.b-step {
    user-select: none;
    display: inline-block;

    .line {
        height: 0;
        border-bottom: 1px dotted #D9DCE0;
        transform: translate(0, 14px);
    }

    .line-box {
        float: left;
        margin-right: 24px;

        &:last-child {
            margin-right: 0;
        }

        .item {
            height: 26px;
            width: 26px;
            background: #FFFFFF;
            border: 1px solid #E1E4E8;
            border-radius: 50%;

            &.through {
                background: #F2F6FF;
                border: 1px solid rgba(0, 86, 255, 0.5);

                i {
                    color: #0056FF;
                    font-family: Montserrat-SemiBold, serif;
                    font-weight: 400;
                }
            }

            &.now {
                cursor: pointer;
                animation: flash 2s infinite;
            }

            .success-icon {
                width: 16px;
                height: 16px;
                background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNDY2IDQuMjdsMS4xOSAxLjA2Ny02LjgyOCA3LjYxNS00LjMyLTQuMTI4IDEuMTA2LTEuMTU3IDMuMTI1IDIuOTg3eiIgZmlsbD0iIzAwNTZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+") no-repeat center center;
                background-size: 16px;
                margin: 4px auto;
                cursor: pointer;
            }

            i {
                display: block;
                height: 24px;
                width: 24px;
                line-height: 24px;
                text-align: center;
                font-size: 14px;
                font-family: Montserrat-Regular, serif;
                color: #9CA6B9;
                float: left;
            }
        }
    }

}

@keyframes flash {
    0% {
        box-shadow: 0 0 2px 1px rgba(0, 86, 255, 0);
    }
    50% {
        box-shadow: 0 0 8px 3px rgba(0, 86, 255, 0.2);
    }
    100% {
        box-shadow: 0 0 2px 1px rgba(0, 86, 255, 0);
    }
}
</style>
