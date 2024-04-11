const isAppleMobileDevice = () => {
  let reg = /iphone|ipod|ipad|Macintosh/i
  return reg.test(navigator.userAgent.toLowerCase())
}
