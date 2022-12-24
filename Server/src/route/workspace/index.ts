import { Request, Response } from 'express'
import { isValidRequest } from '../../middleware/authorization'
import WorkspaceController from '../../features/workspace/controller/workspaceController'

/**
 * crate todo board
 * @param req 
 * @param res 
 */
function init (req: Request, res: Response) {
  let result = null

  try {
    if (isValidRequest(req, res, null)) {
      const userId: string = req.body.userId as string

      result = WorkspaceController.create(userId)
    }
  } catch (e: any) {
    // 생성 중 에러, db 커넥션 관련 에러 등 디테일하게 exeption 관리 필요
    console.error(e.message)
    result = JSON.parse('{state: "error", errorCode: "4001"}')
  
  } finally {
    res.write(result)
  }
}

/**
 * open todo board
 * @param req 
 * @param res 
 */
function open (req: Request, res: Response) {
  let result = null

  try {
    if (isValidRequest(req, res, null)) {
      const userId: string = req.body.userId as string

      result = WorkspaceController.open(userId)
    }
  } catch (e: any) {
    console.error(e.message)
    result = JSON.parse('{state: "error", errorCode: "4002"}')
    
  } finally {
    res.write(result)
  }
}


export { init, open }