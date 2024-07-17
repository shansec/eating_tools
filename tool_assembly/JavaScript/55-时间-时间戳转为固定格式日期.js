const formatTime = (timeStamp, format) => {
  // 根据时间戳创建日期对象
  const date = new Date(timestamp * 1000);
  const map = {
    // 月份
    'M': date.getMonth() + 1,
    // 日
    'd': date.getDate(),
    // 小时
    'h': date.getHours(),
    // 分钟
    'm': date.getMinutes(),
    // 秒
    's': date.getSeconds(),
    // 季度
    'q': Math.floor((date.getMonth() + 3) / 3),
    // 毫秒
    'S': date.getMilliseconds()
  };

  format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
    let v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - all.length);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
}
