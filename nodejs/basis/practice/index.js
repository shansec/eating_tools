const fs = require('fs')
const path = require('path')
const http = require('http')

const MIME = {
  '.css': 'text/css',
  '.js': 'application/javascript'
}

let combineFiles = (pathNames, callBack) => {
  let output = [](function next(i, len) {
    if (i < len) {
      fs.readFile(pathNames[i], (err, data) => {
        if (err) {
          callBack(err)
        } else {
          output.push(data)
          next(i + 1, len)
        }
      })
    } else {
      callBack(null, Buffer.concat(output))
    }
  })(0, pathNames.length)
}

let parseURL = (root, url) => {
  let base, parts, pathNames

  if (url.indexOf('??') > -1) {
    url = url.replace('/', '/??')
  }

  parts = url.split('??')
  base = parts[0]
  pathNames = parts[1].split(',').map(value => {
    return path.join(root, base, value)
  })

  return {
    mime: MIME[path.extname(pathNames[0])] || 'text/plain',
    pathNames: pathNames
  }
}

let main = argv => {
  var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
    root = config.root || '.',
    port = config.port || 80

  http
    .createServer((request, response) => {
      var urlInfo = parseURL(root, request.url)

      combineFiles(urlInfo.pathNames, (err, data) => {
        if (err) {
          response.writeHead(404)
          response.end(err.message)
        } else {
          response.writeHead(200, {
            'Content-Type': urlInfo.mime
          })
          response.end(data)
        }
      })
    })
    .listen(port)
}
