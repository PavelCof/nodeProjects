var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // } else if (req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // }

  var filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  var ext = path.extname(filePath)
  var contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
})

var PORT = process.env.PORT || 3007

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})