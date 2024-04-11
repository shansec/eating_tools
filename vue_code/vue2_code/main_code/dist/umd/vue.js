(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  // 重写数组
  // 1、获取原来的数组方法
  let oldArrayProtoMethods = Array.prototype;

  // 2、继承
  let ArrayMethods = Object.create(oldArrayProtoMethods);

  // 3、劫持
  let methods = [
    "push",
    "pop",
    "unshift",
    "shift",
    "splice"
  ];
  methods.forEach(method => {
    ArrayMethods[method] = function (...args) {
      // console.log('劫持数组', method)
      let result = oldArrayProtoMethods[method].apply(this, args);
      // console.log(args)
      // 数组追加对象
      let inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.splice(2);
          break
      }
      // console.log('inserted', inserted)
      let ob = this.__ob__;
      if (inserted) {
        ob.observeArray(inserted);
      }
      return result
    };
  });

  function observer(data) {
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
      });
      // 判断数据
      if (Array.isArray(value)) {
        value.__proto__ = ArrayMethods;
        this.observeArray(value);
      } else {
        // 遍历劫持对象属性
        this.walk(value);
      }
    }

    walk(data) {
      let keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = data[key];
        defineReactive(data, key, value);
      }
    }

    observeArray(value) {
      for (let i = 0; i < value.length; i++) {
        observer(value[i]);
      }
    }
  }

  // 对对象中的属性进行劫持
  function defineReactive(data, key, value) {
    // vue2 Object.defineProperty  缺点： 只能对象中的一个属性进行劫持
    observer(value);
    Object.defineProperty(data, key, {
      get() {
        // console.log('获取')
        return value
      },
      set(newValue) {
        // console.log('设置')
        if (newValue === value) return;
        observer(newValue);
        value = newValue;
      }
    });
  }

  function initState(vm) {
    let opts = vm.$options;
    // console.log(opts)
    // 判断
    if (opts.data) {
      initData(vm);
    }
    if (opts.props) ;
    if (opts.watch) ;
  }

  /**
   * vue2 对data初始化
   *  (1) 对象
   *  (2) 函数
   */
  function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data;
    // console.log('data 初始化', data)
    // data 数据进行劫持
    // 将 data 上的所有属性代理到实例上
    for (let key in data) {
      proxy(vm, '_data', key);
    }
    observer(data);
  }

  function proxy(vm, source, key) {
    Object.defineProperty(vm, key, {
      get() {
        return vm[source][key]
      },
      set(newVal) {
        vm[source][key] = newVal;
      }
    });
  }

  // <div id="app">{{name}}</div>
  // ast 语法树
  const NCNAME = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;  // 标签名称
  const QNAMECAPTURE = `((?:${NCNAME}\\:)?${NCNAME})`;
  const STARTTAGOPEN = new RegExp(`^<${QNAMECAPTURE}`);
  const ENDTAG = new RegExp(`^<\\/${QNAMECAPTURE}[^>]*>`);
  const ATTRIBUTE = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  const STARTTAGCLOSE = /^\s*(\/?)>/;

  // 创建 ast 语法树
  function createASTElement(tag, attrs) {
    return {
      tag,
      attrs,
      children: [],
      type: 1,
      parent: null
    }
  }

  let root; // 根元素
  let createParent; // 当前元素的父亲
  let stack = []; // 数据结构
  function start(tag, attrs) {
    let element = createASTElement(tag, attrs);
    if (!root) {
      root = element;
    }
    createParent = element;
    stack.push(element);
  }

  function chart(text) {
    text = text.replace(/s/g, '');
    if (text) {
      createParent.children.push({
        type: 3,
        text
      });
    }
  }

  function end(tag) {
    let element = stack.pop();
    createParent = stack[stack.length - 1];
    if (createParent) {
      element.parent = createParent.tag;
      createParent.children.push(element);
    }
  }

  function parseHTML(html) {
    while (html) {
      // <div id="app">{{name}}</div>
      // 判断标签
      let textEnd = html.indexOf('<');
      if (textEnd === 0) { // 标签
        // 开始标签
        // debugger
        const startTagMatch = parseStartTag();
        if (startTagMatch) {
          start(startTagMatch.tagName, startTagMatch.attrs);
          continue
        }
        // 结束标签
        const endTagMatch = html.match(ENDTAG);
        if (endTagMatch) {
          advance(endTagMatch[0].length);
          end();
          continue
        }
      }
      let text;
      if (textEnd > 0) {
        // 获取到文本内容
        text = html.substring(0, textEnd);
        // console.log(text)
      }
      if (text) {
        advance(text.length);
        chart(text);
        // console.log(html)
      }
      // break
    }

    function parseStartTag() {
      const start = html.match(STARTTAGOPEN);
      if (start) {
        // console.log(start)
        let match = {
          tagName: start[1],
          attrs: []
        };
        // 删除开始标签
        advance(start[0].length);
        // 属性
        let attr;
        let end;
        while (!(end = html.match(STARTTAGCLOSE)) && (attr = html.match(ATTRIBUTE))) {
          // console.log(attr)
          match.attrs.push({name: attr[1], value: attr[3] || attr[4] || attr[5]});
          advance(attr[0].length);
        }
        if (end) {
          // console.log(end)
          advance(end[0].length);
          return match
        }
      }

    }

    function advance(n) {
      // substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
      html = html.substring(n);
      // console.log(html)
    }

    // console.log(root)
    return root
  }

  function genProps(attrs) {
    let str = '';
    for (let i = 0; i < attrs.length; i++) {
      let attr = attrs[i];
      if (attr.name === 'style') {
        let obj = {};
        attr.value.split(';').forEach(item => {
          let [key, value] = item.split(':');
          obj[key] = value;
        });
        attr.value = obj;
      }
      str += `${attr.name}:${JSON.stringify(attr.value)}`;
    }
    return `{${str.slice(0, -1)}`
  }

  function generate(el) {
    console.log(el);
    let code = `_c(${el.tag},${el.attrs.length ? `${genProps(el.attrs)}` : 'null'})`;
    console.log(code);
  }

  function compileToFunction(el) {
    // 将 html 变成 ast 语法树
    let ast = parseHTML(el);
    console.log(ast);
    // 将 ast 语法树变成 render 函数  语法树变成字符串，之后字符串变成函数
    generate(ast);
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      console.log(options);
      let vm = this;
      vm.$options = options;
      // console.log('vm 的值', this)
      // 初始化状态
      initState(vm);

      // 渲染模板
      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };

    // 创建 $mount
    Vue.prototype.$mount = function (el) {
      console.log(el);
      let vm = this;
      el = document.querySelector(el);
      let options = vm.$options;
      if (!options.render) {
        let template = options.template;
        if (!template && el) {
          // 获取 html
          el = el.outerHTML;
          // console.log(el)
          // // <div id="app">{{name}}</div>
          // 变成 ast 语法树
          compileToFunction(el);
          // 变成 render() 函数
        }
      }
    };
  }

  // Vue 核心代码

  function Vue(options) {
    // 初始化
    this._init(options);
  }

  initMixin(Vue);

  // 对象
  //  Object.defineProperty 优缺点，只能对对象中的一个属性进行劫持
  //  遍历 {a: 1, b: 2, obj:{}}
  //  递归

  // 数据 { list: [1, 2, 3, 4], arr: [{a: 1}]}
  //  采用函数劫持的方式，重写数组方法

  return Vue;

}));
//# sourceMappingURL=vue.js.map
