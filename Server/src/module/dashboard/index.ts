import { Request, Response } from 'express'

export default {
  getDashboard: (req: Request, res: Response) => {
    res.send('dashboard page')
  }
}