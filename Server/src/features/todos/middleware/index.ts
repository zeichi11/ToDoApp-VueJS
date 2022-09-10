import { Request, Response } from 'express'

export default {
  isValidRequest: function (req: Request, res: Response): boolean {
    return true;
  }
}