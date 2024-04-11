const formatMoney = money => {
  return money.replace(
    new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'),
    ','
  )
}

console.log(formatMoney('123456789'))
console.log(formatMoney('123456789.123'))
