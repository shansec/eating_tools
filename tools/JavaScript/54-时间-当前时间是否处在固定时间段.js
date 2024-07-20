const checkAuditTime = (beginTime, endTime) => {
  let nowDate = new Date()
  let beginDate = new Date(nowDate)
  let endDate = new Date(nowDate)
  // 设置开始时间日期
  let beginIndex = beginTime.lastIndexOf(':')
  let beginHour = beginTime.substring(0, beginIndex)
  let beginMinute = beginTime.substring(beginIndex + 1, beginTime.length - 1)
  beginDate.setHours(beginHour, beginMinute, 0, 0)
  // 设置结束时间日期
  let endIndex = endTime.lastIndexOf(':')
  let endHour = endTime.substring(0, endIndex)
  let endMinute = endTime.substring(endIndex + 1, endTime.length - 1)
  endDate.setHours(endHour, endMinute, 0, 0)

  if (nowDate.getTime() >= beginDate.getTime() && nowDate.getTime() <= endDate.getTime()) {
    return true
  } else {
    return false
  }
}
