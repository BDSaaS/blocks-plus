import Lib from './Lib'

export default class EventBus {
    _events = new Map()
    static _instance = null

    /**
     * 获取EventBus实例
     * @return {EventBus}
     */
    static getInstance() {
        if (!(EventBus._instance && EventBus._instance instanceof EventBus)) {
            EventBus._instance = new EventBus()
        }
        return EventBus._instance
    }

    /**
     * EventBus.getEvents
     * @return {Map<any, any>}
     */
    static getEvents() {
        return EventBus.getInstance()._events
    }

    static getEventsSize() {
        return EventBus.getInstance()._events.size
    }

    static getEvent(name) {
        return EventBus.getInstance()._events.get(name)
    }

    static hasEvent(name) {
        return EventBus.getInstance()._events.has(name)
    }

    static deleteEvent(name) {
        EventBus.getInstance()._events.delete(name)
        return EventBus.hasEvent(name)
    }

    /**
     * Method EventBus.setEvent
     * @param name
     * @param callback
     * @return {Map<any, any>}
     */
    static setEvent(name, callback) {
        if (EventBus.hasEvent(name)) {
            // console.warn('Event duplicate registration')
        }
        return EventBus.getInstance()._events.set(name, callback)
    }

    /**
     * Method EventBus.on as EventBus.setEvent
     * 绑定事件
     * @param name
     * @param callback
     * @return {Map<*, *>}
     */
    static on(name, callback) {
        if (!Lib.isFunction(callback)) {
            console.warn('The second argument to the on method must be a function')
        }
        return EventBus.setEvent(name, callback)
    }

    /**
     * Method EventBus.emit
     * 执行事件
     * @param name
     * @param payload
     * @return {*}
     */
    static emit(name, ...payload) {
        return EventBus.getEvent(name)(...payload)
    }

    /**
     * Method EventBus.once
     * 执行事件并关闭事件
     * @param name
     * @param payload
     */
    static once(name, ...payload) {
        EventBus.emit(name, ...payload)
        EventBus.off(name)
    }

    /**
     * EventBus.off
     * 关闭事件
     * @param name
     * @return {boolean}
     */
    static off(name) {
        if (Array.isArray(name)) {
            const arr = name.map(event => {
                return EventBus.off(event)
            })
            return arr.indexOf(false) < 0
        }
        if (EventBus.hasEvent(name)) {
            return EventBus.getInstance()._events.delete(name)
        }
    }
}
