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

export {
    EventBus,
    Validator
}


