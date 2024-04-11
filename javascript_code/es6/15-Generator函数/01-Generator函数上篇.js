// Generator从语法上可以把它理解为一个状态机，封装了多个内部状态。
// 执行Generator函数会返回一个遍历器对象，也就是说Generator除了状态机还是一个遍历器对象生成函数
// Generator函数是一个普通函数，但是具有两个特征。一是：function关键字与函数名之间有一个星号，二是：
//  函数体内部使用 yield 表达式定义不同的内部状态
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
let hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
// 总结：调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针，每次调用遍历器对象的next()方法
//      就会返回一个有着value和done属性的对象
// ES6没有规定function关键字与函数名之间的星号写在哪个位置
// 遍历器对象的next()方法运行逻辑：
//  1.遇到yield表达式就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值作为返回对象的value属性值
//  2.下一次调用next()方法时，再继续往下执行，直到遇到下一个yield表达式
//  3.如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值
//  4.如果该函数没有return语句，则返回的对象的value属性值为undefined
//  5.需要注意的是yield后面的表达式只有当调用next()方法、内部指针指向该语句时才会执行
// Generator函数可以不使用yield表达式，这时就变成了一个单纯的暂缓执行函数
function* f() {
    console.log('执行了！');
}
let generator = f();
setTimeout(() => {
    generator.next()
}, 2000);

let arr = [1, [[2, 3], 4], [5, 6]];
let flat = function* (a) {
    let length = a.length;
    for(let i = 0; i < length; i++) {
        let item = a[i];
        if(typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};
for(let f of flat(arr)) {
    console.log(f);
}
// yield表达式如果在另一个表达式之中，必须放在圆括号里面。
// yield表达式用作函数参数或者放在赋值表达式的右边可以不加括号
let myIterator = {};
myIterator[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterator]);

// next()方法的参数
// yield表达式本身没有返回值，next()方法可以带一个参数，该参数会被当做上一个yield表达式的返回值
function* f() {
    for(let i = 0; true; i++) {
        let reset = yield i;
        if(reset) {i = -2;}
    }
};
let g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
// 注意：Genaraor函数从暂停状态到恢复运行，上下文是不变的
function* foo(x) {
    let y = 2 * (yield (x + 1));
    let z = yield (y / 3);
    return (x + y + z);
};
let a = foo(5);
console.log(a.next());
console.log(a.next(6));
console.log(a.next(6));

function* dataConsumer() {
    console.log(`start`);
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return `result`;
};
let genObj = dataConsumer();
genObj.next();
console.log(genObj.next('a'));
console.log(genObj.next('ab'));

// for...of循环
// for...of循环可以自动遍历Generatoe函数运行时生成的Iterator对象，并且这个时候不需要调用next()方法
function* foo1() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
};
for(let v of foo1()) {
    console.log(v);
}
// 利用Generator函数和for...of循环实现斐波那契数列
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for(;;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
};
for(let n of fibonacci()) {
    if(n > 1000) break;
    console.log(n);
}
// 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用，都是遍历器接口
function* numbers() {
    yield 1
    yield 2
    return 3
    yield 4
};
console.log([...numbers()]);
console.log(Array.from(numbers()));

// Generator.prototype.throw()
// Generator函数返回的遍历器对象，都有一个throw方法，在函数体外抛出错误
let g1 = function* () {
    try {
        yield;
    } catch(e) {
        console.log('内部捕获', e);
    }
};
let i = g1();
console.log(i.next());
try {
    i.throw('a');
    i.throw('b');
} catch(e) {
    console.log('外部捕获', e);
}

// Generator.prototype.return()
// 该方法可以返回给定的值，并且终结遍历Generator函数
function* gen() {
    yield 1;
    yield 2;
    yield 3;
};
let g2 = gen();
console.log(g2.next());
console.log(g2.return('foo'));
// return()方法不传参时，返回值对象的value为undefined
console.log(g2.return());
console.log(g2.next());

// next()、throw()和return()的共同点
// next()是将yield表达式替换成一个值
// throw()是将yield表达式替换成一个throw语句
// return()是将yield表达式替换成一个return语句