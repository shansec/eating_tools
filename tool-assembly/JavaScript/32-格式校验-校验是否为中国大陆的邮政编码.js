const isPostCode = value => {
  return /^[1-9][0-9]{5}$/.test(value.toString())
}
