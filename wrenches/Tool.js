/**
 * Class Lib
 * 基础类库
 */
export default class Lib {
    // 获得随机字符串
    static randStr(len) {
        len = len || 32
        // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        const maxNum = chars.length
        let str = ''
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxNum))
        }
        return str
    }

    // 检查手机格式
    static isMobile(mobile) {
        const rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
        return rule.test(mobile)
    }

    // 检查邮箱格式
    static isEmail(email) {
        const rule = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return rule.test(email)
    }

    // 银行卡格式化脱敏
    static bankCardSafe(cardNum) {
        return cardNum.substr(0, 4) + ' **** **** **** ' + cardNum.substr(cardNum.length - 3)
    }

    // 手机号格式化脱敏
    static mobileSafe(mobile) {
        return mobile.substr(0, 3) + '****' + mobile.substr(mobile.length - 4)
    }

    // 姓名脱敏
    static nameSafe(name) {
        return name.substr(0, 1) + '**'
    }

    // 地址脱敏
    static addressSafe(address) {
        return address.substr(0, address.length - 4) + ' ****'
    }

    // 检查钱对不对
    static checkMoney(str) {
        const reg = /^[0-9]\d*(\.\d{1,2})?$/
        // let str = "1234567890.12"; //可以自己更换这个字符串的值进行所有可能的测试
        // console.log(reg.test(str)); //弹出true表示符合模式，弹出false表示不符合模式
        return reg.test(str)
    }

    /**
     * 防抖方法
     * @param  callback
     * @param {Number} delay
     * @return {(function(): void)|*}
     */
    static debounce(callback, delay) {
        let delayTime = null
        return function() {
            clearTimeout(delayTime)
            delayTime = setTimeout(callback, delay)
        }
    }

    // 节流方法-有更好的
    // static throttle(callback, duration) {
    //     const startTime = (new Date()).getTime()
    // }
}
