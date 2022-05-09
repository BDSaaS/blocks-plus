<template>
    <div class="b-result">
        <div class="b-result-icon">
            <slot name="icon">
                <i class="success"></i>
            </slot>
        </div>
        <div class="b-result-name">{{ name }}</div>
        <div class="b-result-tips">{{ tips }}</div>
        <slot name="other"></slot>
    </div>
</template>

<script>
export default {
    name: 'BResult',
    props: {
        // 名称
        name: {
            type: String,
            default: '温馨提示',
        },
        // 提示语
        tips: {
            type: String,
            default: '',
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

<style scoped lang="scss">

* {
    font-style: normal;
    font-family: "microsoft yahei ui", "microsoft yahei", PingFangSC-Light, "helvetica neue", "hiragino sans gb", arial, simsun, sans-serif;
    list-style: none;
}

.b-result {
    user-select: none;

    .b-result-icon {
        height: 68px;
        width: 68px;
        margin: 80px auto 28px;

        .success {
            display: block;
            height: 100%;
            width: 100%;
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzJFRDRBOSIgY3g9IjM0IiBjeT0iMzQiIHI9IjM0Ii8+PHBhdGggZD0iTTIwLjAxNyAzNS44NzJsMS44MDgtMi4wMiA5LjcxNyA2LjcxczYuMjAyLTYuNjYgMTcuNjQ2LTE3LjgwMmwuOTY0IDEuODY2cy05LjQyNyAxMC41NzUtMTguMTUzIDIxLjcyMkwyMC4wMTcgMzUuODcyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==") no-repeat center center;
            background-size: 100%;
        }
    }

    .b-result-name {
        height: 28px;
        font-size: 28px;
        font-weight: 600;
        color: #242934;
        line-height: 28px;
        text-align: center;
        margin: 28px auto 20px;
    }

    .b-result-tips {
        height: 14px;
        font-size: 14px;
        font-weight: 400;
        color: #9CA6B9;
        line-height: 14px;
        text-align: center;
        margin: 20px auto 60px;
    }
}

</style>
