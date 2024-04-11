function logValue(x: Date | string) {
  if (x instanceof  Date) {
    console.log(x.toUTCString())
  } else {
    x.toUpperCase()
  }
}
