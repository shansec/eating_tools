const nowTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()
  const hour = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours()
  const miu = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()
  const sec = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds()
  return +year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec
}
