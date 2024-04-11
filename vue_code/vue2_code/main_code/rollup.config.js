import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
  // 入口文件
  input: './src/index.js',
  // 出口文件
  output: {
    // 出口路径
    file: 'dist/umd/vue.js',
    // 指定打包后全局变量的名字
    name: "Vue",
    // 统一模块规范
    format: 'umd',
    // es6 -> es5
    sourcemap: true
  },
  // 使用插件
  plugin: [
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.ENV === 'development' ? serve({
      open: true,
      openPage: './public/observe.html',
      port: 3000,
      contentBase: ''
    }) : null
  ]
}
