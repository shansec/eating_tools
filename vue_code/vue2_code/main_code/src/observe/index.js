import {ArrayMethods} from "./array_index"

export function observer(data) {
  // console.log('劫持', data)
  if (typeof data != 'object' || data == null) {
    return data
  }
  return new Observer(data)
}

class Observer {
  constructor(value) {
    Object.defineProperty(value, '__ob__', {
      enumerable: false,
      value: this
    })
    // 判断数据
    if (Array.isArray(value)) {
      value.__proto__ = ArrayMethods
      this.observeArray(value)
    } else {
      // 遍历劫持对象属性
      this.walk(value)
    }
  }

  walk(data) {
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let value = data[key]
      defineReactive(data, key, value)
    }
  }

  observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      observer(value[i])
    }
  }
}

// 对对象中的属性进行劫持
function defineReactive(data, key, value) {
  // vue2 Object.defineProperty  缺点： 只能对象中的一个属性进行劫持
  observer(value)
  Object.defineProperty(data, key, {
    get() {
      // console.log('获取')
      return value
    },
    set(newValue) {
      // console.log('设置')
      if (newValue === value) return;
      observer(newValue)
      value = newValue
    }
  })
}


