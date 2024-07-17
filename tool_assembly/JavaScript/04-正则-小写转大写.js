const capitalize = string => {
  const capitalizeRegex = /(?:^|\s+)\w/g
  return string.toLowerCase().replace(capitalizeRegex, match => match.toUpperCase())
}

console.log(capitalize('hello world'))
console.log(capitalize('hello'))
