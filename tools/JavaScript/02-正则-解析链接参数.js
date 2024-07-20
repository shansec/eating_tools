/**
 * 解析链接参数，单独在 js 中存在问题
 * @param {*} name
 * @returns
 */
const getQueryByName = name => {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`)
  const queryNameMatch = window.location.search.match(queryNameRegex)
  // 通常，它将由decodeURIComponent解码
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : ''
}

const url = 'https://xxx.com/index.html?name=jack&age=100'
const name = getQueryByName('name')
const age = getQueryByName('age')
