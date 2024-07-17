const setCookie = (key, value, expire) => {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`
}
