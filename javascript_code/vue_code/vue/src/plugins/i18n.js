export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)

    }
    // 在插件中，我们可以通过 provide 来为插件用户供给一些内容。
    //    举例来说，我们可以将插件接收到的 options 参数提供给整个应用，让任何组件都能使用这个翻译字典对象。
    app.provide('i18', options)
  }
}
