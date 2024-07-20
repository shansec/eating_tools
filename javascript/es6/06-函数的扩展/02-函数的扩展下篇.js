// 箭头函数
const full = ({first, last}) => first + ' ' + last;
console.log(full({first: 'Hello', last: 'world'}));

// 箭头函数使用注意点：
//  1、箭头函数没有自己的 this 对象
//  2、箭头函数不能作为构造函数
//  3、箭头函数，在函数体内不存在 arguments 对象
//  4、不可以使用 yield 命令
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 1000);
}

var id = 21;
foo.call({id: 42});

// 箭头函数和普通函数的比较
function Timer() {
  this.s1 = 0;
  this.s2 = 0;

  setInterval(() => this.s1++, 1000)

  setInterval(function () {
    this.s2++;
  }, 1000)
}

let timer = new Timer();
setTimeout(() => console.log('s1', timer.s1), 3100);
setTimeout(() => console.log('s2', timer.s2), 3100);

// 不适合箭头函数的场合
//  1、定义对象的方法，且该方法内部包括this；
//  2、需要动态 this 的时候


// 函数的尾调用
// 函数的尾调用就是在函数的最后一步调用另一个函数
