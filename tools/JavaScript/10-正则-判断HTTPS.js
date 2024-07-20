const checkProtocol = /^https?:/

console.log(checkProtocol.test('https://xxx.com/')) // true
console.log(checkProtocol.test('http://xxx.com/')) // true
console.log(checkProtocol.test('//xxx.com/')) // false
