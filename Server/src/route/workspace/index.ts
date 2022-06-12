import { Request, Response } from 'express'

export default {
  getWorkspace: (req: Request, res: Response) => {
    res.send('workspace page')
  }
}