import { Request, Response } from 'express'

export default {
  get: (req: Request, res: response) => {
    req.
  },

  info: (req: Request, res: Response) => {

  },

  signIn: (req: Request, res: Response) => {
    
  },
  
  signUp: (req: Request, res: Response) => {
    const { email, password, userName } = req.body
    
    // res.send()
  }

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
}