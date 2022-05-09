<template>
  <div class="component-container">
    <img :src="verificationCode" alt="验证码" @click="getVerificationCode">
  </div>
</template>

<script>
export default {
	name: 'VerificationCode',
	data() {
		return {
			// 图片验证码
			verificationCode: ''
		}
	},
	created() {
		this.getVerificationCode()
	},
	methods: {
		getVerificationCode() {
			this.verificationCode = `/bdsaas/ajax/main/getcodeimage.do?${Math.random()}`
		}
	}
}
</script>

<style scoped lang="scss">
.component-container {
    user-select: none;

    img {
        display: block;
        height: 100%;
        cursor: pointer;
    }

}
</style>
