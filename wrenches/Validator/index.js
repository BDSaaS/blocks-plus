import Lib from '../Lib'
import Tester from './Tester'
import EventBus from '../EventBus'

export default class Validator {
    _rules = new WeakMap()
    static _instance = null

    /**
     * Method getRules
     * @param {Object} name
     * @return {Object|Array}
     */
    static getRules(name) {
        return Validator.getInstance()._rules.get(name) || {}
    }

    /**
     * Method setRules
     * @param {Object|Array} rules
     */
    static setRules(rules) {
        if (!Lib.isObject(rules)) {
            throw new Error('The rules must be a Object')
        }
        Validator.getInstance()._rules.set(rules, rules)
    }

    /**
     * Method deleteRules
     * @param rules
     */
    static deleteRules(rules) {
        Validator.getInstance()._rules.delete(rules)
    }

    /**
     * Method register
     * 验证器在使用时需先注册
     * @param {Object|Array} rules 验证规则
     */
    static register(rules) {
        Validator.setRules(rules)
    }

    /**
     * Validator.validate
     * 验证方法
     * @param {Object} rules
     * @param {Object} detectionData
     * @param {Function|*} callback
     * @return {boolean} true 通过验证 | false 验证失败
     */
    static validate(rules, detectionData, callback) {
        if (!Lib.isObject(rules) || !Lib.isObject(detectionData)) {
            throw new Error('Rules and detection data must be objects')
        }
        // console.log('rules, detectionData, callback', rules, detectionData, callback)
        // 规则Keys
        const rulesKeys = Object.keys(rules)
        // 校验Keys
        const detectionDataKeys = Object.keys(detectionData)
        // 匹配到的规则
        const realRulesKeys = []
        rulesKeys.map((key) => {
            if (detectionDataKeys.includes(key)) {
                realRulesKeys.push(key)
            }
        })
        // 处理匹配规则的校验
        const checkRules = realRulesKeys.map(key => {
            const name = Validator.createEventBusName(key, rules)
            const tester = Tester.validate(rules[key], detectionData[key])
            const error = tester[0] ? tester[0].message : ''
            EventBus.emit(name, { error })
            return tester.length === 0
        })
        // 校验结果
        const validate = checkRules.every(Boolean)
        // 通过回调
        if (Lib.isFunction(callback)) {
            callback(validate)
        }
        return validate
    }

    /**
     * Validator.createEventBusName
     * 创建唯一的 EventBus全局名称
     * @param field
     * @param rules
     * @return {string}
     */
    static createEventBusName(field, rules) {
        const base64 = encodeURIComponent(JSON.stringify(rules))
        return `${field}-${base64}`
    }

    /**
     * Validator.eventOn
     * @param {Object|Array} rules
     * @param {String} field
     * @param {Function} callback
     */
    static eventOn(rules, field, callback) {
        const name = Validator.createEventBusName(field, rules)
        EventBus.on(name, callback)
    }

    /**
     * EventBus.emit
     * @param {Object|Array} rules
     * @param {String} field
     * @param {String|Number|Object} value
     * @return {*}
     */
    static eventEmit(rules, field, value) {
        const name = Validator.createEventBusName(field, rules)
        const tester = Tester.validate(rules[field], value)
        const error = tester[0] ? tester[0].message : ''
        return EventBus.emit(name, { error })
    }

    /**
     * EventBus.eventEmitError
     * 推送一个错误
     * @param rules
     * @param field
     * @param error
     * @return {*}
     */
    static eventEmitError(rules, field, { error }) {
        const name = Validator.createEventBusName(field, rules)
        return EventBus.emit(name, { error })
    }

    /**
     * 获取Validator实例
     * @return {Validator}
     */
    static getInstance() {
        if (!(Validator._instance && Validator._instance instanceof Validator)) {
            Validator._instance = new Validator()
        }
        return Validator._instance
    }
}
