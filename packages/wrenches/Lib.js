/**
 * Class Lib
 * import Underscore || Lodash is so big...
 */

export default class Lib {
  /**
   * typeOf 类型
   * @param {*} value
   */
  static typeOf (value) {
    return typeof value
  }

  /**
   * getTag 处理类型
   * @param {*} value
   */
  static getTag (value) {
    return Object.prototype.toString.call(value)
  }

  /**
   * Method isFunction
   * @param {*} value
   * @returns
   */
  static isFunction (value) {
    return typeof value === 'function' && Lib.getTag(value) ===
      '[object Function]'
  }

  /**
   * isString 是否字符串
   * @param {String} value
   */
  static isString (value) {
    return typeof value === 'string' ||
      (typeof value === 'object' && value != null &&
        !Array.isArray(value) && Lib.getTag(value) ===
        '[object String]')
  }

  static isNumber (value) {
    return typeof value === 'number'
  }

  /**
   * isObject 是否对象
   * @param {Object} value
   */
  static isObject (value) {
    return Lib.getTag(value) === '[object Object]'
  }

  /**
   * isObject 是否Undefined
   * @param {*} value
   * @return boolean
   */
  static isUndefined (value) {
    return Lib.getTag(value) === '[object Undefined]' || value === undefined
  }

  static isNull (value) {
    return Lib.getTag(value) === '[object Null]' || value === null
  }

  /**
   * isClass 是否类
   * @param {*} value
   * @return boolean
   */
  static isClass (value) {
    // isFunction
    if (!Lib.isFunction(value)) {
      return false
    }
    // Function toString
    const str = value.toString()
    // async function or arrow function
    if (value.prototype === undefined) return false
    // generator function or malformed definition
    if (value.prototype.constructor !== value) return false
    // ES6 class
    if (str.slice(0, 5) === 'class') return true
    // has own prototype properties
    if (Object.getOwnPropertyNames(value.prototype).length >= 2) return true
    // anonymous function
    if (/^function\s+\(|^function\s+anonymous\(/.test(str)) return false
    // Other
    return false
  }

  /**
   * isEmpty 是否为空
   * @param value
   * @return {boolean}
   */
  static isEmpty (value) {
    // null undefined '' 排除 0
    if (!value && value !== 0) {
      return true
    }
    // {} []
    if (Lib.isObject(value) || Array.isArray(value)) {
      return JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]'
    }
    // Other
    return false
  }

  /**
   * Tester.isPhone
   * 检查手机格式
   * @param value
   * @param {boolean} ruleValue
   * @return {boolean}
   */
  static isPhone (value, ruleValue = true) {
    // const rule = /^(13[0-9]|14[5-9]|15[012356789]|16[012356789]|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
    const rule = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/
    return rule.test(value) === ruleValue
  }

  /**
   * Tester.isEmail
   * 检查邮箱格式
   * @param value
   * @param {boolean} ruleValue
   * @return {boolean}
   */
  static isEmail (value, ruleValue = true) {
    const rule = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return rule.test(value) === ruleValue
  }
}
