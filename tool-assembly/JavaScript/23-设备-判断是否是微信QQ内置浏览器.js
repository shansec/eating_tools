const broswer = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'weixin'
  } else if (ua.match(/QQ/i) == 'qq') {
    return 'QQ'
  }
  return false
}
