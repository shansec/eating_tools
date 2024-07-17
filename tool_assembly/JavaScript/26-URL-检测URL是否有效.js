const getUrlState = URL => {
  let xmlhttp = new ActiveXObject('microsoft.xmlhttp')
  xmlhttp.Open('GET', URL, false)
  try {
    xmlhttp.Send()
  } catch (e) {
  } finally {
    let result = xmlhttp.responseText
    if (result) {
      if (xmlhttp.Status == 200) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
