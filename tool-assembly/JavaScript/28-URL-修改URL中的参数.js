const replaceParamVal = (paramName, replaceWith) => {
  const oUrl = location.href.toString()
  const re = eval('/(' + paramName + '=)([^&]*)/gi')
  location.href = oUrl.replace(re, paramName + '=' + replaceWith)
  return location.href
}
