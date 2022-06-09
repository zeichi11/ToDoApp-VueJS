// const express = require('express')

// const app = express()
// const PORT = 5000


// const app = express()
// const userRouter = express.Router()

// userRouter.get('/', (res, req) => {
//   res.send('User list')
// })

// const USERS = {
//   15: {
//     nickname: 'foo'
//   }
// }

// userRouter.param('id', (req, res, next, value) => {
//   console.log('id parameter', value)
//   req.user = USER[value]
//   next()
// })

// userRouter.get('/:id', (req, res) => {
//   console.log('userRouter get ID')
//   res.send(req.user)
// })

// userRouter.post('/', (req, res) => {
//   // Register user
//   console.log('User registered.')
// })

// const bodyParser = require('body-parser')
// const userRouter = express.Router()
// const app = express()

// app.use(bodyParser.json())

// userRouter.post('/:id/nickname', (req, res) => {
//   // req.body: {"nickname": "bar"}
//   const { user } = req
//   const { nickname } = req.body

//   user.nickname = nickname

//   res.send(`User nickname updated: ${nickname}`)
// })

// app.use('/users', userRouter)

// app.listen(PORT, () => {
//   console.log(`The Express server is listening at port: ${PORT}`)
// })