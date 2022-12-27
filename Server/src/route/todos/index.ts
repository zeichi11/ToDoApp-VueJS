import { Request, Response } from 'express'
import { isValidInfo, checkSpaceSession } from '../../middleware/authorization'
import BoardController from '../../features/todos/controller/boardController'

import { 
  uploadImage,
  getImage
} from './media' 


/**
 * get user info
 * @param req 
 * @param res 
 */
function info (req: Request, res: Response) {
  let result = null

  try {
    const userId: string = req.body.userId as string
    const spaceSession: string = req.body.sessionToken as string

    result = checkSpaceSession(userId, spaceSession)
  
  } catch (e: any) {
    console.error(e.message)
    result = JSON.parse('{state: "info error", errorCode: "5000"}')
  
  } finally {
    res.write(result)
  }
}

/**
 * get check in token
 * @param req 
 * @param res 
 */
function checkIn (req: Request, res: Response) {
  let result = null

  try {
    const userId: string = req.body.userId as string
    const spaceSession: string = req.body.sessionToken as string
    const infoResult: string = req.body.info as string

    result = isValidInfo(userId, spaceSession, infoResult)
    
  } catch (e: any) {
    console.error(e.maessage)
    result = JSON.parse('{state: "checkIn error", errorCode: "5001"}')
  
  } finally {
    res.write(result)
  }
}

/**
 * crate todo board
 * @param req 
 * @param res 
 */
function create (req: Request, res: Response) {
  let result = null

  try {
    const userId: string = req.body.userId as string
    const workspaceId: string = req.body.workspaceId as string
    const boardName: string = req.body.boardId as string

    result = BoardController.create(userId, workspaceId, boardName)
    
  } catch (e: any) {
    // 생성 중 에러, db 커넥션 관련 에러 등 디테일하게 exeption 관리 필요
    console.error(e.message)
    result = JSON.parse('{state: "create error", errorCode: "5002"}')
  
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
    const boardId: string = req.body.boardId as string

    result = BoardController.open(userId, boardId)
    
  } catch (e: any) {
    console.error(e.message)
    result = JSON.parse('{state: "open error", errorCode: "5003"}')
    
  } finally {
    res.write(result)
  }
}

/**
 * 
 */
function export () {
  // 구현 예정
}




export { info, checkIn, create, open }