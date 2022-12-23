import { Request, Response } from 'express'
import { isValidRequest } from '../../middleware/authorization'
import BoardController from '../../features/todos/controller/boardController'

export default {
  create: (req: Request, res: Response) => {
    try {
      if (isValidRequest(req, res)) {
        const userId: string = req.body.userId as string
        const workspaceId: string = req.body.workspaceId as string
        const boardName: string = req.body.boardId as string

        const result = BoardController.create(userId, workspaceId, boardName)
      }
    } catch (e: any) {
      console.error(e.message)
      res.write("")
    }
  }

}