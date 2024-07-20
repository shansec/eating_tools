// 模板字符串中嵌入变量
let name = "John", time = "today";
console.log(`Hello ${name},how are you ${time}?`);

// 模板字符串中调用函数
function fn() {
  return "Hello World";
}

console.log(`foo ${fn()} bar`);
