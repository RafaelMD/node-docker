var express = require('express')
var app = express()

app.get('/hello', function (req, res) {
  res.end("Hello World")
  console.log("request:" + new Date())
})

var server = app.listen(8800)