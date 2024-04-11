let mobile = '13145678910'
let mobileReg = /(?=(\d{4})+$)/g

console.log(mobile.replace(mobileReg, '-')) // 131-4567-8910
