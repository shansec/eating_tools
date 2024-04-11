// <div id="app">{{name}}</div>
// ast 语法树
const NCNAME = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;  // 标签名称
const QNAMECAPTURE = `((?:${NCNAME}\\:)?${NCNAME})`;
const STARTTAGOPEN = new RegExp(`^<${QNAMECAPTURE}`);
const ENDTAG = new RegExp(`^<\\/${QNAMECAPTURE}[^>]*>`);
const ATTRIBUTE = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const STARTTAGCLOSE = /^\s*(\/?)>/;
const DEFAULTTAGRE = /\{\{((?:.|\r?\n)+?)\}\}/g;

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
  let element = createASTElement(tag, attrs)
  if (!root) {
    root = element
  }
  createParent = element
  stack.push(element)
}

function chart(text) {
  text = text.replace(/s/g, '')
  if (text) {
    createParent.children.push({
      type: 3,
      text
    })
  }
}

function end(tag) {
  let element = stack.pop()
  createParent = stack[stack.length - 1]
  if (createParent) {
    element.parent = createParent.tag
    createParent.children.push(element)
  }
}

export function parseHTML(html) {
  while (html) {
    // <div id="app">{{name}}</div>
    // 判断标签
    let textEnd = html.indexOf('<')
    if (textEnd === 0) { // 标签
      // 开始标签
      // debugger
      const startTagMatch = parseStartTag()
      if (startTagMatch) {
        start(startTagMatch.tagName, startTagMatch.attrs)
        continue
      }
      // 结束标签
      const endTagMatch = html.match(ENDTAG)
      if (endTagMatch) {
        advance(endTagMatch[0].length)
        end(endTagMatch)
        continue
      }
    }
    let text
    if (textEnd > 0) {
      // 获取到文本内容
      text = html.substring(0, textEnd)
      // console.log(text)
    }
    if (text) {
      advance(text.length)
      chart(text)
      // console.log(html)
    }
    // break
  }

  function parseStartTag() {
    const start = html.match(STARTTAGOPEN)
    if (start) {
      // console.log(start)
      let match = {
        tagName: start[1],
        attrs: []
      }
      // 删除开始标签
      advance(start[0].length)
      // 属性
      let attr
      let end
      while (!(end = html.match(STARTTAGCLOSE)) && (attr = html.match(ATTRIBUTE))) {
        // console.log(attr)
        match.attrs.push({name: attr[1], value: attr[3] || attr[4] || attr[5]})
        advance(attr[0].length)
      }
      if (end) {
        // console.log(end)
        advance(end[0].length)
        return match
      }
    }

  }

  function advance(n) {
    // substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
    html = html.substring(n)
    // console.log(html)
  }

  // console.log(root)
  return root
}
