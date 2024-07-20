// 异步编程
function checkForUpdatesTimeout() {
  console.log('检查更新')
}

// setTimeout(checkForUpdates, 2000)

let updateIntervalId;
function checkForUpdatesInterval() {
  console.log('检查更新')
  clearInterval(updateIntervalId)
}

updateIntervalId = setInterval(checkForUpdatesInterval, 2000)
