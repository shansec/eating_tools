const escape = string => {
  const escapeMaps = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39'
  }
  // 此处的效果与 /[&amp;；<>“']/g 的效果相同
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g')
  return string.replace(escapeRegexp, match => `&${escapeMaps[match]};`)
}

console.log(
  escape(`
  <div>
    <p>hello world</p>
  </div>
`)
)
