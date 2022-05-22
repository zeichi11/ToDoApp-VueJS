import express = require('express')

const app = express()
const PORT = 8000

app.use('/', (req, res) => {
  res.send('Hello, express')
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})


// import http = require('http')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.end('Hello!')
// })

// const PORT = 4000
// server.listen(PORT, () => {
//   console.log(`The server is listening at port: ${PORT}`)
// })