const fs = require("fs")

export default (req, res) => {
  var files = fs.readdirSync('public/packages')
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(files))
}
