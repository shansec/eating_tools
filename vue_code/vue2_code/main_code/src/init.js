import {initState} from './initState';
import {compileToFunction} from './compile/index';

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    console.log(options)
    let vm = this;
    vm.$options = options
    // console.log('vm 的值', this)
    // 初始化状态
    initState(vm)

    // 渲染模板
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }

  // 创建 $mount
  Vue.prototype.$mount = function (el) {
    console.log(el)
    let vm = this
    el = document.querySelector(el)
    let options = vm.$options
    if (!options.render) {
      let template = options.template
      if (!template && el) {
        // 获取 html
        el = el.outerHTML
        // console.log(el)
        // // <div id="app">{{name}}</div>
        // 变成 ast 语法树
        let ast = compileToFunction(el)
        // 变成 render() 函数
      }
    }
  }
}


