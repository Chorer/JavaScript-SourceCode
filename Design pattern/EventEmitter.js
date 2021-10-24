class EventEmitter {
  constructor() {
    // 缓存列表
    this.listener = {}
  }
  // 订阅事件
  on(EventName, fn) {
    // 如果订阅的事件不存在，则新增
    if (!this.listener[EventName]) {
      this.listener[EventName] = []
    }
    this.listener[EventName].push(fn)
  }
  // 发布事件
  emit(EventName, content) {
    const fns = this.listener[EventName]
    if (fns) {
      fns.forEach(fn => fn())
    }
  }
  // 取消订阅事件
  off(EventName, fn) {
    const fns = this.listener[EventName]
    if (!fns) return false
    // 如果没有指定取消哪个订阅，则取消该事件的全部订阅
    if (!fn) {
      fns.length = 0
    }
    // 否则取消某个订阅
    const index = fns.indexOf(fn)
    fns.splice(index, 1)
  }
  // 一次性订阅事件
  once(EventName, fn) {
    const _fn = content => {
      fn(content)
      // 执行一次后马上取消订阅
      this.off(EventName, _fn)
    }
    // 先正常订阅
    this.on(EventName, _fn)
  }
}