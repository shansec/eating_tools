function genProps(attrs) {
  let str = ''
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i]
    if (attr.name === 'style') {
      let obj = {}
      attr.value.split(';').forEach(item => {
        let [key, value] = item.split(':')
        obj[key] = value
      })
      attr.value = obj
    }
    str += `${attr.name}:${JSON.stringify(attr.value)}`
  }
  return `{${str.slice(0, -1)}`
}

export function generate(el) {
  console.log(el)
  let code = `_c(${el.tag},${el.attrs.length ? `${genProps(el.attrs)}` : 'null'})`
  console.log(code)
}
