const loalStorageGet = key => {
  if (!key) return
  return window.localStorage.getItem(key)
}
