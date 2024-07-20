const unescape = string => {
  const unescapeMaps = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    '#39': "'"
  }
  const unescapeRegexp = /&([^;]+);/g
  return string.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[unescapeKey] || match
  })
}

console.log(
  unescape(`
  &lt;div&gt;
    &lt;p&gt;hello world&lt;/p&gt;
  &lt;/div&gt;
`)
)
