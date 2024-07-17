const stopPropagation = e => {
  e = e || window.event
  if (e.stopPropagation) {
    // W3C阻止冒泡方法
    e.stopPropagation()
  } else {
    e.cancelBubble = true // IE阻止冒泡方法
  }
}
