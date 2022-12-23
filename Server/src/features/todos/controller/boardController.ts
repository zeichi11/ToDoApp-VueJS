import WorkspaceService from '../../workspace/database/service/workspaceService'
import BoardService from '../database/service/boardService'

async function create (userId: string, workspaceId: string, title: string): string {
  const boardId = ""
  try {
    boardJSON = BoardService.createBoard(userId, workspaceId, title)
  } catch (e: any) {
    console.error(e.message)
  } finally {
    // db connection 관리
  }
  return boardJSON
}

async function open (req: Request, res: Response): Promise<void> {
  
}





async function createTodoList (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: string = req.body.userId as string
      const workspaceName: string = req.body.workspaceName as string
      
      WorkspaceService.createWorkspace(userId, workspaceName)
    }
  } catch (e: any) {
    console.error(e.message)
  }
}

async function getTodoList (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: string = req.body.userId as string
      const workspaceId: string = req.body.workspaceId as string
      // const authToken: string = req.body.authToken as string

      const result: any = await WorkspaceService.getWorkspace(userId, workspaceId)
    }
  } catch (e: any) {
    console.error(e.message)
  }
}

async function deleteTodoList (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: String = req.body.userId as String
      // const result: any = await Work()
    }
  } catch (e) {
    console.error(e.message)
  }
}

function executeTodoListAction (action: any) {
  
}

export default {
  createWorkspace,
  deleteWorkSpace,
  getWorkspace,
  execute
}