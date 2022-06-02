interface callback {
    (errorMessage: string): void
}

type eventBusName = string | object

interface EventBus {
    on(name: eventBusName, callback: callback): void

    emit(name: eventBusName, ...payload: any[]): any

    once(name: eventBusName): any

    off(name: eventBusName): void
}

interface Validator {

}

interface Lib {
    typeOf(value: any): Record<any, any>

    getTag(value: any): Record<any, any>

    isFunction(value: any): Record<any, any>

    isString(value: any): Record<any, any>

    isNumber(value: any): Record<any, any>

    isObject(value: any): Record<any, any>

    isUndefined(value: any): Record<any, any>

    isNull(value: any): Record<any, any>

    isClass(value: any): Record<any, any>

    isEmpty(value: any): Record<any, any>

    isPhone(value: any, ruleValue: boolean): Record<any, any>

    isEmail(value: any, ruleValue: boolean): Record<any, any>
}

interface Tester {

}

export {
    Lib,
    EventBus,
    Validator,
    Tester,
}


