// @ts-check
const express = require('express')

const userRouter = require('./router/user.js')

const fs = require('fs')

const app = express()
const PORT = 8000

// regiter router
app.use('/users', userRouter)

app.use('/', (req, res) => {
  res.send('Hello, express')
})

app.use(
  '/test1',
  (req, res, next) => {
    console.log('Middleware1-1')
    setTimeout(() => {
      next()
    }, 1000)
  },
  (req, res) => {
    console.log('Middleware1-2')
    next()
  }

  // .... more middleware
)

app.use(
  '/test2',
  (req, res, next) => {
    console.log('Middleware2-1')

    const requestedAt = new Date()
    req.requestedAt = requestedAt

    setTimeout(() => {
      next()
    }, 1000)
  },
  (req, res) => {
    console.log('Middleware2-2')
    res.rend(`Hello, world! time: ${req.requestedAt}`)
  }
)

app.use('/test3', async (req, res, next) => {
  console.log('Middleware3-1')

  const fileContent = await fs.promises.readFile('README.txt')
  req.fileContent = fileContent

  next()
})

app.use('/test3', (req, res) => {
  console.log('Middlewar3-2')
  res.send(`File content : ${req.fileContent}`)
})

// HTTP Method

app.get('/test', (req, res) => {
  res.send('get')
})

app.post('/ab+cd', (req, res) => {
  res.send('post')
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
