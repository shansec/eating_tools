const delCookie = key => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}
