import {parseHTML} from './parseAST';
import {generate} from './generate';

export function compileToFunction(el) {
  // 将 html 变成 ast 语法树
  let ast = parseHTML(el)
  console.log(ast)
  // 将 ast 语法树变成 render 函数  语法树变成字符串，之后字符串变成函数
  generate(ast)
}
