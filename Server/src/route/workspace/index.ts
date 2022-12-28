import { Request, Response } from 'express'
import WorkspaceController from '../../features/workspace/controller/workspaceController'

/**
 * crate todo board
 * @param req 
 * @param res 
 */
function init (req: Request, res: Response) {
  let result = null

  try {
    const userId: string = req.body.userId as string
    const workspaceName: string = req.body.userId as string

    result = WorkspaceController.createWorkspace(userId, workspaceName)
    
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
    const userId: string = req.body.userId as string
    const workspaceId: string = req.body.spaceId as string

    result = WorkspaceController.getWorkspace(userId, workspaceId)
    
  } catch (e: any) {
    console.error(e.message)
    result = JSON.parse('{state: "error", errorCode: "4002"}')
    
  } finally {
    res.write(result)
  }
}


export { init, open }