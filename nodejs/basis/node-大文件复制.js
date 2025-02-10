const fs = require('fs')

let copy = (src, dst) => {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

let main = argv => {
  copy(argv[0], argv[1])
}

main(process.argv.slice(2))
