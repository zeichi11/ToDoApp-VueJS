import express, { Router, Request, Response } from 'express'
import UserRouteHandler from './user'
import auth from '../middleware/authorization/auth'

const router: Router = express.Router()

router.post('/', auth, UserRouteHandler.get)

export default router;

// import express from 'export'

// const userRouter = express.Router()
// const USER = {
//   220525: {
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
//   res.send('User registered.')
// })

// userRouter.post('/:id/name', (req, res) => {
//   // req.body: {'name': 'zeichi'}
//   const { user } = req
//   const { nickname } = req.body

//   user.nickname = nickname

//   res.send(`User name updated: ${nickname}`)
// })

// export default userRouter;
