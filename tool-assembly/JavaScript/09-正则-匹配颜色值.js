const matchColorRegex = /#(?:[\da-fA-F]{6}|[\da-fA-F]{3})/g
const colorString = '#12f3a1 #ffBabd #FFF #123 #586'

console.log(colorString.match(matchColorRegex))
