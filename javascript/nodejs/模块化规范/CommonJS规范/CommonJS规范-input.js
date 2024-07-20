const output = require('./CommonJS规范-output')
console.log(output.addX(5))

/**
 * AMD 规范和 CommonJS 规范的兼容性
 *  CommonJS规范加载是同步的，只有加载完成才能执行后面的操作
 *  AMD规范是非同步加载的，允许指定回调函数
 */
