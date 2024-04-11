const check24TimeRegexp = /^(?:(?:0?|1)\d|2[0-3]):(?:0?|[1-5])\d$/
console.log(check24TimeRegexp.test('01:14')) // true
console.log(check24TimeRegexp.test('23:59')) // true
