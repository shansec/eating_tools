// Vue 核心代码
import {initMixin} from './init';

function Vue(options) {
  // 初始化
  this._init(options)
}

initMixin(Vue)
export default Vue

// 对象
//  Object.defineProperty 优缺点，只能对对象中的一个属性进行劫持
//  遍历 {a: 1, b: 2, obj:{}}
//  递归

// 数据 { list: [1, 2, 3, 4], arr: [{a: 1}]}
//  采用函数劫持的方式，重写数组方法
