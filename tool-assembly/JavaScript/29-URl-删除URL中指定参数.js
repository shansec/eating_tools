const funcUrlDel = name => {
  const baseUrl = location.origin + location.pathname + '?'
  const query = location.search.substr(1)
  if (query.indexOf(name) > -1) {
    const obj = {}
    const arr = query.split('&')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=')
      obj[arr[i][0]] = arr[i][1]
    }
    delete obj[name]
    return (
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&')
    )
  }
}
