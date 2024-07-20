// ES6模块不是对象，而是通过export命令显示指定输出代码，在通过import命令输入

// 严格模式
// 严格模式下的主要限制：
//  1.变量必须声明后再使用
//  2.函数的参数不能有同名属性
//  3.不能使用with语句
//  4.不能使用前缀0表示八进制数
//  5.不能删除不可删除的属性
//  6.不能删除变量，只能删除属性
//  7.eval不会在它的外层作用域引入变量
//  8.eval和arguments不能被重新赋值
//  9.arguments不会自动反映函数参数的变化
//  10.不能使用arguments.callee
//  11.不能使用arguments.caller
//  12.禁止this指向全局对象
//  13.不能使用fn.caller和fn.arguments获取函数调用的堆栈
//  14.增加了保留字（比如protected、static和interface）

// export命令
let firstName = 'Michael';
let lastName = 'Jackon';
let year = 1998;
export {firstName, lastName, year}

function multiply(x, y) {
  return x * y;
}

// 可以使用as关键字重命名
export {multiply as V1}

// export default命令

// 浏览器模块加载规则
// 浏览器对于带有type="module"的<script>，都是异步加载，不会造成堵塞浏览器，等到整个页面渲染完，再执行模块脚本
// <script>标签的async属性打开之后，只要加载完成渲染引擎就会中断渲染立即执行，执行完成之后再回复渲染

// ES6模块与CommonJS模块的差异
// 差异：
//  1.CommonJS模块输出的是一个值得拷贝，ES6模块输出的是值的引用
//  2.CommonJS模块是运行时加载，ES6模块是编译时输出接口
//  3.CommonJS模块require()是同步加载模块，ES6模块的import命令是异步加载
// 第一条差异的意思是一旦输出一个值，模块内部的变化影响不到这个值

// Node.js模块加载方法
// CommonJS模块使用require()和module.exports，ES6模块使用import和export
// Node.js要求ES6模块采用.mjs后缀文件名，如果不希望将后缀改成.msj,可以在package.json文件中指定type的值为module
// 总结一句话就是：.mjs文件总是以ES6模块加载，.cjs文件总是以CommonJS模块加载，.js文件的加载取决于package.json中的type字段的值

// package.json文件中main字段
// main字段用于指定模块加载的入口文件

// package.json文件中export字段
//  1.子目录别名：exports字段可以指定脚本或子目录的别名
//  2.main的别名：exports字段的别名如果是.，代表模块的主入口，优先级高于main字段，并且可以直接简写成exports字段的值
//  3.条件加载：
