const fs = require('fs')
let copy = (src, dst) => {
  fs.writeFileSync(dst, fs.readFileSync(src))
}

let main = args => {
  copy(args[0], args[1])
}

main(process.argv.slice(2))
