import {observer} from './observe/index';

export function initState(vm) {
  let opts = vm.$options;
  // console.log(opts)
  // 判断
  if (opts.data) {
    initData(vm)
  }
  if (opts.props) {
    initProps()
  }
  if (opts.watch) {
    initWatch()
  }
}

/**
 * vue2 对data初始化
 *  (1) 对象
 *  (2) 函数
 */
function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data;
  // console.log('data 初始化', data)
  // data 数据进行劫持
  // 将 data 上的所有属性代理到实例上
  for (let key in data) {
    proxy(vm, '_data', key)
  }
  observer(data)
}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key]
    },
    set(newVal) {
      vm[source][key] = newVal
    }
  })
}

function initProps() {
}

function initWatch() {
}
