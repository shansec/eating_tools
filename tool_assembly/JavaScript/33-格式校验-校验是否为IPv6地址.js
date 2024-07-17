const isIPv6 = str => {
  return Boolean(
    str.match(/:/g)
      ? str.match(/:/g).length <= 7
      : false && /::/.test(str)
      ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
      : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str)
  )
}
