const params2Url = obj => {
  let params = []
  for (let key in obj) {
    params.push(`${key}=${obj[key]}`)
  }
  return encodeURIComponent(params.join('&'))
}
